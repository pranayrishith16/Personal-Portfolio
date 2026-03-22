import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">About</span>
          <h2 className="section-title">What I'm <span className="gradient-text">Known For</span></h2>
          <p className="about-intro">
            I specialize in taking ML from notebooks to production — systems that handle real traffic,
            real data, and real business outcomes.
          </p>
        </div>
        <div className="about-cards">
          <div className="about-card glass-card animate-on-scroll">
            <div className="about-card-accent" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}></div>
            <div className="about-card-icon" style={{ background: 'rgba(139, 92, 246, 0.12)', color: '#a78bfa' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </div>
            <h3>Production RAG Systems</h3>
            <p className="about-card-evidence">100+ concurrent queries, 99.5% uptime</p>
            <p className="about-card-detail">
              Built end-to-end RAG pipelines at Accenture using LangChain and Pinecone,
              serving enterprise clients with sub-second retrieval.
            </p>
          </div>

          <div className="about-card glass-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div className="about-card-accent" style={{ background: 'linear-gradient(135deg, #06d6a0, #059669)' }}></div>
            <div className="about-card-icon" style={{ background: 'rgba(6, 214, 160, 0.12)', color: '#06d6a0' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                <line x1="6" y1="6" x2="6.01" y2="6"/>
                <line x1="6" y1="18" x2="6.01" y2="18"/>
              </svg>
            </div>
            <h3>MLOps at Scale</h3>
            <p className="about-card-evidence">Kubernetes, Docker, CI/CD — automated everything</p>
            <p className="about-card-detail">
              Architected infrastructure with automated testing, canary deployments,
              and model monitoring with Prometheus and Grafana.
            </p>
          </div>

          <div className="about-card glass-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="about-card-accent" style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}></div>
            <div className="about-card-icon" style={{ background: 'rgba(236, 72, 153, 0.12)', color: '#ec4899' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3>Big Data Pipelines</h3>
            <p className="about-card-evidence">1TB/day IoT → 2-min ETL, deployed to 50K vehicles</p>
            <p className="about-card-detail">
              Built PySpark pipelines at Harman International processing massive IoT streams,
              cutting ETL latency from 4 hours to 2 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
