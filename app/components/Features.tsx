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
    <section id="features" className="py-20 bg-white/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Building Blocks</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 icon-gradient" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}
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