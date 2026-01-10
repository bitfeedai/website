"use client"

import Header from "../../components/Header"
import CallToAction from "../../components/CallToAction"
import Footer from "../../components/Footer"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  FileText, 
  Puzzle, 
  Globe, 
  Sparkles, 
  Link2, 
  Briefcase, 
  Code, 
  TrendingUp, 
  Users,
  Rocket,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ChevronRight
} from "lucide-react"
import { ZapIcon, type ZapHandle } from "@/components/ui/zap"

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

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => {
  const zapRef = useRef<ZapHandle>(null)
  const isZapIcon = Icon === ZapIcon
  
  return (
    <div 
      className="p-5 rounded-md bg-zinc-900/40 border border-zinc-800/30 hover:border-orange-500/30 transition-all duration-300"
      onMouseEnter={() => {
        if (isZapIcon && zapRef.current) {
          zapRef.current.startAnimation()
        }
      }}
      onMouseLeave={() => {
        if (isZapIcon && zapRef.current) {
          zapRef.current.stopAnimation()
        }
      }}
    >
      {isZapIcon ? (
        <ZapIcon ref={zapRef} size={20} className="text-orange-400 mb-3" />
      ) : (
        <Icon className="w-5 h-5 text-orange-400 mb-3" />
      )}
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" })

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
                  <FileText className="w-8 h-8 text-orange-400" />
                </div>
              </motion.div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                <span className="text-gradient-mixed">About Bitfeed</span>
              </h1>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto max-w-5xl px-4 sm:px-6 pb-20">
          <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {/* Problem & Solution - Visual + Concise */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Problem Side */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">The Problem</h2>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Thousands of fragmented AI tools, each serving a narrow purpose</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Tool overload and FOMO—knowing a tool or two isn't enough</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Constant switching between dozens of different apps</span>
                    </li>
                  </ul>
                </div>
                
                {/* Solution Side */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">The Solution</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Bitfeed is a graph of widgets. Build widgets, connect them into boards, and create dashboards, automations, APIs, interactive experiences, or feeds—all in one unified platform.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Every advancement in AI technologies is absorbed and provided to you, removing the fear of missing out by having all tools available in one location.
                  </p>
                </div>
              </div>
              
              {/* Visual Placeholder */}
              <div className="relative h-64 rounded-lg bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 border border-zinc-800/50 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-4 text-gray-500">
                      <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                        <span className="text-sm">Tool 1</span>
                      </div>
                      <ArrowRight className="w-5 h-5" />
                      <div className="p-4 rounded-lg bg-gradient-to-br from-orange-500/20 to-purple-600/20 border border-orange-500/30">
                        <span className="text-sm text-orange-400 font-medium">Bitfeed</span>
                      </div>
                      <ArrowRight className="w-5 h-5" />
                      <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                        <span className="text-sm">Tool 2</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">Visual placeholder: Many Tools → One Platform</p>
                  </div>
                </div>
              </div>
            </motion.section>
                
            {/* What Bitfeed Is - Scannable Cards */}
            <motion.section variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Puzzle className="w-6 h-6 text-orange-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  What Bitfeed Does
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Globe, title: "The Central Hub", desc: "Where all AI capabilities converge in one place" },
                  { icon: Link2, title: "The Universal Connector", desc: "Connect to any data source, any API, any service" },
                  { icon: Sparkles, title: "The No-Code Builder", desc: "Create custom widgets and workflows using natural language (AI Wizard)" },
                  { icon: ZapIcon, title: "The Automation Engine", desc: "Chain widgets together to build complex data pipelines" },
                  { icon: Briefcase, title: "The Marketplace", desc: "Share, discover, and monetize widgets created by the community" },
                  { icon: Rocket, title: "The Future-Proof Solution", desc: "Automatically absorbs new AI technologies as they emerge" }
                ].map((item, idx) => (
                  <FeatureCard key={idx} icon={item.icon} title={item.title} desc={item.desc} />
                ))}
              </div>
            </motion.section>
            
            {/* Core Capabilities - Accordion Expandable */}
            <motion.section variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Code className="w-6 h-6 text-orange-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Core Capabilities
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="data-connectivity" className="border-zinc-800/30 rounded-md bg-zinc-900/40 px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <Globe className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">Universal Data Connectivity</h3>
                        <p className="text-sm text-gray-400 font-normal mt-1">Connect to ANY data source—RSS, APIs, databases, and more</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Unlike traditional feed readers limited to RSS, Bitfeed connects to <strong className="text-orange-400">ANY data source</strong>:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "RSS Feeds", "REST APIs", "GraphQL", "JSON/XML URLs",
                        "Web Scraping", "Databases", "CSV/Excel Files", "Social Media APIs",
                        "Cloud Services", "Trading Platforms", "Custom Webhooks", "Any Data Format"
                      ].map((item, index) => (
                        <Badge 
                          key={item}
                          variant="secondary" 
                          className={`
                            ${index % 2 === 0 
                              ? "bg-[#d55307]/10 text-[#d55307] hover:bg-[#d55307]/20" 
                              : "bg-[#a91573]/10 text-[#a91573] hover:bg-[#a91573]/20"
                            }
                            border-none transition-colors duration-200 font-medium px-3 py-1
                          `}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="widget-creation" className="border-zinc-800/30 rounded-md bg-zinc-900/40 px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <Sparkles className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">AI-Powered Widget Creation</h3>
                        <p className="text-sm text-gray-400 font-normal mt-1">Create widgets using natural language with the AI Wizard</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-orange-400">Widgets</strong> come in different forms: frontend-only components, widgets with predefined backend function nodes, or full containerized micro-applications. They can display data in any format, process and transform data, automate workflows, connect to external services, and update in real-time. Create them using the <strong className="text-orange-400">AI Wizard</strong>—just describe what you need in natural language, and Bitfeed builds it instantly, from simple components to containerized apps depending on your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="boards" className="border-zinc-800/30 rounded-md bg-zinc-900/40 px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <Link2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">Boards & Widget Composition</h3>
                        <p className="text-sm text-gray-400 font-normal mt-1">Connect widgets to create dashboards, automations, APIs, and more</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-orange-400">Boards</strong> are structural containers where widgets are placed and connected. Connect multiple widgets together in boards to create powerful data pipelines. The board's projection type emerges naturally from its widget composition—whether it functions as a dashboard, automation, API, interactive experience, or feed. Set up scheduled updates, trigger-based actions, AI agents for intelligent processing, real-time notifications, and data persistence with historical tracking.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="marketplace" className="border-zinc-800/30 rounded-md bg-zinc-900/40 px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <Briefcase className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">Marketplace Ecosystem</h3>
                        <p className="text-sm text-gray-400 font-normal mt-1">Share, discover, and monetize widgets created by the community</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      Publish widgets (free or paid) for others to use, discover widgets created by the community, and monetize your creations through one-time purchases or subscriptions. Build passive income by creating useful widgets that solve real problems.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.section>
            
            {/* Use Cases - Quick Teaser */}
            <motion.section variants={itemVariants} className="space-y-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-orange-400" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    What You Can Build
                  </h2>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="p-5 rounded-md bg-zinc-900/40 border border-zinc-800/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-orange-400" />
                    <h3 className="text-base font-semibold text-white">Personal Use</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Personal News Hub</li>
                    <li>• Job Search Dashboard</li>
                    <li>• Fitness Tracker</li>
                    <li>• Financial Portfolio</li>
                  </ul>
                </div>
                
                <div className="p-5 rounded-md bg-zinc-900/40 border border-zinc-800/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-orange-400" />
                    <h3 className="text-base font-semibold text-white">Business Use</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• E-commerce Intelligence</li>
                    <li>• Agency Client Reporting</li>
                    <li>• Sales Team Dashboard</li>
                    <li>• Marketing Analytics</li>
                  </ul>
                </div>
                
                <div className="p-5 rounded-md bg-zinc-900/40 border border-zinc-800/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-orange-400" />
                    <h3 className="text-base font-semibold text-white">Developer & Creator</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• DevOps Monitoring</li>
                    <li>• API Marketplace Product</li>
                    <li>• Content Aggregation</li>
                    <li>• Marketplace Monetization</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  href="/resources/examples"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-br from-orange-500/20 to-purple-600/20 border border-orange-500/30 text-orange-400 hover:text-orange-300 hover:border-orange-500/50 transition-all duration-300 font-medium"
                >
                  View Detailed Examples
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.section>
                
            {/* Open Source & Community - Condensed */}
            <motion.section variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-orange-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Open Source & Community
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-md bg-zinc-900/40 border border-zinc-800/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-orange-400" />
                    <h3 className="text-lg font-semibold text-white">Open Source</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    We're committed to open-source software development and believe in the democratization of information. Our codebase is public and transparent.
                  </p>
                </div>
                
                <div className="p-6 rounded-md bg-zinc-900/40 border border-zinc-800/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Rocket className="w-5 h-5 text-orange-400" />
                    <h3 className="text-lg font-semibold text-white">Community-Driven</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Bitfeed thrives on community collaboration. Creators, developers, and AI enthusiasts will come together to build and share widgets and boards. <strong className="text-orange-400">The question isn't IF this will happen, but WHO will dominate this space.</strong>
                  </p>
                </div>
              </div>
            </motion.section>
            
            {/* Competitive Position - Table Format */}
            <motion.section variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-orange-400" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  How Bitfeed Compares
                </h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-800/50">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Category</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Traditional Solutions</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-orange-400">Bitfeed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/30">
                    {[
                      { category: "Feed Readers", they: "RSS only, fixed text display", bitfeed: "Any data source, custom visualizations, automation" },
                      { category: "No-Code Platforms", they: "Workflow automation focus", bitfeed: "Widget-based dashboards + automation + AI creation + marketplace" },
                      { category: "AI Platforms", they: "AI capabilities but limited to their interface", bitfeed: "Integrates all AI services + custom widgets + data visualization + automation" },
                      { category: "Dashboard Tools", they: "Business intelligence focus, requires technical setup", bitfeed: "Personal + business use, AI-powered creation, no-code, affordable" }
                    ].map((comp, idx) => (
                      <tr key={idx} className="hover:bg-zinc-900/20 transition-colors">
                        <td className="py-4 px-4 text-white font-medium">{comp.category}</td>
                        <td className="py-4 px-4 text-gray-400 text-sm">{comp.they}</td>
                        <td className="py-4 px-4 text-orange-400 text-sm">{comp.bitfeed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-6 rounded-md bg-gradient-to-br from-orange-500/10 to-purple-600/10 border border-orange-500/30">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-orange-400" />
                  Bitfeed's Unique Position
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-orange-400">The only platform that combines:</strong> Universal data connectivity, AI-powered no-code creation, widget-based dashboards, workflow automation, marketplace ecosystem, and future-proof technology absorption.
                </p>
              </div>
            </motion.section>
                
            {/* Contributing - Accordion */}
            <motion.section variants={itemVariants} className="space-y-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="contributing" className="border-zinc-800/30 rounded-md bg-zinc-900/40 px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <Users className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-white">How to Contribute</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      More information will follow soon. You can contribute by creating and sharing widgets in the marketplace, providing feedback, and helping shape the future of Bitfeed.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.section>
          </motion.div>
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
