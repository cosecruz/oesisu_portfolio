"use client";

import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icon as IconifyIcon } from "@iconify/react";

export interface ShowcaseItem {
  name: string;
  logo?: string;
  icon?: string | ReactNode;
}

export interface ShowcaseLayer {
  title?: string;
  items: ShowcaseItem[];
  direction?: "left" | "right";
  speed?: number;
}

interface AutoScrollShowcaseProps {
  layers: ShowcaseLayer[];
  pauseOnHover?: boolean;
  variant?: "default" | "sponsor";
  className?: string;
}

/**
 * Enhanced AutoScrollShowcase with Apple-like polish
 * Supports Iconify icons, Lucide icons, and images
 */
const AutoScrollShowcase: React.FC<AutoScrollShowcaseProps> = React.memo(
  ({ layers, pauseOnHover = true, variant = "default", className = "" }) => {
    const [isPaused, setIsPaused] = useState(false);

    return (
      <section
        className={`relative w-full
          py-6 sm:py-8
          flex flex-col items-center justify-center
          gap-8 sm:gap-10
          overflow-hidden
          ${className}
        `}
      >
        {layers.map((layer, layerIdx) => {
          const direction = layer.direction ?? (layerIdx % 2 === 0 ? "left" : "right");
          const speed = layer.speed ?? (variant === "sponsor" ? 60 : 45);
          const isReversed = direction === "right";

          // Triple items for seamless infinite scroll
          const duplicatedItems = [
            ...layer.items,
            ...layer.items,
            ...layer.items,
          ];

          return (
            <div
              key={layer.title || `layer-${layerIdx}`}
              className="w-full select-none"
              onMouseEnter={() => pauseOnHover && setIsPaused(true)}
              onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            >
              {layer.title && (
                <h3 className="text-center text-white/75 font-semibold mb-4 sm:mb-6 text-base sm:text-lg tracking-wide">
                  {layer.title}
                </h3>
              )}

              <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                  }}
                />

                <motion.div
                  className="flex items-center gap-4 sm:gap-6"
                  animate={{
                    x: isPaused ? 0 : isReversed ? ["0%", "-33.333%"] : ["0%", "-33.333%"],
                  }}
                  transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{ willChange: "transform" }}
                >
                  {duplicatedItems.map((item, idx) => (
                    <motion.div
                      key={`${layerIdx}-${item.name}-${idx}`}
                      whileHover={{ scale: 1.08, y: -4 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`group flex flex-col items-center justify-center shrink-0
                        rounded-2xl border border-white/10
                        bg-white/[0.03] backdrop-blur-md
                        hover:bg-white/[0.08] hover:border-white/20
                        shadow-lg hover:shadow-xl
                        transition-all duration-300
                        ${
                          variant === "sponsor"
                            ? "w-32 sm:w-36 md:w-40 p-4 sm:p-5"
                            : "w-24 sm:w-28 md:w-32 p-3 sm:p-4"
                        }`}
                    >
                      <div
                        className={`relative mb-3
                          ${
                            variant === "sponsor"
                              ? "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                              : "w-10 h-10 sm:w-12 sm:h-12"
                          }`}
                      >
                        {typeof item.icon === "string" ? (
                          // Iconify icon
                          <IconifyIcon
                            icon={item.icon}
                            width="100%"
                            height="100%"
                            className="text-white/90 group-hover:text-white transition-colors duration-300"
                          />
                        ) : item.icon ? (
                          // Lucide or custom ReactNode
                          <div className="w-full h-full flex items-center justify-center text-white/90 group-hover:text-white transition-colors duration-300">
                            {item.icon}
                          </div>
                        ) : item.logo ? (
                          // Fallback: Image
                          <Image
                            src={item.logo}
                            alt={item.name}
                            fill
                            className="object-contain p-1 filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                          />
                        ) : null}
                      </div>

                      <span
                        className="text-white/80 group-hover:text-white/95 font-medium text-center leading-tight truncate
                        text-xs sm:text-sm max-w-full px-1 transition-colors duration-300"
                      >
                        {item.name}
                      </span>

                      {/* Subtle glow on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-300 pointer-events-none" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
);

AutoScrollShowcase.displayName = "AutoScrollShowcase";
export default AutoScrollShowcase;
