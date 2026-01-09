import Header from "../../components/Header"
import CallToAction from "../../components/CallToAction"
import Footer from "../../components/Footer"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#050206] via-[#060307] to-[#080309]" style={{
      background: 'linear-gradient(135deg, rgba(30, 10, 35, 0.6) 0%, rgba(15, 5, 18, 0.4) 50%, transparent 100%), linear-gradient(225deg, rgba(25, 8, 30, 0.5) 0%, rgba(12, 4, 16, 0.3) 50%, transparent 100%), linear-gradient(45deg, rgba(20, 6, 25, 0.4) 0%, transparent 60%), linear-gradient(to bottom, #080309, #060307, #050206)'
    }}>
      <Header />
      <main>
        <div className="py-32">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Terms of Service</h2>
          <div className="flex justify-center text-center text-gray-200 mb-12 p-4">
            <div className="w-2/3 md:w-1/2">
              <div className="max-w-3xl mx-auto space-y-8 p-4 sm:p-6 bg-gradient-to-br from-[#060307] to-[#080309] rounded-sm border border-purple-900/10">
                <div className="space-y-4 text-left">
                  <p className="text-sm text-gray-400 mb-6">Last updated: 1-3-'25</p>
                  <h3 className="text-xl font-semibold text-white">1. Acceptance of Terms</h3>
                  <p className="text-gray-300">By accessing and using Bitfeed, you agree to these terms and conditions.</p>
                  <h3 className="text-xl font-semibold text-white">2. User Responsibilities</h3>
                  <p className="text-gray-300">You are responsible for your API keys, content, and usage of external services.</p>
                  <h3 className="text-xl font-semibold text-white">3. Service Availability</h3>
                  <p className="text-gray-300">Bitfeed is provided "as is" without warranties of any kind.</p>
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