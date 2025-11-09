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
  } = useSidebarStore();

  // Detect viewport and sync
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, [setMobile]);

  // Mobile floating hamburger
  if (isMobile && !isMobileOpen) {
    return (
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
        className="fixed left-4 bottom-4 z-50 rounded-xl bg-linear-to-br from-violet-500/20 to-blue-500/20 backdrop-blur-xl p-3 text-white shadow-xl shadow-black/20 hover:from-violet-500/30 hover:to-blue-500/30 border border-white/10 transition-all duration-300"
        type="button"
        aria-label="Open sidebar"
        title="Open sidebar"
      >
        <Menu className="h-6 w-6" strokeWidth={2} />
      </motion.button>
    );
  }

  return (
    <>
      {/* Sidebar */}
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
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col",
          "bg-gradient-to-b from-[#0f0f10] to-[#1a1a1b]",
          "backdrop-blur-xl border-r border-white/10 shadow-2xl",
          isMobile && !isMobileOpen && "w-0 overflow-hidden",
          isMobile && isMobileOpen && "w-64"
        )}
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/10 p-4 min-h-[64px] bg-white/[0.02]">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/oesisuicon.svg"
                alt="OESISU"
                width={24}
                height={24}
                className="transition-transform group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
              />
            </motion.div>
            {/* {!isCollapsed && !isMobile && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-bold text-lg bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"
              >
                OESISU
              </motion.span>
            )} */}
          </Link>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={toggle}
            className="rounded-lg p-2 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-violet-400"
            aria-label="Toggle sidebar"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isMobile ? (
              <X className="h-5 w-5" strokeWidth={2} />
            ) : (
              <PanelLeft className="h-5 w-5" strokeWidth={2} />
            )}
          </motion.button>
        </header>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 scrollbar-hide">
          <Navbar collapsed={isCollapsed && !isMobile} navList={navs} />
        </nav>

        {/* Footer */}
        <footer
          className={cn(
            "hidden md:flex border-t border-white/10 p-3 transition-all duration-300 bg-white/[0.02]",
            isCollapsed
              ? "flex-col items-center justify-center gap-3"
              : "flex-row items-center justify-between gap-3"
          )}
        >
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg p-2 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 relative group"
            aria-label="Terminal"
            title="Terminal"
            type="button"
          >
            <Terminal className="h-5 w-5" strokeWidth={2} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg p-2 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            aria-label="Language"
            title="Language"
            type="button"
          >
            <Languages className="h-5 w-5" strokeWidth={2} />
          </motion.button>
        </footer>
      </motion.aside>

      {/* Mobile Backdrop */}
      {isMobile && isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
          onClick={toggle}
          aria-hidden="true"
        />
      )}
    </>
  );
});
