"use client"

import Header from "../../components/Header"
import CallToAction from "../../components/CallToAction"
import Footer from "../../components/Footer"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GitBranch, Clock, Twitter, Github } from "lucide-react"

export default function Home() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" })

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0a0510] via-[#0d0613] to-[#100616]" style={{
      background: 'linear-gradient(135deg, rgba(20, 5, 25, 0.6) 0%, rgba(12, 3, 15, 0.4) 50%, transparent 100%), linear-gradient(225deg, rgba(18, 4, 22, 0.5) 0%, rgba(10, 2, 13, 0.3) 50%, transparent 100%), linear-gradient(45deg, rgba(15, 4, 18, 0.4) 0%, transparent 60%), linear-gradient(to bottom, #100616, #0d0613, #0a0510)'
    }}>
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-600/5" />
          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center mb-6"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500/20 to-purple-600/20 border border-orange-500/30">
                  <GitBranch className="w-8 h-8 text-orange-400" />
                </div>
              </motion.div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                <span className="text-gradient-mixed">Changelog</span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              >
                Track updates, new features, and improvements to Bitfeed.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section ref={contentRef} className="container mx-auto max-w-4xl px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info Badge */}
            <div className="flex justify-center">
              <Badge 
                variant="secondary" 
                className="bg-[#a91573]/10 text-[#a91573] hover:bg-[#a91573]/20 border-none transition-colors duration-200 font-medium px-6 py-3 text-sm"
              >
                Only major version updates will be shown here. Recent and smaller updates will be mentioned on Bitfeed's related social channels and GitHub.
              </Badge>
            </div>

            {/* Coming Soon - Simple layout */}
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-2 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/30 mb-4">
                <Clock className="w-5 h-5 text-orange-400" />
                <h2 className="text-2xl font-bold text-white">
                  Development in Progress
                </h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Development is currently in progress. Our initial change will be logged upon launch very soon.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <p className="text-sm text-gray-400">Follow us for live updates:</p>
                <Link 
                  href="https://x.com/bitfeedai" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900/50 border border-zinc-800/50 hover:border-orange-500/30 hover:bg-zinc-900 transition-all duration-300 group"
                >
                  <Twitter className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">x.com/bitfeedai</span>
                </Link>
                <Link 
                  href="https://github.com/bitfeedai" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900/50 border border-zinc-800/50 hover:border-orange-500/30 hover:bg-zinc-900 transition-all duration-300 group"
                >
                  <Github className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">GitHub</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
