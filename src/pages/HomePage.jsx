import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import StrategySection from '../components/StrategySection'
import USPSection from '../components/USPSection'
import OurArsenal from '../components/OurArsenal'
import TheFormula from '../components/TheFormula'
import FinalPull from '../components/FinalPull'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'
import PrivacyPolicy from '../components/PrivacyPolicy'
import TermsOfService from '../components/TermsOfService'

export default function HomePage() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    }
  }, [])

  return (
    <>
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
