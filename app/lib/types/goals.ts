/**
 * Goals Page Type Definitions
 * These types define the structure for professional goals and learning roadmap
 */

import type { LucideIcon } from "lucide-react";

export interface Goal {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  color: "blue" | "purple" | "green" | "amber" | "violet" | "cyan";
  glow: string;
  timeframe: string;
  category?: string;
  priority?: "high" | "medium" | "low";
}

export interface LearningRoadmapCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  iconColor: string;
  items: string[];
}

export interface GoalsPageContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  quote: {
    text: string;
    author?: string;
  };
  goals: Goal[];
  learningRoadmap: {
    title: string;
    subtitle: string;
    categories: LearningRoadmapCategory[];
  };
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
 * GET /api/goals
 * Response: GoalsPageContent
 *
 * PUT /api/goals/:id
 * Body: Partial<Goal>
 * Response: { success: boolean; goal: Goal }
 *
 * POST /api/goals
 * Body: Omit<Goal, 'id'>
 * Response: { success: boolean; goal: Goal }
 */
