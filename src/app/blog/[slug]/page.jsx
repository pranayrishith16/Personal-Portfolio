import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '../../../data/posts'
import './BlogArticle.css'

// Very simple custom parser for our mock markdown
function SimpleMarkdown({ content }) {
  const lines = content.trim().split('\n')
  return (
    <div className="article-body">
      {lines.map((line, i) => {
        const text = line.trim()
        if (!text) return <div key={i} style={{ height: '16px' }} />
        
        // simple bold/code formatting
        let formatted = text.replace(/`([^`]+)`/g, '<code>$1</code>')
        formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        
        if (text.startsWith('# ')) return <h1 key={i} dangerouslySetInnerHTML={{ __html: formatted.replace('# ', '') }} />
        if (text.startsWith('## ')) return <h2 key={i} dangerouslySetInnerHTML={{ __html: formatted.replace('## ', '') }} />
        if (text.startsWith('### ')) return <h3 key={i} dangerouslySetInnerHTML={{ __html: formatted.replace('### ', '') }} />
        
        // Handle numbered lists or bullets
        if (text.match(/^(\d+\.|[•\-*])\s/)) {
          const bullet = text.match(/^(\d+\.|[•\-*])\s/)[1]
          return (
            <div key={i} style={{ display: 'flex', marginLeft: '16px', marginBottom: '8px' }}>
              <span style={{ width: '24px', flexShrink: 0, fontWeight: 'bold' }}>{bullet}</span>
              <span dangerouslySetInnerHTML={{ __html: formatted.replace(/^(\d+\.|[•\-*])\s/, '') }} />
            </div>
          )
        }

        // Standard line
        return <div key={i} style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: formatted }} />
      })}
    </div>
  )
}

export const dynamic = 'force-dynamic'

export default async function BlogPost({ params }) {
  const resolvedParams = await params
  const post = posts.find(p => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="article-page">
      <nav className="article-nav">
        <div className="container">
          <Link href="/#blog" className="back-link">
            <span className="back-arrow">←</span> Back to Portfolio
          </Link>
        </div>
      </nav>

      <article className="article-container">
        <header className="article-header">
          <div className="ah-meta">
            <span className="ah-category">{post.category}</span>
            <span className="ah-date">{post.date} &middot; {post.readTime}</span>
          </div>
          <h1 className="ah-title">{post.title}</h1>
        </header>

        <div className="article-content">
          <SimpleMarkdown content={post.content} />
        </div>
      </article>

      <footer className="new-footer" style={{ marginTop: '80px' }}>
        <p>© 2026 Pranay Rishith Bondugula</p>
      </footer>
    </main>
  )
}
