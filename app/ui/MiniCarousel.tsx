"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { CarouselType } from "../lib/definitions";

interface MiniCarouselProps {
  items: CarouselType[];
}

/**
 * Smart responsive carousel with animated cards.
 * - Vertical (2 visible) on mobile
 * - Horizontal (2–5 visible) on larger screens
 * - Subtle scale + shadow on hover
 * - Staggered fade-in on scroll
 */
const MiniCarousel: React.FC<MiniCarouselProps> = ({ items }) => {
  return (
    <motion.div
      className="
        relative w-full max-w-full
        flex flex-col sm:flex-row
        overflow-y-auto sm:overflow-x-auto
        snap-y sm:snap-x snap-mandatory
        gap-4 sm:gap-6
        py-4 px-2
        items-center justify-center
        min-w-0
        /* mobile: height set so exactly 2 cards show (2 x card height + gaps) */
        h-[calc(2*11.5rem+1rem)] sm:h-auto
      "
      role="region"
      aria-roledescription="carousel"
      aria-label="Experience carousel"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1, duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.97 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{
            y: -8,
            scale: 1.04,
            boxShadow: "0 18px 48px rgba(0,0,0,0.16)",
            transition: { type: "spring", stiffness: 240, damping: 20 },
          }}
          className="
            shrink-0 snap-center
            w-full sm:w-[48%] md:w-[32%] lg:w-[24%] xl:w-[20%]
            flex justify-center
          "
        >
          <motion.div
             whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow: "0 18px 48px rgba(0,0,0,0.16)",
              transition: { type: "spring", stiffness: 240, damping: 20 },
            }}
            className="w-full max-w-full flex justify-center"
          >
            <Card
            className="
             relative w-full bg-indigo-800/6 backdrop-blur-xl
                border-2 border-white/10
                shadow-[0_8px_30px_rgba(9,10,11,0.18)]
                transition-transform duration-200 ease-out
                rounded-2xl overflow-hidden
                flex
                text-[clamp(0.72rem,1.1vw,0.95rem)]
            "
          >

             {/* subtle top gloss */}
              {/* <div className="pointer-events-none absolute inset-0 rounded-2xl">
                <div className="absolute inset-0 bg-linear-to-t from-white/6 via-transparent to-white/2 opacity-30 mix-blend-screen" />
              </div> */}
            <CardContent
              className="
                relative z-10
                  flex flex-col
                  p-auto
                  w-full h-auto
                  aspect-4/3 sm:aspect-3/2 md:aspect-5/3
                   "
            >
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="
                  text-accent uppercase tracking-wide font-medium
                  text-[clamp(0.6rem,1.2vw,0.8rem)]
                "
              >
                {item.tag}
              </motion.span>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 }}
                className="
                  font-semibold bg-linear-to-t from-violet-400 to-blue-500
    bg-clip-text text-transparent mt-2 line-clamp-2
                  text-[clamp(0.8rem,1.6vw,1.1rem)]
                "
              >
                {item.title}
              </motion.h3>

              {item.label && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="
                    text-muted-foreground mt-1
                    text-[clamp(0.7rem,1.4vw,0.9rem)]
                  "
                >
                  {item.label}
                </motion.span>
              )}

              {(item.from || item.to) && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25 }}
                  className="
                    text-accent mt-1
                    text-[clamp(0.65rem,1.3vw,0.85rem)]
                  "
                >
                  {item.from} {item.to && ` - ${item.to}`}
                </motion.span>
              )}
            </CardContent>
          </Card>
          </motion.div>

        </motion.div>
      ))}
    </motion.div>
  );
};

export default React.memo(MiniCarousel);
