import './Projects.css'

const projects = [
  {
    title: 'Legal Document RAG System',
    color: '#8b5cf6',
    problem: 'Legal teams spent hours manually searching through 5,000+ documents to find relevant clauses.',
    solution: 'Built an end-to-end RAG pipeline with LangChain, Pinecone vector search, and Claude API for intelligent document retrieval and clause analysis.',
    impact: [
      { metric: '94%', label: 'Retrieval accuracy' },
      { metric: '5K+', label: 'Documents indexed' },
      { metric: '<1s', label: 'Query response' },
    ],
    stack: ['LangChain', 'Pinecone', 'Claude API', 'OpenRouter', 'FastAPI', 'Docker'],
  },
  {
    title: 'AI Agent for Multi-Step Reasoning',
    color: '#06d6a0',
    problem: 'Complex business queries required chaining multiple data sources and analysis steps — impossible to automate with simple prompts.',
    solution: 'Designed an agentic AI system using LangGraph with tool-use capabilities, enabling autonomous multi-step reasoning across structured and unstructured data.',
    impact: [
      { metric: '3x', label: 'Faster analysis' },
      { metric: '85%', label: 'Task automation' },
      { metric: '10+', label: 'Tool integrations' },
    ],
    stack: ['LangGraph', 'LangChain', 'Python', 'OpenAI', 'RAG', 'FastAPI'],
  },
  {
    title: 'IoT Anomaly Detection at Scale',
    color: '#ec4899',
    problem: 'Vehicle anomaly detection was running at 71% accuracy with 4-hour ETL latency — not viable for real-time safety systems.',
    solution: 'Built PySpark pipelines processing 1TB+ daily IoT data and deployed optimized ML models (CNNs, XGBoost) across 50K+ connected vehicles.',
    impact: [
      { metric: '71→84%', label: 'Anomaly accuracy' },
      { metric: '4h→2m', label: 'ETL latency' },
      { metric: '50K+', label: 'Vehicles deployed' },
    ],
    stack: ['PySpark', 'CNNs', 'XGBoost', 'IoT', 'TensorFlow Lite', 'Edge Computing'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Case <span className="gradient-text">Studies</span></h2>
          <p className="section-subtitle">
            Production systems with measurable impact — not toy projects.
          </p>
        </div>

        <div className="case-studies">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="case-study animate-on-scroll"
              style={{ '--project-color': project.color, transitionDelay: `${index * 0.1}s` }}
            >
              <div className="case-study-accent" style={{ background: project.color }}></div>
              <div className="case-study-body">
                <h3 className="case-study-title">{project.title}</h3>

                <div className="case-study-sections">
                  <div className="case-section">
                    <span className="case-label">Problem</span>
                    <p>{project.problem}</p>
                  </div>
                  <div className="case-section">
                    <span className="case-label">Solution</span>
                    <p>{project.solution}</p>
                  </div>
                </div>

                <div className="case-metrics">
                  {project.impact.map((m) => (
                    <div key={m.label} className="case-metric">
                      <span className="case-metric-value" style={{ color: project.color }}>{m.metric}</span>
                      <span className="case-metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="case-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="case-stack-tag">{tech}</span>
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
