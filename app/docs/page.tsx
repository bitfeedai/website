import Header from "../components/Header"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0a0510] via-[#0d0613] to-[#100616]" style={{
      background: 'linear-gradient(135deg, rgba(20, 5, 25, 0.6) 0%, rgba(12, 3, 15, 0.4) 50%, transparent 100%), linear-gradient(225deg, rgba(18, 4, 22, 0.5) 0%, rgba(10, 2, 13, 0.3) 50%, transparent 100%), linear-gradient(45deg, rgba(15, 4, 18, 0.4) 0%, transparent 60%), linear-gradient(to bottom, #100616, #0d0613, #0a0510)'
    }}>
      <Header />
      <main>
        <div className="py-32">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Documentation</h2>
          <div className="flex justify-center text-center text-gray-200 mb-12 p-4">
            <div className="w-2/3 md:w-1/2">
              <div className="max-w-3xl mx-auto space-y-8 px-4 sm:px-6">
                {/* Changelist */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Docs are currently under construction.
                    Please come back later and/or follow us on &nbsp;
                    <Link href="https://x.com/bitfeedai" className="icon-gradient">
                      <span className="font-bold">x.com</span> &nbsp;
                    </Link>
                    for live updates 📢
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}