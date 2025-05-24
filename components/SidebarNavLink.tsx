"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { BsStars } from "react-icons/bs";

interface NavShortcutProps {
  href: string;
  icon: IconType;
  isNew?: boolean;
  isImplemented?: boolean;
}

const NavShortcut: React.FC<NavShortcutProps> = ({
  href,
  icon: SymbolIcon,
  isNew = false,
  isImplemented = false,
}) => {
  const router = useRouter();
  const currentPath = usePathname();
  const [showNotice, setShowNotice] = useState(false);

  const activeState = currentPath === href;

  const onShortcutClick = (e: React.MouseEvent) => {
    if (!isImplemented && href !== "/chats") {
      e.preventDefault();
      setShowNotice(true);
      setTimeout(() => {
        setShowNotice(false);
      }, 2000);
    }
  };

  return (
    <div className="relative" onMouseLeave={() => setShowNotice(false)}>
      <Link
        href={isImplemented || href === "/chats" ? href : "#"}
        onClick={onShortcutClick}
      >
        <div
          className={`relative flex items-center justify-center px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer text-gray-600 ${
            activeState ? "bg-gray-100 text-green-700" : ""
          }`}
        >
          <SymbolIcon className="h-5 w-5 shrink-0" />
          {isNew && (
            <BsStars className="absolute top-1 right-1 text-yellow-500 h-3 w-3 rounded-full" />
          )}
        </div>
      </Link>
    </div>
  );
};

export default NavShortcut;