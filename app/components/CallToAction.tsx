"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "./ui/Button"
import WaitinglistBtn from "../components/WaitinglistBtn"

type TypeOfButtons = 'default' | 'default_orange' | 'secondary' | 'primary' | 'outline'

export default function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section className="bg-gradient-to-r from-orange-500 to-purple-600 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="font-display text-3xl font-bold mb-4 text-white">
          Ready to End Tool Fragmentation?
        </h2>
        <p className="text-xl mb-8 text-white">
          Stop switching between dozens of apps. Join the Bitfeed community and consolidate all your AI capabilities into one powerful platform. Create, automate, and share-everything AI in one place.
        </p>
        <div className="flex gap-8 justify-center">
          <WaitinglistBtn buttonType={"outline"} buttonText={"Get Started"} />
        </div>
      </motion.div>
    </section>
  )
}