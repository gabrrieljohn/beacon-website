import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CARDS = [
  {
    id: 'websites',
    num: '01',
    icon: '🌐',
    title: 'Website Creation',
    desc: "Your website is your 24/7 salesperson. We build conversion-engineered sites that don't just look stunning — they turn visitors into paying clients. Every pixel earns its place.",
    bullets: ['Conversion-Optimised Design', 'Mobile-First Architecture', 'Speed & SEO Built In'],
    accent: 'cyan',
  },
  {
    id: 'social',
    num: '02',
    icon: '⚡',
    title: 'Social Media Management',
    desc: "Consistent, strategic posting that builds real authority in your space. We don't chase vanity metrics — we engineer content that attracts the clients you actually want.",
    bullets: ['Content Strategy & Calendars', 'Community Engagement', 'Brand Voice Development'],
    accent: 'magenta',
  },
  {
    id: 'ads',
    num: '03',
    icon: '🎯',
    title: 'Meta Ads',
    desc: "Every rupee tracked. Every audience tested. We build ad funnels on Facebook and Instagram that are backed by data and optimised weekly — so your cost per lead keeps dropping.",
    bullets: ['Precision Audience Targeting', 'A/B Creative Testing', 'Transparent ROAS Reporting'],
    accent: 'cyan',
  },
  {
    id: 'seo',
    num: '04',
    icon: '📈',
    title: 'SEO Optimisation',
    desc: "Rank where your customers are searching. We implement proven on-page and technical SEO strategies that compound over time — delivering leads that cost you nothing per click.",
    bullets: ['Technical & On-Page Audits', 'Keyword Strategy', 'Local SEO Domination'],
    accent: 'magenta',
  },
  {
    id: 'booking',
    num: '05',
    icon: '🤖',
    title: 'AI Appointment Booking',
    desc: "Never lose a lead to a slow reply again. Our AI booking systems respond instantly, qualify prospects, and fill your calendar 24/7 — even while you sleep.",
    bullets: ['Instant Lead Response', 'Smart Qualification Flows', 'Calendar Auto-Sync'],
    accent: 'cyan',
  },
  {
    id: 'automations',
    num: '06',
    icon: '⚙️',
    title: 'Automations',
    desc: "Stop doing manually what software can do in seconds. We build custom automations that handle follow-ups, nurture sequences, and reporting — so you focus on closing.",
    bullets: ['CRM & Pipeline Automation', 'Email & SMS Nurture Flows', 'Custom Workflow Design'],
    accent: 'magenta',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }
  })
}

export default function OurArsenal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="arsenal" className="arsenal-section" ref={ref}>
      <div className="arsenal-inner">
        {/* Vertical label */}
        <motion.div
          className="arsenal-label"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          OUR<br />ARSENAL
        </motion.div>

        <div className="arsenal-grid">
          {/* Header */}
          <motion.div
            className="arsenal-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-badge">What We Do</span>
            <h2 className="arsenal-title" style={{ marginTop: '1rem' }}>
              Six weapons.<br />One mission: <span style={{ color: 'var(--glow-cyan)', textShadow: '0 0 30px rgba(0, 251, 251, 0.4)' }}>your growth.</span>
            </h2>
            <p className="arsenal-subtitle">
              Each service is engineered to deliver results independently — and devastatingly together.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="arsenal-cards">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.id}
                id={`arsenal-card-${card.id}`}
                className={`arsenal-card ${card.accent === 'magenta' ? 'magenta-card' : 'cyan-card'}`}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                whileHover={{ y: -6 }}
              >
                <div className="card-number">{card.num}</div>
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <ul className="card-bullets">
                  {card.bullets.map(b => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Section CTA */}
          <motion.div
            className="arsenal-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p className="arsenal-cta-label">Ready to Deploy?</p>
            <a
              id="arsenal-cta-btn"
              href="#"
              className="btn-cta-glow"
              aria-label="Claim your free strategy session"
            >
              Claim Your Strategy Session →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
