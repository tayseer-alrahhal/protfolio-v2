"use client"

import { ComponentPropsWithoutRef, FC, ReactNode, RefObject, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
  scrollTargetRef?: RefObject<HTMLElement>
}

export const TextReveal: FC<TextRevealProps> = ({ children, className, scrollTargetRef }) => {
  const localRef = useRef<HTMLDivElement | null>(null)
  const target = (scrollTargetRef as RefObject<HTMLElement>) ?? localRef
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  })

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div ref={localRef} className={cn("relative z-0", className)}>
      <div className={"mx-auto flex w-full items-center bg-transparent px-4"}>
        <span
          className={
            "flex flex-wrap items-center justify-center p-5 text-[20px] sm:text-[28px] md:text-[32px] text-center font-medium text-(--text-primary) md:p-8 lg:p-10"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 0.1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </span>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-(--text-primary)"}
      >
        {children}
      </motion.span>
    </span>
  )
}
