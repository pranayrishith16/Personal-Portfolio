import './StatusDashboard.css'

function StatusDashboard() {
  return (
    <section id="status" className="section status-dashboard">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">status</span>
          <h2 className="section-title">Current <span style={{ color: 'var(--cyan)' }}>Status</span></h2>
        </div>

        <div className="status-grid animate-on-scroll">
          <div className="status-item sys-card">
            <div className="si-header">
              <span className="si-label">Currently Working On</span>
              <span className="status-badge status-badge--live">Active</span>
            </div>
            <p className="si-desc">RAG optimization & multi-agent systems</p>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '65%' }}></div>
            </div>
            <span className="si-pct">65% complete</span>
          </div>

          <div className="status-item sys-card">
            <div className="si-header">
              <span className="si-label">Latest Activity</span>
            </div>
            <div className="activity-lines">
              <div className="act-line">
                <span className="act-icon" style={{ color: 'var(--green)' }}>+</span>
                <span>Recently added: Anthropic MCP</span>
              </div>
              <div className="act-line">
                <span className="act-icon" style={{ color: 'var(--cyan)' }}>↑</span>
                <span>Studying: Multi-Agent orchestration</span>
              </div>
              <div className="act-line">
                <span className="act-icon" style={{ color: 'var(--amber)' }}>⚡</span>
                <span>Exploring: MLX local inference</span>
              </div>
            </div>
          </div>

          <div className="status-item sys-card">
            <div className="si-header">
              <span className="si-label">Availability</span>
            </div>
            <div className="availability">
              <span className="avail-indicator"></span>
              <span className="avail-text">Open to Opportunities</span>
            </div>
            <p className="avail-detail">Full-time roles, consulting, and collaboration</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatusDashboard
