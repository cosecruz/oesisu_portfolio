/**
 * Contact Page Data
 *
 * CMS/API Integration Notes:
 * - Replace this with: const contactsData = await fetch('/api/contacts').then(r => r.json())
 * - For App Router: Create app/api/contacts/route.ts that returns this structure
 * - Expected JSON: ContactPageContent interface from types/contacts.ts
 *
 * API Endpoints:
 * GET /api/contacts -> Returns ContactPageContent
 * POST /api/contacts/submit -> Accepts ContactFormData, returns { success, message, id? }
 * PUT /api/contacts -> Update contact info (admin only)
 */

import type { ContactPageContent } from "@/app/lib/types/contacts";

export const contactsData: ContactPageContent = {
  hero: {
    badge: "Get In Touch",
    title: "Let's Connect",
    subtitle: "Have a project in mind or just want to chat?",
    description: "I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers."
  },

  contactInfo: {
    email: "oesisu@outlook.com",
    phone: "+60 11 3346 7821",
    location: "Kuala Lumpur, Malaysia",
    timezone: "GMT+8 (Kuala Lumpur)",
    availability: {
      status: "available",
      message: "Currently open to full-time opportunities, freelance projects, and interesting collaborations."
    }
  },

  socialLinks: [
    {
      id: "linkedin",
      platform: "LinkedIn",
      label: "LinkedIn",
      username: "/in/obiechi-ebuka-samuel",
      url: "https://www.linkedin.com/in/ebuka-obiechi-551128174/",
      icon: "linkedin",
      color: "bg-blue-500/10 border-blue-500/20",
      hoverColor: "hover:bg-blue-500/20 hover:border-blue-400/30"
    },
    {
      id: "github",
      platform: "GitHub",
      label: "GitHub",
      username: "@oesisu",
      url: "https://github.com/cosecruz",
      icon: "github",
      color: "bg-purple-500/10 border-purple-500/20",
      hoverColor: "hover:bg-purple-500/20 hover:border-purple-400/30"
    },
    {
      id: "resume",
      platform: "Resume",
      label: "Download Resume",
      url: "/assets/resume.pdf",
      icon: "download",
      color: "bg-green-500/10 border-green-500/20",
      hoverColor: "hover:bg-green-500/20 hover:border-green-400/30"
    }
  ],

  form: {
    title: "Send Me a Message",
    fields: {
      name: {
        label: "Name",
        placeholder: "Your name",
        required: true
      },
      email: {
        label: "Email",
        placeholder: "your.email@example.com",
        required: true
      },
      subject: {
        label: "Subject",
        placeholder: "What's this about?",
        required: true
      },
      message: {
        label: "Message",
        placeholder: "Tell me about your project or just say hi...",
        required: true,
        rows: 6
      }
    },
    submitButton: {
      idle: "Send Message",
      submitting: "Sending..."
    },
    disclaimerText: "I'll get back to you as soon as possible, usually within 24-48 hours."
  },

  responseTime: {
    average: "24-48 hours",
    timezone: "GMT+8 (Kuala Lumpur)"
  }
};

// Helper to get contact email (useful for mailto links)
export const getContactEmail = () => contactsData.contactInfo.email;

// Helper to get phone number (useful for tel links)
export const getContactPhone = () => contactsData.contactInfo.phone;

// Helper to check if available for work
export const isAvailableForWork = () => contactsData.contactInfo.availability.status === "available";
