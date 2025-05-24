"use client";

import React from "react";
import { BiCheckDouble } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdCheck } from "react-icons/md";
import Image from "next/image";

export enum MsgDeliveryStatus {
  SENT = "sent",
  RECEIVED = "received",
  READ = "read",
}

interface UserContactProps {
  displayLabel?: string;
  recentMsg: string;
  contactInfo: string;
  msgCount?: number;
  categoryTags?: string[];
  timestamp: string;
  profilePic?: string;
  mutedFlag?: boolean;
  deliveryFlag?: MsgDeliveryStatus;
  highlight?: boolean;
}

export const UserContact: React.FC<UserContactProps> = ({
  displayLabel,
  recentMsg,
  contactInfo,
  msgCount,
  categoryTags = ["Demo", "Dont Send"],
  timestamp,
  profilePic,
  mutedFlag = false,
  deliveryFlag,
  highlight = false,
}) => {
  return (
    <div className={`flex items-center justify-between ${highlight ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-100 rounded-sm transition-all duration-200 ease-in-out`}>
      <div className="flex items-center space-x-2 p-2">
        <div className="relative transform -translate-y-1.5 h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 hover:shadow-md transition-shadow duration-200 ease-in-out">
          {profilePic ? (
            <Image 
              src={profilePic} 
              alt="Avatar" 
              width={40}
              height={40}
              className="rounded-full hover:opacity-90 transition-opacity duration-200" 
            />
          ) : (
            <IoPersonSharp className="text-white h-4 w-4 text-sm" />
          )}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 flex items-center mb-0.5">
            {displayLabel || contactInfo}
          </h4>
          <div className="flex items-center">
            {msgCount && msgCount > 0 ? null : (
              <>
                {deliveryFlag === MsgDeliveryStatus.SENT && (
                  <MdCheck className="text-gray-500 text-sm" />
                )}
                {deliveryFlag === MsgDeliveryStatus.RECEIVED && (
                  <BiCheckDouble className="text-gray-500 text-sm" />
                )}
                {deliveryFlag === MsgDeliveryStatus.READ && (
                  <BiCheckDouble className="text-blue-500 text-sm" />
                )}
              </>
            )}
            <p className="text-xs text-gray-500 truncate w-20 lg:w-40 px-0.5">
              {recentMsg}
            </p>
          </div>
          <p className="text-xs w-fit px-1 mt-0.5 rounded-md bg-gray-100 text-gray-400 flex items-center justify-start">
            <FaPhone className="h-2 w-2  mr-1" />
            {contactInfo}
          </p>
        </div>
      </div>

      <div className="flex flex-col relative items-end space-y-1 right-2 top-0 h-14">
        <div className="flex space-x-1">
          {categoryTags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-xs px-1 py-0.5 rounded-md hover:scale-105 cursor-default transition-transform duration-150 ease-in-out ${
                tag === "Demo"
                  ? "bg-orange-50 text-stone-400 hover:bg-orange-100"
                  : tag === "internal"
                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                    : tag === "Signup"
                      ? "bg-green-100 text-green-700 hover:bg-green-200"
                      : tag === "Dont Send"
                        ? "bg-red-50 text-red-500 hover:bg-red-100"
                        : "bg-gray-100 text-brown-400 hover:bg-gray-200"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex absolute items-center bottom-3 gap-1">
          {msgCount && msgCount > 0 ? (
            <span className="text-xs flex relative bottom-0.5 font-semibold items-center justify-center bg-emerald-400 text-white h-4  w-4 p-1 rounded-full">
              {msgCount}
            </span>
          ) : null}
          <div className="relative h-4 w-4 bottom-0.5 rounded-full flex items-center justify-center bg-gray-200 hover:bg-green-600 transition-colors duration-200 group cursor-pointer">
            <IoPersonSharp className="text-white h-2 w-2 group-hover:text-white group-hover:scale-110 transition-transform duration-200" />
          </div>
        </div>

        <span className="text-xs text-gray-400 absolute bottom-0">
          {timestamp}
        </span>
      </div>
    </div>
  );
};
