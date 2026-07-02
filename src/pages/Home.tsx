import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">HELLO, I’M DOHA.</p>
            <h1>복잡함을 덜어내고<br /><span>쓸모 있는 경험</span>을 만듭니다.</h1>
            <p className="hero-description">{profile.intro}</p>
            <div className="button-row">
              <Link className="button primary" to="/projects">Projects 보기</Link>
              <Link className="button secondary" to="/resume">Resume</Link>
              <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
          <div className="hero-panel" aria-label="개발자 프로필 요약">
            <div className="code-dots"><span /><span /><span /></div>
            <div className="hero-code">
              <p><span className="code-key">const</span> developer = {'{'}</p>
              <p>&nbsp;&nbsp;name: <span className="code-value">'{profile.name}'</span>,</p>
              <p>&nbsp;&nbsp;focus: <span className="code-value">'Frontend'</span>,</p>
              <p>&nbsp;&nbsp;values: [</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-value">'clarity'</span>, <span className="code-value">'usability'</span>,</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-value">'steady growth'</span></p>
              <p>&nbsp;&nbsp;]</p><p>{'}'}</p>
            </div>
            <div className="availability"><span /> 새로운 기회를 기다리고 있습니다</div>
          </div>
        </div>
      </section>
      <section className="section projects-preview">
        <div className="container">
          <SectionHeading eyebrow="SELECTED WORK" title="대표 프로젝트" description="문제를 정의하고 해결하는 과정에서 배운 것들을 담았습니다." />
          <div className="project-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div>
          <div className="center-action"><Link className="button secondary" to="/projects">전체 프로젝트 보기 →</Link></div>
        </div>
      </section>
      <section className="section compact-cta">
        <div className="container cta-box"><div><span className="eyebrow">LET’S CONNECT</span><h2>좋은 제품을 함께 만들고 싶습니다.</h2></div><Link className="button light" to="/contact">Contact</Link></div>
      </section>
    </>
  )
}
