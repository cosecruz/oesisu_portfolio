/**
 * Projects Page Type Definitions (Portfolio Showcase)
 *
 * Note: This is different from me.data.ts ProjectsData
 * - This is for the dedicated /projects showcase page (card-based layout)
 * - me.data.ts projects are for the detailed About Me timeline
 */

import type { LucideIcon } from "lucide-react";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  techStack: string[];
  highlights: string[];
  status: "Completed" | "In Progress" | "POC" | "Maintenance";
  icon: LucideIcon;
  gradient: string;
  github?: string;
  demo?: string;
  liveUrl?: string;
  images?: string[];
  featured?: boolean;
}

export interface ProjectsPageContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  categories: string[];
  projects: PortfolioProject[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

/**
 * API Contract Examples:
 *
 * GET /api/projects
 * Response: ProjectsPageContent
 *
 * GET /api/projects/:id
 * Response: PortfolioProject
 *
 * POST /api/projects (admin)
 * Body: Omit<PortfolioProject, 'id'>
 * Response: { success: boolean; project: PortfolioProject }
 *
 * PUT /api/projects/:id (admin)
 * Body: Partial<PortfolioProject>
 * Response: { success: boolean; project: PortfolioProject }
 */
