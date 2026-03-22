import './Skills.css'

const tiers = [
  {
    level: 'Core Expertise',
    description: 'Daily drivers — what I ship with',
    categories: [
      {
        title: 'GenAI & RAG',
        color: '#8b5cf6',
        skills: ['LangChain', 'LangGraph', 'RAG', 'Pinecone', 'Claude API', 'OpenAI', 'Prompt Engineering', 'Fine-tuning'],
      },
      {
        title: 'MLOps & Infrastructure',
        color: '#06d6a0',
        skills: ['Kubernetes', 'Docker', 'CI/CD', 'GitHub Actions', 'MLflow', 'Airflow', 'Prometheus', 'Grafana'],
      },
      {
        title: 'Cloud & Data Engineering',
        color: '#3b82f6',
        skills: ['AWS (ML Specialty)', 'GCP', 'PySpark', 'Python', 'SQL', 'Pandas', 'NumPy'],
      },
    ],
  },
  {
    level: 'Proficient',
    description: 'Strong working knowledge',
    categories: [
      {
        title: 'ML & Deep Learning',
        color: '#ec4899',
        skills: ['PyTorch', 'TensorFlow', 'Transformers', 'XGBoost', 'LightGBM', 'CNNs', 'LSTMs', 'Scikit-learn', 'NLP', 'Computer Vision'],
      },
      {
        title: 'Backend & APIs',
        color: '#14b8a6',
        skills: ['FastAPI', 'Microservices', 'A/B Testing', 'SHAP', 'Plotly', 'Prophet'],
      },
    ],
  },
  {
    level: 'Familiar',
    description: 'Hands-on experience',
    categories: [
      {
        title: 'Edge & IoT',
        color: '#f97316',
        skills: ['TensorFlow Lite', 'ARM Cortex-A', 'CAN Bus', 'OBD-II', 'INT8 Quantization'],
      },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">Skills</span>
          <h2 className="section-title">My <span className="gradient-text">Tech Stack</span></h2>
        </div>

        {tiers.map((tier, ti) => (
          <div key={tier.level} className={`skill-tier skill-tier-${ti} animate-on-scroll`} style={{ transitionDelay: `${ti * 0.1}s` }}>
            <div className="tier-header">
              <h3 className="tier-label">{tier.level}</h3>
              <span className="tier-description">{tier.description}</span>
            </div>
            <div className="tier-categories">
              {tier.categories.map((cat) => (
                <div key={cat.title} className="tier-category" style={{ '--cat-color': cat.color }}>
                  <div className="tier-category-name">
                    <span className="tier-dot" style={{ background: cat.color }}></span>
                    {cat.title}
                  </div>
                  <div className="tier-tags">
                    {cat.skills.map((s) => (
                      <span key={s} className="tier-tag">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
