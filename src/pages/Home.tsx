import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import ProjectShowcase from '../components/ProjectShowcase'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SideProjectCarousel from '../components/SideProjectCarousel'
import TechIcon from '../components/TechIcon'
import { homeEvidenceMetrics, homeModelMetrics, profile } from '../data/profile'
import { projects } from '../data/projects'
import { sideProjects } from '../data/sideProjects'

const deployedProjects = projects.filter((project) => project.deploy.url && !project.deploy.placeholder)
const deployedSideProjects = sideProjects.filter((project) => project.status !== 'in-progress')

export default function Home() {
  return (
    <>
      <section className="hero section">
        <ProjectShowcase />
        <div className="container hero-top">
          <div className="hero-panel" aria-label="개발자 프로필 요약">
            <div className="code-dots"><span /><span /><span /></div>
            <div className="hero-panel-profile">
              <img src={profile.photo} alt={`${profile.name} 프로필 사진`} />
              <div>
                <strong>{profile.name}</strong>
                <span>{profile.role}</span>
              </div>
            </div>
            <div className="hero-code">
              <p><span className="code-key">const</span> developer = {'{'}</p>
              <p>&nbsp;&nbsp;name: <span className="code-value">'{profile.name}'</span>,</p>
              <p>&nbsp;&nbsp;focus: <span className="code-value">'AI Developer'</span>,</p>
              <p>&nbsp;&nbsp;connects: [</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-value">'Model'</span>, <span className="code-value">'API'</span>,</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-value">'Web'</span>, <span className="code-value">'Database'</span></p>
              <p>&nbsp;&nbsp;]</p><p>{'}'}</p>
            </div>
            <div className="availability"><span /> 새로운 기회를 기다리고 있습니다</div>
          </div>
        </div>
        <div className="hero-band">
          <div className="container hero-band-inner">
            <div className="hero-band-heading">
              <p className="eyebrow">AI DEVELOPER PORTFOLIO</p>
              <h1>AI를 연결해 <span>사용 가능한 서비스</span>를 만듭니다.</h1>
            </div>
            <p className="hero-description">{profile.intro}</p>
            <div className="button-row">
              <Link className="button primary" to="/projects">Projects 보기</Link>
              <Link className="button secondary" to="/resume">Resume</Link>
              <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer"><TechIcon name="GitHub" />GitHub ↗</a>
              <Link className="button ghost" to="/ai-learning">AI Learning →</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section evidence-summary">
        <div className="container">
          <SectionHeading eyebrow="EVIDENCE SUMMARY" title="말이 아니라 근거로 보여주는 역량" description="AI 서비스 통합, 객체탐지, VM 운영, 모델 실험까지 실제 프로젝트에서 확인한 수치입니다." />
          <div className="metric-card-grid">
            {homeEvidenceMetrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <span className="metric-card-value">{metric.value}</span>
                <span className="metric-card-label">{metric.label}</span>
                {metric.description && <p>{metric.description}</p>}
              </div>
            ))}
          </div>
          <div className="metric-card-grid metric-card-grid-model">
            {homeModelMetrics.map((metric) => (
              <div className="metric-card metric-card-model" key={metric.label}>
                <span className="metric-card-value">{metric.value}</span>
                <span className="metric-card-label">{metric.label}</span>
                {metric.description && <p>{metric.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section projects-preview">
        <div className="container">
          <SectionHeading eyebrow="SELECTED AI & WEB WORK" title="대표 프로젝트" description="모델, API, 데이터, 화면을 연결해 서비스로 완성한 과정을 담았습니다." />
          <div className="project-grid">{deployedProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div>
          <div className="center-action"><Link className="button secondary" to="/projects">전체 프로젝트 보기 →</Link></div>
        </div>
      </section>
      {deployedSideProjects.length > 0 && (
        <section className="section side-projects">
          <div className="container">
            <SectionHeading eyebrow="SIDE & MINI BUILDS" title="기타 프로젝트" description="짧게 만들어보고 배포까지 이어본 개인 프로젝트입니다." />
            <SideProjectCarousel projects={deployedSideProjects} />
          </div>
        </section>
      )}
      <section className="section compact-cta">
        <div className="container">
          <Reveal as="div" className="cta-box"><div><span className="eyebrow">LEARNING LOG</span><h2>AI 개발자로 성장하는 과정을 기록합니다.</h2></div><Link className="button light" to="/ai-learning">AI Learning</Link></Reveal>
        </div>
      </section>
    </>
  )
}
