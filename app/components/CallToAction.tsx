"use client"

import { Button } from "./ui/Button"
import { WaitlistDialog } from "./WaitlistDialog"


export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-purple-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Enhance Your Web Experience?</h2>
        <p className="text-xl mb-8 text-white">Join the Bitfeed community and start creating powerful Feeds today.</p>
        <div className="flex gap-8 justify-center">
          <WaitlistDialog 
            trigger={
              <Button size="lg" variant="outline">
                Get Started
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
}