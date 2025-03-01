"use client"

import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../components/ui/Button"
import { Menu } from "lucide-react"
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
        <Button variant="outline" size="sm" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-lg font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <WaitlistDialog 
            trigger={
              <Button className="mt-4 button-gradient-mixed">
                Get Started
              </Button>
            }
          />
        </nav>
      </SheetContent>
    </Sheet>
  )
}