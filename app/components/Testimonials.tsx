import Image from "next/image"


const testimonials = [
  {
    quote: "StreamLine has revolutionized our team's workflow. It's intuitive and powerful!",
    author: "Jane Doe",
    role: "CEO, TechCorp",
  },
  {
    quote: "We've seen a 30% increase in productivity since adopting StreamLine. It's a game-changer.",
    author: "John Smith",
    role: "CTO, InnovateCo",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={`/placeholder.svg?height=40&width=40`}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}