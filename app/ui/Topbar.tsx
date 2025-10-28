"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Topbar({ admin }: { admin: boolean }) {
  const pathname = usePathname();

  return (
    <header className="h-14 flex items-center justify-between px-4 sm:px-6 md:px-8 bg-sidebar/90 backdrop-blur-md border-b border-main shadow-sm">
      <div className="flex items-center gap-3">
        {/* Logo visible only on small screens */}
        <div className="sm:hidden flex items-center gap-2">
          <Image src="/oesisuicon.svg" alt="Logo" width={20} height={20} />
          <span className="font-semibold text-sm text-white/90">OESISU</span>
        </div>

        {/* Page indicator */}
        <span className="hidden sm:inline-block font-semibold text-white/90 tracking-wide">
          OESISU{" "}
          {admin && <span className="text-amber-300 text-xs align-super">@Admin</span>}
        </span>
      </div>

      <button
        className="p-2 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Search"
      >
        <Image src="/search.svg" alt="Search" width={18} height={18} />
      </button>
    </header>
  );
}
