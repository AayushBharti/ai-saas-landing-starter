"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "@/constants";
import { cn } from "@/lib/utils";

const loadingTexts = [
  "AI is generating...",
  "Thinking deeply...",
  "Almost ready...",
  "Just a moment...",
];

const Generating = ({ className }: { className?: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "flex h-14 items-center rounded-[1.7rem] bg-n-8/80 px-6 text-base shadow-lg backdrop-blur-md",
        className
      )}
    >
      {/* Spinner */}
      <Image
        alt="loading"
        className="mr-4 size-5 animate-spin"
        height={20}
        src={images.loading}
        width={20}
      />

      {/* Animated text */}
      <div className="flex w-48 items-center">
        <AnimatePresence mode="wait">
          <motion.span
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            className="inline-block"
            exit={{ opacity: 0, filter: "blur(6px)", y: -10 }}
            initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
            key={index}
            transition={{ duration: 0.5 }}
          >
            {loadingTexts[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Generating;
