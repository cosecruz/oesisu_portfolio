/**
 * Contact Page Type Definitions
 * These types define the structure for contact information, social links, and form configuration
 */

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  timezone: string;
  availability: {
    status: "available" | "limited" | "unavailable";
    message: string;
  };
}

export interface SocialLink {
  id: string;
  platform: "LinkedIn" | "GitHub" | "Twitter" | "Instagram" | "Portfolio" | "Resume";
  label: string;
  username?: string;
  url: string;
  icon: "linkedin" | "github" | "twitter" | "instagram" | "external" | "download";
  color: string; // Tailwind color classes
  hoverColor: string;
}

export interface ContactPageContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  form: {
    title: string;
    fields: {
      name: { label: string; placeholder: string; required: boolean };
      email: { label: string; placeholder: string; required: boolean };
      subject: { label: string; placeholder: string; required: boolean };
      message: { label: string; placeholder: string; required: boolean; rows: number };
    };
    submitButton: {
      idle: string;
      submitting: string;
    };
    successMessage?: string;
    disclaimerText: string;
  };
  responseTime: {
    average: string;
    timezone: string;
  };
}

// Form submission types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormSubmission extends ContactFormData {
  timestamp: string;
  userAgent?: string;
}

/**
 * API Contract Examples:
 *
 * GET /api/contacts
 * Response: ContactPageContent
 *
 * POST /api/contacts/submit
 * Body: ContactFormData
 * Response: { success: boolean; message: string; id?: string }
 */
