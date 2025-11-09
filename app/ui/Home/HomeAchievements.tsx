"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import MiniCarousel from "../MiniCarousel";
import { CarouselType } from "@/app/lib/definitions";
import { v4 as uuidv4 } from "uuid";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15
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

const items: CarouselType[] = [
  {
    id: uuidv4(),
    tag: ["AWS", "Certificate"],
    title: "Certified Developer Associate",
    label: "Amazon Web Services",
    from: "2024",
    to: "2027",
  },
  {
    id: uuidv4(),
    tag: ["Award"],
    title: "Hackathon Winner",
    label: "First Place",
    from: "2021",
    to: "2021",
  },
  {
    id: uuidv4(),
    tag: ["HILTI", "Award"],
    title: "HILTI Dev Competition",
    label: "Regional Winner",
    from: "2020",
    to: "2020",
  },
  {
    id: uuidv4(),
    tag: ["AWS", "Cloud Day"],
    title: "AWS Dev Booth",
    label: "Speaker & Presenter",
    from: "2024",
    to: "2024",
  },
];

export default function HomeAchievements() {
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
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-500/10 to-orange-500/10 blur-3xl rounded-full" />

        <div className="relative space-y-8">
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20">
                <Award className="w-6 h-6 text-amber-400" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white/95 tracking-tight">
                  Achievements & Certifications
                </h2>
                <p className="text-sm text-white/50 mt-1">Recognition and credentials</p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Link
                href="/me#achievements"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/20 hover:border-amber-400/30 text-amber-300 hover:text-amber-200 text-sm font-medium transition-all duration-300"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={itemVariants}>
            <MiniCarousel items={items} />
          </motion.div>
        </div>

        {/* Decorative shine effect */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </motion.section>
  );
}
