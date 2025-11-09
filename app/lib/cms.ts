/**
 * CMS Type Definitions for Portfolio
 * These types define the structure of data from your CMS/Database
 */

// ==================== COMMON TYPES ====================

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  isPublished: boolean;
  order?: number;
}

export interface MediaAsset {
  id: string;
  url: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

// ==================== BIO & PROFILE ====================

export interface Bio extends BaseEntity {
  intro: string;
  philosophy: string;
  journey: string;
  tags: string[];
  profileImages: MediaAsset[];
  resumeUrl?: string;
}

export interface Quote extends BaseEntity {
  text: string;
  author: string;
  context?: string;
}

// ==================== EDUCATION ====================

export interface Education extends BaseEntity {
  title: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights?: string[];
  gpa?: string;
  major?: string;
  minor?: string;
  thesis?: string;
  images?: MediaAsset[];
  tags: string[];
}

// ==================== EXPERIENCE ====================

export interface Experience extends BaseEntity {
  title: string;
  company: string;
  location?: string;
  employmentType: "Full-time" | "Part-time" | "Contract" | "Internship" | "Freelance";
  startDate: string;
  endDate?: string; // null if current
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  teamSize?: number;
  companyLogo?: MediaAsset;
  images?: MediaAsset[];
}

// ==================== PROJECTS ====================

export interface Project extends BaseEntity {
  title: string;
  subtitle?: string;
  slug: string;
  category: "Personal" | "Freelance" | "Work" | "Open Source";
  status: "In Development" | "Completed" | "Maintenance" | "Archived";
  shortDescription: string;
  fullDescription: string;
  startDate: string;
  endDate?: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  features: string[];
  challenges?: string[];
  learnings?: string[];
  thumbnail?: MediaAsset;
  images?: MediaAsset[];
  team?: {
    role: string;
    members?: number;
  };
}

// ==================== SKILLS & TECHNOLOGIES ====================

export interface SkillCategory extends BaseEntity {
  name: string;
  description?: string;
  skills: Skill[];
  order: number;
}

export interface Skill {
  id: string;
  name: string;
  icon?: string; // Iconify icon key or logo URL
  logo?: MediaAsset;
  proficiency?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  yearsOfExperience?: number;
  isFeatured?: boolean;
}

// ==================== ACHIEVEMENTS ====================

export interface Achievement extends BaseEntity {
  title: string;
  type: "Award" | "Certification" | "Publication" | "Recognition" | "Other";
  issuer: string;
  issuerLogo?: MediaAsset;
  dateIssued: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills?: string[];
  images?: MediaAsset[];
}

// ==================== HOBBIES & INTERESTS ====================

export interface Hobby extends BaseEntity {
  name: string;
  description: string;
  icon: string; // Lucide icon name or Iconify key
  category?: string;
  images?: MediaAsset[];
}

// ==================== VALUES ====================

export interface Value extends BaseEntity {
  title: string;
  description: string;
  icon?: string;
  explanation?: string;
}

// ==================== SPONSORS ====================

export interface Sponsor extends BaseEntity {
  name: string;
  description?: string;
  logo: MediaAsset;
  website?: string;
  sponsorshipType?: "Platform" | "Tool" | "Service" | "Financial";
  startDate?: string;
}

// ==================== CONTACT INFO ====================

export interface ContactInfo extends BaseEntity {
  email: string;
  phone?: string;
  location?: string;
  timezone?: string;
  availability?: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  id: string;
  platform: "GitHub" | "LinkedIn" | "Twitter" | "Instagram" | "YouTube" | "Portfolio" | "Other";
  url: string;
  username?: string;
  icon?: string;
  isPrimary?: boolean;
}

// ==================== TESTIMONIALS ====================

export interface Testimonial extends BaseEntity {
  name: string;
  role: string;
  company?: string;
  avatar?: MediaAsset;
  content: string;
  rating?: number;
  projectRelated?: string; // Project ID
  linkedInUrl?: string;
}

// ==================== BLOG POSTS (Optional) ====================

export interface BlogPost extends BaseEntity {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: MediaAsset;
  author: string;
  tags: string[];
  category: string;
  readingTime?: number; // in minutes
  views?: number;
  likes?: number;
}

// ==================== PAGE METADATA ====================

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: MediaAsset;
  canonicalUrl?: string;
}

// ==================== API RESPONSE TYPES ====================

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: Date;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// ==================== FORM TYPES (Admin CMS) ====================

export type CreateEducationDTO = Omit<Education, keyof BaseEntity>;
export type UpdateEducationDTO = Partial<CreateEducationDTO>;

export type CreateExperienceDTO = Omit<Experience, keyof BaseEntity>;
export type UpdateExperienceDTO = Partial<CreateExperienceDTO>;

export type CreateProjectDTO = Omit<Project, keyof BaseEntity>;
export type UpdateProjectDTO = Partial<CreateProjectDTO>;

export type CreateAchievementDTO = Omit<Achievement, keyof BaseEntity>;
export type UpdateAchievementDTO = Partial<CreateAchievementDTO>;

// ==================== FILTER & QUERY TYPES ====================

export interface QueryFilters {
  isPublished?: boolean;
  startDate?: string;
  endDate?: string;
  tags?: string[];
  category?: string;
  search?: string;
}

export interface SortOptions {
  field: string;
  direction: "asc" | "desc";
}

// ==================== EXAMPLE API USAGE ====================

/**
 * Example API endpoints:
 *
 * GET  /api/bio
 * GET  /api/education
 * GET  /api/experience
 * GET  /api/projects
 * GET  /api/projects/:slug
 * GET  /api/achievements
 * GET  /api/skills
 * GET  /api/hobbies
 * GET  /api/values
 * GET  /api/quotes
 * GET  /api/sponsors
 * GET  /api/contact
 *
 * // Admin endpoints (authenticated)
 * POST   /api/admin/education
 * PUT    /api/admin/education/:id
 * DELETE /api/admin/education/:id
 * // ... same pattern for other resources
 */

// export default {
//   Bio,
//   Quote,
//   Education,
//   Experience,
//   Project,
//   Skill,
//   Achievement,
//   Hobby,
//   Value,
//   Sponsor,
//   ContactInfo,
//   Testimonial
// };
