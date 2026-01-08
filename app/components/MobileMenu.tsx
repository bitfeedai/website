"use client"

import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../components/ui/Button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { WaitlistDialog } from "./WaitlistDialog"

const navItems = [
  { href: "/resources/about", label: "About" },
  { href: "/#features", label: "Building Blocks" },
  { href: "/docs", label: "Documentation" },
  { href: "/resources/changelog", label: "Changelog" },
  { href: "/resources/examples", label: "Examples" },
  { href: "https://github.com/bitfeedai", label: "Github" },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="pt-12 w-[300px] sm:w-[400px] bg-zinc-900/95 backdrop-blur-md border-zinc-800">
        <nav className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <hr className="border-zinc-800 my-2" />
          <div className="px-4">
            <WaitlistDialog
              trigger={
                <Button className="w-full shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200 rounded-full">
                  Get Started
                </Button>
              }
            />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}