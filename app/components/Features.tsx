"use client"

import React from "react"
import { Wand2, ToyBrick, Share2, Code, Brain, Zap,  } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: Wand2,
    title: "Bits",
    description: "Create powerful widgets using AI, no coding required.",
    url: "/resources/examples"
  },
  {
    icon: ToyBrick,
    title: "Feeds",
    description: "Build dashboards by combining bits. Track, generate and publish content.",
    url: "/resources/examples"
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your bits and feeds publicly or privately with ease.",
  },
  {
    icon: Code,
    title: "API integrations",
    description: "Seamlessly integrate and connect any API. Coming soon.",
  },
  {
    icon: Brain,
    title: "AI-Agent Integrations",
    description: "Seamlessly integrate AI Agents. Coming soon.",
  },
  {
    icon: Zap,
    title: "Automations",
    description: "Connect Bits to create workflows for instant productivity. Coming soon.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const CardDecorator = ({ children }: { children: React.ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 [--border:rgba(255,255,255,0.3)] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
    <div className="bg-transparent absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-orange-500/50">
      {children}
    </div>
  </div>
)

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#0a0510] via-[#0d0613] to-[#100616] relative" style={{
      background: 'linear-gradient(135deg, rgba(25, 8, 32, 0.7) 0%, rgba(15, 5, 20, 0.5) 40%, rgba(8, 3, 12, 1) 80%), linear-gradient(225deg, rgba(22, 7, 28, 0.6) 0%, rgba(12, 4, 16, 0.4) 50%, rgba(8, 3, 12, 1) 100%), linear-gradient(45deg, rgba(18, 6, 24, 0.5) 0%, transparent 70%), linear-gradient(to bottom, #0a0510, #0d0613, #100616)'
    }}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Building Blocks
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
            >
              <div className="group relative text-center p-6 rounded-lg border border-zinc-800/50 bg-zinc-900/30 hover:border-orange-500/30 transition-all duration-300">
                <CardDecorator>
                  <feature.icon className="w-6 h-6 icon-gradient" />
                </CardDecorator>
                <h3 className="mt-6 text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}
                {
                  feature?.url && (
                    <span className="text-blue-600">
                      <a href={feature.url}> See examples</a>
                    </span>
                  )
                }
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}