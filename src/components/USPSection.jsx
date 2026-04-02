import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function USPSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="usp" className="usp-section" ref={ref}>
      {/* Ghost watermark */}
      <div className="usp-watermark" aria-hidden="true">FREE</div>

      <motion.div
        className="usp-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={scaleIn}>
          <div className="glass-card usp-card">
            <motion.div variants={fadeUp}>
              <span className="guarantee-badge">
                ✦ Our Guarantee
              </span>
            </motion.div>

            <motion.h2 className="usp-headline" variants={fadeUp}>
              We prove our thinking{' '}
              <span className="highlight">before asking</span>{' '}
              for your business.
            </motion.h2>

            <motion.p className="usp-body" variants={fadeUp}>
              You get a free, tailored marketing strategy — built specifically for your business. Yours to keep. No strings attached. We'd rather earn your trust than demand it.
            </motion.p>

            <motion.p className="usp-cta-line" variants={fadeUp}>
              We'll build that plan for you.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a
                id="usp-free-strategy-btn"
                href="#"
                className="btn-cta-glow"
                aria-label="Get your free tailored marketing strategy"
              >
                Get My Free Strategy →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
