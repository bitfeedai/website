"use client"

import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "./ui/Button"
import { GithubIcon, Menu, X } from "lucide-react"
import { WaitlistDialog } from "./WaitlistDialog"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "About",
    href: "/resources/about",
    description:
      "Learn more about Bitfeed.",
  },
  {
    title: "FAQ",
    href: "/resources/faq",
    description:
      "Frequently asked question about Bitfeed.",
  },
  {
    title: "Changelog",
    href: "/resources/changelog",
    description:
      "See what's new in Bitfeed.",
  },
  {
    title: "Examples",
    href: "/resources/examples",
    description:
      "Checkout examples of Bits and Feeds created by the community.",
  }
]

const navItems = [
  { label: "Building Blocks", href: "/#features", isLink: true },
  { label: "Resources", href: "#", isLink: false },
  { label: "Documentation", href: "/docs", isLink: true },
]

const mobileNavItems = [
  { href: "/resources/about", label: "About" },
  { href: "/#features", label: "Building Blocks" },
  { href: "/docs", label: "Documentation" },
  { href: "/resources/changelog", label: "Changelog" },
  { href: "/resources/examples", label: "Examples" },
  { href: "https://github.com/bitfeedai", label: "Github" },
]

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
    >
      <nav
        ref={navRef}
        className="relative flex items-center justify-between px-4 py-3 rounded-md bg-zinc-900/40 backdrop-blur-md border border-zinc-800"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <Image src="/logo.svg?height=48&width=48" alt="Bitfeed Logo" width={48} height={48} />
          </div>
          <span className="font-semibold text-white hidden sm:block">Bitfeed</span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navItems.map((item, index) => {
            if (item.isLink) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-zinc-800 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              )
            } else {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredIndex(index)
                    setResourcesOpen(true)
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null)
                    setResourcesOpen(false)
                  }}
                >
                  <button
                    className="relative px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {hoveredIndex === index && (
                      <motion.div
                        layoutId="navbar-hover"
                        className="absolute inset-0 bg-zinc-800 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                  <AnimatePresence>
                    {resourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 p-4 rounded-md bg-zinc-900/95 backdrop-blur-md border border-zinc-800 min-w-[400px]"
                      >
                        <ul className="grid gap-3 md:grid-cols-2">
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                              className="text-white"
                            >
                              <span className="text-zinc-400 text-xs">{component.description}</span>
                            </ListItem>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }
          })}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="https://github.com/bitfeedai" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-800">
              <GithubIcon className="w-4 h-4" />
            </Button>
          </Link>
          <WaitlistDialog
            trigger={
              <Button size="sm" className="shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-4">
                Get Started
              </Button>
            }
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 p-4 rounded-md bg-zinc-900/95 backdrop-blur-md border border-zinc-800"
          >
            <div className="flex flex-col gap-2">
              {mobileNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-zinc-800 my-2" />
              <Link href="https://github.com/bitfeedai" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white">
                  <GithubIcon className="w-4 h-4 mr-2" />
                  Github
                </Button>
              </Link>
              <WaitlistDialog
                trigger={
                  <Button className="w-full shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200 rounded-full">
                    Get Started
                  </Button>
                }
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        href={props.href || "#"}
        className={cn(
          "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800 text-white",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
          {children}
        </p>
      </Link>
    </li>
  )
})

ListItem.displayName = "ListItem"