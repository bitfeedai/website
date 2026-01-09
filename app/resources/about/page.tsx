import Header from "../../components/Header"
import CallToAction from "../../components/CallToAction"
import Footer from "../../components/Footer"
import { Badge } from "@/components/ui/badge"


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#050206] via-[#060307] to-[#080309]" style={{
      background: 'linear-gradient(135deg, rgba(30, 10, 35, 0.6) 0%, rgba(15, 5, 18, 0.4) 50%, transparent 100%), linear-gradient(225deg, rgba(25, 8, 30, 0.5) 0%, rgba(12, 4, 16, 0.3) 50%, transparent 100%), linear-gradient(45deg, rgba(20, 6, 25, 0.4) 0%, transparent 60%), linear-gradient(to bottom, #080309, #060307, #050206)'
    }}>
      <Header />
      <main>
        <div className="py-32">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">About</h2>
          <div className="flex justify-center text-center text-gray-200 mb-12 p-4">
            <div className="w-2/3 md:w-1/2">
              <div className="max-w-3xl mx-auto space-y-8 px-4 sm:px-6">
                {/* Introduction */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Your Personal AI-Powered Hub
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Bitfeed lets you create personalized feeds powered by AI, built from small, flexible widgets called Bits. 
                    These Bits can be combined to craft entire custom dashboards and informative feeds, 
                    giving you full control over how you organize and display information and  
                    achieve almost anything you can imagine:
                  </p>
                </div>
                {/* Features List */}
                <div className="space-y-10">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      "RSS Feeds",
                      "Dynamic Maps",
                      "Custom Forms",
                      "Digital Flyers",
                      "Targeted Ads",
                      "External Tools",
                      "Social Media Accounts",
                      "Track Information",
                      "Filter Content",
                      "Interactive Charts",
                      "3D Animations"
                    ].map((item, index) => (
                      <Badge 
                        key={item}
                        variant="secondary" 
                        className={`
                          ${index % 2 === 0 
                            ? "bg-[#d55307]/10 text-[#d55307] hover:bg-[#d55307]/20" 
                            : "bg-[#a91573]/10 text-[#a91573] hover:bg-[#a91573]/20"
                          }
                          border-none
                          transition-colors duration-200
                          font-medium
                          px-3 py-1
                        `}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Checkout our documentation or examples to learn more about Bitfeed and how it works.
                    {/* or simply get started on app.bitfeed.ai */}
                  </p>
                </div>
                {/* Contributing */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Open Source & Accessibility
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    We're committed to open-source software development and believe in the democratization of information. By making our codebase public and maintaining transparency in our development process, we aim to foster innovation and collaboration within the developer community.
                  </p>
                </div>
                {/* Community */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Community
                  </h2>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-200">
                    Collaboration
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Bitfeed will only thrive on community collaboration. 
                    Your idea's and creations will affect and shape the future of personal Feeds. 
                  </p>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Soon, creators, developers, and AI enthusiasts will come together in our Discord community to build and share their Bits and Feeds.
                    Whether you're planning to create informative dashboards, integrate services, or automate tasks, 
                    you'll be able to connect with fellow builders to make the most of Bitfeed's capabilities. 
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-200">
                    Future
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    We envision a future where everyone can find inspiration, share creations, and collectively reimagine how content and information is managed. Together, we're building towards a more connected and intelligent way of handling digital information ✨

                  </p>
                </div>
                {/* Contributing */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Contributing
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    More information will follow soon.
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