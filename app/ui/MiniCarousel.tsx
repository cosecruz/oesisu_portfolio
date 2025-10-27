"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselType } from "../lib/definitions";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.97,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    transition: {
      duration: 0.18,
      ease: "easeOut",
    },
  },
};

interface MiniCarouselProps {
  items: CarouselType[];
}

const MiniCarousel: React.FC<MiniCarouselProps> = ({ items }) => {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

useEffect(() => {
  if (!api) return;

  const onSelect = () => {
    setCurrent(api.selectedScrollSnap());
  };

  api.on("select", onSelect);

  // ✅ Proper cleanup function (returns void)
  return () => {
    api.off("select", onSelect);
  };
}, [api]);

  const handleMouseEnter = () => autoplay.current.stop();
  const handleMouseLeave = () => autoplay.current.play();

  return (
    <div
      className="relative w-full max-w-full overflow-hidden mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project carousel"
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[autoplay.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="
                 basis-full
                  sm:basis-3/4
                  md:basis-1/2
                  lg:basis-1/3
                  xl:basis-1/4
                  pl-2 md:pl-4
              "
            >
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                className="h-full"
                tabIndex={0}
                aria-current={index === current ? "true" : undefined}
                aria-label={`${item.title} ${item.tag}`}
              >
                <Card className="w-full h-full bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="flex flex-col items-center justify-center p-3 sm:p-4 text-center h-auto min-h-[140px] sm:min-h-[180px] md:min-h-[200px]">
                    <span className="text-accent text-xs uppercase tracking-wide font-medium">
                      {item.tag}
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mt-2 line-clamp-2">
                      {item.title}
                    </h3>
                    {item.label && (
                      <span className="text-xs text-muted-foreground mt-1">
                        {item.label}
                      </span>
                    )}
                    {(item.from || item.to) && (
                      <span className="text-xs text-muted-foreground mt-1">
                        {item.from} {item.to && ` - ${item.to}`}
                      </span>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="bg-muted/30 hover:bg-muted/50 backdrop-blur-sm text-foreground rounded-full w-8 h-8 md:w-10 md:h-10"
          aria-label="Previous slide"
        />
        <CarouselNext
          className="bg-muted/30 hover:bg-muted/50 backdrop-blur-sm text-foreground rounded-full w-8 h-8 md:w-10 md:h-10"
          aria-label="Next slide"
        />
      </Carousel>

      <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-accent scale-125" : "bg-muted/50 hover:bg-muted"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(MiniCarousel);
