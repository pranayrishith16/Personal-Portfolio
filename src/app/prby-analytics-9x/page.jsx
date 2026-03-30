'use client'

import { useState, useEffect } from 'react'
import './page.css'

const SESSION_KEY = 'dash_auth'

function parseUA(ua) {
  if (!ua || ua === '—') return '—'
  if (/iPhone|iPad/.test(ua)) return '📱 iOS'
  if (/Android/.test(ua)) return '📱 Android'
  if (/Windows/.test(ua)) return '🖥 Windows'
  if (/Mac OS X/.test(ua)) return '🖥 macOS'
  if (/Linux/.test(ua)) return '🐧 Linux'
  return '🌐 Unknown'
}

function formatDate(iso) {
  if (!iso) return '—'
  const d = new Date(iso)
  return d.toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

export default function Dashboard() {
  const [authed, setAuthed]     = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [visitors, setVisitors] = useState([])
  const [fetching, setFetching] = useState(false)

  // Restore session from sessionStorage (clears on tab close)
  useEffect(() => {
    const saved = sessionStorage.getItem(SESSION_KEY)
    if (saved) {
      setAuthed(true)
      loadVisitors(saved)
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/visitors', {
      headers: { 'x-dashboard-key': password },
    })

    if (res.ok) {
      const data = await res.json()
      sessionStorage.setItem(SESSION_KEY, password)
      setAuthed(true)
      setVisitors(data.visitors || [])
    } else {
      setError('Incorrect password.')
    }
    setLoading(false)
  }

  const loadVisitors = async (pwd) => {
    setFetching(true)
    const res = await fetch('/api/visitors', {
      headers: { 'x-dashboard-key': pwd },
    })
    if (res.ok) {
      const data = await res.json()
      setVisitors(data.visitors || [])
    }
    setFetching(false)
  }

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY)
    setAuthed(false)
    setVisitors([])
    setPassword('')
  }

  // ── Login screen ──────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="dash-login-wrap">
        <div className="dash-login-card">
          <div className="dash-login-header">
            <span className="dash-mono">pranay@analytics:~$</span>
            <h1 className="dash-login-title">Access Required</h1>
          </div>
          <form onSubmit={handleLogin} className="dash-login-form">
            <input
              type="password"
              className="dash-password-input"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoFocus
              autoComplete="current-password"
            />
            {error && <p className="dash-error">{error}</p>}
            <button className="dash-login-btn" type="submit" disabled={loading}>
              {loading ? 'Verifying...' : 'Enter →'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // ── Dashboard ─────────────────────────────────────────────────
  const uniqueCountries  = [...new Set(visitors.map(v => v.country).filter(c => c !== '—'))].length
  const uniqueIPs        = [...new Set(visitors.map(v => v.ip).filter(i => i !== 'localhost'))].length

  return (
    <div className="dash-wrap">

      {/* Header */}
      <header className="dash-header">
        <div>
          <span className="dash-mono">pranay@analytics:~$</span>
          <h1 className="dash-title">Visitor Analytics</h1>
        </div>
        <div className="dash-header-right">
          <button className="dash-refresh-btn" onClick={() => loadVisitors(sessionStorage.getItem(SESSION_KEY))} disabled={fetching}>
            {fetching ? 'Loading...' : '↻ Refresh'}
          </button>
          <button className="dash-logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      {/* Stats row */}
      <div className="dash-stats">
        <div className="dash-stat-card">
          <span className="dash-stat-val">{visitors.length}</span>
          <span className="dash-stat-lbl">Total Visits</span>
        </div>
        <div className="dash-stat-card">
          <span className="dash-stat-val">{uniqueIPs}</span>
          <span className="dash-stat-lbl">Unique IPs</span>
        </div>
        <div className="dash-stat-card">
          <span className="dash-stat-val">{uniqueCountries}</span>
          <span className="dash-stat-lbl">Countries</span>
        </div>
        <div className="dash-stat-card">
          <span className="dash-stat-val">
            {visitors[0] ? formatDate(visitors[0].timestamp).split(',')[0] : '—'}
          </span>
          <span className="dash-stat-lbl">Last Visit</span>
        </div>
      </div>

      {/* Table */}
      <div className="dash-table-wrap">
        {visitors.length === 0 ? (
          <p className="dash-empty">No visitors yet — share your portfolio!</p>
        ) : (
          <table className="dash-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>IP Address</th>
                <th>Location</th>
                <th>Device</th>
                <th>Referrer</th>
                <th>ISP / Org</th>
              </tr>
            </thead>
            <tbody>
              {visitors.map(v => (
                <tr key={v.id}>
                  <td className="dash-mono dash-ts">{formatDate(v.timestamp)}</td>
                  <td className="dash-mono dash-ip">{v.ip}</td>
                  <td>
                    {v.countryCode && (
                      <img
                        src={`https://flagcdn.com/16x12/${v.countryCode.toLowerCase()}.png`}
                        alt={v.countryCode}
                        className="dash-flag"
                      />
                    )}
                    {[v.city, v.country].filter(x => x && x !== '—').join(', ') || '—'}
                  </td>
                  <td>{parseUA(v.userAgent)}</td>
                  <td className="dash-referrer">{v.referrer}</td>
                  <td className="dash-org">{v.org}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  )
}
