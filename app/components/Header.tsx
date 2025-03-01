"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/Button"
import { GithubIcon } from "lucide-react"
import { MobileMenu } from "./MobileMenu"
import { WaitlistDialog } from "./WaitlistDialog"


export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg?height=32&width=32" alt="Bitfeed Logo" width={32} height={32} />
          <span className="text-2xl font-bold text-gray-900">Bitfeed</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-600 hover:text-gray-900">
            Building Blocks
          </Link>
          <Link href="/resources" className="text-gray-600 hover:text-gray-900">
            Resources
          </Link>
          <Link href="/documentation" className="text-gray-600 hover:text-gray-900">
            Documentation
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/bitfeedai" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <GithubIcon className="w-6 h-6 text-gray-600 hover:text-gray-900 fill-current" />
          </Link>
          <WaitlistDialog 
            trigger={
              <Button className="hidden md:inline-flex">
                Get Started
              </Button>
            }
          />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}