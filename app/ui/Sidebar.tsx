"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import Navbar from "./Navbar";
import { NavListInfo } from "../lib/definitions";

interface SidebarProps {
  navs: NavListInfo[];
}

export default function Sidebar({ navs }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Wait one tick before marking hydrated — avoids React’s synchronous warning
    const id = requestAnimationFrame(() => {
      setHydrated(true);

      const handleResize = () => {
        const isMobile = window.innerWidth < 640;
        setCollapsed(isMobile);
        setIsOpen(!isMobile);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  const toggleSidebar = useCallback(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      setIsOpen((prev) => !prev);
      setCollapsed(false);
    } else {
      setCollapsed((prev) => !prev);
    }
  }, []);

  if (!hydrated) {
    return (
      <div className="fixed top-4 left-4 p-2">
        <Menu className="w-6 h-6 text-theme-primary" />
      </div>
    );
  }

  return (
    <>
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-50 text-theme-primary hover:text-(--accent) focus:outline-none focus:ring-2 focus:ring-(--accent) p-2 rounded"
          onClick={toggleSidebar}
          title="Toggle sidebar"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-6 h-6 mt-6" />
        </button>
      )}

      <aside
        className={`sidebar bg-theme-secondary border-r border-theme flex flex-col transition-all duration-300 z-50 ${
          isOpen ? (collapsed ? "collapsed" : "expanded") : "hidden"
        } md:expanded md:static fixed top-0 left-0 min-h-screen overflow-x-hidden`}
      >
        <div className="flex items-center justify-between p-3 border-b border-theme">
          {!collapsed && (
            <Link href="/" className="flex items-center">
              <Image
                className="object-contain"
                src="/oesisuicon.svg"
                loading="eager"
                alt="Oesisu logo"
                title={"oesisu logo"}
                width={24}
                height={24}
                style={{ width: "auto", height: "auto" }} // Fix aspect ratio warning
                              priority={false}
              />

            </Link>
          )}
          <div className="icon_container flex justify-center">
            <button
              onClick={toggleSidebar}
              className="text-theme-primary hover:text-(--accent) focus:outline-none focus:ring-2 focus:ring-(--accent) p-1 rounded"
              title="Toggle sidebar"
              aria-label="Toggle sidebar"
            >
              {collapsed ? (
                <Menu className="w-6 h-6" />
              ) : (
                <Image
                  src="/dock_to_right.svg"
                  alt="Toggle sidebar"
                  width={20}
                  height={16}
                  className="items-center"
                />
              )}
            </button>
          </div>
        </div>

        <div className="flex-1 my-4 overflow-y-auto overflow-x-hidden">
          <Navbar collapsed={collapsed} navList={navs} />
        </div>

        <div
          className={`flex ${
            collapsed
              ? "flex-col items-center"
              : "flex-row items-center justify-between"
          } p-3 border-t border-theme mt-auto`}
        >
          <div className="icon_container flex justify-center">
            <button
              className="text-theme-primary hover:text-(--accent) focus:outline-none focus:ring-2 focus:ring-(--accent) p-1 rounded"
              title="Open terminal"
              aria-label="Open terminal"
            >
              <Image
                src="/terminal.svg"
                alt="Terminal"
                width={20}
                height={16}
                className="items-center"
              />
            </button>
          </div>

          <div className="icon_container flex justify-center">
            <button
              className="text-theme-primary hover:text-(--accent) focus:outline-none focus:ring-2 focus:ring-(--accent) p-1 rounded mt-2 sm:mt-0"
              title="Change language"
              aria-label="Change language"
            >
              <Image
                src="/lang.svg"
                alt="Language"
                width={20}
                height={16}
                className="items-center"
              />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
