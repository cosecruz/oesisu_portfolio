"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Bell, Settings } from "lucide-react";

export default function Topbar({ admin }: { admin: boolean }) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-16 flex items-center justify-between px-4 sm:px-6 md:px-8 bg-linear-to-r from-[#0f0f10] to-bg-secondary backdrop-blur-md border-b border-white/10 shadow-lg sticky top-0 z-30"
    >
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-4">
        {/* Logo visible only on small screens */}
        <div className="sm:hidden flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/oesisuicon.svg"
              alt="Logo"
              width={24}
              height={24}
              className="drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]"
            />
          </motion.div>
          <span className="font-bold text-base bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            OESISU
          </span>
        </div>

        {/* Page indicator - hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2">
          <Link href="/">
           <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-bold text-lg bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"
          >
                OESISU
              </motion.span>
          </Link>

          {admin && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider"
            >
              Admin
            </motion.span>
          )}
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 group relative"
          aria-label="Search"
        >
          <Search className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" strokeWidth={2} />

          {/* Keyboard shortcut hint */}
          <div className="absolute -bottom-8 right-0 px-2 py-1 rounded bg-black/80 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            ⌘K
          </div>
        </motion.button>

        {/* Notifications Button */}
        {/* <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 relative group"
          aria-label="Notifications"
        > */}
          {/* <Bell className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" strokeWidth={2} /> */}

          {/* Notification badge */}
          {/* <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-[#0f0f10]"
          />
        </motion.button> */}

        {/* Settings Button */}
        {/* <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 group"
          aria-label="Settings"
        >
          <Settings className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" strokeWidth={2} />
        </motion.button> */}

        {/* User Avatar */}
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative ml-2 group"
          aria-label="User menu"
        > */}
          {/* <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 p-[2px]">
            <div className="w-full h-full rounded-full bg-[#0f0f10] flex items-center justify-center overflow-hidden">
              <span className="text-sm font-bold bg-gradient-to-br from-violet-400 to-blue-400 bg-clip-text text-transparent">
                OE
              </span>
            </div>
          </div> */}

          {/* Online status indicator */}
          {/* <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0f0f10] group-hover:scale-110 transition-transform" />
        </motion.button> */}
      </div>
    </motion.header>
  );
}
