import { useState } from 'react'
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
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

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
        <Footer onPrivacyClick={() => setPrivacyOpen(true)} onTermsClick={() => setTermsOpen(true)} />
      </div>
      <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsOfService isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  )
}
