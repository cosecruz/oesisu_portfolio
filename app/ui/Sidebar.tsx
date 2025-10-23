"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { NavListInfo } from "../lib/definitions";
// import { MessageCircle, Menu, Plus } from "lucide-react";

export default function Sidebar({ navs }: { navs: NavListInfo[] }) {


  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <aside
      className={`sidebar ${
        collapsed ? "collapsed" : "expanded"
      } bg-theme-secondary border-r border-theme flex flex-col`}
    >
      {/* Header / Toggle */}
      <div className="flex items-center justify-between p-3 border-b border-theme">
        {!collapsed && (
          <Image
            className="logo"
            src="/oesisuicon.svg"
            alt="Oesisu logo"
            width={16}
            height ={5}
          />
        )}
        <div className="icon_container flex justify-center ">
          <button
          onClick={toggleSidebar}
          className="text-theme-primary hover:text-(--accent)"
          title="Toggle sidebar"
        >
          <Image
            className="items-center"
            src="/dock_to_right.svg"
            alt="toggle"
            width={20}
            height ={16}
          />
        </button>
        </div>
      </div>

      {/* Pages NavBar */}
      <div className="flex-1 my-4">
      <Navbar collapsed={collapsed} navList={navs} />
      </div>

      {/* Footer */}
        <div
  className={`flex ${
    collapsed ? "flex-col items-center" : "flex-row items-center justify-between"
  } p-3 border-t border-theme`}
>
        {/* Terminal button */}
        <div className="icon_container flex justify-center ">
          <button
    className="text-theme-primary hover:text-(--accent)"
    title="Open terminal"
  >
    <Image
      src="/terminal.svg"
      alt="terminal"
      width={20}
      height={16}
      className="items-center"
    />
  </button>
        </div>


        {/* Toggle sidebar button */}
        <div className="icon_container flex justify-center ">
  <button
    className="text-theme-primary hover:text-(--accent) mt-2 sm:mt-0"
            title="language"
  >
    <Image
      src="/lang.svg"
      alt="language"
      width={20}
      height={16}
      className="items-center"
    />
  </button>
        </div>

</div>

    </aside>
  );
}
