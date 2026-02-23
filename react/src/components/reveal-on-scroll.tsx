
import type React from "react"
import { useIntersectionObserver } from "../hooks/use-intersection-observer"

interface RevealOnScrollProps {
  children: React.ReactNode
  direction?: "left" | "right" | "top" | "bottom"
  delay?: number
  className?: string
}

export function RevealOnScroll({ children, direction = "left", delay = 0, className = "" }: RevealOnScrollProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.2,
  })

  const directionClasses = {
    left: isVisible ? "translate-x-0" : "-translate-x-full",
    right: isVisible ? "translate-x-0" : "translate-x-full",
    top: isVisible ? "translate-y-0" : "-translate-y-full",
    bottom: isVisible ? "translate-y-0" : "translate-y-full",
  }

  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className={`transition-transform duration-1000 ease-out ${directionClasses[direction]} ${className}`}
        style={{
          transitionDelay: `${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
