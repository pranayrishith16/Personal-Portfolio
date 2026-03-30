import './Skills.css'

const categories = [
  {
    id: 'ai-ml',
    title: 'Machine Learning & AI',
    icon: '🧠',
    desc: 'Model training, deep learning, and generative AI pipelines.',
    skills: ['PyTorch', 'TensorFlow', 'XGBoost', 'Scikit-learn', 'LangChain', 'Transformers', 'RAG Pipelines', 'NLP', 'Computer Vision']
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    icon: '📊',
    desc: 'Processing high-volume streaming and batch data at scale.',
    skills: ['Python', 'SQL', 'PySpark', 'Pandas', 'Pinecone', 'Data Modeling', 'Feature Engineering']
  },
  {
    id: 'mlops',
    title: 'MLOps & Infrastructure',
    icon: '⚙',
    desc: 'Containerization, orchestration, and model deployment.',
    skills: ['Kubernetes', 'Docker', 'AWS', 'GCP', 'MLflow', 'Airflow', 'FastAPI', 'Prometheus', 'CI/CD']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-eyebrow">Capabilities</span>
          <h2 className="section-title">Technical <span className="grad-text">Toolkit</span></h2>
          <p className="section-sub">A consolidated view of the tools and frameworks I use across the ML lifecycle.</p>
        </div>

        <div className="skills-bento">
          {categories.map((cat, i) => (
            <div key={cat.id} className="bento-card card animate-on-scroll" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="bento-head">
                <span className="bento-icon">{cat.icon}</span>
                <h3 className="bento-title">{cat.title}</h3>
              </div>
              <p className="bento-desc">{cat.desc}</p>
              
              <div className="bento-tags">
                {cat.skills.map(skill => (
                  <span key={skill} className="bento-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
