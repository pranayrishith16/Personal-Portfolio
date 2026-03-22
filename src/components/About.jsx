import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate About <span className="gradient-text">Data & AI</span></h2>
        </div>
        <div className="about-grid animate-on-scroll">
          <div className="about-text">
            <p>
              ML Engineer with 4+ years building production AI systems across enterprise GenAI,
              edge computing, and connected vehicle platforms. Specialized in RAG pipelines,
              MLOps infrastructure, and end-to-end machine learning deployments.
            </p>
            <p>
              Proven track record delivering scalable ML solutions with 99.5%+ uptime,
              sub-second latency, and measurable business impact. From building production
              RAG systems handling 100+ concurrent queries to deploying ML models across
              50,000+ connected vehicles.
            </p>
            <p>
              Currently at Accenture architecting GenAI solutions and MLOps infrastructure
              with Kubernetes, Docker, and CI/CD pipelines. Previously at Harman International
              building PySpark pipelines processing 1TB+ daily IoT data.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card glass-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
              <div>
                <h4>GenAI & RAG Systems</h4>
                <p>Building production RAG pipelines with LangChain, Pinecone, and enterprise LLMs</p>
              </div>
            </div>
            <div className="highlight-card glass-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div>
                <h4>MLOps Infrastructure</h4>
                <p>Architecting CI/CD pipelines with Kubernetes, Docker, and automated testing</p>
              </div>
            </div>
            <div className="highlight-card glass-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
              </div>
              <div>
                <h4>Big Data & Edge Computing</h4>
                <p>Processing 1TB+ daily IoT data with PySpark and deploying models at the edge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
