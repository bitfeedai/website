"use client"

import React from "react"
import { ZapIcon, type ZapHandle } from "@/components/ui/zap"
import { UsersIcon, type UsersIconHandle } from "@/components/ui/users"
import { LayoutPanelTopIcon, type LayoutPanelTopIconHandle } from "@/components/ui/layout-panel-top"
import { ConnectIcon, type ConnectIconHandle } from "@/components/ui/connect"
import { WaypointsIcon, type WaypointsIconHandle } from "@/components/ui/waypoints"
import { SparklesIcon, type SparklesIconHandle } from "@/components/ui/sparkles"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: SparklesIcon,
    title: "AI Wizard",
    description: "Create powerful widgets using natural language—from simple frontend components to full containerized apps. No coding required. Describe what you need, and Bitfeed builds it instantly.",
    url: "/resources/examples"
  },
  {
    icon: ConnectIcon,
    title: "Universal Connectivity",
    description: "Connect to ANY data source: RSS feeds, REST APIs, GraphQL, databases, social media, cloud services, trading platforms, and more.",
    url: "/resources/examples"
  },
  {
    icon: UsersIcon,
    title: "Marketplace",
    description: "Discover, share, and monetize widgets created by the community. Build once, use everywhere—or build passive income from your creations.",
  },
  {
    icon: WaypointsIcon,
    title: "Boards & Widget Composition",
    description: "Connect widgets into boards to create powerful data pipelines and automated workflows. The board's projection emerges naturally from its widget composition.",
  },
  {
    icon: LayoutPanelTopIcon,
    title: "Emergent Projections",
    description: "Boards naturally function as dashboards, automations, APIs, interactive experiences, or feeds based on their widget composition—no configuration needed.",
  },
  {
    icon: ZapIcon,
    title: "Automation Engine",
    description: "Schedule updates, trigger actions, and automate workflows. Real-time notifications, data persistence, and intelligent processing.",
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

const FeatureCard = ({ feature, variants }: { feature: typeof features[0], variants: typeof itemVariants }) => {
  const zapRef = useRef<ZapHandle>(null)
  const usersRef = useRef<UsersIconHandle>(null)
  const layoutPanelTopRef = useRef<LayoutPanelTopIconHandle>(null)
  const connectRef = useRef<ConnectIconHandle>(null)
  const waypointsRef = useRef<WaypointsIconHandle>(null)
  const sparklesRef = useRef<SparklesIconHandle>(null)
  
  const isZapIcon = feature.icon === ZapIcon
  const isUsersIcon = feature.icon === UsersIcon
  const isLayoutPanelTopIcon = feature.icon === LayoutPanelTopIcon
  const isConnectIcon = feature.icon === ConnectIcon
  const isWaypointsIcon = feature.icon === WaypointsIcon
  const isSparklesIcon = feature.icon === SparklesIcon
  
  return (
    <motion.div 
      variants={variants}
      className="h-full"
    >
      <div 
        className="group relative text-center p-6 rounded-lg border border-zinc-800/50 bg-zinc-900/30 hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col"
        onMouseEnter={() => {
          if (isZapIcon && zapRef.current) {
            zapRef.current.startAnimation()
          } else if (isUsersIcon && usersRef.current) {
            usersRef.current.startAnimation()
          } else if (isLayoutPanelTopIcon && layoutPanelTopRef.current) {
            layoutPanelTopRef.current.startAnimation()
          } else if (isConnectIcon && connectRef.current) {
            connectRef.current.startAnimation()
          } else if (isWaypointsIcon && waypointsRef.current) {
            waypointsRef.current.startAnimation()
          } else if (isSparklesIcon && sparklesRef.current) {
            sparklesRef.current.startAnimation()
          }
        }}
        onMouseLeave={() => {
          if (isZapIcon && zapRef.current) {
            zapRef.current.stopAnimation()
          } else if (isUsersIcon && usersRef.current) {
            usersRef.current.stopAnimation()
          } else if (isLayoutPanelTopIcon && layoutPanelTopRef.current) {
            layoutPanelTopRef.current.stopAnimation()
          } else if (isConnectIcon && connectRef.current) {
            connectRef.current.stopAnimation()
          } else if (isWaypointsIcon && waypointsRef.current) {
            waypointsRef.current.stopAnimation()
          } else if (isSparklesIcon && sparklesRef.current) {
            sparklesRef.current.stopAnimation()
          }
        }}
      >
        <CardDecorator>
          {isZapIcon ? (
            <ZapIcon ref={zapRef} size={24} className="icon-gradient [&>svg]:stroke-current" />
          ) : isUsersIcon ? (
            <UsersIcon ref={usersRef} size={24} className="icon-gradient [&>svg]:stroke-current" />
          ) : isLayoutPanelTopIcon ? (
            <LayoutPanelTopIcon ref={layoutPanelTopRef} size={24} className="icon-gradient [&>svg]:stroke-current" />
          ) : isConnectIcon ? (
            <ConnectIcon ref={connectRef} size={24} className="icon-gradient [&>svg]:stroke-current" />
          ) : isWaypointsIcon ? (
            <WaypointsIcon ref={waypointsRef} size={24} className="icon-gradient [&>svg]:stroke-current" />
          ) : isSparklesIcon ? (
            <SparklesIcon ref={sparklesRef} size={24} className="icon-gradient [&>svg]:stroke-current" />
          ) : (
            <feature.icon className="w-6 h-6 icon-gradient" />
          )}
        </CardDecorator>
        <h3 className="mt-6 text-xl font-semibold mb-2 text-white">{feature.title}</h3>
        <p className="text-sm text-gray-300 flex-grow">{feature.description}
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
  )
}

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
          className="font-display text-3xl font-bold text-center mb-12 text-white"
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
            <FeatureCard key={index} feature={feature} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}