"use client";

import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icon as IconifyIcon } from "@iconify/react";

export interface ShowcaseItem {
  name: string;
  logo?: string;                // image file (fallback)
  icon?: string | ReactNode;    // Iconify = string, Lucide = ReactNode
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
 * 🔥 Fully responsive, type-safe infinite scroll showcase
 * Supports:
 *  - Iconify icons (via icon string)
 *  - Lucide icons (via ReactNode)
 *  - Image fallback (via logo URL)
 */
const AutoScrollShowcase: React.FC<AutoScrollShowcaseProps> = React.memo(
  ({ layers, pauseOnHover = true, variant = "default", className = "" }) => {
    const [isPaused, setIsPaused] = useState(false);

    return (
      <section
        className={`relative w-full max-w-7xl mx-auto
          py-[clamp(2rem,6vw,5rem)]
          px-[clamp(1rem,4vw,3rem)]
          flex flex-col items-center justify-center
          gap-[clamp(2rem,4vw,4.5rem)]
          overflow-hidden
          ${className}
        `}
      >
        {layers.map((layer, layerIdx) => {
          const direction =
            layer.direction ?? (layerIdx % 2 === 0 ? "left" : "right");
          const speed = layer.speed ?? (variant === "sponsor" ? 60 : 45);
          const isReversed = direction === "right";

          // Tripled items for seamless infinite scroll
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
                <h3
                  className="text-center text-white/85 font-semibold mb-[clamp(0.8rem,2vw,1rem)]
                  text-[clamp(0.9rem,2vw,1.2rem)] tracking-wide"
                >
                  {layer.title}
                </h3>
              )}

              <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                  }}
                />

                <motion.div
                  className="flex items-center gap-[clamp(0.8rem,2vw,1.5rem)]"
                  animate={{
                    x: isPaused
                      ? 0
                      : isReversed
                      ? ["0%", "calc(-33.333%)"]
                      : ["0%", "calc(-33.333%)"],
                  }}
                  transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{ willChange: "transform" }}
                >
                  {duplicatedItems.map((item, idx) => (
                    <div
                      key={`${layerIdx}-${item.name}-${idx}`}
                      className={`flex flex-col items-center justify-center shrink-0
                        rounded-xl border border-white/10
                        bg-white/5 backdrop-blur-md
                        transition-transform duration-300 ease-out
                        hover:bg-white/10 hover:scale-[1.05]
                        shadow-[0_2px_12px_rgba(0,0,0,0.08)]
                        ${
                          variant === "sponsor"
                            ? "w-[clamp(80px,15vw,130px)] p-[clamp(0.4rem,1vw,0.7rem)]"
                            : "w-[clamp(70px,13vw,120px)] p-[clamp(0.35rem,1vw,0.6rem)]"
                        }`}
                    >
                      <div
                        className={`relative mb-2
                          ${
                            variant === "sponsor"
                              ? "w-[clamp(36px,6vw,60px)] h-[clamp(36px,6vw,60px)]"
                              : "w-[clamp(32px,5vw,52px)] h-[clamp(32px,5vw,52px)]"
                          }`}
                      >
                        {typeof item.icon === "string" ? (
                          // Iconify icon (string key)
                          <IconifyIcon
                            icon={item.icon}
                            width="100%"
                            height="100%"
                            className="text-white/90"
                          />
                        ) : item.icon ? (
                          // Lucide or custom ReactNode
                          <div className="w-full h-full flex items-center justify-center text-white/90">
                            {item.icon}
                          </div>
                        ) : item.logo ? (
                          // Fallback: Image
                          <Image
                            src={item.logo}
                            alt={item.name}
                            fill
                            className="object-contain p-1"
                          />
                        ) : null}
                      </div>

                      <span
                        className="text-white/85 font-medium text-center leading-tight truncate
                        text-[clamp(0.65rem,1.5vw,0.85rem)] max-w-[8rem]"
                      >
                        {item.name}
                      </span>
                    </div>
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
