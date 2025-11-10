/**
 * HomeSponsors Component - Refactored & CMS-Ready
 *
 * DATA SOURCE: app/data/sponsors.data.ts
 * TYPES: types/sponsors.ts
 *
 * API Integration Example:
 * ```typescript
 * const sponsorsData = await fetch('/api/sponsors').then(r => r.json());
 * ```
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Heart } from "lucide-react";
import { sponsorsData } from "@/app/lib/sponsors.data";
import ShoutoutCard from "../Sponsor/ShoutoutCard";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function HomeSponsors() {
  const { badge, title, subtitle, shoutouts, footerNote } = sponsorsData;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6"
    >
      <div className="relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-rose-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-violet-500/10 blur-3xl rounded-full" />

        <div className="relative space-y-10">
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-pink-500/10 border border-pink-400/20 backdrop-blur-sm">
              <Heart className="w-5 h-5 text-pink-400" strokeWidth={2} fill="currentColor" />
              <span className="text-sm font-semibold text-pink-300 uppercase tracking-wider">
                {badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white/95 tracking-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          {/* Shoutouts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shoutouts.map((shoutout, index) => (
              <ShoutoutCard key={shoutout.id} shoutout={shoutout} index={index} />
            ))}
          </div>

          {/* Footer note */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-4"
          >
            <p className="text-xs sm:text-sm text-white/40 italic">
              {footerNote}
            </p>
          </motion.div>
        </div>

        {/* Decorative shine effects */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
      </div>
    </motion.section>
  );
}
