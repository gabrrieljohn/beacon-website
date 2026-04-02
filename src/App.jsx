import AnimatedBackground from './components/AnimatedBackground'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import StrategySection from './components/StrategySection'
import USPSection from './components/USPSection'
import OurArsenal from './components/OurArsenal'
import TheFormula from './components/TheFormula'
import FinalPull from './components/FinalPull'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <NavBar />
      <div className="section-wrapper">
        <HeroSection />
        <StrategySection />
        <USPSection />
        <OurArsenal />
        <TheFormula />
        <FinalPull />
        <FaqSection />
        <Footer />
      </div>
    </>
  )
}
