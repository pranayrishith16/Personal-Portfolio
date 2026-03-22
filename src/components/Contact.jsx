import { useState, useRef, useEffect } from 'react'
import './Contact.css'

const commands = {
  help: `Available commands:
  email      → Open email client
  github     → Visit GitHub profile
  linkedin   → Visit LinkedIn profile
  resume     → Download resume
  clear      → Clear terminal`,
  email: '__ACTION_EMAIL__',
  github: '__ACTION_GITHUB__',
  linkedin: '__ACTION_LINKEDIN__',
  resume: '__ACTION_RESUME__',
}

function Contact() {
  const [history, setHistory] = useState([
    { type: 'output', text: `pranay@portfolio:~$ get_in_touch

Available channels:
  email    → pranayrishith@gmail.com
  github   → github.com/pranayrishith16
  linkedin → linkedin.com/in/pranayrishith

Type 'help' for commands.` },
  ])
  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [history])

  const handleSubmit = (e) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    const newHistory = [...history, { type: 'input', text: `pranay@portfolio:~$ ${input}` }]

    if (cmd === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    const result = commands[cmd]
    if (result === '__ACTION_EMAIL__') {
      newHistory.push({ type: 'output', text: 'Opening email client...' })
      window.open('mailto:pranayrishith@gmail.com')
    } else if (result === '__ACTION_GITHUB__') {
      newHistory.push({ type: 'output', text: 'Opening GitHub...' })
      window.open('https://github.com/pranayrishith16', '_blank')
    } else if (result === '__ACTION_LINKEDIN__') {
      newHistory.push({ type: 'output', text: 'Opening LinkedIn...' })
      window.open('https://linkedin.com/in/pranayrishith', '_blank')
    } else if (result === '__ACTION_RESUME__') {
      newHistory.push({ type: 'output', text: 'Downloading resume...' })
      window.open('/resume.pdf', '_blank')
    } else if (result) {
      newHistory.push({ type: 'output', text: result })
    } else if (cmd) {
      newHistory.push({ type: 'output', text: `command not found: ${cmd}. Type 'help' for available commands.` })
    }

    setHistory(newHistory)
    setInput('')
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">connect</span>
          <h2 className="section-title">Get In <span style={{ color: 'var(--cyan)' }}>Touch</span></h2>
        </div>

        <div className="contact-terminal sys-card animate-on-scroll" onClick={() => inputRef.current?.focus()}>
          <div className="ct-header">
            <div className="editor-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="ct-title">connect — zsh</span>
          </div>
          <div className="ct-body" ref={bodyRef}>
            {history.map((h, i) => (
              <pre key={i} className={`ct-line ${h.type}`}>{h.text}</pre>
            ))}
            <form onSubmit={handleSubmit} className="ct-input-row">
              <span className="ct-prompt">pranay@portfolio:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="ct-input"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </div>
        </div>

        <div className="contact-quick animate-on-scroll">
          <a className="cmd-btn" href="mailto:pranayrishith@gmail.com">✉ Email</a>
          <a className="cmd-btn" href="https://github.com/pranayrishith16" target="_blank" rel="noopener noreferrer">⌘ GitHub</a>
          <a className="cmd-btn" href="https://linkedin.com/in/pranayrishith" target="_blank" rel="noopener noreferrer">∞ LinkedIn</a>
          <a className="cmd-btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">↓ Resume</a>
        </div>

        <footer className="new-footer">
          <p>© 2026 Pranay Rishith Bondugula</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
