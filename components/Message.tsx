"use client";

import { MsgDeliveryStatus } from "@/components/Contact";
import { BiCheckDouble } from "react-icons/bi";
import { MdCheck } from "react-icons/md";

interface ChatBubbleProps {
  content: string;
  clock: string;
  dayLabel?: string;
  outbound: boolean;
  deliveryState?: MsgDeliveryStatus;
  showMeta?: boolean;
  originName?: string;
  originPhone?: string;
}

export const ChatBubble = ({ 
  content, 
  clock, 
  dayLabel, 
  outbound, 
  deliveryState, 
  showMeta, 
  originName, 
  originPhone 
}: ChatBubbleProps) => {
  return (
    <>
      {dayLabel && (
        <div className="flex justify-center my-3">
          <time className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-600">
            {dayLabel}
          </time>
        </div>
      )}

      <div className={`flex ${outbound ? "justify-end" : "justify-start"} my-1`}>
        <article className="relative max-w-xs">
          <div
            className={`relative p-2 rounded-lg text-sm min-w-[7.5rem] ${
              outbound ? "bg-green-100 text-black" : "bg-white text-black"
            } shadow`}
          >
            {showMeta && originName && (
              <header className="flex justify-between items-center h-4 mb-1">
                <span className="font-semibold text-green-600">{originName}</span>
                {originPhone && (
                  <span className="text-xs ml-2 text-gray-500 break-all">{originPhone}</span>
                )}
              </header>
            )}
            
            <p className="break-words whitespace-pre-wrap">{content}</p>
            <footer className="flex items-center justify-end text-xs text-gray-500">
              <time>{clock}</time>
              {outbound && (
                <>
                  {deliveryState === MsgDeliveryStatus.SENT && (
                    <MdCheck className="text-gray-500 ml-1" aria-label="Sent" />
                  )}
                  {deliveryState === MsgDeliveryStatus.RECEIVED && (
                    <BiCheckDouble className="text-gray-500 ml-1" aria-label="Delivered" />
                  )}
                  {deliveryState === MsgDeliveryStatus.READ && (
                    <BiCheckDouble className="text-blue-500 ml-1" aria-label="Read" />
                  )}
                </>
              )}
            </footer>
          </div>
        </article>
      </div>
    </>
  );
};