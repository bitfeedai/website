import Link from "next/link"


const resources = [
  { title: "About", href: "/resources/about" },
  { title: "FAQ", href: "/resources/faq" },
  { title: "Changelog", href: "/resources/changelog" },
]

export default function Resources() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#050206] via-[#060307] to-[#080309] relative" style={{
      background: 'linear-gradient(135deg, rgba(35, 12, 42, 0.65) 0%, rgba(20, 7, 25, 0.45) 40%, rgba(5, 2, 6, 1) 80%), linear-gradient(225deg, rgba(30, 10, 38, 0.55) 0%, rgba(15, 5, 20, 0.35) 50%, rgba(5, 2, 6, 1) 100%), linear-gradient(45deg, rgba(25, 8, 32, 0.45) 0%, transparent 70%), linear-gradient(to bottom right, #050206, #060307, #080309)'
    }}>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Link
              key={index}
              href={resource.href}
              className="block p-6 bg-gradient-to-br from-[#060307] to-[#080309] rounded-lg shadow-md hover:shadow-lg transition-shadow border border-purple-900/10"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{resource.title}</h3>
              <p className="text-gray-300">Learn more about Bitfeed and how to use it effectively.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}