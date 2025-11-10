/**
 * ConnectSection Component - Refactored & CMS-Ready
 *
 * DATA SOURCE: app/data/contacts.data.ts
 * Now uses shared contact data instead of hard-coded values
 *
 * This component is used across multiple pages as a CTA section
 */

"use client";

import React, { JSX } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { contactsData } from "../lib/contacts.data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.5,
      ease: "easeOut"
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

// Icon map for social platforms
const platformIcons = {
  "LinkedIn": SiLinkedin,
  "GitHub": SiGithub,
  "Email": Mail
} as const;

// Color schemes for different platforms
const platformColors = {
  "LinkedIn": {
    bg: "from-blue-600/10 to-cyan-500/10",
    border: "border-blue-500/20",
    icon: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-500",
    hover: "hover:shadow-blue-600/20 group-hover:from-blue-600/20 group-hover:to-cyan-500/20",
    textHover: "group-hover:text-blue-500"
  },
  "GitHub": {
    bg: "from-purple-600/10 to-pink-500/10",
    border: "border-purple-500/20",
    icon: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-400",
    hover: "hover:shadow-purple-500/20 group-hover:from-purple-600/20 group-hover:to-pink-500/20",
    textHover: "group-hover:text-purple-400"
  },
  "Email": {
    bg: "from-blue-500/10 to-purple-500/10",
    border: "border-blue-400/20",
    icon: "bg-blue-400/10 border-blue-400/20",
    iconColor: "text-blue-400",
    hover: "hover:shadow-blue-500/20 group-hover:from-blue-500/20 group-hover:to-purple-500/20",
    textHover: "group-hover:text-blue-400"
  }
} as const;

export default function ConnectSection(): JSX.Element {
  const { contactInfo, socialLinks } = contactsData;

  // Get primary social links (LinkedIn and GitHub)
  const linkedIn = socialLinks.find(link => link.platform === "LinkedIn");
  const github = socialLinks.find(link => link.platform === "GitHub");

  const connectionCards = [
    {
      id: "email",
      platform: "Email" as const,
      title: "Email Me",
      description: "Drop me a message for collaborations or inquiries",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      Icon: Mail
    },
    ...(linkedIn ? [{
      id: "linkedin",
      platform: "LinkedIn" as const,
      title: linkedIn.label,
      description: "Connect professionally and view my experience",
      value: linkedIn.username || "",
      href: linkedIn.url,
      Icon: SiLinkedin
    }] : []),
    ...(github ? [{
      id: "github",
      platform: "GitHub" as const,
      title: github.label,
      description: "Check out my code and open source contributions",
      value: github.username || "",
      href: github.url,
      Icon: SiGithub
    }] : [])
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      aria-labelledby="connect-heading"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="text-center space-y-4 mb-12">
        <h2
          id="connect-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/95 tracking-tight"
        >
          Let&apos;s Connect
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
          Interested in collaborating, hiring, or learning more?
          <br className="hidden sm:block" />
          I&apos;d love to hear from you.
        </p>
      </motion.div>

      {/* Connection Cards Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
      >
        {connectionCards.map((card) => {
          const colors = platformColors[card.platform];

          return (
            <motion.div key={card.id} variants={cardVariants}>
              <Link href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className={`group relative bg-gradient-to-br ${colors.bg} backdrop-blur-xl border ${colors.border} shadow-lg hover:shadow-2xl ${colors.hover} transition-all duration-500 overflow-hidden cursor-pointer h-full`}>
                    {/* Animated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 ${colors.hover} transition-all duration-500`} />

                    <CardContent className="relative p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-xl ${colors.icon} border ${colors.hover.includes('group-hover') ? 'group-hover:bg-opacity-30' : ''} transition-all duration-300`}>
                          <card.Icon className={`w-6 h-6 ${colors.iconColor} transition-transform group-hover:scale-110`} strokeWidth={2} />
                        </div>
                        <ArrowUpRight className={`w-5 h-5 text-white/30 ${colors.textHover} transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1`} strokeWidth={2} />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white/95 group-hover:text-white transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed font-light">
                          {card.description}
                        </p>
                      </div>

                      <div className="pt-2">
                        <span className={`text-xs ${colors.iconColor} opacity-80 font-medium group-hover:opacity-100 transition-opacity`}>
                          {card.value}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Optional: Additional CTA */}
      {contactInfo.availability.status === "available" && (
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <p className="text-sm text-white/40 font-light">
            {contactInfo.availability.message}
          </p>
        </motion.div>
      )}
    </motion.section>
  );
}
