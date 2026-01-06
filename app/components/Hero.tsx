import { Button } from "./ui/Button"
import WaitinglistBtn from "./WaitinglistBtn"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#050206] via-[#060307] to-[#080309] py-32 relative" style={{
      background: 'linear-gradient(135deg, rgba(35, 12, 42, 0.7) 0%, rgba(20, 7, 25, 0.5) 40%, rgba(5, 2, 6, 1) 80%), linear-gradient(225deg, rgba(30, 10, 38, 0.6) 0%, rgba(15, 5, 20, 0.4) 50%, rgba(5, 2, 6, 1) 100%), linear-gradient(45deg, rgba(25, 8, 32, 0.5) 0%, transparent 70%), linear-gradient(to bottom right, #050206, #060307, #080309)'
    }}>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-gradient-mixed">Smarter Feeds</span>🧠
          <span className="text-gradient-mixed">Daily</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          The AI-powered hub to Discover, Build and Share Bits and Feeds
        </p>
        <div className="flex gap-8 justify-center">
            <WaitinglistBtn buttonType={"default"} buttonText={"Get Notified 🚀"} />
        </div>
      </div>
    </section>
  )
}