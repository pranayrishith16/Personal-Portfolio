import { useEffect, useRef } from 'react'
import './Hero.css'

const chips = [
  'Python', 'PySpark', 'SQL', 'PyTorch', 'TensorFlow', 'XGBoost', 'Scikit-learn',
  'LangChain', 'RAG', 'MLflow', 'Kubernetes', 'Docker', 'AWS', 'FastAPI', 'NLP', 'Computer Vision',
]

export default function Hero() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero-wrap">
      {/* ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="hero-inner container">
        {/* availability */}
        <div className="hero-badge badge badge-green">Open to opportunities</div>

        {/* name */}
        <h1 className="hero-h1">
          <span className="hero-first">Pranay Rishith</span>
          <span className="hero-last grad-text">Bondugula</span>
        </h1>

        {/* single role */}
        <div className="hero-role-block">
          <span className="hero-role-title">Data Scientist</span>
          <span className="hero-role-sep">with</span>
          <span className="hero-role-sub">AI / ML Engineering & MLOps Skills</span>
        </div>

        {/* tag line */}
        <p className="hero-tagline">
          I build end-to-end intelligent systems — from raw data pipelines and model training
          to production deployment and monitoring — across the full ML lifecycle.
        </p>

        {/* skill chips — covers ALL 3 role areas */}
        <div className="hero-chips">
          {chips.map(c => <span key={c} className="hchip">{c}</span>)}
        </div>

        {/* CTA */}
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            View my work <span className="cta-arrow">→</span>
          </button>
        </div>

        {/* companies */}
        <div className="hero-exp-row">
          <span className="exp-label">4 yrs at</span>
          <span className="exp-co">Accenture</span>
          <span className="exp-dot">·</span>
          <span className="exp-co">Harman International</span>
          <span className="exp-dot">·</span>
          <span className="exp-school">UNT M.S. Data Science</span>
        </div>
      </div>
    </section>
  )
}
