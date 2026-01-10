import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"


export default function Footer() {
  return (
    <footer className="bg-[#0a0510] text-white py-12" style={{
      background: 'linear-gradient(to top, #0a0510, #0d0613)'
    }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 justify-center md:justify-start">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bitfeed</h3>
            <p className="text-gray-400">Everything AI. One Platform.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/tos" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="text-gray-400 hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Application</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-gray-400 hover:text-white">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 pointer-events-none">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 pointer-events-none">
                  Contributing
                </Link>
              </li>
              <li>
                <Link href="/resources/changelog" className="text-gray-400 hover:text-white">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="/resources/examples" className="text-gray-400 hover:text-white">
                  Examples
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              {/*
              <li>
              <Link 
                href={`mailto:${encodeURIComponent('hello@bitfeed.ai')}?subject=${encodeURIComponent('Hello!')}`}
                className="text-gray-400 hover:text-white"
              >
                Email
              </Link>
              </li>
              */}
              <li>
                <Link href="#" className="text-gray-600 pointer-events-none">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            
            <div className="flex space-x-4 items-center mb-3">
              <Link href="https://github.com/bitfeedai" className="icon-gradient">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://x.com/bitfeedai" className="icon-gradient">
                <Image src="/social/x_dark.svg" alt="X Logo" width={20} height={20} />
              </Link>
              <Link href="https://www.linkedin.com/company/bitfeed" className="icon-gradient">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
            <p className="text-gray-400 text-sm">hello@bitfeed.ai</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bitfeed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}