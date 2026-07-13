import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import ProjectShowcase from '../components/ProjectShowcase'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SideProjectCarousel from '../components/SideProjectCarousel'
import TechIcon from '../components/TechIcon'
import { homeKeyMetrics, homePerformanceMetrics, homePipelineSteps, homeSupportingEvidence, profile } from '../data/profile'
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
          <SectionHeading
            variant="single"
            eyebrow="VERIFIED RESULTS"
            title="실제 프로젝트에서 검증한 결과"
            description="데이터 구축부터 모델 학습, API·DB·웹 연동, 분리 서버 운영까지 수행한 핵심 결과입니다."
          />
          <div className="kpi-grid">
            {homeKeyMetrics.map((metric) => (
              <div className="kpi-card" key={metric.label}>
                <span className="kpi-card-value">{metric.value}</span>
                <span className="kpi-card-label">{metric.label}</span>
                {metric.description && <p>{metric.description}</p>}
              </div>
            ))}
          </div>
          <div className="evidence-panels">
            <div className="evidence-panel">
              <span className="evidence-panel-title">AI SERVICE PIPELINE</span>
              <div className="pipeline-flow">
                {homePipelineSteps.map((step, index) => (
                  <div className="pipeline-step" key={step.label}>
                    <div className="pipeline-step-box"><strong>{step.label}</strong>{step.sub && <span>{step.sub}</span>}</div>
                    {index < homePipelineSteps.length - 1 && <span className="pipeline-arrow" aria-hidden="true">→</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="evidence-panel">
              <span className="evidence-panel-title">MODEL PERFORMANCE</span>
              <div className="performance-bars">
                {homePerformanceMetrics.map((metric) => (
                  <div className="performance-bar-row" key={metric.label}>
                    <span className="performance-bar-label">{metric.label}</span>
                    <div className="performance-bar-track" role="img" aria-label={`${metric.label} ${metric.display}`}>
                      <div className="performance-bar-fill" style={{ width: `${metric.value * 100}%` }} />
                    </div>
                    <span className="performance-bar-value">{metric.display}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="supporting-evidence">
            {homeSupportingEvidence.map((item) => (
              <div className="supporting-evidence-item" key={item.label}>
                <span className="supporting-evidence-label">{item.label}</span>
                <span className="supporting-evidence-value">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="evidence-actions">
            <Link className="button ghost" to="/ai-learning">모델 실험 보기</Link>
            <Link className="button ghost" to="/projects/staccato#architecture">시스템 구조 보기</Link>
            <Link className="button ghost" to="/projects/staccato">프로젝트 상세 보기</Link>
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
