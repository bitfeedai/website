import { Wand2, ToyBrick, Share2, Code, Brain, Zap,  } from "lucide-react"


const features = [
  {
    icon: Wand2,
    title: "Bits",
    description: "Create powerful widgets (Bits) using AI, no coding required.",
    url: "/resources/examples" // /bits"
  },
  {
    icon: ToyBrick,
    title: "Feeds",
    description: "Add bits to your feeds to create dashboards of any type and subject. Track, generate and publish content and information.",
    url: "/resources/examples" // /feeds"
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your bits and feeds publicly or privately.",
  },
  {
    icon: Code,
    title: "API integrations",
    description: "Comming soon.." // "Seamlessly integrate and connect any API.",
  },
  {
    icon: Brain,
    title: "AI-Agent Integrations",
    description: "Comming soon.." // "Seamlessly integrate AI Agents.",
  },
  {
    icon: Zap,
    title: "Automations",
    description: "Comming soon.." // "Seamlessly connect Bits to create workflows for an instant productivity boost.",
  },

]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#050206] via-[#060307] to-[#080309] relative" style={{
      background: 'linear-gradient(135deg, rgba(35, 12, 42, 0.65) 0%, rgba(20, 7, 25, 0.45) 40%, rgba(5, 2, 6, 1) 80%), linear-gradient(225deg, rgba(30, 10, 38, 0.55) 0%, rgba(15, 5, 20, 0.35) 50%, rgba(5, 2, 6, 1) 100%), linear-gradient(45deg, rgba(25, 8, 32, 0.45) 0%, transparent 70%), linear-gradient(to bottom, #050206, #060307, #080309)'
    }}>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Building Blocks</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 icon-gradient" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}
              {
                feature?.url && (
                  <span className="text-blue-600">
                    <a href={feature.url}> See examples</a>
                  </span>
                )
              }
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}