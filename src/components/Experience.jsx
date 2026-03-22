import './Experience.css'

const experiences = [
  {
    company: 'Accenture',
    roles: 'Machine Learning Engineer | MLOps Engineer | GenAI Engineer',
    period: 'Jan 2025 – Present',
    bullets: [
      'Built production RAG systems handling 100+ concurrent queries with 99.5%+ uptime using LangChain and Pinecone',
      'Architected MLOps infrastructure with Kubernetes, Docker, and CI/CD pipelines with automated testing',
      'Improved user satisfaction 25-30% through A/B testing and evaluation framework design',
    ],
    color: '#8b5cf6',
  },
  {
    company: 'Harman International',
    roles: 'Machine Learning Engineer | MLOps Engineer | Data Scientist',
    period: 'Jan 2021 – Jul 2023',
    bullets: [
      'Built PySpark pipelines processing 1TB+ daily IoT data, reducing ETL latency from 4 hours to 2 minutes',
      'Deployed ML models (CNNs, XGBoost, collaborative filtering) across 50,000+ connected vehicles',
      'Improved anomaly detection accuracy from 71% to 84% and drowsiness detection from 71% to 82%',
    ],
    color: '#06d6a0',
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've <span className="gradient-text">Worked</span></h2>
          <p className="section-subtitle">
            Building production AI systems at industry-leading companies.
          </p>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="timeline-item animate-on-scroll"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="timeline-marker" style={{ background: exp.color }}></div>
              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">{exp.company}</h3>
                    <p className="timeline-roles">{exp.roles}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
