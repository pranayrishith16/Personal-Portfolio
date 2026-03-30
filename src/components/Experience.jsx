import './Experience.css'

const timeline = [
  {
    period: 'Jan 2025 — Present',
    role: 'AI / ML Engineer',
    company: 'Accenture',
    type: 'work',
    highlights: [
      'Designed and deployed a GenAI system using LLMs and retrieval-augmented generation, serving large volumes of user queries in production',
      'Applied prompt engineering, fine-tuning, and evaluation frameworks to improve model output quality and reliability',
      'Collaborated on the full model lifecycle — from data preparation and experimentation to deployment and performance monitoring',
      'Conducted experimentation and analysis to measure the impact of system changes on end-user outcomes',
    ],
    tags: ['LangChain', 'LangGraph', 'Python', 'MLflow', 'FastAPI', 'AWS'],
  },
  {
    period: 'Aug 2023 — May 2025',
    role: 'M.S. Data Science',
    company: 'University of North Texas',
    type: 'education',
    highlights: [
      'Graduate program covering machine learning, statistical modeling, distributed systems, and applied AI',
    ],
    tags: ['Machine Learning', 'Statistics', 'Data Engineering', 'Research'],
  },
  {
    period: 'Jan 2021 — Jul 2023',
    role: 'Data Scientist',
    company: 'Harman International',
    type: 'work',
    highlights: [
      'Built scalable data pipelines to process high-volume, real-time sensor telemetry from a large fleet of connected devices',
      'Developed and evaluated machine learning models for anomaly detection, achieving significant accuracy improvements through iterative experimentation',
      'Performed feature engineering, exploratory data analysis, and model selection across structured and time-series datasets',
      'Optimized and deployed trained models into production environments, ensuring reliability and performance at scale',
    ],
    tags: ['PySpark', 'PyTorch', 'XGBoost', 'Scikit-learn', 'SQL', 'AWS'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section exp-section">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Where I've <span className="grad-text">Done the Work</span></h2>
          <p className="section-sub">4 years across two production environments — spanning data, modeling, and deployment.</p>
        </div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className={`tl-item tl-${item.type} animate-on-scroll`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="tl-track">
                <div className="tl-dot"></div>
                {i < timeline.length - 1 && <div className="tl-line"></div>}
              </div>

              <div className="tl-card card">
                <div className="tl-card-head">
                  <div>
                    <h3 className="tl-role">{item.role}</h3>
                    <p className="tl-company">{item.company}</p>
                  </div>
                  <span className="tl-period">{item.period}</span>
                </div>

                {item.highlights.length > 0 && (
                  <ul className="tl-highlights">
                    {item.highlights.map((h, j) => (
                      <li key={j} className="tl-highlight">{h}</li>
                    ))}
                  </ul>
                )}

                <div className="tl-tags">
                  {item.tags.map(t => <span key={t} className="tl-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
