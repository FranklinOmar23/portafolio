
import type React from "react"
import { useIntersectionObserver } from "../hooks/use-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"
  delay?: number
  duration?: number
  className?: string
}

export function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px",
  })

  const animationClasses = {
    "fade-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
    "fade-down": isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10",
    "fade-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
    "fade-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
    "zoom-in": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
    "zoom-out": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105",
  }

  return (
    <div
      ref={ref}
      className={`transition-all ${animationClasses[animation]} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
