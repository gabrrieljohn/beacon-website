import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const TYPING_SPEED = 70
const DELETING_SPEED = 40
const PAUSE_BEFORE_DELETE = 1200
const PAUSE_BEFORE_SECOND = 400

export default function HeroSection() {
  const [phase, setPhase] = useState('typing-first') // typing-first, pausing, deleting, typing-second, done
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [glowing, setGlowing] = useState(false)
  const intervalRef = useRef(null)

  const firstLine = "WE DON'T RUN ADS."
  const secondLine = "WE GROW BUSINESSES."

  useEffect(() => {
    let i = 0

    if (phase === 'typing-first') {
      i = 0
      intervalRef.current = setInterval(() => {
        i++
        setDisplayText(firstLine.slice(0, i))
        if (i >= firstLine.length) {
          clearInterval(intervalRef.current)
          setTimeout(() => setPhase('deleting'), PAUSE_BEFORE_DELETE)
        }
      }, TYPING_SPEED)
    }

    if (phase === 'deleting') {
      i = firstLine.length
      intervalRef.current = setInterval(() => {
        i--
        setDisplayText(firstLine.slice(0, i))
        if (i <= 0) {
          clearInterval(intervalRef.current)
          setTimeout(() => setPhase('typing-second'), PAUSE_BEFORE_SECOND)
        }
      }, DELETING_SPEED)
    }

    if (phase === 'typing-second') {
      i = 0
      intervalRef.current = setInterval(() => {
        i++
        setDisplayText(secondLine.slice(0, i))
        if (i >= secondLine.length) {
          clearInterval(intervalRef.current)
          setPhase('done')
        }
      }, TYPING_SPEED)
    }

    if (phase === 'done') {
      // Start glow animation after a brief moment
      setTimeout(() => setGlowing(true), 300)
      // Blink cursor a few times then hide
      let blinks = 0
      intervalRef.current = setInterval(() => {
        blinks++
        setShowCursor(prev => !prev)
        if (blinks >= 8) {
          clearInterval(intervalRef.current)
          setShowCursor(false)
        }
      }, 400)
    }

    return () => clearInterval(intervalRef.current)
  }, [phase])

  // Render the second line with cyan highlighting on "GROW BUSINESSES."
  const renderText = () => {
    if (phase === 'typing-second' || phase === 'done') {
      // "WE " is white, "GROW BUSINESSES." is cyan
      const whitePrefix = "WE "
      if (displayText.length <= whitePrefix.length) {
        return <span className="tw-white">{displayText}</span>
      }
      const cyanPart = displayText.slice(whitePrefix.length)
      return (
        <>
          <span className="tw-white">{whitePrefix}</span>
          <span className={`tw-cyan${glowing ? ' tw-glow' : ''}`} data-text={cyanPart}>{cyanPart}</span>
        </>
      )
    }
    return <span className="tw-white">{displayText}</span>
  }

  return (
    <section id="hero" className="hero-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h1 className="hero-headline typewriter-headline">
          {renderText()}
          <span className={`tw-cursor${showCursor ? '' : ' tw-cursor-hidden'}`}>|</span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={phase === 'done' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        >
          <a id="hero-ignite-btn" href="#" className="btn-primary-hero" aria-label="Ignite your business growth">
            IGNITE GROWTH
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
