"use client"

import { useEffect, useRef } from "react"

export default function AnimatedStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Get device pixel ratio to prevent stretching
    const dpr = window.devicePixelRatio || 1
    
    // Find footer/CallToAction to stop stars before it
    const getFooterOffset = () => {
      // Try to find CallToAction section first
      const callToAction = Array.from(document.querySelectorAll('section')).find(
        (section) => section.textContent?.includes('Ready to Enhance Your Web Experience')
      )
      const footer = document.querySelector('footer')
      
      if (callToAction) {
        const rect = callToAction.getBoundingClientRect()
        return Math.max(0, rect.top + window.scrollY - 50) // 50px buffer
      }
      if (footer) {
        const rect = footer.getBoundingClientRect()
        return Math.max(0, rect.top + window.scrollY - 50) // 50px buffer
      }
      return window.innerHeight * 2
    }
    
    // Set canvas size with proper aspect ratio
    const resizeCanvas = () => {
      const footerOffset = getFooterOffset()
      const width = window.innerWidth
      // Ensure we stop well before the footer/CallToAction
      const maxHeight = Math.max(0, footerOffset - 100) // 100px buffer
      const height = Math.min(maxHeight, window.innerHeight * 3)
      
      // Update container max-height
      const container = document.getElementById('stars-container')
      if (container) {
        container.style.maxHeight = Math.max(height, 100) + 'px'
      }
      
      // Set actual size in memory (scaled for device pixel ratio)
      canvas.width = width * dpr
      canvas.height = Math.max(height * dpr, 100) // Minimum height
      
      // Scale the canvas back down using CSS
      canvas.style.width = width + 'px'
      const canvasHeight = Math.max(height, 100)
      canvas.style.height = canvasHeight + 'px'
      
      // Scale the drawing context so everything draws at the correct size
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    
    // Initial resize - try multiple times to catch DOM updates
    resizeCanvas()
    setTimeout(() => resizeCanvas(), 100)
    setTimeout(() => resizeCanvas(), 500)
    
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("scroll", resizeCanvas)

    // Star class
    class Star {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      color: string
      glow: number

      constructor() {
        const footerOffset = getFooterOffset()
        const maxY = Math.min(footerOffset, window.innerHeight * 2)
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * maxY
        this.radius = Math.random() * 1.5 + 0.5
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        // Random colors: white, light purple, light blue, light pink
        const colors = ["#ffffff", "#d8b4fe", "#a5b4fc", "#f0abfc"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.glow = Math.random() * 0.5 + 0.5
      }

      update() {
        const footerOffset = getFooterOffset()
        const maxY = Math.max(0, Math.min(footerOffset - 50, window.innerHeight * 2)) // 50px buffer before footer
        
        this.x += this.vx
        this.y += this.vy

        // Wrap around edges horizontally
        if (this.x < 0) this.x = window.innerWidth
        if (this.x > window.innerWidth) this.x = 0
        
        // Bounce or wrap vertically, but don't go below footer
        if (this.y < 0) this.y = maxY
        if (this.y > maxY) this.y = 0
      }

      draw() {
        if (!ctx) return
        
        // Glow effect - make it more visible
        const glowRadius = this.radius * 4
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          glowRadius
        )
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(0.3, this.color + "CC")
        gradient.addColorStop(0.6, this.color + "80")
        gradient.addColorStop(1, this.color + "00")

        ctx.beginPath()
        ctx.arc(this.x, this.y, glowRadius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Star center
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create only a few stars (5-8)
    const stars: Star[] = []
    const starCount = Math.floor(Math.random() * 4) + 5 // 5-8 stars
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star())
    }
    
    // Ensure stars are visible by making them slightly brighter
    stars.forEach(star => {
      star.radius = Math.max(star.radius, 1) // Minimum radius of 1
    })

    // Animation loop
    let animationId: number
    const animate = () => {
      const footerOffset = getFooterOffset()
      const maxHeight = Math.max(0, footerOffset - 50) // 50px buffer
      const clearHeight = Math.min(maxHeight, window.innerHeight * 3)
      
      // Clear using CSS pixel dimensions
      ctx.clearRect(0, 0, window.innerWidth, clearHeight)
      
      stars.forEach((star) => {
        star.update()
        // Only draw if star is above the footer
        if (star.y < clearHeight) {
          star.draw()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div 
      className="fixed top-0 left-0 w-full pointer-events-none z-[1] overflow-hidden"
      style={{ 
        height: "100%",
        maxHeight: "calc(100vh - 300px)" // Will be updated dynamically
      }}
      id="stars-container"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}

