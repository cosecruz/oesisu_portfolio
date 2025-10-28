"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RoleComments from "@/app/lib/RoleComment";

const roleVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

export default function RoleCommentshowcase() {
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

  const currentComment = RoleComments[index].comment;

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
          setIndex((prev) => (prev + 1) % RoleComments.length);
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
    setIndex((prev) => (prev + 1) % RoleComments.length);
  }, [clearTimers]);

  const handlePrev = useCallback(() => {
    clearTimers();
    setExtraHold(PAUSE_AFTER_MANUAL);
    setIsTyping(true);
    setIsDeleting(false);
    setDisplayedText("");
    setIndex((prev) => (prev - 1 + RoleComments.length) % RoleComments.length);
  }, [clearTimers]);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-5 relative min-h-[160px] sm:min-h-[180px]">
      {/* Role header */}
      <div className="flex items-center justify-center mb-2 gap-3">
        <button
          onClick={handlePrev}
          aria-label="Previous role"
          className="p-1 rounded-full hover:bg-violet-500/20 transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-400" />
        </button>

        <div className="relative overflow-hidden h-8 sm:h-10 min-w-[180px] text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={RoleComments[index].role}
              variants={roleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base sm:text-xl font-semibold text-violet-400"
            >
              {RoleComments[index].role}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next role"
          className="p-1 rounded-full hover:bg-violet-500/20 transition"
        >
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
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

      {/* Progress dots */}
      <div className="flex gap-1 mt-3 justify-center">
        {RoleComments.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-violet-400 scale-110" : "bg-gray-500/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
