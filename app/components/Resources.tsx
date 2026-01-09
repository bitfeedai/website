"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, FileText, HelpCircle, GitBranch } from "lucide-react"

const resources = [
  { title: "About", href: "/resources/about", icon: FileText, description: "Discover our mission, vision, and the team behind Bitfeed." },
  { title: "FAQ", href: "/resources/faq", icon: HelpCircle, description: "Find answers to common questions about features and usage." },
  { title: "Changelog", href: "/resources/changelog", icon: GitBranch, description: "Track updates, new features, and improvements." },
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

export default function Resources() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-gradient-to-br from-[#050206] via-[#060307] to-[#080309] relative" style={{
      background: 'linear-gradient(135deg, rgba(35, 12, 42, 0.65) 0%, rgba(20, 7, 25, 0.45) 40%, rgba(5, 2, 6, 1) 80%), linear-gradient(225deg, rgba(30, 10, 38, 0.55) 0%, rgba(15, 5, 20, 0.35) 50%, rgba(5, 2, 6, 1) 100%), linear-gradient(45deg, rgba(25, 8, 32, 0.45) 0%, transparent 70%), linear-gradient(to bottom right, #050206, #060307, #080309)'
    }}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Resources
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link
                  href={resource.href}
                  className="group relative block p-8 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/50 hover:border-orange-500/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500/10 via-purple-600/10 to-orange-500/10 blur-xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-orange-500/20 to-purple-600/20 border border-orange-500/20 group-hover:border-orange-500/40 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
                    </div>
                    
                    {/* Title and Arrow */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-orange-100 transition-colors">
                        {resource.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {resource.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}