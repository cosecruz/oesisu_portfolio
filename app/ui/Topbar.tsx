"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface TopbarProps {
  admin: boolean;
}

export default function Topbar({ admin }: TopbarProps) {
  const pathname = usePathname();
  const isCollapsed = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <header className="w-full h-14 flex items-center px-4 justify-between bg-theme-main border-b border-theme">
      <div className="flex gap-2 items-center">
        <Image
          className={`object-contain  ${isCollapsed ? "block" : "hidden"}`}
          src="/oesisuicon.svg"
          alt="Oesisu logo"
          width={16}
          height={16}
          title={"oesisu logo"}
          loading="eager"
          style={{ width: "auto", height: "auto" }} // Fix aspect ratio warning
          priority={false}
        />
        <span className="flex text-sm font-semibold text-theme-primary">
          OESISU
          {admin && (
            <p className="text-sm font-semibold text-amber-200 ml-2">@Admin</p>
          )}
        </span>
        <button
          className="p-1 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded"
          aria-label="User options"
        >
          <Image
            src="/arrowdropdown.svg"
            alt="Dropdown"
            width={10}
            height={10}
          />
        </button>
      </div>

      <div className="flex items-center space-x-3 text-theme-secondary text-sm">
        <Image
          src="/search.svg"
          alt="Search"
          width={16}
          height={16}
        />
      </div>
    </header>
  );
}
