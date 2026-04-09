import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getPost, getRelatedPosts } from '../data/posts'
import Footer from '../components/Footer'
import PrivacyPolicy from '../components/PrivacyPolicy'
import TermsOfService from '../components/TermsOfService'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  const related = getRelatedPosts(slug, 2)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  useEffect(() => {
    if (post) {
      document.title = post.metaTitle
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', post.metaDescription)
      window.scrollTo(0, 0)
    }
  }, [post])

  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <div className="section-wrapper">
        {/* Article Header */}
        <article className="post-page">
          <header className="post-header">
            <div className="post-header-inner">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to="/blog" className="post-back-link">
                  ← The Brief
                </Link>
              </motion.div>

              <motion.div
                className="post-header-meta"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className={`blog-category-badge ${post.accent === 'magenta' ? 'badge-magenta' : 'badge-cyan'}`}>
                  {post.category}
                </span>
                <div className="post-header-info">
                  <span className="blog-read-time">{post.readTime} min read</span>
                  <span className="post-header-dot">·</span>
                  <span className="blog-card-date">{post.date}</span>
                </div>
              </motion.div>

              <motion.h1
                className="post-title"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {post.title}
              </motion.h1>

              <motion.div
                className="post-header-divider"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </header>

          {/* Article Body */}
          <div className="post-body-wrapper">
            <div className="post-body">
              <motion.div
                className="post-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Mid-article CTA */}
              <div className="post-callout">
                <p className="post-callout-text">
                  Want to see what this looks like for your specific business? Our free 20-minute strategy session is built around your situation — not a generic presentation.
                </p>
                <a
                  href="https://calendly.com/admin-beaconmedia-co/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Book Your Free Session →
                </a>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <section className="post-related">
              <div className="post-related-inner">
                <p className="post-related-label">Continue Reading</p>
                <div className="post-related-grid">
                  {related.map((rel) => (
                    <Link key={rel.slug} to={`/blog/${rel.slug}`} className="blog-card-link">
                      <article className={`blog-card blog-card-sm ${rel.accent === 'magenta' ? 'blog-card-magenta' : 'blog-card-cyan'}`}>
                        <div className="blog-card-top-bar" />
                        <div className="blog-card-body">
                          <div className="blog-card-meta-top">
                            <span className={`blog-category-badge ${rel.accent === 'magenta' ? 'badge-magenta' : 'badge-cyan'}`}>
                              {rel.category}
                            </span>
                            <span className="blog-read-time">{rel.readTime} min read</span>
                          </div>
                          <h3 className="blog-card-title">{rel.title}</h3>
                          <p className="blog-card-excerpt">{rel.excerpt}</p>
                        </div>
                        <div className="blog-card-footer">
                          <span className="blog-card-date">{rel.date}</span>
                          <span className={`blog-card-read-link ${rel.accent === 'magenta' ? 'read-link-magenta' : 'read-link-cyan'}`}>
                            Read article →
                          </span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Bottom CTA */}
          <section className="blog-bottom-cta">
            <div className="blog-bottom-cta-inner">
              <p className="blog-bottom-cta-label">
                The plan is ready to be built. The session is free.
              </p>
              <a
                href="https://calendly.com/admin-beaconmedia-co/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="fp-cta-btn"
              >
                <span className="fp-cta-text">Claim Your Free Strategy</span>
                <span className="fp-cta-arrow">→</span>
              </a>
              <p className="fp-subtext">FREE TO CLAIM. YOURS TO KEEP. TAKES 20 MINUTES.</p>
            </div>
          </section>
        </article>

        <Footer onPrivacyClick={() => setPrivacyOpen(true)} onTermsClick={() => setTermsOpen(true)} />
      </div>
      <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsOfService isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  )
}
