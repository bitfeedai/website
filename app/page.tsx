import Header from "./components/Navigation"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Resources from "./components/Resources"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen grid-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Resources />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

