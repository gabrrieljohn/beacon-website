import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: "Why is this free? What's the catch?",
    a: "There is no catch. We believe in earning trust before asking for anything. You get a real, actionable marketing strategy in 20 minutes — built specifically for your business. If you want us to implement it, we'd love to talk. If you don't, the plan is still yours. Either way, you leave better off than when you arrived.",
  },
  {
    q: "What if I just use the strategy myself and never hire you?",
    a: "That's completely fine — and we mean that. If a 20-minute free session helps your business grow, we've done something good. The business owners who do come back to work with us usually do so because they saw how we think in that session. We'd rather earn your trust than pressure you into a contract.",
  },
  {
    q: "Is 20 minutes really enough to get something useful?",
    a: "Yes — because we come prepared. Before the session we look at your business, your market, and what your competitors are doing. You're not getting a generic overview. You're getting a focused, specific plan for your situation. Twenty minutes of the right thinking beats months of guessing.",
  },
]

function FaqItem({ faq, index, isOpen, onToggle, isInView }) {
  return (
    <motion.div
      className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Glow backdrop that intensifies when open */}
      <div className={`faq-glow-bg ${isOpen ? 'faq-glow-active' : ''}`} />

      <button
        className="faq-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-trigger-${index}`}
      >
        <span className="faq-question">{faq.q}</span>
        <motion.span
          className="faq-icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-answer-wrapper"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="faq-answer">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleToggle = (i) => {
    setOpenIndex(prev => prev === i ? null : i)
  }

  return (
    <section className="faq-section" ref={ref}>
      <div className="faq-inner">
        {/* Header */}
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-badge">FAQ</span>
          <h2 className="faq-title">
            Questions you're thinking.<br />
            <span style={{ color: 'var(--glow-cyan)', textShadow: '0 0 30px rgba(0, 251, 251, 0.4)' }}>
              Answers you deserve.
            </span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
