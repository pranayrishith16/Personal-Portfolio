import { useState } from 'react'
import './Hero.css'

const heroStats = [
  {
    value: '99.5%',
    label: 'System Uptime',
    color: '#06d6a0',
    bgColor: 'rgba(6, 214, 160, 0.12)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    story: 'Production RAG system at Accenture — 3 months, zero downtime incidents',
    context: 'Beats industry SLA standard of 99.0%',
  },
  {
    value: '1TB/day',
    label: 'Data Processed',
    color: '#a78bfa',
    bgColor: 'rgba(139, 92, 246, 0.12)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    story: 'PySpark pipelines at Harman — IoT telemetry from 50K connected vehicles',
    context: 'Cut ETL latency from 4 hours → 2 minutes',
  },
  {
    value: '50K+',
    label: 'Devices Deployed',
    color: '#ec4899',
    bgColor: 'rgba(236, 72, 153, 0.12)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 3h-8l-2 4h12z"/>
      </svg>
    ),
    story: 'ML models (CNNs, XGBoost) running on edge devices across vehicle fleet',
    context: 'Anomaly detection accuracy: 71% → 84%',
  },
]

function Hero() {
  const [hovered, setHovered] = useState(null)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
      </div>

      <div className="hero-content container">
        <p className="hero-name">Pranay Rishith Bondugula</p>
        <h1 className="hero-headline">
          I build production ML systems<br />
          <span className="gradient-text">that actually ship.</span>
        </h1>

        <div className="hero-stats">
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className="hero-stat-card"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === index && (
                <div className="stat-tooltip">
                  <p className="stat-story">{stat.story}</p>
                  <p className="stat-context">{stat.context}</p>
                </div>
              )}
              <div className="hero-stat-icon" style={{ background: stat.bgColor, color: stat.color }}>
                {stat.icon}
              </div>
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <p className="hero-proof">
          4 years shipping ML that <strong>50K+ devices</strong> run daily — from
          RAG systems at <strong>Accenture</strong> to edge AI at <strong>Harman International</strong>.
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            View Case Studies
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <a className="btn btn-secondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
