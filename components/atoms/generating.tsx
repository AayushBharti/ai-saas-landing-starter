"use client"

import { images } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const loadingTexts = [
  "AI is generating...",
  "Thinking deeply...",
  "Almost ready...",
  "Just a moment...",
]

const Generating = ({ className }: { className?: string }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % loadingTexts.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={cn(
        "flex h-14 items-center rounded-[1.7rem] bg-n-8/80 px-6 text-base backdrop-blur-md shadow-lg",
        className,
      )}
    >
      {/* Spinner */}
      <Image
        src={images.loading}
        className="mr-4 size-5 animate-spin"
        alt="loading"
        width={20}
        height={20}
      />

      {/* Animated text */}
      <div className="flex w-48 items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(6px)", y: -10 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {loadingTexts[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Generating
