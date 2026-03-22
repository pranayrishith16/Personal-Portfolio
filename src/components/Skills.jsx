import './Skills.css'

const skillCategories = [
  {
    title: 'GenAI & LLMs',
    color: '#8b5cf6',
    skills: ['LangChain', 'LangGraph', 'RAG', 'Vector Databases', 'Claude API', 'OpenAI', 'OpenRouter', 'Prompt Engineering', 'Fine-tuning', 'Few-shot Prompting', 'Chain-of-Thought Prompting', 'Pinecone', 'Sentence-Transformers'],
  },
  {
    title: 'ML & Deep Learning',
    color: '#06d6a0',
    skills: ['PyTorch', 'TensorFlow', 'TensorFlow Lite', 'Transformers', 'XGBoost', 'Random Forest', 'LightGBM', 'CNNs (ResNet-18)', 'LSTMs', 'Computer Vision', 'NLP', 'Collaborative Filtering (ALS)', 'Scikit-learn'],
  },
  {
    title: 'MLOps & Infrastructure',
    color: '#ec4899',
    skills: ['Kubernetes', 'Docker', 'CI/CD', 'GitHub Actions', 'MLflow', 'Airflow', 'Model Monitoring', 'A/B Testing', 'Feature Stores', 'Prometheus', 'Grafana', 'Canary Deployments', 'Automated Regression Testing', 'DVC'],
  },
  {
    title: 'Cloud & Data Engineering',
    color: '#3b82f6',
    skills: ['AWS (ML Specialty)', 'GCP (K8s Engine, Cloud Storage, IAM, VPC)', 'Azure', 'PySpark', 'Spark', 'Real-time Data Pipelines', 'SQL', 'Python', 'Pandas', 'NumPy'],
  },
  {
    title: 'Data Analysis & Visualization',
    color: '#f59e0b',
    skills: ['SHAP', 'Plotly', 'Prophet', 'F1-Score Analysis', 'Evaluation Frameworks'],
  },
  {
    title: 'Backend & APIs',
    color: '#14b8a6',
    skills: ['FastAPI', 'Microservices', 'Circuit Breakers', 'P99 Latency Monitoring'],
  },
  {
    title: 'Edge & IoT',
    color: '#f97316',
    skills: ['ARM Cortex-A Processors', 'CAN Bus', 'OBD-II', 'INT8 Quantization'],
  },
  {
    title: 'Data Sources & Formats',
    color: '#a78bfa',
    skills: ['IoT Sensor Data', 'Vehicle Telemetry', 'Enterprise Documents'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">Skills</span>
          <h2 className="section-title">My <span className="gradient-text">Tech Stack</span></h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building production AI systems at scale.
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="skill-category glass-card animate-on-scroll"
              style={{ '--cat-color': category.color, transitionDelay: `${index * 0.08}s` }}
            >
              <div className="skill-category-header">
                <div className="skill-category-dot" style={{ background: category.color }}></div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
