'use client'

import { useState, useEffect } from 'react'
import './CookieConsent.css'

const STORAGE_KEY = 'cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show if user hasn't made a choice yet
    const choice = localStorage.getItem(STORAGE_KEY)
    if (!choice) {
      // Slight delay so it doesn't pop in instantly on page load
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
    fireTrack()
  }

  const fireTrack = () => {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        referrer:  document.referrer || null,
        userAgent: navigator.userAgent,
        page:      window.location.pathname,
      }),
    }).catch(() => {}) // silent — never surface analytics errors to the user
  }

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cc-bar" role="dialog" aria-label="Cookie consent">
      <p className="cc-text">
        This site uses cookies to understand visitor traffic.{' '}
        <span className="cc-detail">No personal data is sold or shared.</span>
      </p>
      <div className="cc-actions">
        <button className="cc-btn cc-decline" onClick={handleDecline}>Decline</button>
        <button className="cc-btn cc-accept" onClick={handleAccept}>Accept</button>
      </div>
    </div>
  )
}
