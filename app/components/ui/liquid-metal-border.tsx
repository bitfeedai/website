"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { LiquidMetal } from "@paper-design/shaders-react"
import { cn } from "@/lib/utils"

interface LiquidMetalBorderProps {
  children: React.ReactNode
  className?: string
  borderRadius?: number
  borderWidth?: number
  colorBack?: string
  colorTint?: string
  repetition?: number
  softness?: number
  shiftRed?: number
  shiftBlue?: number
  distortion?: number
  contour?: number
  angle?: number
  speed?: number
  scale?: number
  opacity?: number
}

export function LiquidMetalBorder({
  children,
  className,
  borderRadius = 9999,
  borderWidth = 2,
  colorBack,
  colorTint,
  repetition = 7,
  softness = 0.05,
  shiftRed = 0.3,
  shiftBlue = 0.6,
  distortion = 0.1,
  contour = 0.4,
  angle = 90,
  speed = 1.2,
  scale = 3,
  opacity = 1,
}: LiquidMetalBorderProps) {
  // Use cyan and magenta for high contrast liquid effect
  const defaultColorBack = colorBack ?? "#06b6d4" // cyan-500
  const defaultColorTint = colorTint ?? "#ec4899" // pink-500 (magenta)

  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        rootMargin: "100px",
        threshold: 0,
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{
        borderRadius,
        padding: borderWidth,
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden" style={{ borderRadius, opacity }}>
        {isVisible ? (
          <LiquidMetal
            style={{ width: "100%", height: "100%" }}
            colorBack={defaultColorBack}
            colorTint={defaultColorTint}
            shape="none"
            repetition={repetition}
            softness={softness}
            shiftRed={shiftRed}
            shiftBlue={shiftBlue}
            distortion={distortion}
            contour={contour}
            angle={angle}
            speed={speed}
            scale={scale}
            fit="cover"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(135deg, #06b6d4 0%, #ec4899 50%, #06b6d4 100%)",
            }}
          />
        )}
      </div>

      <div
        className="relative z-10"
        style={{
          borderRadius: borderRadius - borderWidth,
        }}
      >
        {children}
      </div>
    </div>
  )
}

