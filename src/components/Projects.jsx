import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Legal Document RAG System',
    type: 'GenAI · RAG Pipeline',
    status: 'PERSONAL PROJECT',
    statusColor: '#6366f1',
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Response', value: '<1s' },
      { label: 'Documents', value: '5K+' },
      { label: 'Queries/sec', value: '100+' },
    ],
    stack: ['LangChain', 'Pinecone', 'Claude', 'FastAPI', 'Docker'],
    diagram: (
      <svg viewBox="0 0 540 70" className="arch-diagram">
        <defs><marker id="arr1" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#00d4ff"/></marker></defs>
        <rect x="0" y="20" width="80" height="30" rx="4" fill="none" stroke="#4a5568" strokeWidth="1"/>
        <text x="40" y="40" textAnchor="middle" fill="#8892b0" fontSize="9" fontFamily="var(--font-mono)">User Query</text>
        <line x1="80" y1="35" x2="110" y2="35" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arr1)"/>
        <rect x="110" y="20" width="70" height="30" rx="4" fill="none" stroke="#00d4ff" strokeWidth="1"/>
        <text x="145" y="40" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="var(--font-mono)">FastAPI</text>
        <line x1="180" y1="35" x2="210" y2="35" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arr1)"/>
        <rect x="210" y="20" width="80" height="30" rx="4" fill="none" stroke="#8b5cf6" strokeWidth="1"/>
        <text x="250" y="40" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="var(--font-mono)">Pinecone</text>
        <line x1="290" y1="35" x2="320" y2="35" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arr1)"/>
        <rect x="320" y="20" width="80" height="30" rx="4" fill="none" stroke="#00ff88" strokeWidth="1"/>
        <text x="360" y="40" textAnchor="middle" fill="#00ff88" fontSize="9" fontFamily="var(--font-mono)">LangChain</text>
        <line x1="400" y1="35" x2="430" y2="35" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arr1)"/>
        <rect x="430" y="20" width="80" height="30" rx="4" fill="none" stroke="#ffaa00" strokeWidth="1"/>
        <text x="470" y="40" textAnchor="middle" fill="#ffaa00" fontSize="9" fontFamily="var(--font-mono)">Claude</text>
      </svg>
    ),
    deepDive: [
      'Recursive text splitting: 512-token chunks, 50-token overlap',
      'sentence-transformers embedding → Pinecone serverless index',
      'LCEL retrieval chain with Claude 3.5 Sonnet via OpenRouter',
      'FastAPI async endpoints with rate limiting & caching',
      'Dockerized on AWS ECS with health checks',
    ],
  },
  {
    title: 'IoT Anomaly Detection at Scale',
    type: 'Edge AI · Data Pipeline',
    status: 'PRODUCTION',
    statusColor: '#00ff88',
    metrics: [
      { label: 'Accuracy', value: '84%' },
      { label: 'ETL', value: '2min' },
      { label: 'Data/day', value: '1TB+' },
      { label: 'Devices', value: '50K+' },
    ],
    stack: ['PySpark', 'XGBoost', 'CNNs', 'TF Lite', 'Edge'],
    diagram: (
      <svg viewBox="0 0 540 70" className="arch-diagram">
        <defs><marker id="arr2" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#00d4ff"/></marker></defs>
        <rect x="0" y="20" width="80" height="30" rx="4" fill="none" stroke="#ffaa00" strokeWidth="1"/>
        <text x="40" y="40" textAnchor="middle" fill="#ffaa00" fontSize="9" fontFamily="var(--font-mono)">50K Cars</text>
        <line x1="80" y1="35" x2="110" y2="35" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arr2)"/>
        <rect x="110" y="20" width="80" height="30" rx="4" fill="none" stroke="#4a5568" strokeWidth="1"/>
        <text x="150" y="40" textAnchor="middle" fill="#8892b0" fontSize="9" fontFamily="var(--font-mono)">IoT Stream</text>
        <line x1="190" y1="35" x2="220" y2="35" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arr2)"/>
        <rect x="220" y="20" width="80" height="30" rx="4" fill="none" stroke="#00d4ff" strokeWidth="1"/>
        <text x="260" y="40" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="var(--font-mono)">PySpark</text>
        <line x1="300" y1="35" x2="330" y2="35" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arr2)"/>
        <rect x="330" y="20" width="80" height="30" rx="4" fill="none" stroke="#00ff88" strokeWidth="1"/>
        <text x="370" y="40" textAnchor="middle" fill="#00ff88" fontSize="9" fontFamily="var(--font-mono)">ML Models</text>
        <line x1="410" y1="35" x2="440" y2="35" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arr2)"/>
        <rect x="440" y="20" width="80" height="30" rx="4" fill="none" stroke="#ff6b6b" strokeWidth="1"/>
        <text x="480" y="40" textAnchor="middle" fill="#ff6b6b" fontSize="9" fontFamily="var(--font-mono)">Edge Deploy</text>
      </svg>
    ),
    deepDive: [
      'Built scalable data ingestion and processing pipelines for high-volume real-time sensor streams',
      'Performed feature engineering on time-series data including rolling statistics and frequency-domain features',
      'Trained and evaluated an ensemble of neural network and gradient boosting models for anomaly classification',
      'Iteratively improved model accuracy through cross-validation, hyperparameter tuning, and transfer learning',
      'Deployed models to production and validated performance against real-world labeled outcomes',
    ],
  },
  {
    title: 'AI Agent for Multi-Step Reasoning',
    type: 'GenAI · Agentic System',
    status: 'PRODUCTION',
    statusColor: '#00ff88',
    metrics: [
      { label: 'Speed', value: '3x' },
      { label: 'Automation', value: '85%' },
      { label: 'Tools', value: '10+' },
      { label: 'Accuracy', value: '92%' },
    ],
    stack: ['LangGraph', 'LangChain', 'OpenAI', 'RAG', 'FastAPI'],
    diagram: (
      <svg viewBox="0 0 540 70" className="arch-diagram">
        <defs><marker id="arr3" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#00d4ff"/></marker></defs>
        <rect x="0" y="20" width="80" height="30" rx="4" fill="none" stroke="#4a5568" strokeWidth="1"/>
        <text x="40" y="40" textAnchor="middle" fill="#8892b0" fontSize="9" fontFamily="var(--font-mono)">Query</text>
        <line x1="80" y1="35" x2="110" y2="35" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arr3)"/>
        <rect x="110" y="20" width="80" height="30" rx="4" fill="none" stroke="#00ff88" strokeWidth="1"/>
        <text x="150" y="40" textAnchor="middle" fill="#00ff88" fontSize="9" fontFamily="var(--font-mono)">LangGraph</text>
        <line x1="190" y1="35" x2="220" y2="35" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arr3)"/>
        <rect x="220" y="20" width="80" height="30" rx="4" fill="none" stroke="#ffaa00" strokeWidth="1"/>
        <text x="260" y="40" textAnchor="middle" fill="#ffaa00" fontSize="9" fontFamily="var(--font-mono)">10+ Tools</text>
        <line x1="300" y1="35" x2="330" y2="35" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arr3)"/>
        <rect x="330" y="20" width="80" height="30" rx="4" fill="none" stroke="#00d4ff" strokeWidth="1"/>
        <text x="370" y="40" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="var(--font-mono)">Reasoning</text>
        <line x1="410" y1="35" x2="440" y2="35" stroke="#00d4ff" strokeWidth="1" markerEnd="url(#arr3)"/>
        <rect x="440" y="20" width="80" height="30" rx="4" fill="none" stroke="#a78bfa" strokeWidth="1"/>
        <text x="480" y="40" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="var(--font-mono)">Response</text>
      </svg>
    ),
    deepDive: [
      'LangGraph state machine with conditional edges for tool routing',
      'Integrated SQL, API, document retrieval, and code execution tools',
      'Retry logic, fallback chains, human-in-the-loop checkpoints',
      'Token-aware context management within LLM windows',
      'LLM-as-judge evaluation framework for quality scoring',
    ],
  },
]

function Projects() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">Selected <span className="grad-text">Work</span></h2>
          <p className="section-sub">A sample of projects — from data pipelines and model training to production AI systems.</p>
        </div>

        <div className="sys-cards">
          {projects.map((p, i) => (
            <div key={p.title} className="sys-project-card sys-card animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="spc-header">
                <div className="spc-status">
                  <span className={`status-badge ${p.status === 'PRODUCTION' ? 'status-badge--live' : 'status-badge--personal'}`}>{p.status}</span>
                  <span className="spc-type">{p.type}</span>
                </div>
                <h3 className="spc-title">{p.title}</h3>
              </div>

              <div className="spc-diagram">{p.diagram}</div>

              <div className="spc-metrics">
                {p.metrics.map(m => (
                  <div key={m.label} className="spc-metric">
                    <span className="spc-metric-val">{m.value}</span>
                    <span className="spc-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="spc-stack">
                {p.stack.map(t => <span key={t} className="spc-tag">{t}</span>)}
              </div>

              <div className="spc-actions">
                <button className="spc-details-btn" onClick={() => setExpanded(expanded === i ? null : i)}>
                  {expanded === i ? '[ Hide ]' : '[ Details ↓ ]'}
                </button>
              </div>

              {expanded === i && (
                <div className="spc-deep-dive">
                  {p.deepDive.map((d, j) => (
                    <div key={j} className="spc-dd-line">
                      <span className="spc-dd-bullet">▸</span> {d}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
