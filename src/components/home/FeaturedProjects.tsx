import { Link } from 'react-router-dom'
import { featuredProjectSlugs } from '../../data/home'
import { projectListingMeta } from '../../data/projectListing'
import { projects } from '../../data/projects'
import ImageWithFallback from '../ImageWithFallback'
import ProjectFlow from '../ProjectFlow'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { TechChip } from '../TechIcon'

const featuredProjects = featuredProjectSlugs.map((slug) => projects.find((project) => project.slug === slug)).filter((project) => project !== undefined)
const [hawkAi, ...studioProjects] = featuredProjects

const projectCategory = (slug: string) => {
  if (slug === 'dohalm') return 'MODEL & RUNTIME'
  if (slug === 'dohamusic') return 'AI PRODUCT ARCHITECTURE'
  return 'COMPUTER VISION SERVICE'
}

export default function FeaturedProjects() {
  return (
    <section className="section projects-preview home-featured-work" aria-labelledby="featured-projects-title">
      <div className="container">
        <SectionHeading id="featured-projects-title" eyebrow="01 / FEATURED WORK" title="CURRENT DIRECTION" description="LLM 모델, Python Backend, 실제 사용자 기능을 연결한 현재 대표 작업입니다." />
        {hawkAi && (
          <Reveal as="article" className="home-hawk-featured">
            <div className="home-hawk-copy">
              <div className="home-project-topline"><span>01 / SERVICE INTEGRATION</span><b>IN PROGRESS</b></div>
              <p className="home-project-period">TEAM PROJECT · {hawkAi.period.replace(' ~ ', ' — ')}</p>
              <h3>{hawkAi.name}</h3>
              <p className="home-project-summary">Qwen + LoRA 기반 게시글 생성 모델을 FastAPI AI Serving, Backend, 실제 게시판 UI까지 연결한 LLM 서비스 통합 프로젝트</p>
              <dl className="home-hawk-facts">
                <div><dt>WHAT</dt><dd>{projectListingMeta[hawkAi.slug].what}</dd></div>
                <div><dt>MY ROLE</dt><dd>{projectListingMeta[hawkAi.slug].role}</dd></div>
                <div><dt>KEY DECISION</dt><dd>Frontend → Backend Gateway → FastAPI AI Serving으로 책임을 분리했습니다.</dd></div>
                <div><dt>VERIFICATION</dt><dd>{projectListingMeta[hawkAi.slug].evidence.map((item) => <span key={item}>{item}</span>)}</dd></div>
              </dl>
              <div className="chip-row">{(hawkAi.techHighlights ?? hawkAi.techStack).slice(0, 5).map((tech) => <TechChip label={tech} key={tech} />)}</div>
              <div className="home-project-actions"><Link className="button primary" to={`/projects/${hawkAi.slug}`}>VIEW CASE STUDY</Link>{hawkAi.deploy.url && <a className="button secondary" href={hawkAi.deploy.url} target="_blank" rel="noreferrer">LIVE SERVICE</a>}</div>
            </div>
            <div className="home-hawk-visual">
              {hawkAi.screenshots[0] && <ImageWithFallback src={hawkAi.screenshots[0].src} alt={hawkAi.screenshots[0].alt} loading="eager" fallbackLabel="HAWK-AI 프로젝트 화면" />}
              <ProjectFlow project={hawkAi} compact />
            </div>
          </Reveal>
        )}
        <div className="home-focused-projects">
          {studioProjects.map((project, index) => (
            <Reveal as="article" className="home-focused-project" delay={index * 70} key={project.slug}>
              <div className="home-project-topline"><span>0{index + 2} / {projectCategory(project.slug)}</span><b>{projectListingMeta[project.slug].maturity === 'completed' ? 'COMPLETED' : 'IN PROGRESS'}</b></div>
              <h3>{project.name}</h3>
              <p>{projectListingMeta[project.slug].what}</p>
              {project.screenshots[0] ? (
                <figure className="home-focused-media"><ImageWithFallback src={project.screenshots[0].src} alt={project.screenshots[0].alt} loading="lazy" fallbackLabel={`${project.name} 프로젝트 화면`} /><figcaption>{project.screenshots[0].caption}</figcaption></figure>
              ) : <ProjectFlow project={project} compact />}
              <dl className="home-focused-facts"><div><dt>MY ROLE / FOCUS</dt><dd>{projectListingMeta[project.slug].role}</dd></div><div><dt>KEY EVIDENCE</dt><dd>{projectListingMeta[project.slug].evidence[0]}</dd></div></dl>
              <div className="home-focused-evidence">{projectListingMeta[project.slug].evidence.slice(1, 3).map((item) => <span key={item}>{item}</span>)}</div>
              <div className="home-focused-footer"><div className="chip-row">{(project.techHighlights ?? project.techStack).slice(0, 4).map((tech) => <TechChip label={tech} key={tech} />)}</div><Link to={`/projects/${project.slug}`}>VIEW PROJECT <span>→</span></Link></div>
            </Reveal>
          ))}
        </div>
        <div className="center-action"><Link className="text-link" to="/projects">VIEW ALL PROJECTS <span>→</span></Link></div>
      </div>
    </section>
  )
}
