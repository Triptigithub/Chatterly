"use client";

import { useAuth } from "@/utils/AuthProvider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface GuardedRouteProps {
  children: React.ReactNode;
}

const GuardedRoute: React.FC<GuardedRouteProps> = ({ children }) => {
  const { user: currentUser, loading: authPending } = useAuth();
  const navigation = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    if (currentPath.startsWith("/auth/") || authPending) return;
    if (!currentUser && !authPending) {
      navigation.push("/auth/signin");
    }
  }, [currentUser, authPending, navigation, currentPath]);

  if (authPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (currentPath.startsWith("/auth/")) {
    return <>{children}</>;
  }

  return currentUser ? <>{children}</> : null;
};

export default GuardedRoute;
