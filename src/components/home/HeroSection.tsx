import { Link } from 'react-router-dom'
import { heroTechKeywords } from '../../data/home'
import { profile } from '../../data/profile'
import ProjectShowcase from '../ProjectShowcase'
import { TechChip } from '../TechIcon'

export default function HeroSection() {
  return (
    <section className="home-hero section" aria-labelledby="home-hero-title">
      <ProjectShowcase />
      <div className="container home-hero-inner">
        <div className="home-hero-copy">
          <p className="eyebrow">KIM DOHA · PORTFOLIO</p>
          <h1 id="home-hero-title">AI SERVICE DEVELOPER</h1>
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
        <aside className="hero-panel home-profile-panel" aria-label="개발자 프로필 요약">
          <div className="code-dots"><span /><span /><span /></div>
          <div className="hero-panel-profile">
            <img src={profile.photo} alt={`${profile.name} 프로필 사진`} />
            <div>
              <strong>{profile.name}</strong>
              <span>{profile.positioning.position}</span>
            </div>
          </div>
          <div className="hero-code">
            <p><span className="code-key">const</span> developer = {'{'}</p>
            <p>&nbsp;&nbsp;focus: <span className="code-value">'AI Service'</span>,</p>
            <p>&nbsp;&nbsp;connects: [</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-value">'Model'</span>, <span className="code-value">'API'</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-value">'Database'</span>, <span className="code-value">'Deploy'</span></p>
            <p>&nbsp;&nbsp;]</p><p>{'}'}</p>
          </div>
          <div className="availability"><span /> {profile.availability}</div>
        </aside>
      </div>
    </section>
  )
}
