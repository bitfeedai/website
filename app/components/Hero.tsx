"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/Button"
import { WaitlistDialog } from "./WaitlistDialog"
import AlphaCountdown from "./AlphaCountdown"
import dynamic from "next/dynamic"
import { useState, useEffect, Component, ReactNode } from "react"
import Image from "next/image"

// Error boundary for 3D canvas
class ErrorBoundary extends Component<{ children: ReactNode; onError: () => void }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; onError: () => void }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    this.props.onError()
  }

  render() {
    if (this.state.hasError) {
      return null
    }
    return this.props.children
  }
}

// Dynamically import the entire 3D canvas component with SSR disabled
const Hero3DCanvas = dynamic(() => import("./Hero3DCanvas"), { 
  ssr: false,
  loading: () => null, // Don't show loading state, just render nothing until loaded
})

// Rotating logo animation component
function RotatingLogoStrikethrough() {
  const logos = [
    { name: "n8n", src: "/projects/n8n-logo.png", alt: "n8n" },
    { name: "Zapier", src: "/projects/zapier-logo.png", alt: "Zapier" },
    { name: "Make", src: "/projects/make-logo.png", alt: "Make" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }, 1000) // Rotate every 1000ms

    return () => clearInterval(interval)
  }, [isPaused, logos.length])

  const currentLogo = logos[currentIndex]

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-12 sm:h-14 lg:h-16 w-auto flex items-center justify-center px-3 sm:px-4 lg:px-5">
        {/* Persistent Strikethrough Line - outside AnimatePresence */}
        <div 
          className="absolute top-1/2 left-0 right-0 pointer-events-none z-10 flex items-center justify-center"
          style={{ 
            transform: "translateY(-50%) rotate(8deg)",
            transformOrigin: "center center"
          }}
        >
          {/*
          <Image
            src="/projects/logo-cross.png"
            alt="Strikethrough"
            width={400}
            height={20}
            className="w-3/5 h-auto object-contain"
            priority
          />
          */}
        </div>

        {/* Logo Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ duration: 0.15 }}
            className="relative z-0"
          >
            {/* Logo Image */}
            <div className="relative h-12 sm:h-14 lg:h-16 w-auto flex items-center justify-center">
              <Image
                src={currentLogo.src}
                alt={currentLogo.alt}
                width={140}
                height={56}
                className="h-full w-auto object-contain opacity-70"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* 3D Grid and Animated Cubes Background */}
      {isMounted && !hasError && (
        <div className="absolute inset-0 z-0">
          <ErrorBoundary onError={() => setHasError(true)}>
            <Hero3DCanvas />
          </ErrorBoundary>
        </div>
      )}

      {/* Background gradient overlay - reduced opacity to show 3D scene */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/30 to-zinc-900/40 pointer-events-none z-[1]" />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-zinc-800/15 rounded-full blur-3xl pointer-events-none z-[1]" />
      
      {/* Focused glow around content area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-zinc-950/30 rounded-full blur-3xl pointer-events-none z-[1]" />

      {/* Opaque transparent layer behind content to prevent background interference */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] sm:w-[1600px] lg:w-[1800px] h-[700px] sm:h-[800px] lg:h-[900px] pointer-events-none z-[9]"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at center, rgba(24, 24, 27, 0.4) 0%, rgba(24, 24, 27, 0.35) 15%, rgba(24, 24, 27, 0.25) 30%, rgba(24, 24, 27, 0.15) 45%, rgba(24, 24, 27, 0.08) 60%, rgba(24, 24, 27, 0.04) 75%, rgba(24, 24, 27, 0.01) 90%, transparent 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          maskImage: 'radial-gradient(ellipse 70% 50% at center, black 0%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at center, black 0%, black 30%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Alpha Launch Countdown */}
        <div className="mb-8">
          <AlphaCountdown targetDate={new Date("2026-01-19T00:00:00")} />
        </div>

        {/* Headline with rotating strikethrough logo animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0">
            <span className="text-gradient-mixed">Join Bitfeed,</span>
          </h1>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0">
            <span className="text-gradient-mixed">the</span>
            <div className="flex-shrink-0 flex items-center justify-center -mx-1.5 sm:-mx-2 lg:-mx-2.5">
              <RotatingLogoStrikethrough />
            </div>
            <span className="text-gradient-mixed">for composable widgets</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden sm:block text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Generate, share, and monetize widgets. Plug & link widgets inside of boards to form entire interactive & automated experiences,<br/> all without code. <strong>Powered by AI.</strong>
          {/* Build widgets. Plug widgets into boards and connect them to form entire dashboards, automations, interactive experiences, feeds or even APIs,<br/>
          all without code */}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <WaitlistDialog
            formType="notified"
            trigger={
              <Button
                variant="outline"
                className="rounded-md px-8 h-12 text-base font-medium border-2 border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 bg-transparent"
              >
                Get Notified
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            }
          />
          <WaitlistDialog
            formType="earlyAccess"
            trigger={
              <Button
                className="rounded-md px-8 h-12 text-base font-medium bg-transparent hover:bg-[rgb(5,2,6)] text-zinc-300 hover:text-white font-normal"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            }
          />
        </motion.div>
      </div>
    </section>
  )
}