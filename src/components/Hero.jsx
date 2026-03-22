import './Hero.css'

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content container">
        <h1 className="hero-headline">
          I build production ML systems<br />
          <span className="gradient-text">that actually ship.</span>
        </h1>

        <div className="hero-stats">
          <div className="hero-stat-card">
            <div className="hero-stat-icon" style={{ background: 'rgba(6, 214, 160, 0.12)', color: '#06d6a0' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <span className="hero-stat-value">99.5%</span>
            <span className="hero-stat-label">System Uptime</span>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-icon" style={{ background: 'rgba(139, 92, 246, 0.12)', color: '#a78bfa' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
              </svg>
            </div>
            <span className="hero-stat-value">1TB/day</span>
            <span className="hero-stat-label">Data Processed</span>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-icon" style={{ background: 'rgba(236, 72, 153, 0.12)', color: '#ec4899' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 3h-8l-2 4h12z"/>
              </svg>
            </div>
            <span className="hero-stat-value">50K+</span>
            <span className="hero-stat-label">Devices Deployed</span>
          </div>
        </div>

        <p className="hero-proof">
          4 years turning AI research into revenue at <strong>Accenture</strong> and <strong>Harman International</strong>.
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
