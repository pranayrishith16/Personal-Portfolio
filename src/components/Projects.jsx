import './Projects.css'

const projects = [
  {
    title: 'Legal Document RAG System',
    description: 'End-to-end RAG system with LangChain analyzing 5,000+ legal documents with 94% clause retrieval accuracy. Built with a full production pipeline from ingestion to inference.',
    tags: ['LangChain', 'Pinecone', 'Claude API', 'OpenRouter', 'FastAPI', 'Docker'],
    color: '#8b5cf6',
  },
  {
    title: 'AI Agent for Multi-Step Reasoning',
    description: 'Intelligent AI agent capable of complex multi-step reasoning tasks, leveraging LLMs with tool-use capabilities for automated decision-making and problem solving.',
    tags: ['LLMs', 'LangChain', 'Python', 'Agents', 'RAG'],
    color: '#06d6a0',
  },
  {
    title: 'IoT Anomaly Detection at Scale',
    description: 'Deployed ML models (CNNs, XGBoost) across 50,000+ connected vehicles, improving anomaly detection accuracy from 71% to 84% and drowsiness detection to 82%.',
    tags: ['PySpark', 'CNNs', 'XGBoost', 'IoT', 'Edge Computing'],
    color: '#ec4899',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured <span className="gradient-text">Work</span></h2>
          <p className="section-subtitle">
            Production AI systems delivering measurable business impact.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card glass-card animate-on-scroll"
              style={{ '--accent': project.color, transitionDelay: `${index * 0.15}s` }}
            >
              <div className="project-image-placeholder" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}>
                <div className="project-image-icon" style={{ color: project.color }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
