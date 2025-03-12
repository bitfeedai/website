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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Changelog</h2>
          <div className="flex justify-center text-center text-gray-700 mb-12 p-4">
            <div className="w-2/3 md:w-1/2">
              <div className="max-w-3xl mx-auto space-y-8 px-4 sm:px-6">
                {/* Note */}
                <div className="space-y-10">
                  <div className="flex flex-wrap gap-2 justify-center">
                      <Badge 
                        variant="secondary" 
                        className={`
                          bg-[#a91573]/10 text-[#a91573] hover:bg-[#a91573]/20 border-none transition-colors 
                          duration-200 font-medium px-3 py-1 p-8 md:p-2
                        `}
                      >
                        Only major version updates will be shown here. Recent and smaller updates
                        will be mentioned on Bitfeed's related social channels and github.
                      </Badge>
                  </div>
                </div>
                {/* Changelist */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  </h2>
                  <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                    Development is currently in progress. 
                    Our initial change will be logged upon launch very soon.
                  </p>
                  <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
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