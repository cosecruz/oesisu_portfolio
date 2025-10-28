"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./ui/Sidebar";
import Topbar from "./ui/Topbar";
// import AdminSidebar from "./ui/AdminSidebar"; // 👈 optional
import React from "react";
import { ADMIN_PAGE_LISTS, GENERAL_PAGE_LISTS } from "./lib/constants";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");

  const navs = isAdmin? ADMIN_PAGE_LISTS: GENERAL_PAGE_LISTS



  return (
  <div className="flex min-h-screen w-full bg-theme-main text-theme-primary overflow-hidden">
  <Sidebar navs={navs} />

  <div className="flex flex-col flex-1 bg-main transition-all duration-300">
    <Topbar admin={isAdmin} />
    <main className="flex-1 overflow-y-auto p-6 min-w-0">{children}</main>
  </div>
</div>
  );
}
