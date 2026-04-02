import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalPull() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="final-pull" ref={ref}>
      {/* Decorative glow orbs */}
      <div className="fp-glow fp-glow-cyan" aria-hidden="true" />
      <div className="fp-glow fp-glow-magenta" aria-hidden="true" />

      <div className="fp-inner">
        {/* Headline */}
        <motion.h2
          className="fp-headline"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="fp-line">The plan is ready to be built.</span>
          <span className="fp-line">
            The session is <span className="fp-cyan">free.</span>
          </span>
          <span className="fp-line">
            The only question is <span className="fp-cyan fp-cyan-pulse">when.</span>
          </span>
        </motion.h2>

        {/* Divider line */}
        <motion.div
          className="fp-divider"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            id="final-cta-btn"
            href="#"
            className="fp-cta-btn"
            aria-label="Claim your free strategy session"
          >
            <span className="fp-cta-text">Claim Your Free Strategy</span>
            <span className="fp-cta-arrow">→</span>
          </a>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="fp-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
        >
          FREE TO CLAIM. YOURS TO KEEP. TAKES 20 MINUTES.
        </motion.p>
      </div>
    </section>
  )
}
