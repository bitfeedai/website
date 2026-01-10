"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Store } from "lucide-react"

export default function Marketplace() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

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
                  <Store className="w-8 h-8 text-orange-400" />
                </div>
              </motion.div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                <span className="text-gradient-mixed">Marketplace</span>
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-zinc-900/50 border border-zinc-800/50"
              >
                <p className="text-lg text-gray-300">
                  Coming soon...
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

