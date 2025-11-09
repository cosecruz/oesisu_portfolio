"use client";

import React, { JSX } from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
};

// Type definitions for CMS data structure
export interface DetailItem {
  id: string;
  title: string;
  subtitle?: string;
  organization?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  images?: string[];
  link?: string;
}

export interface DetailSectionProps {
  id: string;
  title: string;
  icon: LucideIcon;
  iconColor?: string;
  items: DetailItem[];
  layout?: "timeline" | "grid" | "list";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

/**
 * CMS-Ready DetailSection Component
 * Renders expandable sections with different layouts for Education, Experience, Projects, etc.
 */
export default function DetailSection({
  id,
  title,
  icon: Icon,
  iconColor = "blue",
  items,
  layout = "timeline",
  maxWidth = "xl"
}: DetailSectionProps): JSX.Element {

  const maxWidthClasses = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full"
  };

  const iconColorClasses = {
    blue: "bg-blue-400/10 border-blue-400/20 text-blue-400",
    violet: "bg-violet-400/10 border-violet-400/20 text-violet-400",
    purple: "bg-purple-400/10 border-purple-400/20 text-purple-400",
    green: "bg-green-400/10 border-green-400/20 text-green-400",
    orange: "bg-orange-400/10 border-orange-400/20 text-orange-400",
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24`}
    >
      {/* Section Header */}
      <motion.div variants={fadeInVariants} className="flex items-center gap-4 mb-12">
        <div className={`p-3 rounded-xl ${iconColorClasses[iconColor as keyof typeof iconColorClasses] || iconColorClasses.blue}`}>
          <Icon className="w-8 h-8" strokeWidth={2} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white/95">{title}</h2>
      </motion.div>

      {/* Timeline Layout */}
      {layout === "timeline" && (
        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="relative"
            >
              {/* Timeline connector (except for last item) */}
              {index !== items.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent hidden sm:block" />
              )}

              <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-500">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Left: Icon/Image */}
                    <div className="shrink-0">
                      <div className={`w-16 h-16 rounded-xl ${iconColorClasses[iconColor as keyof typeof iconColorClasses] || iconColorClasses.blue} flex items-center justify-center`}>
                        <Icon className="w-8 h-8" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white/95 mb-2">
                          {item.title}
                        </h3>
                        {item.organization && (
                          <p className={`text-lg ${iconColor === 'violet' ? 'text-violet-400' : 'text-blue-400'} mb-1`}>
                            {item.organization}
                          </p>
                        )}
                        {item.subtitle && (
                          <p className="text-white/60 text-sm mb-2">{item.subtitle}</p>
                        )}
                        {(item.startDate || item.endDate) && (
                          <p className="text-white/50 text-sm flex items-center gap-2">
                            <span>{item.startDate}</span>
                            {item.endDate && (
                              <>
                                <span className="text-white/30">—</span>
                                <span>{item.endDate}</span>
                              </>
                            )}
                          </p>
                        )}
                      </div>

                      <p className="text-white/70 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="space-y-2 pt-2">
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-white/60">
                              <span className="text-violet-400 mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-4">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-3 py-1 rounded-full ${iconColor === 'violet' ? 'bg-violet-400/10 border-violet-400/20 text-violet-300' : 'bg-blue-400/10 border-blue-400/20 text-blue-300'} border text-xs font-medium`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Images */}
                      {item.images && item.images.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                          {item.images.map((img, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              className="relative h-32 rounded-lg overflow-hidden border border-white/10"
                            >
                              <Image
                                src={img}
                                alt={`${item.title} image ${idx + 1}`}
                                fill
                                className="object-cover"
                              />
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Grid Layout */}
      {layout === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.div key={item.id} variants={cardVariants}>
              <Card className="h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-500">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-xl ${iconColorClasses[iconColor as keyof typeof iconColorClasses] || iconColorClasses.blue} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>

                  <h3 className="text-lg font-semibold text-white/95 mb-2">
                    {item.title}
                  </h3>

                  {item.organization && (
                    <p className="text-sm text-blue-400 mb-3">{item.organization}</p>
                  )}

                  <p className="text-sm text-white/70 leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-300 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
