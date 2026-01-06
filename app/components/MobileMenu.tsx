"use client"

import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../components/ui/Button"
import { Menu } from "lucide-react"
import { useState } from "react"
import WaitinglistBtn from "./WaitinglistBtn"

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
        <Button variant="outline" size="sm" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pt-12 w-[300px] sm:w-[400px] bg-gradient-to-br from-[#050206] to-[#080309] border-purple-900/10">
        <nav className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-lg font-medium text-white hover:text-purple-300"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <WaitinglistBtn buttonType={"default"} buttonText={"Get Started"} />
        </nav>
      </SheetContent>
    </Sheet>
  )
}