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
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Privacy Policy</h2>
        <div className="flex justify-center text-center text-gray-700 mb-12 p-4">
            <div className="w-2/3 md:w-1/2">
              <div className="max-w-3xl mx-auto space-y-8 p-4 sm:p-6 bg-gray-100 rounded-sm">
                <div className="space-y-4 text-left">
                  <p className="text-sm text-gray-500 mb-6">Last updated: 20-3-'25</p>
                  <h3 className="text-xl font-semibold">1. Data Collection</h3>
                  <p className="text-gray-600">We may collect minimal data necessary for service functionality.</p>
                  <h3 className="text-xl font-semibold">2. Email Notifications & Privacy</h3>
                  <p className="text-gray-600">When you sign up for updates, we collect your email address solely for the purpose of notifying you about the app launch and related updates. We do not sell or share your email with third parties. You can unsubscribe anytime using the link in our emails.</p>
                  <h3 className="text-xl font-semibold">3. Third-Party Services</h3>
                  <p className="text-gray-600">External AI services may have their own privacy policies.</p>
                  <h3 className="text-xl font-semibold">4. API Keys</h3>
                  <p className="text-gray-600">Your API keys are encrypted and never shared with third parties.</p>
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