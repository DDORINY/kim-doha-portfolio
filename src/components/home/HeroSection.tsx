import { Link } from 'react-router-dom'
import { heroTechKeywords } from '../../data/home'
import { TechChip } from '../TechIcon'
import AIPipelinePanel from './AIPipelinePanel'

export default function HeroSection() {
  return (
    <section className="home-hero section" aria-labelledby="home-hero-title">
      <div className="container home-hero-inner">
        <div className="home-hero-copy">
          <p className="eyebrow">KIM DOHA · PORTFOLIO</p>
          <h1 id="home-hero-title">
            <span className="hero-title-line">AI SERVICE</span>
            <span className="hero-title-line hero-title-accent">DEVELOPER</span>
          </h1>
          <p className="home-hero-description">
            객체탐지 모델과 LLM을 실제 서비스에 연결하고,<br />
            Python 기반 API부터 데이터베이스와 배포까지 구현하는<br />
            AI 서비스 개발자 김도하입니다.
          </p>
          <div className="home-hero-tech" aria-label="핵심 기술">
            {heroTechKeywords.map((keyword) => <TechChip label={keyword} key={keyword} />)}
          </div>
          <div className="button-row home-hero-actions">
            <Link className="button primary" to="/projects">VIEW PROJECTS</Link>
            <Link className="button secondary" to="/resume">VIEW RESUME</Link>
          </div>
        </div>
        <AIPipelinePanel />
      </div>
      <Link className="hero-scroll-indicator" to="/#core-competencies-title" aria-label="핵심 역량 섹션으로 이동">
        <span>SCROLL</span><i aria-hidden="true"><b /></i>
      </Link>
    </section>
  )
}
