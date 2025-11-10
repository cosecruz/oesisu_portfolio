/**
 * Sponsors/Shoutouts Data
 *
 * CMS/API Integration Notes:
 * - Replace this with: const sponsorsData = await fetch('/api/sponsors').then(r => r.json())
 * - Expected JSON: SponsorsContent interface from types/sponsors.ts
 *
 * API Endpoints:
 * GET /api/sponsors -> Returns SponsorsContent
 * POST /api/sponsors -> Create shoutout (admin only)
 * PUT /api/sponsors/:id -> Update shoutout (admin only)
 * DELETE /api/sponsors/:id -> Remove shoutout (admin only)
 */

import { SponsorsContent } from "./types/sponsors";


export const sponsorsData: SponsorsContent = {
  badge: "Special Thanks",
  title: "Shoutouts & Acknowledgments",
  subtitle: "Amazing people and companies that have helped me along my journey",

  shoutouts: [
    {
      id: "mentor-jane",
      name: "Jane Doe",
      title: "Mentor & Advisor",
      description: "Guided me through my early career and taught me the fundamentals of system design",
      image: "/assets/people/jane.jpg",
      social: {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/janedoe"
      },
      type: "person",
      featured: true
    },
    {
      id: "vercel",
      name: "Vercel",
      description: "Amazing platform that hosts this portfolio and makes deployment a breeze",
      company: {
        name: "Vercel",
        logo: "/logos/vercel.svg",
        url: "https://vercel.com"
      },
      type: "company"
    },
    {
      id: "colleague-john",
      name: "John Smith",
      title: "Colleague & Friend",
      description: "Collaborated on multiple projects and always pushed me to write better code",
      image: "/assets/people/john.jpg",
      social: {
        platform: "GitHub",
        url: "https://github.com/johnsmith"
      },
      type: "person"
    },
    {
      id: "aws",
      name: "AWS",
      description: "The cloud platform that powers most of my production applications",
      company: {
        name: "Amazon Web Services",
        logo: "/logos/aws.svg",
        url: "https://aws.amazon.com"
      },
      type: "company",
      featured: true
    }
  ],

  footerNote: "Grateful for everyone who has supported and inspired me"
};

// Helper functions
export const getFeaturedShoutouts = () => {
  return sponsorsData.shoutouts.filter(shoutout => shoutout.featured);
};

export const getShoutoutsByType = (type: "person" | "company" | "tool") => {
  return sponsorsData.shoutouts.filter(shoutout => shoutout.type === type);
};

export const getShoutoutById = (id: string) => {
  return sponsorsData.shoutouts.find(shoutout => shoutout.id === id);
};
