import Header from "../../components/Header"
import CallToAction from "../../components/CallToAction"
import Footer from "../../components/Footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {

  const faqs = [
    {
      "q": "What is Bitfeed?",
      "a": "Bitfeed is a platform for creating personalized feeds powered by AI. Using small, versatile widgets called Bits, you can build custom dashboards and informative feeds tailored to your needs. Checkout our aboutpage or examples to learn more.",
      "url": ""
    },
    {
      "q": "How does it work?",
      "a": "Bitfeed consists of two major parts, bits and feeds. Bit's can be created using Bitfeed's wizard. Feeds are essentially boards on which bits can be placed. Checkout our documentation page to learn more about how to get started or checkout our examples.",
      "url": ""
    },
    {
      "q": "Is this app free to use?",
      "a": "For creating and reading feeds, Bitfeed is and will remain free. However, for the creation of bits the Bitfeed Wizard is used, which uses external AI-services that requires an API key and come with associated costs. The user can pay these costs directly to the relevant provider when using their own API key. The same applies to the use of Bitfeed without personal API keys, but in this case, the costs will be recalculated by us and may vary depending on our provider’s current pricing and usage limits.",
      "url": ""
    },
    {
      "q": "Is there a community?",
      "a": "As Bitfeed continues to grow, we're seeing increasing interest from creators and developers worldwide. We're currently building a dedicated Discord community to connect all enthusiasts. Stay tuned for the official launch announcement.",
      "url": ""
    },
    {
      "q": "How can I contribute?",
      "a": "More information will follow soon.",
      "url": ""
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#050206] via-[#060307] to-[#080309]" style={{
      background: 'linear-gradient(135deg, rgba(30, 10, 35, 0.6) 0%, rgba(15, 5, 18, 0.4) 50%, transparent 100%), linear-gradient(225deg, rgba(25, 8, 30, 0.5) 0%, rgba(12, 4, 16, 0.3) 50%, transparent 100%), linear-gradient(45deg, rgba(20, 6, 25, 0.4) 0%, transparent 60%), linear-gradient(to bottom, #080309, #060307, #050206)'
    }}>
      <Header />
      <main>
        <div className="py-32">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
          <div className="flex justify-center text-center text-gray-200 mb-12 p-4">
            <div className="w-2/3 md:w-1/2">
              Don't see your question? Feel free to reach out to us on Discord or via email. We're happy to help!
            </div>
          </div>
          <div className="flex justify-center">
            <Accordion type="single" collapsible className="w-2/3 md:w-1/2">
              {faqs.map((faq, index)=> 
                  (
                    <AccordionItem value={`${index+1}`}>
                      <AccordionTrigger>{faq.q}</AccordionTrigger>
                      <AccordionContent>
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  )
                )
              }
            </Accordion>
          </div>
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}