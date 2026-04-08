import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TermsOfService({ isOpen, onClose }) {
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
          aria-label="Terms of Service"
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
              <h2 className="legal-modal-title">Terms of Service</h2>
              <button className="legal-modal-close" onClick={onClose} aria-label="Close Terms of Service">✕</button>
            </div>

            <div className="legal-modal-body">
              <p className="legal-effective">Effective Date: April 8, 2025 &nbsp;|&nbsp; Last Updated: April 8, 2025</p>

              <p>
                These Terms of Service ("Terms") govern your use of the Beacon Media Co. website and any
                services you engage us to provide. By accessing our website or entering into a service
                agreement with Beacon Media Co. ("we", "us", "Agency"), you agree to be bound by these Terms.
                Please read them carefully.
              </p>

              <h3>1. Our Services</h3>
              <p>Beacon Media Co. provides the following digital marketing services:</p>
              <ul>
                <li><strong>Website Creation</strong> — Conversion-optimised, mobile-first websites with SEO built in</li>
                <li><strong>Social Media Management</strong> — Content strategy, scheduling, community engagement, and brand voice development across social platforms</li>
                <li><strong>Meta Ads</strong> — Paid advertising campaigns on Facebook and Instagram, including audience targeting, creative testing, and transparent ROAS reporting</li>
                <li><strong>SEO Optimisation</strong> — Technical and on-page audits, keyword strategy, and local SEO</li>
                <li><strong>AI Appointment Booking</strong> — Automated lead qualification and calendar booking systems</li>
                <li><strong>Marketing Automations</strong> — CRM pipelines, email and SMS nurture flows, and custom workflow design</li>
              </ul>
              <p>
                We also offer a <strong>free 20-minute strategy session</strong> for prospective clients at no cost
                and with no obligation to engage our paid services.
              </p>

              <h3>2. Free Strategy Session</h3>
              <p>
                The complimentary strategy session is provided in good faith as a demonstration of our
                capabilities. The marketing plan delivered during this session is yours to keep, regardless
                of whether you choose to work with us. Beacon Media Co. makes no guarantee of specific
                outcomes from strategies discussed during the free session.
              </p>
              <p>
                Sessions are booked via Calendly and are subject to availability. We reserve the right to
                reschedule with reasonable notice.
              </p>

              <h3>3. Paid Engagements</h3>
              <p>
                All paid service engagements will be governed by a separate service agreement or proposal
                outlining specific deliverables, timelines, and fees. In the absence of a signed agreement,
                these Terms apply in full.
              </p>
              <p><strong>Payment:</strong> Fees are due as specified in your service agreement. Late payments
              may result in a pause of services until the outstanding balance is settled.</p>
              <p><strong>Refunds:</strong> Due to the nature of digital marketing services, fees for work already
              commenced are non-refundable. Any exceptions will be stated explicitly in your service agreement.</p>

              <h3>4. Client Responsibilities</h3>
              <p>To enable us to deliver results, you agree to:</p>
              <ul>
                <li>Provide timely access to required accounts, assets, branding materials, and logins</li>
                <li>Supply accurate business information and marketing goals</li>
                <li>Review and approve deliverables within agreed timeframes (delays caused by late feedback extend project timelines accordingly)</li>
                <li>Ensure that all materials you provide to us — including logos, images, copy, and product information — are either owned by you or properly licensed</li>
                <li>Comply with all applicable laws, including advertising regulations and platform terms of service</li>
              </ul>

              <h3>5. No Guarantee of Results</h3>
              <p>
                Digital marketing outcomes depend on numerous factors beyond our control, including platform
                algorithm changes, market conditions, competitor activity, ad spend levels, and the quality
                of your product or service. Beacon Media Co. does not guarantee specific results including
                but not limited to: search rankings, lead volumes, conversion rates, revenue figures,
                or return on ad spend.
              </p>
              <p>
                We commit to applying professional, industry-standard practices and to optimising campaigns
                consistently throughout the engagement.
              </p>

              <h3>6. Intellectual Property</h3>
              <p>
                Upon full payment of all fees, any custom creative assets (copy, designs, ad creatives,
                website content) developed specifically for your business are owned by you. Beacon Media Co.
                retains ownership of all proprietary systems, methodologies, templates, frameworks, and tools
                used in the delivery of services.
              </p>
              <p>
                You grant Beacon Media Co. a non-exclusive licence to access and use your brand assets
                (logos, imagery, brand guidelines) solely for the purpose of delivering your contracted services.
              </p>
              <p>
                We may feature your business as a case study or portfolio example unless you request otherwise
                in writing.
              </p>

              <h3>7. Confidentiality</h3>
              <p>
                Both parties agree to keep confidential any proprietary business information, strategies,
                or sensitive data shared during the engagement. This obligation does not apply to information
                that is publicly available or independently developed. This confidentiality obligation survives
                termination of the engagement for a period of two (2) years.
              </p>

              <h3>8. Data & Privacy</h3>
              <p>
                Where we handle personal data belonging to your customers (for example, when running Meta
                Ads or managing CRM automations), you remain the Data Controller and are responsible for
                ensuring your business complies with applicable data protection laws. Beacon Media Co. acts
                as a Data Processor and will only process such data in accordance with your instructions and
                applicable law.
              </p>
              <p>
                Our collection and use of your personal data is governed by our{' '}
                <strong>Privacy Policy</strong>, which forms part of these Terms.
              </p>

              <h3>9. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, Beacon Media Co.'s total liability to you for any
                claim arising from or related to our services shall not exceed the total fees paid by you
                to us in the three (3) months preceding the claim.
              </p>
              <p>
                In no event shall Beacon Media Co. be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to: loss of profits, loss
                of revenue, loss of data, or business interruption — even if we have been advised of the
                possibility of such damages.
              </p>

              <h3>10. Indemnification</h3>
              <p>You agree to defend, indemnify, and hold harmless Beacon Media Co. from any claims,
              damages, costs, and legal fees arising from:</p>
              <ul>
                <li>Materials or content you provide to us</li>
                <li>Your misuse or modification of our work product</li>
                <li>Claims that your content or instructions infringe third-party intellectual property rights</li>
                <li>Your violation of any applicable law or platform policy</li>
              </ul>

              <h3>11. Termination</h3>
              <p>
                Either party may terminate an ongoing service engagement with <strong>fourteen (14) days'
                written notice</strong>. You remain responsible for fees accrued up to the termination date.
              </p>
              <p>
                Upon termination, Beacon Media Co. will transfer all relevant access credentials, assets,
                and data exports within ten (10) business days.
              </p>
              <p>
                We reserve the right to immediately suspend or terminate services if you breach these Terms,
                including failure to make payment or providing false information.
              </p>

              <h3>12. Independent Contractor</h3>
              <p>
                Beacon Media Co. operates as an independent contractor. Nothing in these Terms creates an
                employment, partnership, or joint venture relationship between the parties. We may use
                subcontractors to assist in service delivery while remaining responsible for the quality
                of work delivered to you.
              </p>

              <h3>13. Modifications to These Terms</h3>
              <p>
                We reserve the right to update these Terms at any time. Material changes will be communicated
                via email or notice on our website. Continued use of our services after such notice constitutes
                your acceptance of the updated Terms.
              </p>

              <h3>14. Governing Law</h3>
              <p>
                These Terms are governed by and construed in accordance with applicable law. Any disputes
                arising from these Terms or your engagement with Beacon Media Co. shall first be subject
                to good-faith negotiation between the parties before escalating to formal legal proceedings.
              </p>

              <h3>15. Entire Agreement</h3>
              <p>
                These Terms, together with any signed service agreement or proposal, constitute the entire
                agreement between you and Beacon Media Co. regarding our services. Any prior representations,
                understandings, or agreements are superseded by these Terms.
              </p>

              <h3>16. Contact Us</h3>
              <p>
                For questions about these Terms or your engagement with us, reach out at:
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
