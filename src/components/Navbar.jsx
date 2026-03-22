import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'logs' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'systems' },
  { id: 'contact', label: 'connect' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollPos = window.scrollY + 200
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id)
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a className="navbar-logo" href="#home" onClick={() => handleClick('home')}>
          <span className="logo-bracket">[</span>PRB<span className="logo-bracket">]</span>
        </a>
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleClick(link.id) }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
