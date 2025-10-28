"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TagListProps {
  tags: string[];
  className?: string;
  delay?: number;
  maxVisible?: number;
}

export const TagList: React.FC<TagListProps> = React.memo(
  ({ tags = [], className, delay = 0.1, maxVisible }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = React.useState(tags.length);
    const [popoverOpen, setPopoverOpen] = React.useState(false);

    React.useEffect(() => {
      if (maxVisible) {
        setVisibleCount(maxVisible);
        return;
      }

      const detectOverflow = () => {
        const container = containerRef.current;
        if (!container) return;
        const children = Array.from(container.children) as HTMLElement[];

        let totalWidth = 0;
        let count = 0;
        for (const child of children) {
          totalWidth += child.offsetWidth + 8;
          if (totalWidth < container.offsetWidth) count++;
          else break;
        }
        setVisibleCount(Math.max(count - 1, 1));
      };

      detectOverflow();
      window.addEventListener("resize", detectOverflow, { passive: true });
      return () => window.removeEventListener("resize", detectOverflow);
    }, [tags, maxVisible]);

    if (!tags.length) return null;
    const hiddenCount = tags.length - visibleCount;

    return (
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        viewport={{ once: true }}
        className={cn(
          "relative flex flex-wrap justify-center sm:justify-start gap-1.5 mb-3 overflow-hidden",
          className
        )}
      >
        {tags.slice(0, visibleCount).map((t, i) => (
          <span
            key={`tag-${i}`}
            className="
              px-2.5 py-1 rounded-full
              text-[0.65rem] sm:text-xs font-medium
              text-white/85 bg-white/6 border border-white/10
              hover:bg-white/10 active:bg-white/15
              backdrop-blur-sm
              transition-all duration-200
              select-none whitespace-nowrap
            "
          >
            {t}
          </span>
        ))}

        {hiddenCount > 0 && (
          <button
            onClick={() => setPopoverOpen((p) => !p)}
            onMouseLeave={() => setPopoverOpen(false)}
            className="
              px-2.5 py-1 rounded-full
              text-[0.65rem] sm:text-xs font-medium
              text-white/70 hover:text-white
              bg-white/5 hover:bg-white/10
              border border-white/10
              backdrop-blur-sm
              transition-all duration-200
              relative
            "
          >
            +{hiddenCount} more
            <AnimatePresence>
              {popoverOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -4 }}
                  transition={{ duration: 0.18 }}
                  className="
                    absolute left-1/2 top-full mt-2 -translate-x-1/2
                    bg-[var(--color-bg-card,#0b0b0c)]/95
                    backdrop-blur-xl rounded-xl border border-white/10
                    shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                    p-3 z-50 flex flex-wrap gap-1.5
                    min-w-[160px] max-w-[240px]
                    justify-center sm:justify-start
                  "
                >
                  {tags.slice(visibleCount).map((t, i) => (
                    <span
                      key={`hidden-${i}`}
                      className="
                        px-2.5 py-1 rounded-full
                        text-[0.65rem] sm:text-xs font-medium
                        text-white/85 bg-white/8 border border-white/10
                        hover:bg-white/15
                        transition-all duration-200
                        whitespace-nowrap
                      "
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        )}
      </motion.div>
    );
  }
);

TagList.displayName = "TagList";
