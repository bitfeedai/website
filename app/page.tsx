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
        background: 'linear-gradient(135deg, rgba(30, 10, 35, 0.6) 0%, rgba(15, 5, 18, 0.4) 50%, transparent 100%), linear-gradient(225deg, rgba(25, 8, 30, 0.5) 0%, rgba(12, 4, 16, 0.3) 50%, transparent 100%), linear-gradient(45deg, rgba(20, 6, 25, 0.4) 0%, transparent 60%), linear-gradient(to bottom, rgb(8, 3, 9), rgb(5, 2, 6))'
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

