"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownProps {
  targetDate: Date
}

export default function AlphaCountdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (!mounted) {
    return null
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="inline-flex flex-col items-center gap-4"
    >
      {/* Badge with sparkle icon */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50">
        <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
        <span className="text-sm text-zinc-300 font-medium">Alpha Launch</span>
        <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-glow" />
      </div>

      {/* Countdown Timer */}
      <div className="flex items-center gap-3 sm:gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-lg blur-xl" />
              
              {/* Time value container */}
              <div className="relative px-4 py-3 sm:px-5 sm:py-4 rounded-lg bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/50 min-w-[60px] sm:min-w-[70px]">
                <motion.span
                  key={`${unit.label}-${unit.value}`}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="block text-2xl sm:text-3xl font-bold text-gradient-mixed tabular-nums"
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.span>
              </div>
            </div>
            
            {/* Label */}
            <span className="mt-2 text-xs sm:text-sm text-zinc-500 uppercase tracking-wider font-medium">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-sm text-zinc-500 text-center max-w-md"
      >
        Request early access and help shape the future of Bitfeed
      </motion.p>
    </motion.div>
  )
}

