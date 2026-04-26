"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";

// Hysteresis gap must exceed the utility bar height (~48px) to prevent
// oscillation from browser scroll-anchoring when the bar collapses.
const COMPACT_AT = 80;
const EXPAND_AT = 20;

export function useCompactScroll(): boolean {
  const { scrollY } = useScroll();
  const [isCompact, setIsCompact] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsCompact((current) => {
      if (!current && latest > COMPACT_AT) return true;
      if (current && latest < EXPAND_AT) return false;
      return current;
    });
  });

  useEffect(() => {
    setIsCompact(window.scrollY > COMPACT_AT);
  }, []);

  return isCompact;
}
