/**
 * Goals Page - Refactored & CMS-Ready
 *
 * DATA SOURCE: app/data/goals.data.ts
 * TYPES: types/goals.ts
 *
 * API Integration Example:
 * ```typescript
 * const goalsData = await fetch('/api/goals').then(r => r.json());
 * ```
 *
 * API Endpoints Needed:
 * - GET /api/goals -> Returns GoalsPageContent
 * - PUT /api/goals/:id -> Update goal (admin)
 * - POST /api/goals -> Create goal (admin)
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Target } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ConnectSection from "@/app/ui/ConnectSection";
import { goalsData } from "@/app/lib/goals.data";
import GoalCard from "@/app/ui/Goal/GoalCard";

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
      duration: 0.8,
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

export default function GoalsPage() {
  const { hero, quote, goals, learningRoadmap, cta } = goalsData;

  return (
    <main className="flex flex-col min-h-screen pb-20">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div variants={fadeInVariants} className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 backdrop-blur-sm">
              <Target className="w-5 h-5 text-violet-400" strokeWidth={2} />
              <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">
                {hero.badge}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-blue-500 bg-clip-text text-transparent tracking-tight leading-tight">
              {hero.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              {hero.subtitle}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 pb-16"
      >
        <blockquote className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl">
          <div className="absolute top-4 left-4 text-6xl text-violet-400/20 font-serif">&quot;</div>
          <p className="relative text-center text-base sm:text-lg italic text-white/80 leading-relaxed">
            {quote.text}
          </p>
          <div className="absolute bottom-4 right-4 text-6xl text-violet-400/20 font-serif rotate-180">&quot;</div>
        </blockquote>
      </motion.div>

      {/* Goals Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <GoalCard key={goal.id} goal={goal} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Learning Roadmap */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <motion.div variants={fadeInVariants} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white/95 mb-4">
            {learningRoadmap.title}
          </h2>
          <p className="text-white/60 text-lg">
            {learningRoadmap.subtitle}
          </p>
        </motion.div>

        <motion.div variants={cardVariants}>
          <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {learningRoadmap.categories.map((category) => (
                  <div key={category.id} className="space-y-3">
                    <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider flex items-center gap-2">
                      <category.icon className={`w-4 h-4 ${category.iconColor}`} strokeWidth={2} />
                      {category.title}
                    </h4>
                    <ul className="space-y-2 text-sm text-white/60">
                      {category.items.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="p-10 rounded-3xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-400/20 backdrop-blur-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white/95 mb-4">
            {cta.title}
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            {cta.description}
          </p>
          <Button size="lg" className="bg-violet-500 hover:bg-violet-600" asChild>
            <Link href={cta.buttonLink}>
              {cta.buttonText}
            </Link>
          </Button>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <Separator className="bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <ConnectSection />
    </main>
  );
}
