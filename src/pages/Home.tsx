import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import SideProjectCard from '../components/SideProjectCard'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { sideProjects } from '../data/sideProjects'

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">AI SERVICE DEVELOPER PORTFOLIO</p>
            <h1>AI를 연결해<br /><span>사용 가능한 서비스</span>를 만듭니다.</h1>
            <p className="hero-description">{profile.intro}</p>
            <div className="button-row">
              <Link className="button primary" to="/projects">Projects 보기</Link>
              <Link className="button secondary" to="/resume">Resume</Link>
              <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <Link className="button ghost" to="/ai-learning">AI Learning →</Link>
            </div>
          </div>
          <div className="hero-panel" aria-label="개발자 프로필 요약">
            <div className="code-dots"><span /><span /><span /></div>
            <div className="hero-code">
              <p><span className="code-key">const</span> developer = {'{'}</p>
              <p>&nbsp;&nbsp;name: <span className="code-value">'{profile.name}'</span>,</p>
              <p>&nbsp;&nbsp;focus: <span className="code-value">'AI Service'</span>,</p>
              <p>&nbsp;&nbsp;connects: [</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-value">'Model'</span>, <span className="code-value">'API'</span>,</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-value">'Web'</span>, <span className="code-value">'Database'</span></p>
              <p>&nbsp;&nbsp;]</p><p>{'}'}</p>
            </div>
            <div className="availability"><span /> 새로운 기회를 기다리고 있습니다</div>
          </div>
        </div>
      </section>
      <section className="section projects-preview">
        <div className="container">
          <SectionHeading eyebrow="SELECTED AI & WEB WORK" title="대표 프로젝트" description="모델, API, 데이터, 화면을 연결해 서비스로 완성한 과정을 담았습니다." />
          <div className="project-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div>
          <div className="center-action"><Link className="button secondary" to="/projects">전체 프로젝트 보기 →</Link></div>
        </div>
      </section>
      {sideProjects.length > 0 && (
        <section className="section side-projects">
          <div className="container">
            <SectionHeading eyebrow="SIDE & MINI BUILDS" title="기타 프로젝트" description="짧게 만들어보고 배포까지 이어본 개인 프로젝트입니다." />
            <div className="side-project-grid">{sideProjects.map((project) => <SideProjectCard project={project} key={project.name} />)}</div>
          </div>
        </section>
      )}
      <section className="section compact-cta">
        <div className="container cta-box"><div><span className="eyebrow">LEARNING LOG</span><h2>AI 개발자로 성장하는 과정을 기록합니다.</h2></div><Link className="button light" to="/ai-learning">AI Learning</Link></div>
      </section>
    </>
  )
}
