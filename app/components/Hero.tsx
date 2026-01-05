import { Button } from "./ui/Button"
import WaitinglistBtn from "./WaitinglistBtn"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-100 to-purple-100 py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-gradient-mixed">Smarter Feeds</span>🧠
          <span className="text-gradient-mixed">Daily</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          The AI-powered hub to Discover, Build and Share Bits and Feeds
        </p>
        <div className="flex gap-8 justify-center">
            <WaitinglistBtn buttonType={"default"} buttonText={"Get Notified 🚀"} />
        </div>
      </div>
    </section>
  )
}