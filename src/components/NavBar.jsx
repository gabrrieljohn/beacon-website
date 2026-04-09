import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['hero', 'arsenal', 'formula']
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id === 'hero' ? 'home' : id === 'arsenal' ? 'services' : 'process'
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  const handleNav = (sectionId, label) => {
    if (isHome) {
      scrollTo(sectionId)
    } else {
      navigate('/', { state: { scrollTo: sectionId } })
    }
  }

  const handleLogoClick = () => {
    if (isHome) {
      scrollTo('hero')
    } else {
      navigate('/')
    }
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      {/* Logo */}
      <div
        className="nav-logo"
        onClick={handleLogoClick}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleLogoClick()}
      >
        <img
          src="/logo.png"
          alt="Beacon Media Co. Logo"
          className="nav-logo-icon"
          style={{ width: '120px', height: '120px', objectFit: 'contain', filter: 'brightness(0) saturate(100%) invert(97%) sepia(67%) saturate(3000%) hue-rotate(130deg) brightness(1.05)' }}
        />
        <span className="nav-logo-text">Beacon Media Co.</span>
      </div>

      {/* Links */}
      <ul className="nav-links" role="list">
        <li>
          <a
            id="nav-home"
            className={isHome && active === 'home' ? 'active' : ''}
            onClick={() => handleNav('hero', 'home')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && handleNav('hero', 'home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            id="nav-services"
            className={isHome && active === 'services' ? 'active' : ''}
            onClick={() => handleNav('arsenal', 'services')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && handleNav('arsenal', 'services')}
          >
            Services
          </a>
        </li>
        <li>
          <a
            id="nav-process"
            className={isHome && active === 'process' ? 'active' : ''}
            onClick={() => handleNav('formula', 'process')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && handleNav('formula', 'process')}
          >
            Process
          </a>
        </li>
      </ul>

      {/* CTA */}
      <a
        id="nav-book-call"
        href="https://calendly.com/admin-beaconmedia-co/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-book-call"
        aria-label="Book a strategy call"
      >
        Book a Call
      </a>
    </nav>
  )
}
