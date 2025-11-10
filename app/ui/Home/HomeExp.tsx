"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import MiniCarousel from "../MiniCarousel";
import { HomeData } from "@/app/lib/home.data";


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



export default function HomeExp() {
  const {exp} = HomeData
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6"
    >
      <div className="relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-linear-to-br from-white/3 to-white/1 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-violet-500/10 to-blue-500/10 blur-3xl rounded-full" />

        <div className="relative space-y-8">
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-violet-400/10 border border-violet-400/20">
                <Briefcase className="w-6 h-6 text-violet-400" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white/95 tracking-tight">
                  Experience
                </h2>
                <p className="text-sm text-white/50 mt-1">My professional journey</p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Link
                href="/me#experience"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-400/10 hover:bg-violet-400/20 border border-violet-400/20 hover:border-violet-400/30 text-violet-300 hover:text-violet-200 text-sm font-medium transition-all duration-300"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={itemVariants}>
            <MiniCarousel items={exp} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
