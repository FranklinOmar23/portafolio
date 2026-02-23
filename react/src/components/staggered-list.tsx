
import type React from "react"

import { useIntersectionObserver } from "../hooks/use-intersection-observer"

interface StaggeredListProps {
  children: React.ReactNode[]
  staggerDelay?: number
  animation?: "fade-up" | "fade-left" | "fade-right" | "zoom-in"
  className?: string
}

export function StaggeredList({
  children,
  staggerDelay = 0.1,
  animation = "fade-up",
  className = "",
}: StaggeredListProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.05,
  })

  const animationClasses = {
    "fade-up": "translate-y-10",
    "fade-left": "translate-x-10",
    "fade-right": "-translate-x-10",
    "zoom-in": "scale-95",
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : `opacity-0 ${animationClasses[animation]}`
          }`}
          style={{
            transitionDelay: isVisible ? `${index * staggerDelay}s` : "0s",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
