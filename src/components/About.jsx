import './About.css'

const pillars = [
  {
    icon: '📊',
    title: 'Data & Analysis',
    color: '#06b6d4',
    items: ['Large-scale data pipelines', 'Feature engineering', 'Statistical modeling', 'A/B experimentation', 'EDA & visualization'],
  },
  {
    icon: '🧠',
    title: 'Modeling & AI',
    color: '#6366f1',
    items: ['Supervised & unsupervised ML', 'Deep learning & NLP', 'GenAI & LLMs', 'RAG & fine-tuning', 'Model evaluation & iteration'],
  },
  {
    icon: '🚀',
    title: 'Deployment & Scale',
    color: '#10b981',
    items: ['Production ML systems', 'Model monitoring & reliability', 'API development', 'Cloud infrastructure', 'End-to-end ML lifecycle'],
  },
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left — text */}
          <div className="about-left animate-on-scroll">
            <span className="section-eyebrow">About</span>
            <h2 className="section-title">
              Building with Data,<br />
              <span className="grad-text">End to End</span>
            </h2>
            <p className="about-body">
              I'm a Data Scientist with 4 years of hands-on experience across the
              full AI/ML lifecycle — from collecting and transforming raw data, to
              training and evaluating models, to shipping them into production where
              they handle real workloads.
            </p>
            <p className="about-body">
              At <strong>Accenture</strong>, I worked on GenAI systems powered by large language models —
              designing retrieval systems, running experiments to improve output quality,
              and monitoring their behavior in production. At{' '}
              <strong>Harman International</strong>, I built data pipelines and ML models
              that processed high-volume sensor data and produced real-time predictions
              across a large fleet of connected devices.
            </p>
            <p className="about-body">
              I'm most effective when I can move across the problem — working with data,
              building models, and making sure those models actually run and stay healthy
              in production. I hold an M.S. in Data Science from the University of North Texas.
            </p>
          </div>

          {/* Right — pillars */}
          <div className="about-right animate-on-scroll">
            {pillars.map(p => (
              <div key={p.title} className="pillar-card card">
                <div className="pillar-head">
                  <span className="pillar-icon">{p.icon}</span>
                  <h3 className="pillar-title" style={{ color: p.color }}>{p.title}</h3>
                </div>
                <ul className="pillar-items">
                  {p.items.map(item => (
                    <li key={item} className="pillar-item">
                      <span className="pillar-dot" style={{ background: p.color }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
