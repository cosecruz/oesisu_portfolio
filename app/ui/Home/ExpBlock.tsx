"use client";
import React, { useEffect, useState } from "react";

const EXP_COLOR_CYCLE = ["#f3a20c", "#9af30c", "#0cf3aa", "#2e0cf3", "#f30c9e"];

type ExpDataType = {
  label: string;
  amount: number;
};

const expData: ExpDataType[] = [
  { label: "Years of Experience", amount: 4 },
  { label: "Projects Completed", amount: 15 },
  { label: "Clients", amount: 10 },
  { label: "Students Mentored", amount: 3 },
  { label: "Certifications", amount: 1 },
];

export default function ExpBlock() {
  const [counts, setCounts] = useState(expData.map(() => 0));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // ✅ Defer setMounted to the next tick to avoid "cascading renders"
    const mountTimer = setTimeout(() => setMounted(true), 0);

    const duration = 2000; // total animation time (ms)
    const steps = 40;
    const interval = duration / steps;

    const counterTimer = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          const target = expData[i].amount;
          const increment = Math.ceil(target / steps);
          const next = val + increment;
          return next >= target ? target : next;
        })
      );
    }, interval);

    // Stop counting after full duration
    const stopTimer = setTimeout(() => clearInterval(counterTimer), duration);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(stopTimer);
      clearInterval(counterTimer);
    };
  }, []);

  return (
    <div
      className="flex flex-wrap w-full justify-around items-center gap-6
                 border border-blue-400 rounded-2xl p-6
                 text-theme-primary bg-theme-secondary/30
                 backdrop-blur-md shadow-md transition-all duration-500"
    >
      {expData.map((exp, i) => (
        <div
          key={exp.label}
          className={`flex flex-col justify-center items-center text-center w-40
                      transform transition-all duration-700 ease-out
                      ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        >
          <p
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight"
            style={{ color: EXP_COLOR_CYCLE[i % EXP_COLOR_CYCLE.length] }}
            aria-label={`${exp.amount} ${exp.label}`}
          >
            {["projects completed", "clients"].includes(exp.label.toLowerCase()) && "~"}
            {counts[i]}+
          </p>
          <p className="text-xs sm:text-sm mt-2 text-theme-primary/80 font-light italic">
            {exp.label}
          </p>
        </div>
      ))}
    </div>
  );
}
