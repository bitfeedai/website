"use client"

import Header from "../../components/Header"
import CallToAction from "../../components/CallToAction"
import Footer from "../../components/Footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { HelpCircle, MessageCircle } from "lucide-react"

export default function Home() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const accordionRef = useRef(null)
  const accordionInView = useInView(accordionRef, { once: true, margin: "-100px" })

  const faqs = [
    {
      "q": "What is Bitfeed?",
      "a": "Bitfeed is a graph of widgets. Build widgets, connect them into boards, and the board's projection emerges naturally from its composition—whether it becomes a dashboard, automation, API, interactive experience, or feed. Instead of switching between dozens of different apps, Bitfeed gives you everything in one place: universal data connectivity, AI-powered no-code creation, widget-based boards with emergent projections, workflow automation, and a marketplace ecosystem. Checkout our about page or examples to learn more.",
      "url": ""
    },
    {
      "q": "How does it work?",
      "a": "Bitfeed consists of widgets and boards. Widgets come in different forms: frontend-only components, widgets with predefined backend function nodes, or full containerized micro-applications. They can display data, process information, automate workflows, and connect to external services. You can create widgets using Bitfeed's AI Wizard—just describe what you need in natural language, and Bitfeed builds it instantly. Boards are structural containers where widgets are placed and connected. The board's projection type emerges naturally from its widget composition—whether it functions as a dashboard, automation, API, interactive experience, or feed. You can connect widgets together in boards, set up automation, schedule updates, and create complex solutions without coding. Checkout our documentation page to learn more about how to get started or checkout our examples.",
      "url": ""
    },
    {
      "q": "What data sources can I connect to?",
      "a": "Bitfeed connects to ANY data source imaginable: RSS feeds, REST API endpoints, JSON/XML URLs, GraphQL APIs, web scraping targets, database queries, CSV/Excel files, social media APIs (Twitter, LinkedIn, Instagram, etc.), custom webhooks, cloud services (Google Suite, Microsoft 365, etc.), trading platforms (Binance, Coinbase, etc.), and more. Unlike traditional feed readers limited to RSS, Bitfeed provides universal connectivity to any data format.",
      "url": ""
    },
    {
      "q": "What is the AI Wizard?",
      "a": "The AI Wizard enables anyone to create custom widgets without coding—from simple frontend components to full containerized applications, depending on your needs. Simply describe what you need in natural language (e.g., 'I need a widget that scrapes information from this API endpoint and displays the data in a graph, auto-updating every hour'), and the AI Wizard analyzes the data source structure, generates frontend visualization code, identifies and connects appropriate backend function nodes (HTTP, transforms, etc.) or creates containerized execution environments for advanced needs, sets up automation schedules, configures display parameters, and tests data connections. Result: A fully functional widget created in minutes, not days.",
      "url": ""
    },
    {
      "q": "What is the Marketplace?",
      "a": "The Marketplace is an ecosystem where users can publish widgets (free or paid) for others to use, discover widgets created by the community, and monetize their creations through one-time purchases or subscriptions. This creates a thriving creator economy where more creators lead to more widgets, which leads to more users and more demand. You can build passive income by creating useful widgets that solve real problems. Marketplace widgets typically cost $5-$500 vs. $5,000+ for custom development elsewhere.",
      "url": ""
    },
    {
      "q": "Can I automate workflows?",
      "a": "Yes! Bitfeed includes a powerful automation engine. You can connect multiple widgets together in boards to create data pipelines, set up scheduled updates (cronjobs), configure trigger-based actions (if/then logic), use AI agents for intelligent processing, receive real-time notifications, and enable data persistence with historical tracking. Boards with widgets that run headless naturally function as automations—the projection emerges from the widget composition.",
      "url": ""
    },
    {
      "q": "Is this app free to use?",
      "a": "For creating and reading feeds, Bitfeed is and will remain free. However, for the creation of bits the Bitfeed Wizard is used, which uses external AI-services that requires an API key and come with associated costs. The user can pay these costs directly to the relevant provider when using their own API key. The same applies to the use of Bitfeed without personal API keys, but in this case, the costs will be recalculated by us and may vary depending on our provider's current pricing and usage limits. Marketplace widgets may have their own pricing set by creators.",
      "url": ""
    },
    {
      "q": "What can I build with Bitfeed?",
      "a": "The possibilities are nearly endless! Personal use cases include: personal news hubs, job search dashboards, fitness trackers, and financial portfolios. Business use cases include: e-commerce intelligence, agency client reporting, sales team dashboards, and marketing analytics. Developer and creator use cases include: DevOps monitoring, API marketplace products, content aggregation, and monetization through the marketplace. Checkout our examples page for more inspiration.",
      "url": ""
    },
    {
      "q": "How is Bitfeed different from other tools?",
      "a": "Bitfeed is the only platform that combines universal data connectivity, AI-powered no-code creation, widget-based boards with emergent projections (dashboards, automations, APIs, interactive experiences, feeds), workflow automation, marketplace ecosystem, and future-proof technology absorption in one place. Unlike traditional feed readers (RSS only), no-code platforms (workflow focus only), AI platforms (limited interfaces), or dashboard tools (business intelligence focus, technical setup required), Bitfeed provides a unified solution where boards naturally function as different projection types based on their widget composition—accessible, affordable, and future-proof.",
      "url": ""
    },
    {
      "q": "Is there a community?",
      "a": "As Bitfeed continues to grow, we're seeing increasing interest from creators and developers worldwide. We're currently building a dedicated Discord community to connect all enthusiasts. The community will be a place where creators, developers, and AI enthusiasts come together to build and share their widgets and boards, find inspiration, and collectively reimagine how content and information is managed. Stay tuned for the official launch announcement.",
      "url": ""
    },
    {
      "q": "What problem does Bitfeed solve?",
      "a": "Bitfeed addresses the AI Tool Fragmentation Crisis. Today, people use many different web apps to accomplish everything they want, creating tool overload and FOMO pressure. Bitfeed consolidates all AI capabilities into one platform, removing the need to switch between 10+ different apps. It provides a central place where every advancement in AI technologies is absorbed and made available to users.",
      "url": ""
    },
    {
      "q": "What's the current state of Bitfeed?",
      "a": "Bitfeed is currently in Pre-Alpha (MVP - Q1 2026). What exists today: AI Wizard for frontend widget generation, widget creation and saving system (frontend-only widgets and widgets using predefined backend function nodes), board creation and widget composition, playground for testing, manual trigger execution, predefined backend function nodes, WebSocket-based real-time execution status updates, and basic data connectivity. In development: Publishing/sharing boards publicly, marketplace for widgets (all types: frontend-only, predefined nodes, containerized), scheduled automation and cron-based triggers, containerized widget applications, and advanced integrations beyond basic HTTP nodes.",
      "url": ""
    },
    {
      "q": "How can I contribute?",
      "a": "More information will follow soon. We're committed to open-source software development and believe in the democratization of information. By making our codebase public and maintaining transparency in our development process, we aim to foster innovation and collaboration within the developer community. You can also contribute by creating and sharing widgets in the marketplace, providing feedback, and helping shape the future of Bitfeed.",
      "url": ""
    }
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
                  <HelpCircle className="w-8 h-8 text-orange-400" />
            </div>
              </motion.div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                <span className="text-gradient-mixed">Frequently Asked Questions</span>
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-zinc-900/50 border border-zinc-800/50"
              >
                <MessageCircle className="w-5 h-5 text-orange-400" />
                <p className="text-sm text-gray-300">
                  Don't see your question? Reach out on Discord or via email. We're happy to help!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Accordion - No card wrapper */}
        <section ref={accordionRef} className="container mx-auto max-w-4xl px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={accordionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={accordionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  <AccordionItem 
                    value={`${index+1}`}
                    className="px-6 py-2 rounded-md bg-zinc-900/40 border border-zinc-800/30 hover:border-orange-500/30 transition-all duration-300 mb-2"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-orange-400 transition-colors font-semibold pr-4 py-2">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 leading-relaxed pt-2 pb-3">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
