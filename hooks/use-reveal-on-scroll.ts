"use client"

import { useEffect, useRef } from "react"

export function useRevealOnScroll<T extends HTMLElement = HTMLElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Start hidden
    element.style.opacity = "0"
    element.style.transform = "translateY(32px)"
    element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute(
              "style",
              "opacity: 1; transform: translateY(0); transition: opacity 0.8s ease-out, transform 0.8s ease-out;"
            )
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return ref
}
