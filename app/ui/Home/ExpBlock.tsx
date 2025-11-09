"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface ExpDataType {
  label: string;
  amount: number;
  prefix?: string;
  suffix?: string;
}

const EXP_COLOR_CYCLE = [
  { main: "#f59e0b", glow: "rgba(245, 158, 11, 0.3)" }, // amber
  { main: "#10b981", glow: "rgba(16, 185, 129, 0.3)" }, // emerald
  { main: "#06b6d4", glow: "rgba(6, 182, 212, 0.3)" },  // cyan
  { main: "#8b5cf6", glow: "rgba(139, 92, 246, 0.3)" }, // violet
  { main: "#ec4899", glow: "rgba(236, 72, 153, 0.3)" }, // pink
];

const expData: ExpDataType[] = [
  { label: "Years of Experience", amount: 4, suffix: "+" },
  { label: "Projects Completed", amount: 15, prefix: "~", suffix: "+" },
  { label: "Clients Served", amount: 10, prefix: "~", suffix: "+" },
  { label: "Students Mentored", amount: 3, suffix: "+" },
  { label: "Certifications", amount: 5, suffix: "+" },
];

export default function ExpBlock() {
  const [counts, setCounts] = useState(expData.map(() => 0));
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500; // Animation duration
    const steps = 60; // Number of frames
    const interval = duration / steps;

    const counterTimer = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          const target = expData[i].amount;
          const increment = Math.max(1, Math.ceil(target / steps));
          const next = val + increment;
          return next >= target ? target : next;
        })
      );
    }, interval);

    const stopTimer = setTimeout(() => {
      clearInterval(counterTimer);
      // Ensure final values are exact
      setCounts(expData.map((exp) => exp.amount));
    }, duration + 100);

    return () => {
      clearTimeout(stopTimer);
      clearInterval(counterTimer);
    };
  }, [isInView]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-6xl mx-auto px-4 sm:px-6"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5 rounded-3xl blur-3xl" />

      <div
        className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8
                   p-8 sm:p-10 lg:p-12
                   rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl
                   shadow-2xl"
      >
        {expData.map((exp, i) => {
          const colorScheme = EXP_COLOR_CYCLE[i % EXP_COLOR_CYCLE.length];

          return (
            <motion.div
              key={exp.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col justify-center items-center text-center group cursor-default"
            >
              {/* Number with glow effect */}
              <div className="relative mb-3">
                {/* Glow layer */}
                <div
                  className="absolute inset-0 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ background: colorScheme.glow }}
                />

                {/* Number */}
                <p
                  className="relative font-extrabold tracking-tight leading-none
                             text-5xl sm:text-6xl lg:text-7xl
                             transition-all duration-300 group-hover:scale-110"
                  style={{
                    color: colorScheme.main,
                    textShadow: `0 0 20px ${colorScheme.glow}`,
                  }}
                  aria-label={`${exp.amount} ${exp.label}`}
                >
                  {exp.prefix}
                  {counts[i]}
                  {exp.suffix}
                </p>
              </div>

              {/* Label */}
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-[140px] group-hover:text-white/90 transition-colors">
                {exp.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-violet-400/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-400/20 rounded-br-3xl" />
    </motion.section>
  );
}
