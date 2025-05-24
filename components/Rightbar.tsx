"use client";

import { CollapseIcon, IntegrationIcon, MembersIcon, OverviewIcon, PropertiesIcon } from "@/utils/Icons";
import { Contact } from "@/utils/chatService";
import { IconType } from "react-icons";
import { MdAlternateEmail } from "react-icons/md";
import { RiFolderImageFill, RiListSettingsLine } from "react-icons/ri";
import { LuRefreshCw } from "react-icons/lu";
import { FiEdit3 } from "react-icons/fi";

interface UtilityItem {
  icon?: IconType;
  divider?: boolean;
  isEnabled?: boolean;
}

interface SidebarExtensionProps {
  selectedContact: Contact | null;
}

const toolOptions: UtilityItem[] = [
  { icon: CollapseIcon, isEnabled: false },
  { icon: LuRefreshCw, isEnabled: true },
  { icon: FiEdit3, isEnabled: false },
  { icon: OverviewIcon, isEnabled: false },
  { icon: PropertiesIcon, isEnabled: false },
  { icon: IntegrationIcon, isEnabled: false },
  { icon: MembersIcon, isEnabled: false },
  { icon: MdAlternateEmail, isEnabled: false },
  { icon: RiFolderImageFill, isEnabled: false },
  { icon: RiListSettingsLine, isEnabled: false },
];

const SidebarExtension: React.FC<SidebarExtensionProps> = ({ selectedContact }) => {
  return (
    <aside className="w-14 border-l pt-10 border-gray-200 p-2 flex flex-col gap-4 h-full">
      {toolOptions.map(
        (entry, idx) =>
          entry.icon && (
            <button
              key={idx}
              className="w-full p-1.5 rounded-md cursor-pointer hover:bg-gray-100 text-gray-500 flex items-center justify-center relative"
            >
              <entry.icon className="h-5 w-5" />
            </button>
          )
      )}
    </aside>
  );
};

export default SidebarExtension;