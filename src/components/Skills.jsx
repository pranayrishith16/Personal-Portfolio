import { useState } from 'react'
import './Skills.css'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'genai', label: 'GenAI' },
  { key: 'mlops', label: 'MLOps' },
  { key: 'cloud', label: 'Cloud' },
  { key: 'ml', label: 'ML/DL' },
  { key: 'learning', label: 'Learning' },
]

const skills = [
  { name: 'LangChain', cat: 'genai', level: 95, years: 2, status: 'Active' },
  { name: 'LangGraph', cat: 'genai', level: 90, years: 1, status: 'Active' },
  { name: 'RAG Pipelines', cat: 'genai', level: 95, years: 2, status: 'Active' },
  { name: 'Pinecone', cat: 'genai', level: 88, years: 2, status: 'Active' },
  { name: 'Claude / OpenAI', cat: 'genai', level: 92, years: 2, status: 'Active' },
  { name: 'Prompt Engineering', cat: 'genai', level: 90, years: 2, status: 'Active' },
  { name: 'Fine-tuning', cat: 'genai', level: 80, years: 1, status: 'Active' },
  { name: 'Kubernetes', cat: 'mlops', level: 90, years: 3, status: 'Active' },
  { name: 'Docker', cat: 'mlops', level: 92, years: 4, status: 'Active' },
  { name: 'CI/CD', cat: 'mlops', level: 88, years: 3, status: 'Active' },
  { name: 'MLflow', cat: 'mlops', level: 85, years: 2, status: 'Active' },
  { name: 'Airflow', cat: 'mlops', level: 82, years: 2, status: 'Active' },
  { name: 'Prometheus + Grafana', cat: 'mlops', level: 85, years: 2, status: 'Active' },
  { name: 'GitHub Actions', cat: 'mlops', level: 88, years: 2, status: 'Active' },
  { name: 'AWS (ML Specialty)', cat: 'cloud', level: 88, years: 3, status: 'Active' },
  { name: 'GCP', cat: 'cloud', level: 82, years: 2, status: 'Active' },
  { name: 'PySpark', cat: 'cloud', level: 90, years: 3, status: 'Active' },
  { name: 'Python', cat: 'cloud', level: 95, years: 4, status: 'Active' },
  { name: 'SQL', cat: 'cloud', level: 90, years: 4, status: 'Active' },
  { name: 'FastAPI', cat: 'cloud', level: 85, years: 2, status: 'Active' },
  { name: 'PyTorch', cat: 'ml', level: 85, years: 3, status: 'Active' },
  { name: 'TensorFlow', cat: 'ml', level: 85, years: 3, status: 'Active' },
  { name: 'Transformers', cat: 'ml', level: 82, years: 2, status: 'Active' },
  { name: 'XGBoost', cat: 'ml', level: 88, years: 3, status: 'Active' },
  { name: 'Scikit-learn', cat: 'ml', level: 90, years: 4, status: 'Active' },
  { name: 'NLP', cat: 'ml', level: 85, years: 3, status: 'Active' },
  { name: 'Computer Vision', cat: 'ml', level: 80, years: 2, status: 'Active' },
  { name: 'Anthropic MCP', cat: 'learning', level: 40, years: 0, status: 'Learning' },
  { name: 'Multi-Agent Systems', cat: 'learning', level: 50, years: 0, status: 'Learning' },
  { name: 'MLX (Apple Silicon)', cat: 'learning', level: 35, years: 0, status: 'Learning' },
]

// Radar chart data
const radarAxes = [
  { label: 'GenAI', value: 93 },
  { label: 'MLOps', value: 88 },
  { label: 'Cloud', value: 87 },
  { label: 'ML/DL', value: 85 },
  { label: 'Data Eng', value: 90 },
  { label: 'Backend', value: 82 },
]

function RadarChart() {
  const cx = 140, cy = 130, r = 100
  const n = radarAxes.length
  const toRad = (i) => (Math.PI * 2 * i) / n - Math.PI / 2

  const rings = [0.25, 0.5, 0.75, 1]
  const dataPoints = radarAxes.map((a, i) => {
    const angle = toRad(i)
    const dist = (a.value / 100) * r
    return { x: cx + Math.cos(angle) * dist, y: cy + Math.sin(angle) * dist }
  })
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + 'Z'

  return (
    <svg viewBox="0 0 280 260" className="radar-chart">
      {rings.map(scale => (
        <polygon
          key={scale}
          points={Array.from({ length: n }, (_, i) => {
            const a = toRad(i)
            return `${cx + Math.cos(a) * r * scale},${cy + Math.sin(a) * r * scale}`
          }).join(' ')}
          fill="none" stroke="rgba(0,212,255,0.1)" strokeWidth="1"
        />
      ))}
      {radarAxes.map((_, i) => {
        const a = toRad(i)
        return <line key={i} x1={cx} y1={cy} x2={cx + Math.cos(a) * r} y2={cy + Math.sin(a) * r} stroke="rgba(0,212,255,0.08)" strokeWidth="1" />
      })}
      <polygon points={dataPath.replace(/[MLZ]/g, '').replace(/,/g, ' ').split(' ').reduce((acc, v, i, arr) => {
        if (i % 2 === 0) return [...acc, `${v},${arr[i+1]}`]
        return acc
      }, []).join(' ')} fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="1.5" />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill="#00d4ff" />
      ))}
      {radarAxes.map((axis, i) => {
        const a = toRad(i)
        const lx = cx + Math.cos(a) * (r + 20)
        const ly = cy + Math.sin(a) * (r + 20)
        return (
          <text key={i} x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fill="#8892b0" fontSize="10" fontFamily="var(--font-mono)">
            {axis.label}
          </text>
        )
      })}
    </svg>
  )
}

function Skills() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? skills : skills.filter(s => s.cat === filter)

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">capabilities</span>
          <h2 className="section-title">System <span style={{ color: 'var(--cyan)' }}>Capabilities</span></h2>
        </div>

        <div className="skills-layout animate-on-scroll">
          <div className="skills-radar">
            <RadarChart />
          </div>

          <div className="skills-list">
            <div className="skills-filters">
              {categories.map(c => (
                <button key={c.key} className={`filter-btn ${filter === c.key ? 'active' : ''}`} onClick={() => setFilter(c.key)}>
                  {c.label}
                </button>
              ))}
            </div>
            <div className="skills-items">
              {filtered.map(s => (
                <div key={s.name} className="skill-row">
                  <div className="skill-info">
                    <span className="skill-name">{s.name}</span>
                    <span className={`skill-status ${s.status === 'Learning' ? 'learning' : ''}`}>{s.status}</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${s.level}%`, background: s.status === 'Learning' ? 'var(--amber)' : 'var(--cyan)' }}></div>
                  </div>
                  <span className="skill-years">{s.years > 0 ? `${s.years}y` : 'new'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
