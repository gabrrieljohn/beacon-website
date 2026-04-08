import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PrivacyPolicy({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="legal-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Privacy Policy"
        >
          <motion.div
            className="legal-modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="legal-modal-header">
              <h2 className="legal-modal-title">Privacy Policy</h2>
              <button className="legal-modal-close" onClick={onClose} aria-label="Close Privacy Policy">✕</button>
            </div>

            <div className="legal-modal-body">
              <p className="legal-effective">Effective Date: April 8, 2025 &nbsp;|&nbsp; Last Updated: April 8, 2025</p>

              <p>
                Beacon Media Co. ("we", "us", or "our") is a digital marketing agency providing website creation,
                social media management, Meta advertising, SEO optimisation, AI appointment booking, and marketing
                automation services. This Privacy Policy explains how we collect, use, and protect your personal
                information when you visit our website or engage with our services.
              </p>

              <h3>1. Information We Collect</h3>
              <p>We collect information in two ways:</p>
              <p><strong>Information you provide voluntarily:</strong></p>
              <ul>
                <li>Full name and business name</li>
                <li>Email address and phone number</li>
                <li>Industry, business type, and marketing goals</li>
                <li>Any information shared during your strategy session booking or consultation</li>
              </ul>
              <p><strong>Information collected automatically:</strong></p>
              <ul>
                <li>IP address, browser type, and device information</li>
                <li>Pages visited, time spent on site, and referral sources</li>
                <li>Interaction data collected via cookies and tracking pixels</li>
              </ul>

              <h3>2. How We Use Your Information</h3>
              <p>We use your information to:</p>
              <ul>
                <li>Prepare and deliver your free strategy session with relevant insights about your market and competitors</li>
                <li>Deliver contracted marketing services (website creation, social media, Meta ads, SEO, automations, and AI booking)</li>
                <li>Communicate with you about your project, updates, and deliverables</li>
                <li>Send marketing communications about our services (you may opt out at any time)</li>
                <li>Improve our website and services through analytics</li>
                <li>Comply with applicable legal obligations</li>
              </ul>

              <h3>3. Third-Party Services We Use</h3>
              <p>
                To deliver our services and operate our website, we work with the following third-party platforms.
                Each is bound by their own privacy and security obligations:
              </p>
              <ul>
                <li><strong>Calendly</strong> — For booking strategy sessions. Your name, email, and scheduling data are processed by Calendly.</li>
                <li><strong>Meta (Facebook & Instagram)</strong> — For running paid ad campaigns on behalf of clients and for our own advertising. Meta may collect data via pixels on our site.</li>
                <li><strong>Google Analytics</strong> — For tracking website traffic and user behaviour. Data is anonymised and aggregated.</li>
                <li><strong>CRM & Automation Platforms</strong> — For client onboarding, email sequences, and pipeline management.</li>
                <li><strong>Instagram</strong> — We manage client social media accounts on Instagram as part of our services.</li>
              </ul>
              <p>We do not sell your personal information to any third party.</p>

              <h3>4. Cookies & Tracking</h3>
              <p>
                Our website uses cookies and similar tracking technologies to improve your browsing experience and
                measure the effectiveness of our marketing. These include:
              </p>
              <ul>
                <li><strong>Essential cookies</strong> — Required for basic website functionality</li>
                <li><strong>Analytics cookies</strong> — Help us understand how visitors interact with the site</li>
                <li><strong>Marketing cookies</strong> — Used to deliver relevant advertising (e.g. Meta Pixel)</li>
              </ul>
              <p>
                You can control cookie preferences through your browser settings. Note that disabling certain
                cookies may affect website functionality.
              </p>

              <h3>5. Data Retention</h3>
              <p>
                We retain your personal information only for as long as necessary to deliver our services, maintain
                our business records, or comply with legal requirements. If you request deletion of your data, we
                will action this within 30 days unless we are legally required to retain it.
              </p>

              <h3>6. Your Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li><strong>Access</strong> — Request a copy of the personal data we hold about you</li>
                <li><strong>Correction</strong> — Ask us to correct inaccurate or incomplete information</li>
                <li><strong>Deletion</strong> — Request that we delete your personal data</li>
                <li><strong>Opt-out</strong> — Unsubscribe from marketing communications at any time</li>
                <li><strong>Data portability</strong> — Receive your data in a portable format where applicable</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{' '}
                <a href="mailto:admin@beaconmedia-co.com">admin@beaconmedia-co.com</a>{' '}
                with the subject line "Privacy Request." We will respond within 30 days.
              </p>

              <h3>7. Data Security</h3>
              <p>
                We take the security of your information seriously. We implement industry-standard technical and
                organisational measures to protect your data from unauthorised access, loss, or disclosure. These
                include access controls, secure communication protocols, and limited data access on a need-to-know basis.
              </p>

              <h3>8. Children's Privacy</h3>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect
                personal data from minors. If you believe we have inadvertently collected such information,
                please contact us immediately so we can take appropriate action.
              </p>

              <h3>9. External Links</h3>
              <p>
                Our website may contain links to external platforms (e.g. Instagram, Calendly). We are not
                responsible for the privacy practices of these third-party websites and encourage you to review
                their respective privacy policies.
              </p>

              <h3>10. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our services, legal
                requirements, or industry standards. When we do, we will update the "Last Updated" date at the
                top of this page. Continued use of our website following any update constitutes acceptance of
                the revised policy.
              </p>

              <h3>11. Contact Us</h3>
              <p>
                For any privacy-related questions or requests, contact us at:
              </p>
              <p>
                <strong>Beacon Media Co.</strong><br />
                Email: <a href="mailto:admin@beaconmedia-co.com">admin@beaconmedia-co.com</a><br />
                Instagram: <a href="https://www.instagram.com/beaconmediacompany/" target="_blank" rel="noopener noreferrer">@beaconmediacompany</a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
