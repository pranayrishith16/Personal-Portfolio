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
              <span className="si-label">Current Sprint</span>
              <span className="status-badge status-badge--live">Week 3 of 4</span>
            </div>
            <p className="si-desc">Multi-agent orchestration → production RAG demo</p>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '72%' }}></div>
            </div>
            <div className="sprint-breakdown">
              <div className="sprint-done">✓ LangGraph state machine</div>
              <div className="sprint-done">✓ Tool routing logic</div>
              <div className="sprint-active">→ Evaluation framework</div>
              <div className="sprint-pending">○ Production deploy</div>
            </div>
          </div>

          <div className="status-item sys-card">
            <div className="si-header">
              <span className="si-label">Recent Activity</span>
            </div>
            <div className="activity-lines">
              <div className="act-line">
                <span className="act-ts">2d ago</span>
                <span>Deployed: RAG latency fix (480ms → 180ms)</span>
              </div>
              <div className="act-line">
                <span className="act-ts">1w ago</span>
                <span>Added: Anthropic MCP integration</span>
              </div>
              <div className="act-line">
                <span className="act-ts">2w ago</span>
                <span>Shipped: multi-agent tool routing v2</span>
              </div>
            </div>
          </div>

          <div className="status-item sys-card">
            <div className="si-header">
              <span className="si-label">Availability</span>
            </div>
            <div className="availability">
              <span className="avail-indicator"></span>
              <span className="avail-text">Open to Senior ML/MLOps Roles</span>
            </div>
            <p className="avail-detail">Remote-first · Companies shipping AI to production</p>
            <div className="avail-tags">
              <span className="avail-tag">Full-time</span>
              <span className="avail-tag">Consulting</span>
              <span className="avail-tag">Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatusDashboard
