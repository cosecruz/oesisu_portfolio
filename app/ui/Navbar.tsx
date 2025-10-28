"use client";

import {
  memo,
  useCallback,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import type { NavListInfo } from "@/app/lib/definitions";
import { cn } from "@/lib/utils";

/* ────── Dropdown animation ────── */
const dropdownVariants: Variants = {
  hidden: { opacity: 0, height: 0, overflow: "hidden" as const },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
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
    <nav className="flex flex-col gap-1" aria-label="Main navigation">
      {navList.map((nav) => {
        const active =
          pathname === nav.href ||
          !!nav.dropdownItems?.some((i) => pathname === i.href);
        const open = openId === nav.id;
        const hasDropdown = !!nav.dropdownItems?.length;
        const Icon = nav.icon ?? (() => null);

        return (
          <div key={nav.id} className="relative group">
            <div className="flex items-center gap-2">
              {/* ────── Main Link ────── */}
              {nav.href ? (
                <Link
                  href={nav.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg p-2 w-full transition-all duration-200",
                    active
                      ? "bg-accent text-white"
                      : "hover:bg-[var(--color-bg-card)] text-main"
                  )}
                  aria-current={active ? "page" : undefined}
                  title={nav.label} // Tooltip on hover
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {!collapsed && (
                    <span
                      className={cn(
                        "truncate text-sm font-medium",
                        active ? "text-white" : "group-hover:text-accent"
                      )}
                    >
                      {nav.label}
                    </span>
                  )}
                </Link>
              ) : (
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-lg p-2 w-full cursor-default",
                    active ? "bg-accent text-white" : "text-main"
                  )}
                  title={nav.label}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {!collapsed && (
                    <span
                      className={cn(
                        "truncate text-sm font-medium",
                        active ? "text-white" : "group-hover:text-accent"
                      )}
                    >
                      {nav.label}
                    </span>
                  )}
                </div>
              )}

              {/* ────── Dropdown toggle ────── */}
              {!collapsed && hasDropdown && (
                <button
                  onClick={toggle(nav.id)}
                  className="ml-1 p-1 rounded hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={`Toggle ${nav.label} submenu`}
                  aria-expanded={open}
                  type="button"
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      open && "rotate-180"
                    )}
                  />
                </button>
              )}
            </div>

            {/* ────── Tooltip (collapsed mode) ────── */}
            {collapsed && (
              <span
                className="pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded bg-[var(--color-bg-secondary)] px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
                role="tooltip"
              >
                {nav.label}
              </span>
            )}

            {/* ────── Dropdown content ────── */}
            {!collapsed && hasDropdown && (
              <AnimatePresence mode="wait">
                {open && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mt-1 flex flex-col gap-0.5 rounded-lg bg-[var(--color-bg-secondary)] p-1 shadow-lg"
                  >
                    {nav.dropdownItems!.map((sub) => {
                      const subActive = pathname === sub.href;
                      return (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className={cn(
                              "block rounded-md px-3 py-1.5 text-sm transition-colors",
                              subActive
                                ? "bg-accent text-white"
                                : "text-muted hover:bg-[var(--color-bg-card)] hover:text-accent"
                            )}
                            aria-current={subActive ? "page" : undefined}
                            title={sub.label}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default memo(Navbar);
