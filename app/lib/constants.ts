import { NavListInfo } from "./definitions";

export const GENERAL_PAGE_LISTS: NavListInfo[] = [
  { id: "me", label: "Me", href: "/me", iconUrl: "/account.svg" },
  { id: "resume", label: "Resume", href: "/resume", iconUrl: "/docs.svg" },
  { id: "goals", label: "Goals", href: "/goals", iconUrl: "/goal.svg" },
  { id: "contacts", label: "Contacts", href: "/contacts", iconUrl: "/socials.svg" },
  { id: "projects", label: "Projects", href: "/projects", iconUrl: "/project.svg" },
  { id: "knowledge_base", label: "Knowledge Base", href: "/knowledge_base", iconUrl: "/librarybook.svg" },
  {
    id: "apps",
    label: "Apps",
    href: "/app",
    iconUrl: "/apps.svg",
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
    iconUrl: "/chats.svg",
    hasDropdown: true,
    dropdownItems: [
      { label: "Direct Messages", href: "/chat/dm" },
      { label: "Group Chat", href: "/chat/group" },
    ],
  },
];

export const ADMIN_PAGE_LISTS: NavListInfo[] = [
  { id: "new", label: "New", iconUrl: "/new.svg" }, // No href, as in original
  { id: "dashboard", label: "DashBoard", href: "/dashboard", iconUrl: "/admin/dashboard.svg" },
  { id: "entries", label: "Entries", href: "/admin/entry", iconUrl: "/entry.svg" },
  { id: "admin_me", label: "Me", href: "/admin/me", iconUrl: "/account.svg" },
  { id: "admin_resume", label: "CV (Curriculum Vitae)", href: "/admin/resume", iconUrl: "/docs.svg" },
  { id: "admin_goals", label: "Goals", href: "/admin/goals", iconUrl: "/goal.svg" },
  { id: "admin_contacts", label: "Contacts", href: "/admin/contacts", iconUrl: "/socials.svg" },
  { id: "admin_projects", label: "Projects", href: "/admin/projects", iconUrl: "/project.svg" },
  {
    id: "admin_knowledge_base",
    label: "Knowledge Base",
    href: "/admin/knowledge_base",
    iconUrl: "/librarybook.svg",
  },
  {
    id: "admin_apps",
    label: "Apps",
    href: "/admin/apps",
    iconUrl: "/apps.svg",
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
    iconUrl: "/chats.svg",
    hasDropdown: true,
    dropdownItems: [
      { label: "Admin DMs", href: "/admin/chat/dm" },
      { label: "Admin Group Chat", href: "/admin/chat/group" },
    ],
  },
];

