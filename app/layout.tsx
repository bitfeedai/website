import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ScrollToTop } from "./components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bitfeed - Smarter Feeds Daily",
  description:
    "Discover, build and share powerful widgets without writing code. Enhance, automate, and personalize your web experience with Bitfeed."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <ScrollToTop />
    </html>
  )
}

import './globals.css'