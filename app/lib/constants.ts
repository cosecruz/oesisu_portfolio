import type { NavListInfo } from "./definitions";
import {
  User,
  FileText,
  Target,
  Users,
  FolderGit2,
  BookOpenText,
  AppWindow,
  MessageSquare,
  LayoutDashboard,
  FilePlus,
  Database,
  ClipboardList,
  Settings,
} from "lucide-react";

/* ──────────────── GENERAL NAVIGATION ──────────────── */
export const GENERAL_PAGE_LISTS: NavListInfo[] = [
  { id: "me", label: "Me", href: "/me", icon: User },
  { id: "resume", label: "Resume", href: "/resume", icon: FileText },
  { id: "goals", label: "Goals", href: "/goals", icon: Target },
  { id: "contacts", label: "Contacts", href: "/contacts", icon: Users },
  { id: "projects", label: "Projects", href: "/projects", icon: FolderGit2 },
  { id: "knowledge_base", label: "Knowledge Base", href: "/knowledge_base", icon: BookOpenText },
  {
    id: "apps",
    label: "Apps",
    href: "/app",
    icon: AppWindow,
    hasDropdown: true,
    dropdownItems: [
      { label: "App 1", href: "/apps/app1" },
      { label: "App 2", href: "/apps/app2" },
    ],
  },
  {
    id: "chat",
    label: "Chat",
    href: "/chat",
    icon: MessageSquare,
    hasDropdown: true,
    dropdownItems: [
      { label: "Direct Messages", href: "/chat/dm" },
      { label: "Group Chat", href: "/chat/group" },
    ],
  },
];

/* ──────────────── ADMIN NAVIGATION ──────────────── */
export const ADMIN_PAGE_LISTS: NavListInfo[] = [
  { id: "new", label: "New", icon: FilePlus },
  { id: "dashboard", label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { id: "entries", label: "Entries", href: "/admin/entry", icon: ClipboardList },
  { id: "admin_me", label: "Me", href: "/admin/me", icon: User },
  { id: "admin_resume", label: "CV (Curriculum Vitae)", href: "/admin/resume", icon: FileText },
  { id: "admin_goals", label: "Goals", href: "/admin/goals", icon: Target },
  { id: "admin_contacts", label: "Contacts", href: "/admin/contacts", icon: Users },
  { id: "admin_projects", label: "Projects", href: "/admin/projects", icon: FolderGit2 },
  {
    id: "admin_knowledge_base",
    label: "Knowledge Base",
    href: "/admin/knowledge_base",
    icon: BookOpenText,
  },
  {
    id: "admin_apps",
    label: "Apps",
    href: "/admin/apps",
    icon: AppWindow,
    hasDropdown: true,
    dropdownItems: [
      { label: "Admin App 1", href: "/admin/apps/app1" },
      { label: "Admin App 2", href: "/admin/apps/app2" },
    ],
  },
  {
    id: "admin_chat",
    label: "Chat",
    href: "/admin/chat",
    icon: MessageSquare,
    hasDropdown: true,
    dropdownItems: [
      { label: "Admin DMs", href: "/admin/chat/dm" },
      { label: "Admin Group Chat", href: "/admin/chat/group" },
    ],
  },
  { id: "admin_settings", label: "Settings", href: "/admin/settings", icon: Settings },
  { id: "admin_db", label: "Database", href: "/admin/db", icon: Database },
];
