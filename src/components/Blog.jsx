import Link from 'next/link'
import { posts } from '../data/posts'
import './Blog.css'

export default function Blog() {
  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-eyebrow">LinkedIn Shorts</span>
          <h2 className="section-title">Quick <span className="grad-text">Thoughts</span></h2>
          <p className="section-sub">Bite-sized notes on engineering, machine learning pipelines, and scale.</p>
        </div>

        <div className="blog-grid">
          {posts.slice(0, 2).map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card card animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
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

        <div className="animate-on-scroll" style={{ textAlign: 'center', marginTop: '48px', transitionDelay: '0.2s' }}>
          <Link href="/blog" className="cmd-btn">
            View all shorts <span className="bc-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
