import './About.css'

const codeLines = [
  { num: 1, content: <><span className="kw">interface</span> <span className="type">MLEngineer</span> {'{'}</> },
  { num: 2, content: <>&nbsp;&nbsp;<span className="prop">name</span>: <span className="str">"Pranay Rishith Bondugula"</span></> },
  { num: 3, content: <>&nbsp;&nbsp;<span className="prop">focus</span>: <span className="str">"Production ML Systems"</span></> },
  { num: 4, content: <>&nbsp;&nbsp;<span className="prop">experience</span>: <span className="num">4</span><span className="kw">+</span> <span className="cmt">// years</span></> },
  { num: 5, content: '' },
  { num: 6, content: <>&nbsp;&nbsp;<span className="prop">currentStack</span>: {'{'}</> },
  { num: 7, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="prop">GenAI</span>: [<span className="str">"RAG Pipelines"</span>, <span className="str">"LLM Fine-tuning"</span>],</> },
  { num: 8, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="prop">MLOps</span>: [<span className="str">"Kubernetes"</span>, <span className="str">"Docker"</span>, <span className="str">"CI/CD"</span>],</> },
  { num: 9, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="prop">Scale</span>: [<span className="str">"1TB+ daily"</span>, <span className="str">"50K+ edge devices"</span>]</> },
  { num: 10, content: <>&nbsp;&nbsp;{'}'}</> },
  { num: 11, content: '' },
  { num: 12, content: <>&nbsp;&nbsp;<span className="prop">provenImpact</span>: {'{'}</> },
  { num: 13, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="prop">uptime</span>: <span className="str">"99.5%"</span>,</> },
  { num: 14, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="prop">latencyReduction</span>: <span className="str">"4 hours → 2 minutes"</span>,</> },
  { num: 15, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="prop">accuracyGain</span>: <span className="str">"71% → 84%"</span></> },
  { num: 16, content: <>&nbsp;&nbsp;{'}'}</> },
  { num: 17, content: '}' },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">about.ts</span>
          <h2 className="section-title">System <span style={{ color: 'var(--cyan)' }}>Profile</span></h2>
        </div>
        <div className="code-editor sys-card animate-on-scroll">
          <div className="editor-header">
            <div className="editor-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="editor-tabs">
              <span className="editor-tab active">README.md</span>
              <span className="editor-tab">experience.json</span>
              <span className="editor-tab">skills.yaml</span>
            </div>
          </div>
          <div className="editor-body">
            {codeLines.map((line) => (
              <div key={line.num} className="code-line">
                <span className="line-num">{line.num}</span>
                <span className="line-content">{line.content || '\u00A0'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
