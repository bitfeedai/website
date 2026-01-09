"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/Button"
import { WaitlistDialog } from "./WaitlistDialog"
import dynamic from "next/dynamic"
import { useState, useEffect, Component, ReactNode } from "react"

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

const textRevealVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
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

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-glow" />
          <span className="text-sm text-zinc-400">Now in Pre-Alpha</span>
        </motion.div>

        {/* Headline with text mask animation */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        >
          <span className="block overflow-hidden">
            <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={0}>
              <span className="text-gradient-mixed">Smarter Feeds</span>
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span
              className="block text-zinc-500"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <span className="text-gradient-mixed">Daily</span>
            </motion.span>
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The AI-powered hub to Discover, Build and Share Bits and Feeds
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