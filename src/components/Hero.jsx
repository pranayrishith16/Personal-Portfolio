import { useState, useEffect } from 'react'
import './Hero.css'

const roles = ['Data Scientist', 'ML Engineer', 'MLOps Specialist', 'GenAI Developer']

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout
    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, isDeleting ? text.length - 1 : text.length + 1))
      }, isDeleting ? 50 : 100)
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>
      <div className="hero-content container">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for opportunities
        </div>
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Pranay Rishith</span>
        </h1>
        <div className="hero-role">
          <span className="role-text">{text}</span>
          <span className="cursor">|</span>
        </div>
        <p className="hero-description">
          ML Engineer with 4+ years building production AI systems across enterprise GenAI,
          edge computing, and connected vehicle platforms. Delivering scalable ML solutions
          with 99.5%+ uptime and measurable business impact.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
            Get in Touch
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">4+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">99.5%</span>
            <span className="stat-label">System Uptime</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Vehicles Deployed</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
