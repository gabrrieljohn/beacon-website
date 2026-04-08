import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const BARS = [45, 65, 50, 80, 60, 90, 70, 85]

export default function StrategySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  }

  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  }

  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  return (
    <section id="strategy" className="strategy-section" ref={ref}>
      <motion.div
        className="strategy-inner"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Dashboard visual */}
        <motion.div className="strategy-dashboard" variants={slideLeft}>
          <div className="glass-card dashboard-card">
            {/* Metrics grid */}
            <div className="dashboard-metrics">
              <div className="metric-item">
                <div className="metric-label">ROAS</div>
                <div className="metric-value">12.4x</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Lead Gen</div>
                <div className="metric-value magenta">+340%</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Target Audience</div>
                <div className="metric-value">85%</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Growth Nodes</div>
                <div className="metric-value">9</div>
              </div>
            </div>

            {/* Chart bars */}
            <div className="chart-bar-row">
              {BARS.map((h, i) => (
                <motion.div
                  key={i}
                  className={`chart-bar${i % 3 === 2 ? ' magenta' : ''}`}
                  style={{ height: `${h}%` }}
                  initial={{ scaleY: 0, originY: 1 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
            </div>

            {/* Channels label */}
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Instagram', 'LinkedIn', 'Google', 'TikTok'].map(ch => (
                <span key={ch} style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--on-surface-variant)',
                  background: 'rgba(53,52,59,0.5)',
                  borderRadius: '6px',
                  padding: '0.25rem 0.6rem',
                  border: '1px solid var(--ghost-border)'
                }}>{ch}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div className="strategy-content" variants={containerVariants}>
          <motion.div variants={fadeUp}>
            <span className="section-badge">The Reality</span>
          </motion.div>

          <motion.h2 className="strategy-headline" variants={fadeUp}>
            The difference between{' '}
            <span className="highlight">busy</span> and{' '}
            <span className="highlight">growing</span> is a clear{' '}
            <span className="highlight">strategy.</span>
          </motion.h2>

          <motion.p className="strategy-body" variants={fadeUp}>
            The businesses growing fastest in your area aren't necessarily spending more. They're{' '}
            <strong>spending smarter</strong> — with a clear plan behind every post, every ad, and every rupee.
          </motion.p>

          <motion.p className="strategy-cta-line" variants={fadeUp}>
            We'll build that plan for you.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a id="strategy-free-btn" href="https://calendly.com/admin-beaconmedia-co/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label="Get your free strategy">
              Get My Free Strategy →
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
