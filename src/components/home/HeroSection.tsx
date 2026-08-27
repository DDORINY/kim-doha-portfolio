import { Link } from 'react-router-dom'
import SectionScrollButton from '../SectionScrollButton'
import AIPipelinePanel from './AIPipelinePanel'

export default function HeroSection() {
  return (
    <section className="home-hero section" aria-labelledby="home-hero-title">
      <div className="container home-hero-inner">
        <div className="home-hero-copy">
          <p className="eyebrow">KIM DOHA</p>
          <h1 id="home-hero-title">
            <span className="hero-title-line">AI SERVICE</span>
            <span className="hero-title-line hero-title-accent">DEVELOPER</span>
          </h1>
          <p className="home-hero-description">
            <strong>LLM · AI Backend · Service Integration</strong>
            <span>Python / FastAPI / Flask 기반으로 AI 모델을 실제 서비스까지 연결합니다.</span>
          </p>
          <div className="button-row home-hero-actions">
            <Link className="button primary" to="/projects">VIEW PROJECTS</Link>
            <Link className="button secondary" to="/resume">VIEW RESUME</Link>
          </div>
        </div>
        <AIPipelinePanel />
      </div>
      <div className="container home-hero-metrics" aria-label="핵심 경력과 기술 영역">
        <div><strong>5Y 8M</strong><span>BUSINESS EXPERIENCE</span></div>
        <div><strong>LLM + CV</strong><span>AI DOMAINS</span></div>
        <div><strong>PYTHON</strong><span>BACKEND</span></div>
        <div><strong>END-TO-END</strong><span>SERVICE INTEGRATION</span></div>
      </div>
      <SectionScrollButton className="hero-scroll-indicator" targetId="core-competencies-title" ariaLabel="SCROLL · 핵심 역량 섹션으로 이동">
        <span>SCROLL</span><i aria-hidden="true"><b /></i>
      </SectionScrollButton>
    </section>
  )
}
