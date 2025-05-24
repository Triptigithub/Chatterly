"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { LuChevronsUpDown, LuCircleHelp } from "react-icons/lu";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { TbRefreshDot } from "react-icons/tb";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoMdNotificationsOff } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";

const Topbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 h-12 flex items-center justify-between px-4 z-50">
      {/* Title Section */}
      <div className="flex items-center text-black text-sm font-medium">
        <IoChatbubbleEllipses className="h-4 w-4 mr-2 text-gray-500" />
        <span className="text-gray-400 font-bold">chats</span>
      </div>

      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden p-2 rounded-md text-black hover:bg-gray-100 transition"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        {menuVisible ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </button>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-2 flex-nowrap overflow-x-auto pr-1">
        <button className="flex items-center px-2.5 py-1 text-black text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition whitespace-nowrap cursor-pointer">
          <TbRefreshDot className="h-4 w-4 mr-1 text-black" /> Reload
        </button>
        <button className="flex items-center px-2.5 py-1 text-black text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition whitespace-nowrap cursor-pointer">
          <LuCircleHelp className="h-4 w-4 mr-1" /> Support
        </button>
        <div className="flex items-center px-2.5 py-1 text-black text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition whitespace-nowrap cursor-pointer">
          <span className="h-2 w-2 bg-yellow-400 rounded-full mr-2"></span>
          5 / 6 devices
          <LuChevronsUpDown className="ml-1 h-3 w-3" />
        </div>
        <div className="flex items-center px-3 py-1.5 text-black text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition whitespace-nowrap cursor-pointer">
          <MdOutlineInstallDesktop className="h-4 w-4" />
        </div>
        <div className="flex items-center px-3 py-1.5 text-black text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition whitespace-nowrap cursor-pointer">
          <IoMdNotificationsOff className="h-4 w-4" />
        </div>
        <div className="flex items-center px-3 py-1.5 text-black text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition whitespace-nowrap cursor-pointer">
          <BsStars className="h-4 w-4 p-0.5 text-yellow-500" />
          <CiBoxList className="h-4 w-4" />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
