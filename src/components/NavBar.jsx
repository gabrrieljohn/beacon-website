import { useState, useEffect } from 'react'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Update active link based on scroll position
      const sections = ['hero', 'arsenal', 'formula']
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            current = id === 'hero' ? 'home' : id === 'arsenal' ? 'services' : 'process'
          }
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      {/* Logo */}
      <div className="nav-logo" onClick={() => scrollTo('hero')} role="button" tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && scrollTo('hero')}>
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
            className={active === 'home' ? 'active' : ''}
            onClick={() => scrollTo('hero')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && scrollTo('hero')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            id="nav-services"
            className={active === 'services' ? 'active' : ''}
            onClick={() => scrollTo('arsenal')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && scrollTo('arsenal')}
          >
            Services
          </a>
        </li>
        <li>
          <a
            id="nav-process"
            className={active === 'process' ? 'active' : ''}
            onClick={() => scrollTo('formula')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && scrollTo('formula')}
          >
            Process
          </a>
        </li>
      </ul>

      {/* CTA */}
      <a id="nav-book-call" href="#" className="btn-book-call" aria-label="Book a strategy call">
        Book a Call
      </a>
    </nav>
  )
}
