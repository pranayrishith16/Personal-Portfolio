import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Legal Document RAG System',
    color: '#8b5cf6',
    problem: 'Legal teams spent hours manually searching 5,000+ documents to find relevant clauses — slow, error-prone, expensive.',
    solution: 'Built an end-to-end RAG pipeline with LangChain and Pinecone vector search. Claude API handles clause analysis with sub-second retrieval across the full corpus.',
    impact: [
      { metric: '94%', label: 'Retrieval accuracy', baseline: 'vs ~60% keyword search' },
      { metric: '5K+', label: 'Documents indexed' },
      { metric: '<1s', label: 'Query response' },
    ],
    stack: ['LangChain', 'Pinecone', 'Claude API', 'OpenRouter', 'FastAPI', 'Docker'],
    deepDive: [
      'Chunked documents using recursive text splitting with 512-token windows and 50-token overlap',
      'Embedded with sentence-transformers (all-MiniLM-L6-v2) into Pinecone serverless index',
      'Built LCEL retrieval chain with Claude 3.5 Sonnet for clause interpretation',
      'FastAPI backend with async endpoints, rate limiting, and request caching',
      'Dockerized deployment with health checks and structured logging',
    ],
  },
  {
    title: 'AI Agent for Multi-Step Reasoning',
    color: '#06d6a0',
    problem: 'Complex business queries required chaining multiple data sources and analysis steps — impossible to automate with simple prompt-response patterns.',
    solution: 'Designed an agentic system using LangGraph with tool-use capabilities, enabling autonomous multi-step reasoning across structured and unstructured data sources.',
    impact: [
      { metric: '3x', label: 'Faster analysis', baseline: 'Hours → minutes per query' },
      { metric: '85%', label: 'Task automation' },
      { metric: '10+', label: 'Tool integrations' },
    ],
    stack: ['LangGraph', 'LangChain', 'Python', 'OpenAI', 'RAG', 'FastAPI'],
    deepDive: [
      'LangGraph state machine with conditional edges for dynamic tool selection',
      'Integrated 10+ tools: SQL queries, API calls, document retrieval, code execution',
      'Implemented retry logic, fallback chains, and human-in-the-loop checkpoints',
      'Token-aware context management to stay within LLM context windows',
      'Evaluation framework using LLM-as-judge for response quality scoring',
    ],
  },
  {
    title: 'IoT Anomaly Detection at Scale',
    color: '#ec4899',
    problem: 'Vehicle anomaly detection running at 71% accuracy with 4-hour ETL latency — not viable for real-time safety systems serving 50K+ cars.',
    solution: 'Built PySpark pipelines processing 1TB+ daily IoT data and deployed optimized ML models (CNNs, XGBoost) across the connected vehicle fleet with edge inference.',
    impact: [
      { metric: '71→84%', label: 'Anomaly accuracy', baseline: '+13% improvement' },
      { metric: '4h→2m', label: 'ETL latency', baseline: '120x faster' },
      { metric: '50K+', label: 'Vehicles deployed' },
    ],
    stack: ['PySpark', 'CNNs', 'XGBoost', 'IoT', 'TensorFlow Lite', 'Edge Computing'],
    deepDive: [
      'PySpark ETL on AWS EMR processing CAN bus + OBD-II sensor streams',
      'Feature engineering: rolling window stats, FFT frequency features, signal correlations',
      'ResNet-18 CNN for image-based anomaly patterns, XGBoost for tabular features',
      'TensorFlow Lite INT8 quantization for ARM Cortex-A edge deployment',
      'Drowsiness detection model improved from 71% to 82% using transfer learning',
    ],
  },
]

function Projects() {
  const [expanded, setExpanded] = useState(null)

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
              className={`case-study animate-on-scroll ${expanded === index ? 'expanded' : ''}`}
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
                      {m.baseline && <span className="case-metric-baseline">{m.baseline}</span>}
                    </div>
                  ))}
                </div>

                <div className="case-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="case-stack-tag">{tech}</span>
                  ))}
                </div>

                <button
                  className="case-expand-btn"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                >
                  {expanded === index ? 'Hide Details' : 'View Architecture Details'}
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={expanded === index ? 'chevron-up' : ''}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>

                {expanded === index && (
                  <div className="case-deep-dive">
                    <span className="case-label">Technical Implementation</span>
                    <ul>
                      {project.deepDive.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
