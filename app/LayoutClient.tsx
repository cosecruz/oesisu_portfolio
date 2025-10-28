"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Sidebar } from "./ui/Sidebar";
import Topbar from "./ui/Topbar";
import { ADMIN_PAGE_LISTS, GENERAL_PAGE_LISTS } from "./lib/constants";
import { useSidebarStore } from "./store/sidebar.store";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { width, isMobile } = useSidebarStore();

  const isAdmin = pathname.startsWith("/admin");
  const navs = isAdmin ? ADMIN_PAGE_LISTS : GENERAL_PAGE_LISTS;

  // Apply padding-left instead of margin-left, only on desktop
  const paddingLeft = useMemo(() => (isMobile ? 0 : width), [isMobile, width]);

  return (
    <div className="relative flex h-screen w-full bg-main text-main overflow-hidden">
      <Sidebar navs={navs} />

      {/* Main container always takes full width */}
      <div
        className="flex flex-col flex-1 min-w-0 overflow-hidden transition-[padding] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{ paddingLeft }}
      >
        <Topbar admin={isAdmin} />
        <main
          className="
            flex-1 overflow-y-auto
            p-4 xs:p-6 md:p-8 lg:p-10
            w-full
            max-w-full
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
