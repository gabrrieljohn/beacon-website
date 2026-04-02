import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const STEPS = [
  {
    num: '01',
    title: 'Book In. It Takes 60 Seconds.',
    desc: "One click. A calendar. A confirmation in your inbox. No forms, no phone tag, no gatekeepers. The hardest part of this step is choosing the time — and even that takes under a minute. While your competitors are still \"thinking about it,\" you'll already be on our calendar.",
    side: 'left',
  },
  {
    num: '02',
    title: "We Show Up Prepared. Not Winging It.",
    desc: "Most strategy calls are improvised. Ours aren't. Before we ever speak, we review your current marketing, study your competitors, and map your market — so we arrive knowing exactly where the gaps and opportunities are. You'll feel the difference in the first 30\u00A0seconds.",
    side: 'right',
  },
  {
    num: '03',
    title: 'Your 20 Minutes. Your Marketing Roadmap.',
    desc: "This is where the real value lands. We build your strategy live — what platforms to prioritise, what content to create, what ads to run, what budget to allocate, and what timeline to follow. You walk away with a clear, actionable plan that most agencies charge thousands for. Yours is free.",
    side: 'left',
  },
  {
    num: '04',
    title: 'You Decide What Happens Next.',
    desc: "At the end of the session, you hold a complete marketing strategy in your hands. What you do with it is entirely up to you. There's no pitch at the end, no follow-up pressure, and no obligation of any kind. We'd rather you judge us by the quality of our thinking than by the strength of a sales script.",
    side: 'right',
  },
]

export default function TheFormula() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="formula" className="formula-section" ref={ref}>
      <div className="formula-inner">
        {/* Vertical label */}
        <motion.div
          className="formula-label"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          THE<br />FORMULA
        </motion.div>

        <div style={{ flex: 1 }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ marginBottom: '3.5rem' }}
          >
            <span className="section-badge">The Process</span>
            <h2 className="arsenal-title" style={{ marginTop: '1rem' }}>
              Four steps.<br />One outcome: <span style={{ color: 'var(--glow-cyan)', textShadow: '0 0 30px rgba(0, 251, 251, 0.4)' }}>growth.</span>
            </h2>
            <p className="arsenal-subtitle" style={{ maxWidth: '540px' }}>
              A free strategy session designed to give you clarity — not a sales pitch. Every step is built to respect your time and prove our value.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="formula-steps">
            {STEPS.map((step, i) => {
              const isLeft = step.side === 'left'
              return (
                <div key={step.num} className="formula-step">
                  {/* Left card placeholder or card */}
                  <div className={`formula-step-${isLeft ? 'left' : 'right'}`}>
                    {isLeft && (
                      <motion.div
                        className="glass-card formula-card"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -4 }}
                      >
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-desc">{step.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center: number + connector */}
                  <div className="formula-step-center">
                    <motion.div
                      className={`step-number-bubble${i === STEPS.length - 1 ? ' step-bubble-final' : ''}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.5, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {step.num}
                    </motion.div>
                    {i < STEPS.length - 1 && (
                      <div className="step-connector" />
                    )}
                  </div>

                  {/* Right card or empty */}
                  <div className={`formula-step-${!isLeft ? 'left' : 'right'}`}>
                    {!isLeft && (
                      <motion.div
                        className="glass-card formula-card"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -4 }}
                      >
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-desc">{step.desc}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
