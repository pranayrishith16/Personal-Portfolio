import { useState, useEffect, useRef } from 'react'
import Sparkline from './shared/Sparkline'
import './Hero.css'

const bootLines = [
  { text: '> Initializing portfolio.sys...', delay: 0 },
  { text: '> Loading credentials... ', suffix: '[OK]', delay: 600 },
  { text: '> Mounting experience: 4+ years ', suffix: '[OK]', delay: 1200 },
  { text: '> Checking uptime... 99.5% ', suffix: '[OK]', delay: 1800 },
  { text: '> System ready.', delay: 2400 },
]

const metrics = [
  { target: 99.5, suffix: '%', label: 'Uptime', trend: '+1.4%', data: [96.2,97.1,97.8,98.1,98.4,99.0,99.2,99.5,99.5,99.6], color: '#00ff88', decimals: 1, story: 'Production RAG at Accenture — 3 months, zero incidents', context: 'Beats industry SLA of 99.0%' },
  { target: 1.2, suffix: 'TB', label: 'Data/Day', trend: '+340GB', data: [0.4,0.5,0.6,0.7,0.8,0.85,0.9,1.0,1.1,1.2], color: '#00d4ff', decimals: 1, story: 'PySpark pipelines at Harman — IoT from 50K vehicles', context: 'ETL: 4 hours → 2 minutes' },
  { target: 50, suffix: 'K+', label: 'Devices', trend: '+12K', data: [8,15,22,28,33,38,42,45,48,52], color: '#ffaa00', decimals: 0, story: 'ML models (CNNs, XGBoost) on edge devices', context: 'Anomaly accuracy: 71% → 84%' },
]

function CountUp({ target, suffix, decimals, color, delay = 0 }) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!started) return
    const duration = 1200
    const startTime = performance.now()
    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(eased * target)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, target])

  return <span className="metric-value" style={{ color }}>{value.toFixed(decimals)}{suffix}</span>
}

function Hero() {
  const [bootPhase, setBootPhase] = useState(0)
  const [visibleLines, setVisibleLines] = useState(0)
  const [glitch, setGlitch] = useState(false)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    if (bootPhase === 0) {
      const timers = bootLines.map((_, i) =>
        setTimeout(() => setVisibleLines(i + 1), bootLines[i].delay)
      )
      const switchTimer = setTimeout(() => setBootPhase(1), 3200)
      return () => { timers.forEach(clearTimeout); clearTimeout(switchTimer) }
    }
  }, [bootPhase])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      {bootPhase === 0 && (
        <div className="boot-terminal">
          <div className="term-header">
            <div className="term-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="term-title">portfolio.sys — bash</span>
          </div>
          <div className="term-body">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="boot-line">
                <span className="boot-text">{line.text}</span>
                {line.suffix && <span className="boot-ok">{line.suffix}</span>}
              </div>
            ))}
            <span className="term-cursor">█</span>
          </div>
        </div>
      )}

      {bootPhase === 1 && (
        <div className="dashboard container" style={{ animation: 'fadeIn 0.8s ease both' }}>
          <div className="dash-status">
            <span className="status-badge status-badge--live">System Operational</span>
          </div>

          <h1
            className={`dash-name ${glitch ? 'glitch' : ''}`}
            onMouseEnter={() => setGlitch(true)}
            onMouseLeave={() => setGlitch(false)}
            data-text="Pranay Rishith Bondugula"
          >
            Pranay Rishith Bondugula
          </h1>

          <p className="dash-role">
            <span className="prompt">{'>'}</span> ML Engineer who ships production systems
          </p>

          <div className="dash-metrics">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="metric-card sys-card"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === i && (
                  <div className="stat-tooltip">
                    <p className="stat-story">{m.story}</p>
                    <p className="stat-context">{m.context}</p>
                  </div>
                )}
                <div className="metric-top">
                  <span className="metric-label">{m.label}</span>
                  <span className="metric-trend" style={{ color: m.color }}>{m.trend}</span>
                </div>
                <CountUp target={m.target} suffix={m.suffix} decimals={m.decimals} color={m.color} delay={i * 200} />
                <Sparkline data={m.data} color={m.color} width={160} height={36} />
              </div>
            ))}
          </div>

          <p className="dash-proof">
            4 years shipping ML systems that <strong>50K+ devices</strong> run daily —
            from RAG systems at <strong>Accenture</strong> to edge AI at <strong>Harman</strong>.
          </p>

          <div className="dash-cta">
            <button className="cmd-btn cmd-btn-primary" onClick={() => scrollTo('projects')}>▶ View Systems</button>
            <a className="cmd-btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">↓ Resume</a>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
