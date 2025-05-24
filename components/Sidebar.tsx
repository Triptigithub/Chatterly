"use client";

import { AnalyticsIcon, BroadcastIcon, CollapseIcon, PeriskopeIcon, RulesIcon } from "@/utils/Icons";
import { IconType } from "react-icons";
import { IoChatbubbleEllipses, IoTicket } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { RiContactsBookFill, RiFolderImageFill } from "react-icons/ri";
import { MdChecklist } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { TbStarsFilled } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import NavShortcut from "./SidebarNavLink";
import { usePathname } from "next/navigation";

interface ShortcutItem {
  href?: string;
  icon?: IconType;
  divider?: boolean;
  isNew?: boolean;
  active?: boolean;
}

const CompactSidebar: React.FC = () => {
  const currentRoute = usePathname();

  const shortcutItems: ShortcutItem[] = [
    { href: "/dashboard", icon: AiFillHome, active: false },
    { divider: true },
    { href: "/chats", icon: IoChatbubbleEllipses, active: true },
    { href: "/tickets", icon: IoTicket, active: false },
    { href: "/analytics", icon: AnalyticsIcon, active: false },
    { divider: true },
    { href: "/list", icon: FaListUl, active: false },
    { href: "/broadcast", icon: BroadcastIcon, active: false },
    { href: "/rules", icon: RulesIcon, isNew: true, active: false },
    { divider: true },
    { href: "/contacts", icon: RiContactsBookFill, active: false },
    { href: "/media", icon: RiFolderImageFill, active: false },
    { divider: true },
    { href: "/logs", icon: MdChecklist, active: false },
    { href: "/settings", icon: BsGearFill, active: false },
  ];

  return (
    <div className="h-screen w-14 p-1 flex flex-col justify-between border-r border-gray-200">
      <div className="flex flex-col gap-y-1 p-1">
        <div className="flex justify-center items-center p-2">
          <PeriskopeIcon className="h-10 w-10" />
        </div>
        {shortcutItems.map((nav, idx) =>
          nav.divider ? (
            <hr key={`divider-${idx}`} className="border-gray-200 m-1" />
          ) : (
            nav.href && nav.icon && (
              <NavShortcut
                key={nav.href}
                href={nav.href}
                icon={nav.icon}
                isNew={nav.isNew}
                isImplemented={nav.active}
              />
            )
          )
        )}
      </div>
      <div className="flex flex-col gap-y-1 p-1">
        <div className="flex items-center justify-center px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer text-gray-600">
          <TbStarsFilled className="h-5 w-5" />
        </div>
        <div className="flex items-center justify-center px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer text-gray-600">
          <CollapseIcon className="h-5 w-5 rotate-180" />
        </div>
      </div>
    </div>
  );
};

export default CompactSidebar;