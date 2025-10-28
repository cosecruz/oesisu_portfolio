"use client";

import { useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Menu, PanelLeft, X, Terminal, Languages } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";
import type { NavListInfo } from "../lib/definitions";
import { useSidebarStore } from "../store/sidebar.store";

const variants = {
  open: { width: 256 },
  collapsed: { width: 64 },
  hidden: { width: 0 },
};

export const Sidebar = memo(function Sidebar({ navs }: { navs: NavListInfo[] }) {
  const {
    isCollapsed,
    isMobile,
    isMobileOpen,
    toggle,
    setMobile,
    setCollapsed,
  } = useSidebarStore();

  // Detect viewport and sync
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, [setMobile]);

  // --- Mobile floating hamburger ---
  if (isMobile && !isMobileOpen) {
    return (
      <button
        onClick={toggle}
        className="fixed left-4 top-10 z-50 rounded-lg bg-sidebar/80 p-2 text-white shadow-lg hover:bg-sidebar/90 focus-visible:ring-2 focus-visible:ring-accent"
        type="button"
        aria-label="Open sidebar"
        title="Open sidebar"
      >
        <Menu className="h-6 w-6" />
      </button>
    );
  }

  return (
    <>
      {/* Sidebar (motion width anim) */}
      <motion.aside
        variants={variants}
        initial={false}
        animate={
          isMobile
            ? isMobileOpen
              ? "open"
              : "hidden"
            : isCollapsed
            ? "collapsed"
            : "open"
        }
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col bg-sidebar/90 backdrop-blur-xl border-r border-border shadow-lg",
          isMobile && !isMobileOpen && "w-0 overflow-hidden",
          isMobile && isMobileOpen && "w-64"
        )}
      >
        <header className="flex items-center justify-between border-b border-border p-4">
          <Link href="/" className="flex items-center gap-2">
            {/* ✅ Leave your logo exactly as-is */}
            <Image src="/oesisuicon.svg" alt="OESISU" width={16} height={16} />
          </Link>
          <button
            onClick={toggle}
            className="rounded p-1 text-main hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Toggle sidebar"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isMobile ? (
              <X className="h-5 w-5" />
            ) : (
              <PanelLeft className="h-5 w-5" />
            )}
          </button>
        </header>

        <nav className="flex-1 overflow-y-auto p-3 scrollbar-hide">
          <Navbar collapsed={isCollapsed && !isMobile} navList={navs} />
        </nav>

        <footer
  className={cn(
    // Hide on small screens
    "hidden md:flex border-t border-border p-3 transition-all duration-300",
    // Layout depends on sidebar state
    isCollapsed
      ? "flex-col items-center justify-center gap-3"
      : "flex-row items-center justify-between gap-3"
  )}
>
  {/* Terminal Button */}
  <button
    className="rounded p-2 text-main transition-colors hover:bg-(--color-bg-card) hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    aria-label="Terminal"
    title="Terminal"
    type="button"
  >
    <Terminal className="h-5 w-5" />
  </button>

  {/* Language Button */}
  <button
    className="rounded p-2 text-main transition-colors hover:bg-(--color-bg-card) hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    aria-label="Language"
    title="Language"
    type="button"
  >
    <Languages className="h-5 w-5" />
  </button>
</footer>

      </motion.aside>

      {/* === MOBILE: Backdrop overlay === */}
      {isMobile && isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
          onClick={toggle}
          aria-hidden="true"
        />
      )}
    </>
  );
});
