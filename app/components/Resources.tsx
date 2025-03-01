import Link from "next/link"


const resources = [
  { title: "About", href: "/resources/about" },
  { title: "FAQ", href: "/resources/faq" },
  { title: "Changelog", href: "/resources/changelog" },
]

export default function Resources() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Link
              key={index}
              href={resource.href}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{resource.title}</h3>
              <p className="text-gray-600">Learn more about Bitfeed and how to use it effectively.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}