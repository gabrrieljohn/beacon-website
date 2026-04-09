import { Link, useLocation } from 'react-router-dom'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer({ onPrivacyClick, onTermsClick }) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <img
                src="/logo.png"
                alt="Beacon Media Co. Logo"
                style={{ width: '100px', height: '100px', objectFit: 'contain', filter: 'brightness(0) saturate(100%) invert(97%) sepia(67%) saturate(3000%) hue-rotate(130deg) brightness(1.05)' }}
              />
              Beacon Media Co.
            </div>
            <p className="footer-tagline">
              We don't run ads. We grow businesses — with strategy, creativity, and relentless execution.
            </p>
          </div>

          {/* Link groups */}
          <div className="footer-links">
            <div className="footer-link-group">
              <div className="footer-link-heading">Navigate</div>
              <ul className="footer-link-list">
                {isHome ? (
                  <>
                    <li><a onClick={() => scrollTo('hero')} role="button" tabIndex={0}>Home</a></li>
                    <li><a onClick={() => scrollTo('arsenal')} role="button" tabIndex={0}>Services</a></li>
                    <li><a onClick={() => scrollTo('formula')} role="button" tabIndex={0}>Process</a></li>
                  </>
                ) : (
                  <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/#arsenal">Services</Link></li>
                    <li><Link to="/#formula">Process</Link></li>
                  </>
                )}
                <li><Link to="/blog">The Brief</Link></li>
              </ul>
            </div>

            <div className="footer-link-group">
              <div className="footer-link-heading">Connect</div>
              <ul className="footer-link-list">
                <li><a href="https://www.instagram.com/beaconmediacompany/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a></li>
                <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
                <li><a href="#" aria-label="Twitter / X">Twitter</a></li>
              </ul>
            </div>

            <div className="footer-link-group">
              <div className="footer-link-heading">Work With Us</div>
              <ul className="footer-link-list">
                <li><a href="https://calendly.com/admin-beaconmedia-co/30min" target="_blank" rel="noopener noreferrer" id="footer-book-call">Book a Call</a></li>
              </ul>
            </div>
          </div>

          {/* Socials */}
          <div className="footer-socials" aria-label="Social media links">
            <a href="https://www.instagram.com/beaconmediacompany/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">IG</a>
            <a href="#" className="social-link" aria-label="LinkedIn">in</a>
            <a href="#" className="social-link" aria-label="Twitter">𝕏</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2024 Beacon Media Co. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" id="footer-privacy" onClick={(e) => { e.preventDefault(); onPrivacyClick() }}>Privacy Policy</a>
            <a href="#" id="footer-terms" onClick={(e) => { e.preventDefault(); onTermsClick() }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
