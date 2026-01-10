"use client"

import Header from "../../components/Header"
import CallToAction from "../../components/CallToAction"
import Footer from "../../components/Footer"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Rocket, 
  Users, 
  Briefcase, 
  Code, 
  Newspaper, 
  BriefcaseIcon, 
  Activity, 
  TrendingUp,
  ShoppingCart,
  BarChart3,
  Target,
  Monitor,
  Database,
  DollarSign,
  Twitter
} from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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

export default function Home() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const personalUseCases = [
    { icon: Newspaper, title: "Personal News Hub", desc: "Create an aggregated, filtered, and AI-summarized news feed from multiple sources. Connect to RSS feeds, news APIs, and social media to get all your news in one place, automatically summarized and organized by topic or importance." },
    { icon: BriefcaseIcon, title: "Job Search Dashboard", desc: "Track job applications, monitor company research, and prepare for interviews all in one dashboard. Connect to job boards, company APIs, and your calendar to stay organized throughout your job search." },
    { icon: Activity, title: "Fitness Tracker", desc: "Build a comprehensive fitness dashboard with workout logs, nutrition tracking, and progress visualization. Connect to fitness apps, nutrition APIs, and wearable devices to track your health journey." },
    { icon: TrendingUp, title: "Financial Portfolio", desc: "Monitor real-time crypto and stock prices, perform analysis, and set up alerts for price changes. Connect to trading platforms (Binance, Coinbase, etc.), financial APIs, and create custom visualizations for your portfolio performance." }
  ]

  const businessUseCases = [
    { icon: ShoppingCart, title: "E-commerce Intelligence", desc: "Track sales data, monitor competitor pricing, and keep an eye on inventory levels. Connect to your e-commerce platform, competitor APIs, and inventory systems to make data-driven decisions." },
    { icon: BarChart3, title: "Agency Client Reporting", desc: "Automate client reporting with analytics, social media metrics, and performance dashboards. Connect to Google Analytics, social media APIs, and create beautiful, automated reports that update in real-time." },
    { icon: Target, title: "Sales Team Dashboard", desc: "Monitor CRM pipeline, track performance metrics, and calculate commissions automatically. Connect to your CRM, sales platforms, and create custom visualizations for your sales team." },
    { icon: Monitor, title: "Marketing Analytics", desc: "Track SEO rankings, monitor ad spend, calculate ROI, and analyze campaign performance. Connect to SEO tools, advertising platforms, and analytics services to get a complete marketing overview." }
  ]

  const developerUseCases = [
    { icon: Database, title: "DevOps Monitoring", desc: "Monitor server uptime, track API response times, analyze error logs, and stay updated on deployment status. Connect to monitoring services, logging platforms, and CI/CD tools for comprehensive DevOps visibility." },
    { icon: Code, title: "API Marketplace Product", desc: "Create custom visualizations and dashboards for your API customers. Provide them with ready-to-use widgets that showcase your API's capabilities and make integration easier." },
    { icon: Newspaper, title: "Content Aggregation", desc: "Build multi-source content feeds with custom presentation. Aggregate content from various sources, filter and organize it, and present it in a beautiful, personalized feed." },
    { icon: DollarSign, title: "Marketplace Monetization", desc: "Create and sell widgets in the marketplace. Build useful widgets that solve real problems, publish them (free or paid), and build passive income from your creations. Marketplace widgets typically cost $5-$500 vs. $5,000+ for custom development elsewhere." }
  ]

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
                  <Rocket className="w-8 h-8 text-orange-400" />
                </div>
              </motion.div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                <span className="text-gradient-mixed">What You Can Build</span>
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-zinc-900/50 border border-zinc-800/50"
              >
                <Twitter className="w-5 h-5 text-orange-400" />
                <p className="text-sm text-gray-300">
                  More detailed examples and tutorials coming soon. Follow us on{" "}
                  <Link href="https://x.com/bitfeedai" className="text-orange-400 hover:text-orange-300 transition-colors font-semibold">
                    x.com/bitfeedai
                  </Link>
                  {" "}for live updates 📢
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 pb-20">
          <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            className="space-y-20"
          >
            {/* Personal Use Cases */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-orange-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Personal Use Cases
                </h2>
              </div>
              <div className="space-y-6">
                {personalUseCases.map((useCase, idx) => {
                  const Icon = useCase.icon
                  return (
                    <div key={idx} className="flex items-start gap-4 p-6 rounded-md bg-zinc-900/30 border border-zinc-800/20 hover:border-orange-500/30 transition-all duration-300">
                      <div className="p-2 rounded-md bg-gradient-to-br from-orange-500/20 to-purple-600/20 border border-orange-500/30 flex-shrink-0">
                        <Icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {useCase.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.section>
            
            {/* Business Use Cases */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-orange-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Business Use Cases
                </h2>
              </div>
              <div className="space-y-6">
                {businessUseCases.map((useCase, idx) => {
                  const Icon = useCase.icon
                  return (
                    <div key={idx} className="flex items-start gap-4 p-6 rounded-md bg-zinc-900/30 border border-zinc-800/20 hover:border-orange-500/30 transition-all duration-300">
                      <div className="p-2 rounded-md bg-gradient-to-br from-orange-500/20 to-purple-600/20 border border-orange-500/30 flex-shrink-0">
                        <Icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {useCase.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.section>
            
            {/* Developer & Creator Use Cases */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-orange-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Developer & Creator Use Cases
                </h2>
              </div>
              <div className="space-y-6">
                {developerUseCases.map((useCase, idx) => {
                  const Icon = useCase.icon
                  return (
                    <div key={idx} className="flex items-start gap-4 p-6 rounded-md bg-zinc-900/30 border border-zinc-800/20 hover:border-orange-500/30 transition-all duration-300">
                      <div className="p-2 rounded-md bg-gradient-to-br from-orange-500/20 to-purple-600/20 border border-orange-500/30 flex-shrink-0">
                        <Icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {useCase.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.section>
          </motion.div>
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
