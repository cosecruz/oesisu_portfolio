/**
 * Sponsors/Shoutouts Type Definitions
 * These types define the structure for acknowledgments, sponsors, and shoutouts
 */

export type SocialPlatform = "LinkedIn" | "Instagram" | "Twitter" | "GitHub" | "Website";

export interface Shoutout {
  id: string;
  name: string;
  title?: string;
  description: string;
  image?: string;
  social?: {
    platform: SocialPlatform;
    url: string;
  };
  company?: {
    name: string;
    logo: string;
    url?: string;
  };
  type?: "person" | "company" | "tool";
  featured?: boolean;
}

export interface SponsorsContent {
  badge: string;
  title: string;
  subtitle: string;
  shoutouts: Shoutout[];
  footerNote: string;
}

/**
 * API Contract Examples:
 *
 * GET /api/sponsors
 * Response: SponsorsContent
 *
 * POST /api/sponsors (admin)
 * Body: Omit<Shoutout, 'id'>
 * Response: { success: boolean; shoutout: Shoutout }
 */
