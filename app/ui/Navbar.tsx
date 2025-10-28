"use client";

import { useState, useCallback, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import type { NavListInfo } from "../lib/definitions";

const dropdownVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

interface NavbarProps {
  collapsed: boolean;
  navList: NavListInfo[];
}

function Navbar({ collapsed, navList }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === id ? null : id));
  }, []);

  return (
    <nav
      className="overflow-y-auto overflow-x-hidden px-3 space-y-1"
      aria-label="Main navigation"
    >
      {navList.map((nav) => {
        const isActive =
          pathname === nav.href ||
          (nav.dropdownItems?.some((item) => pathname === item.href) ?? false);
        const isDropdownOpen = openDropdown === nav.id;
        const hasDropdown = !!nav.dropdownItems?.length;

        const content = (
          <div
            className={`flex items-center gap-2 p-1.5 rounded-md transition-colors sidebar-item group
              ${nav.href ? "cursor-pointer hover:bg-(--accent-hover)" : "cursor-default"}
              ${isActive ? "bg-(--accent) text-white" : ""}
              ${collapsed ? "justify-center flex-col" : "justify-between"}`}
          >
            <div className="flex items-center gap-2">
              <Image
                src={nav.iconUrl}
                alt={`${nav.label} icon`}
                title={collapsed ? nav.label : ""}
                width={20}
                height={16}
                className="object-contain"
                style={{ width: "auto", height: "auto" }} // Fix aspect ratio warning
                priority={false}
              />
              {!collapsed && (
                <p
                  className={`truncate text-sm transition-colors ${
                    isActive
                      ? "text-white"
                      : "group-hover:text-(--accent-hover) group-active:text-white"
                  }`}
                >
                  {nav.label}
                </p>
              )}
            </div>
            {!collapsed && hasDropdown && (
              <button
                className="p-2 focus:outline-none focus:ring-2 focus:ring-(--accent) rounded"
                onClick={(e) => toggleDropdown(nav.id, e)}
                aria-label={`Toggle ${nav.label} dropdown`}
              >
                <Image
                  src="/arrowdropdown.svg"
                  alt={`${nav.label} dropdown indicator`}
                  width={10}
                  height={10}
                  className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
            )}
            {collapsed && (
              <span
                className="sidebar-tooltip absolute left-full ml-2 bg-(--bg-secondary) text-sm text-white px-2 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                role="tooltip"
              >
                {nav.label}
              </span>
            )}
          </div>
        );

        return (
          <div key={nav.id} className="relative">
            {nav.href ? (
              <Link href={nav.href} className="block focus:outline-none focus:ring-2 focus:ring-(--accent) rounded">
                {content}
              </Link>
            ) : (
              <div className="block opacity-80">{content}</div>
            )}

            {!collapsed && hasDropdown && (
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    id={`${nav.id}-dropdown`}
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex flex-col gap-1 bg-theme-secondary rounded-md p-2 mt-1 shadow-lg z-20"
                  >
                    {nav.dropdownItems!.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block p-2 text-sm rounded transition-colors
                            ${
                              pathname === item.href
                                ? "bg-(--accent) text-white"
                                : "text-theme-secondary hover:bg-(--muted) hover:text-(--accent-hover)"
                            }`}
                          aria-current={pathname === item.href ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
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
