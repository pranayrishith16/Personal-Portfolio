import './Experience.css'

const logs = [
  {
    timestamp: '2025-01-15 09:00:00',
    level: 'INFO',
    company: 'Joined Accenture',
    details: [
      { prefix: '├─', text: 'Role: ML Engineer | MLOps | GenAI Engineer' },
      { prefix: '├─', text: 'Built production RAG: 100+ concurrent queries, 99.5% uptime' },
      { prefix: '├─', text: 'Architected K8s + Docker CI/CD infrastructure' },
      { prefix: '└─', text: 'Impact: +25-30% user satisfaction via A/B testing', highlight: true },
    ],
  },
  {
    timestamp: '2023-08-20 09:00:00',
    level: 'INFO',
    company: 'University of North Texas — M.S. Data Science',
    details: [
      { prefix: '└─', text: 'Graduated May 2025' },
    ],
    isEducation: true,
  },
  {
    timestamp: '2021-01-10 09:00:00',
    level: 'INFO',
    company: 'Joined Harman International',
    details: [
      { prefix: '├─', text: 'Role: ML Engineer | MLOps | Data Scientist' },
      { prefix: '├─', text: 'PySpark pipelines: 1TB/day IoT processing' },
      { prefix: '├─', text: 'Deployed ML to 50,000+ connected vehicles' },
      { prefix: '└─', text: 'Accuracy: 71% → 84% anomaly detection', highlight: true },
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">system.log</span>
          <h2 className="section-title">System <span style={{ color: 'var(--cyan)' }}>Logs</span></h2>
        </div>
        <div className="log-viewer sys-card animate-on-scroll">
          <div className="log-header">
            <div className="editor-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="log-title">experience.log — tail -f</span>
          </div>
          <div className="log-body">
            {logs.map((log, i) => (
              <div key={i} className={`log-entry ${log.isEducation ? 'log-education' : ''}`}>
                <div className="log-main">
                  <span className="log-ts">[{log.timestamp}]</span>
                  <span className={`log-level log-level--${log.level.toLowerCase()}`}>{log.level}:</span>
                  <span className="log-company">{log.company}</span>
                </div>
                {log.details.map((d, j) => (
                  <div key={j} className="log-detail">
                    <span className="log-tree">{d.prefix}</span>
                    <span className={d.highlight ? 'log-highlight' : ''}>{d.text}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
