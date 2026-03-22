import './Education.css'

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic <span className="gradient-text">Background</span></h2>
        </div>
        <div className="education-card glass-card animate-on-scroll">
          <div className="edu-icon-wrapper">
            <span className="edu-icon">🎓</span>
          </div>
          <div className="edu-details">
            <div className="edu-header">
              <div>
                <h3 className="edu-school">University of North Texas</h3>
                <p className="edu-degree">Master of Science in Data Science</p>
              </div>
              <span className="edu-period">Aug 2023 – May 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
