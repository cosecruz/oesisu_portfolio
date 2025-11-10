"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HomeData } from "@/app/lib/home.data";

const roleVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

export default function RoleCommentshowcase() {
  const {roleComments} = HomeData;

  const [index, setIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [extraHold, setExtraHold] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const TYPING_SPEED = 35;
  const DELETING_SPEED = 20;
  const HOLD_DURATION = 3500;
  const PAUSE_AFTER_MANUAL = 6000;

  const currentComment = roleComments[index].comment;

  const clearTimers = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  // Typing and deleting logic
  useEffect(() => {
    clearTimers();

    let i = 0;
    let text = displayedText; // Start from current displayedText (usually empty on new index)

    const type = () => {
      intervalRef.current = setInterval(() => {
        if (i < currentComment.length) {
          text += currentComment[i];
          setDisplayedText(text);
          i++;
        } else {
          clearInterval(intervalRef.current!);
          setIsTyping(false);
        }
      }, TYPING_SPEED);
    };

    const del = () => {
      intervalRef.current = setInterval(() => {
        if (text.length > 0) {
          text = text.slice(0, -1);
          setDisplayedText(text);
        } else {
          clearInterval(intervalRef.current!);
          setIsDeleting(false);
          setIsTyping(true);
          setIndex((prev) => (prev + 1) % roleComments.length);
        }
      }, DELETING_SPEED);
    };

    if (isTyping) type();
    if (isDeleting) del();

    return clearTimers;
  }, [index, isTyping, isDeleting, currentComment, clearTimers]);

  // Holding phase logic (when not typing or deleting)
  useEffect(() => {
    if (isTyping || isDeleting) return;

    const holdDuration = HOLD_DURATION + extraHold;
    timeoutRef.current = setTimeout(() => {
      setIsDeleting(true);
      setExtraHold(0); // Reset extra hold after use
    }, holdDuration);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isTyping, isDeleting, extraHold]);

  const handleNext = useCallback(() => {
    clearTimers();
    setExtraHold(PAUSE_AFTER_MANUAL);
    setIsTyping(true);
    setIsDeleting(false);
    setDisplayedText("");
    setIndex((prev) => (prev + 1) % roleComments.length);
  }, [clearTimers]);

  const handlePrev = useCallback(() => {
    clearTimers();
    setExtraHold(PAUSE_AFTER_MANUAL);
    setIsTyping(true);
    setIsDeleting(false);
    setDisplayedText("");
    setIndex((prev) => (prev - 1 + roleComments.length) % roleComments.length);
  }, [clearTimers]);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-5 relative min-h-40 sm:min-h-[180px]">
      {/* Role header */}
      <div className="flex items-center justify-center mb-2 gap-3">
       <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-label="Previous role"
          className="p-1.5 rounded-full bg-white/5 hover:bg-violet-500/20 border border-white/10 hover:border-violet-400/30 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 text-white/60 hover:text-violet-400 transition-colors" strokeWidth={2} />
        </motion.button>

        <div className="relative overflow-hidden h-8 sm:h-10 min-w-[180px] text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleComments[index].role}
              variants={roleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base sm:text-xl font-semibold text-violet-400"
            >
              {roleComments[index].role}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-label="Next role"
          className="p-1.5 rounded-full bg-white/5 hover:bg-violet-500/20 border border-white/10 hover:border-violet-400/30 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 text-white/60 hover:text-violet-400 transition-colors" strokeWidth={2} />
        </motion.button>
      </div>

      {/* Comment typing area */}
      <div className="mt-3 text-center md:text-left text-sm sm:text-base italic text-gray-300 max-w-lg leading-relaxed px-2 min-h-[60px]">
        <span>{displayedText}</span>
        <span
          className={`inline-block w-[1ch] ${
            isTyping || isDeleting ? "animate-pulse opacity-70" : "opacity-30"
          }`}
        >
          |
        </span>
      </div>

      {/* Progress dots - ENHANCED UI */}
      <div className="flex gap-1.5 sm:gap-2 mt-3 justify-center">
        {roleComments.map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === index
                ? "w-8 bg-violet-400 shadow-lg shadow-violet-400/50"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => {
              if (i !== index) {
                clearTimers();
                setExtraHold(PAUSE_AFTER_MANUAL);
                setIsTyping(true);
                setIsDeleting(false);
                setDisplayedText("");
                setIndex(i);
              }
            }}
            aria-label={`Go to role ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
