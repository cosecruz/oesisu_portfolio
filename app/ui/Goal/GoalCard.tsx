import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Goal } from "@/app/lib/types/goals";

interface GoalCardProps {
  goal: Goal;
  index: number;
}

const colorClasses = {
  blue: "bg-blue-400/10 border-blue-400/20 text-blue-400",
  purple: "bg-purple-400/10 border-purple-400/20 text-purple-400",
  green: "bg-green-400/10 border-green-400/20 text-green-400",
  amber: "bg-amber-400/10 border-amber-400/20 text-amber-400",
  violet: "bg-violet-400/10 border-violet-400/20 text-violet-400",
  cyan: "bg-cyan-400/10 border-cyan-400/20 text-cyan-400",
} as const;

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

export default function GoalCard({ goal, index }: GoalCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="group h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${goal.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <CardContent className="relative p-8 space-y-6">
          {/* Icon & Timeframe */}
          <div className="flex items-start justify-between">
            <div className={`p-4 rounded-2xl ${colorClasses[goal.color]} border transition-all duration-300 group-hover:scale-110`}>
              <goal.icon className="w-8 h-8" strokeWidth={2} />
            </div>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60">
              {goal.timeframe}
            </span>
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-2xl font-bold text-white/95 group-hover:text-white transition-colors mb-3">
              {goal.title}
            </h3>
            <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
              {goal.description}
            </p>
          </div>

          {/* Details */}
          <ul className="space-y-2">
            {goal.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-white/60 group-hover:text-white/70 transition-colors">
                <span className="text-violet-400 mt-1">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {/* Progress bar */}
          <div className="pt-4">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(index + 1) * 15}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className={`h-full bg-gradient-to-r ${goal.glow.replace('/20', '/60')}`}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
