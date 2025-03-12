import Header from "../../components/Header"
import CallToAction from "../../components/CallToAction"
import Footer from "../../components/Footer"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <div className="py-32">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Terms of Service</h2>
          <div className="flex justify-center text-center text-gray-700 mb-12 p-4">
            <div className="w-2/3 md:w-1/2">
              <div className="max-w-3xl mx-auto space-y-8 p-4 sm:p-6 bg-gray-100 rounded-sm">
                <div className="space-y-4 text-left">
                  <p className="text-sm text-gray-500 mb-6">Last updated: 1-3-'25</p>
                  <h3 className="text-xl font-semibold">1. Acceptance of Terms</h3>
                  <p className="text-gray-600">By accessing and using Bitfeed, you agree to these terms and conditions.</p>
                  <h3 className="text-xl font-semibold">2. User Responsibilities</h3>
                  <p className="text-gray-600">You are responsible for your API keys, content, and usage of external services.</p>
                  <h3 className="text-xl font-semibold">3. Service Availability</h3>
                  <p className="text-gray-600">Bitfeed is provided "as is" without warranties of any kind.</p>
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