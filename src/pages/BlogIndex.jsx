import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { posts } from '../data/posts'
import Footer from '../components/Footer'
import { useState } from 'react'
import PrivacyPolicy from '../components/PrivacyPolicy'
import TermsOfService from '../components/TermsOfService'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
}

export default function BlogIndex() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  useEffect(() => {
    document.title = 'The Brief — Insights from Beacon Media Co.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="section-wrapper">
        <section className="blog-index-hero">
          {/* Watermark */}
          <div className="blog-watermark" aria-hidden="true">INSIGHTS</div>

          <div className="blog-index-hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-badge">From the field</span>
              <h1 className="blog-index-title">
                The Brief.
              </h1>
              <p className="blog-index-subtitle">
                Strategy, clarity, and the moves that actually grow businesses in Kerala.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="blog-grid-section">
          <div className="blog-grid-inner">
            <div className="blog-grid">
              {posts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <Link to={`/blog/${post.slug}`} className="blog-card-link">
                    <article className={`blog-card ${post.accent === 'magenta' ? 'blog-card-magenta' : 'blog-card-cyan'}`}>
                      <div className="blog-card-top-bar" />
                      <div className="blog-card-body">
                        <div className="blog-card-meta-top">
                          <span className={`blog-category-badge ${post.accent === 'magenta' ? 'badge-magenta' : 'badge-cyan'}`}>
                            {post.category}
                          </span>
                          <span className="blog-read-time">{post.readTime} min read</span>
                        </div>
                        <h2 className="blog-card-title">{post.title}</h2>
                        <p className="blog-card-excerpt">{post.excerpt}</p>
                      </div>
                      <div className="blog-card-footer">
                        <span className="blog-card-date">{post.date}</span>
                        <span className={`blog-card-read-link ${post.accent === 'magenta' ? 'read-link-magenta' : 'read-link-cyan'}`}>
                          Read article →
                        </span>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="blog-bottom-cta">
          <div className="blog-bottom-cta-inner">
            <motion.p
              className="blog-bottom-cta-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Ready to stop reading and start growing?
            </motion.p>
            <motion.a
              href="https://calendly.com/admin-beaconmedia-co/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Claim Your Free Strategy Session →
            </motion.a>
          </div>
        </section>

        <Footer onPrivacyClick={() => setPrivacyOpen(true)} onTermsClick={() => setTermsOpen(true)} />
      </div>
      <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsOfService isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  )
}
