import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Resources from "./components/Resources"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
// import { SmoothScroll } from "./components/SmoothScroll"

export default function Home() {
  return (
    // <SmoothScroll>
      <div className="flex flex-col min-h-screen grid-background" style={{
        background: 'linear-gradient(135deg, rgba(20, 5, 25, 0.7) 0%, rgba(12, 3, 15, 0.5) 50%, transparent 100%), linear-gradient(225deg, rgba(18, 4, 22, 0.6) 0%, rgba(10, 2, 13, 0.4) 50%, transparent 100%), linear-gradient(45deg, rgba(15, 4, 18, 0.5) 0%, transparent 60%), linear-gradient(to bottom, rgb(8, 2, 10), rgb(6, 2, 8))'
      }}>
        <Header />
        <main>
          <Hero />
          <Features />
          <Resources />
          <CallToAction />
        </main>
        <Footer />
      </div>
    // </SmoothScroll>
  )
}

