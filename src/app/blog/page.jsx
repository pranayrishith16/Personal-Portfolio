import Link from 'next/link'
import { posts } from '../../data/posts'
import './[slug]/BlogArticle.css'

export const dynamic = 'force-dynamic'

export default function BlogIndex() {
  return (
    <main className="article-page">
      <nav className="article-nav">
        <div className="container">
          <Link href="/#blog" className="back-link">
            <span className="back-arrow">←</span> Back to Portfolio
          </Link>
        </div>
      </nav>

      <section className="article-container" style={{ maxWidth: '800px' }}>
        <header className="article-header" style={{ marginBottom: '32px' }}>
          <span className="section-eyebrow" style={{ display: 'block', marginBottom: '12px' }}>Archive</span>
          <h1 className="ah-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>All <span className="grad-text">Shorts</span></h1>
          <p className="section-sub" style={{ marginTop: '16px', fontSize: '1.05rem' }}>
            A collection of engineering thoughts, architecture decisions, and lessons learned.
          </p>
        </header>

        <div className="blog-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {posts.map((post, i) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug} 
              className="blog-card card" 
              style={{ display: 'block' }}
            >
              <div className="bc-top">
                <span className="bc-category">{post.category}</span>
                <span className="bc-date">{post.date} &middot; {post.readTime}</span>
              </div>
              <h3 className="bc-title">{post.title}</h3>
              <p className="bc-excerpt">{post.excerpt}</p>
              <span className="bc-read-more">Read short <span className="bc-arrow">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="new-footer" style={{ marginTop: '60px' }}>
        <p>© 2026 Pranay Rishith Bondugula</p>
      </footer>
    </main>
  )
}
