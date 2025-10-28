"use client";

import { create } from "zustand";

interface SidebarState {
  width: number;
  isCollapsed: boolean;
  isMobile: boolean;
  isMobileOpen: boolean;

  // actions
  setMobile: (mobile: boolean) => void;
  toggle: () => void;
  setCollapsed: (collapsed: boolean) => void;
  setMobileOpen: (open: boolean) => void;
}

export const useSidebarStore = create<SidebarState>((set, get) => ({
  width: 64,
  isCollapsed: true,
  isMobile: false,
  isMobileOpen: false,

  setMobile: (mobile) =>
    set(() => {
      if (mobile) {
        return {
          isMobile: true,
          isCollapsed: true, // always collapsed on mobile
          isMobileOpen: false,
          width: 0, // hidden until opened
        };
      } else {
        const collapsed = get().isCollapsed;
        return {
          isMobile: false,
          width: collapsed ? 64 : 256,
        };
      }
    }),

  toggle: () =>
    set((state) => {
      if (state.isMobile) {
        const open = !state.isMobileOpen;
        return {
          isMobileOpen: open,
          width: open ? 256 : 0,
        };
      } else {
        const collapsed = !state.isCollapsed;
        return {
          isCollapsed: collapsed,
          width: collapsed ? 64 : 256,
        };
      }
    }),

  setCollapsed: (collapsed) =>
    set(() => ({
      isCollapsed: collapsed,
      width: collapsed ? 64 : 256,
    })),

  setMobileOpen: (open) =>
    set(() => ({
      isMobileOpen: open,
      width: open ? 256 : 0,
    })),
}));
