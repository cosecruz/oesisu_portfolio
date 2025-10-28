"use client";

import React, { useEffect, useState } from "react";

interface ExpDataType {
  label: string;
  amount: number;
}

const EXP_COLOR_CYCLE = ["#f3a20c", "#9af30c", "#0cf3aa", "#2e0cf3", "#f30c9e"];

const expData: ExpDataType[] = [
  { label: "Years of Experience", amount: 4 },
  { label: "Projects Completed", amount: 15 },
  { label: "Clients", amount: 10 },
  { label: "Students Mentored", amount: 3 },
  { label: "Certifications", amount: 5 },
];

export default function ExpBlock() {
  const [counts, setCounts] = useState(expData.map(() => 0));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Smooth delayed mount
    const mountTimer = setTimeout(() => setMounted(true), 150);

    const duration = 4000; // total animation duration
    const steps = 80; // number of frames
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

    const stopTimer = setTimeout(() => clearInterval(counterTimer), duration + 500);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(stopTimer);
      clearInterval(counterTimer);
    };
  }, []);

  return (
    <section
      className="
        relative w-full max-w-5xl mx-auto
        py-[clamp(1.5rem,4vw,3rem)]
        px-[clamp(1rem,3vw,2rem)]
        flex flex-wrap justify-center items-center gap-[clamp(1rem,3vw,2.5rem)]
        rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
        shadow-[0_4px_40px_rgba(0,0,0,0.15)]
        transition-all duration-700
      "
    >
      {expData.map((exp, i) => (
        <div
          key={exp.label}
          className={`
            flex flex-col justify-center items-center text-center
            transform-gpu transition-all duration-700 ease-out
            ${
              mounted
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-95"
            }
          `}
        >
          <p
            className="font-extrabold tracking-tight text-[clamp(1.8rem,4vw,2.8rem)] leading-none"
            style={{
              color: EXP_COLOR_CYCLE[i % EXP_COLOR_CYCLE.length],
              textShadow: "0 0 12px rgba(255,255,255,0.15)",
            }}
            aria-label={`${exp.amount} ${exp.label}`}
          >
            {["projects completed", "clients"].includes(exp.label.toLowerCase()) && "~"}
            {counts[i]}+
          </p>

          <p className="text-[clamp(0.7rem,1.2vw,0.95rem)] mt-2 text-white/80 font-light italic">
            {exp.label}
          </p>
        </div>
      ))}
    </section>
  );
}
