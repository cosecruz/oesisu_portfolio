"use client";

import {
  memo,
  useCallback,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import type { NavListInfo } from "@/app/lib/definitions";
import { cn } from "@/lib/utils";

const dropdownVariants: Variants = {
  hidden: { opacity: 0, height: 0, overflow: "hidden" },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

interface NavbarProps {
  collapsed: boolean;
  navList: NavListInfo[];
}

function Navbar({ collapsed, navList }: NavbarProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const pathname = usePathname() ?? "";

  const toggle = useCallback(
    (id: string) => (e: ReactMouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setOpenId((prev) => (prev === id ? null : id));
    },
    []
  );

  return (
    <nav className="flex flex-col gap-2" aria-label="Main navigation">
      {navList.map((nav) => {
        const active =
          pathname === nav.href ||
          !!nav.dropdownItems?.some((i) => pathname === i.href);
        const open = openId === nav.id;
        const hasDropdown = !!nav.dropdownItems?.length;
        const Icon = nav.icon ?? (() => null);

        return (
          <motion.div
            key={nav.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative group"
          >
            <div className="flex items-center gap-2">
              {/* Main Link */}
              {nav.href ? (
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex-1"
                >
                  <Link
                    href={nav.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 w-full transition-all duration-300 relative overflow-hidden",
                      active
                        ? "bg-gradient-to-r from-violet-500/20 to-blue-500/20 text-white border border-violet-400/30 shadow-lg shadow-violet-500/10"
                        : "hover:bg-white/5 text-white/70 hover:text-white border border-transparent hover:border-white/10"
                    )}
                    aria-current={active ? "page" : undefined}
                    title={nav.label}
                  >
                    {/* Active indicator */}
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-400 to-blue-400 rounded-r"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <Icon className="h-5 w-5 shrink-0 relative z-10" strokeWidth={active ? 2.5 : 2} />

                    {!collapsed && (
                      <span
                        className={cn(
                          "truncate text-sm font-medium transition-colors relative z-10",
                          active ? "text-white" : "group-hover:text-white"
                        )}
                      >
                        {nav.label}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ) : (
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 w-full cursor-default",
                    active ? "bg-violet-500/20 text-white" : "text-white/70"
                  )}
                  title={nav.label}
                >
                  <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
                  {!collapsed && (
                    <span className="truncate text-sm font-medium">
                      {nav.label}
                    </span>
                  )}
                </div>
              )}

              {/* Dropdown toggle */}
              {!collapsed && hasDropdown && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggle(nav.id)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  aria-label={`Toggle ${nav.label} submenu`}
                  aria-expanded={open}
                  type="button"
                >
                  <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <ChevronDown className="h-4 w-4 text-white/70" strokeWidth={2} />
                  </motion.div>
                </motion.button>
              )}
            </div>

            {/* Tooltip (collapsed mode) */}
            {collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#1a1a1b] border border-white/10 px-3 py-2 text-sm text-white opacity-0 shadow-xl group-hover:opacity-100 z-50 backdrop-blur-xl"
                role="tooltip"
              >
                {nav.label}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#1a1a1b]" />
              </motion.span>
            )}

            {/* Dropdown content */}
            {!collapsed && hasDropdown && (
              <AnimatePresence mode="wait">
                {open && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mt-2 ml-4 flex flex-col gap-1 pl-4 border-l-2 border-white/10"
                  >
                    {nav.dropdownItems!.map((sub) => {
                      const subActive = pathname === sub.href;
                      return (
                        <motion.li
                          key={sub.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <Link
                            href={sub.href}
                            className={cn(
                              "block rounded-lg px-3 py-2 text-sm transition-all duration-300",
                              subActive
                                ? "bg-violet-500/20 text-white font-medium"
                                : "text-white/60 hover:bg-white/5 hover:text-white"
                            )}
                            aria-current={subActive ? "page" : undefined}
                            title={sub.label}
                          >
                            {sub.label}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        );
      })}
    </nav>
  );
}

export default memo(Navbar);
