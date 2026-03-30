"use client";

import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

export default function Home() {
  useEffect(() => {
    // Console easter egg
    console.log(
      `%c[SYSTEM] Portfolio loaded successfully\n%cBuild: v3.0.0-nextjs-migration\n%cIf you're reading this, let's talk: pranayrishith.usa@gmail.com\n\n%cStack: React + Next.js + Fira Code + way too much caffeine`,
      'color: #00ff88; font-weight: bold; font-size: 14px',
      'color: #8892b0',
      'color: #00d4ff',
      'color: #8892b0; font-style: italic'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </>
  )
}
