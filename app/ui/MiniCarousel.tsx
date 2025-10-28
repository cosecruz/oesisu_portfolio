"use client";

import React, { useId } from "react";
import Link from "next/link";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CarouselType } from "../lib/definitions";
import { cn } from "@/lib/utils";
import { TagList } from "./TagList";

interface MiniCarouselProps {
  items: CarouselType[];
  className?: string;
}

const MiniCarousel: React.FC<MiniCarouselProps> = React.memo(({ items, className }) => {
  const prefersReducedMotion = useReducedMotion();
  const carouselId = useId();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id={carouselId}
      role="region"
      aria-roledescription="carousel"
      aria-label="Experience showcase"
      className={cn(
        "relative w-full",
        "flex flex-col sm:flex-row",
        "overflow-y-auto sm:overflow-x-auto",
        "snap-y sm:snap-x snap-mandatory",
        "scroll-smooth min-w-0 custom-scrollbar",
        "gap-4 sm:gap-6 py-4 px-2",
        "max-h-[calc(2*15rem+1rem)] sm:max-h-none", // show 2 on small screens
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={prefersReducedMotion ? {} : containerVariants}
    >
      {items.map((item, index) => {
        const itemId = `${carouselId}-item-${index}`;
        const linkHref = `/me#${item.id ?? item.title.toLowerCase().replace(/\s+/g, "-")}`;
        const tags = Array.isArray(item.tag) ? item.tag : item.tag ? [item.tag] : [];

        return (
          <motion.article
            key={`${item.title}-${index}`}
            variants={prefersReducedMotion ? {} : itemVariants}
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    y: -6,
                    scale: 1.04,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }
            }
            whileTap={{ scale: 0.97 }}
            className={cn(
              "shrink-0 snap-center",
              "w-full sm:w-[48%] md:w-[32%] lg:w-[28%] xl:w-[24%]",
              "min-w-0"
            )}
            role="group"
            aria-roledescription="slide"
            aria-labelledby={`${itemId}-title`}
          >
            <Link href={linkHref} scroll>
              <Card
                tabIndex={0}
                className={cn(
                  "relative w-full h-full min-h-[13rem]",
                  "bg-white/5 backdrop-blur-xl border border-white/10",
                  "rounded-2xl overflow-hidden flex flex-col",
                  "shadow-[0_6px_30px_rgba(0,0,0,0.12)]",
                  "transition-transform duration-300",
                  "hover:border-blue-400/40 hover:shadow-blue-500/20",
                  "focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                )}
                onClick={() =>
                  document.getElementById(item.id ?? "")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {/* Gloss overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-25 mix-blend-overlay" />
                </div>

                <CardContent className="relative z-10 flex flex-col justify-between text-center sm:text-left p-4 sm:p-5 h-full">


                  {/* ✅ Tags with subtle glassy fade */}
                  {item.tag?.length > 0 && <TagList tags={item.tag} className="justify-start text-blue-200"  delay={0.25} maxVisible={3} />}




                  {/* Title */}
                  <motion.h3
                    id={`${itemId}-title`}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className={cn(
                      "font-bold leading-tight tracking-tight mb-1.5 line-clamp-2",
                      "bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent",
                      "text-sm sm:text-base lg:text-lg"
                    )}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Label */}
                  {item.label && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-white/75 font-medium text-xs sm:text-sm mb-2 truncate"
                    >
                      {item.label}
                    </motion.span>
                  )}

                  {/* Description */}
                  {item.description && (
                    <motion.p
                      id={`${itemId}-desc`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.35 }}
                      className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4"
                    >
                      {item.description}
                    </motion.p>
                  )}

                  {/* Dates */}
                  {(item.from || item.to) && (
                    <motion.time
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-auto pt-2 text-xs sm:text-sm font-semibold text-blue-400 tracking-wide"
                    >
                      {item.from}
                      {item.to && (
                        <>
                          {" "}
                          <span className="text-white/50">—</span> {item.to}
                        </>
                      )}
                    </motion.time>
                  )}
                </CardContent>
              </Card>
            </Link>
          </motion.article>
        );
      })}
    </motion.div>
  );
});

MiniCarousel.displayName = "MiniCarousel";
export default MiniCarousel;
