import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjectSlugs } from '../../data/home'
import { projects } from '../../data/projects'
import ImageWithFallback from '../ImageWithFallback'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { TechChip } from '../TechIcon'

const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined)

const [showcaseProject, ...secondaryProjects] = featuredProjects
const showcaseScreenshot = showcaseProject?.screenshots[1] ?? showcaseProject?.screenshots[0]

export default function FeaturedProjects() {
  return (
    <section className="section projects-preview" aria-labelledby="featured-projects-title">
      <div className="container">
        <SectionHeading
          id="featured-projects-title"
          eyebrow="02 / SELECTED WORK"
          title="FEATURED PROJECTS"
          description="AI 모델, 백엔드, 데이터베이스와 사용자 화면을 연결한 대표 프로젝트입니다."
        />
        {showcaseProject && (
          <Reveal as="article" className="featured-showcase" style={{ '--accent': showcaseProject.accent } as CSSProperties}>
            <div className="featured-browser">
              <div className="featured-browser-bar" aria-hidden="true">
                <span /><span /><span />
                <small><i /> staccato.ai / dashboard</small>
              </div>
              {showcaseScreenshot && <ImageWithFallback src={showcaseScreenshot.src} alt={showcaseScreenshot.alt} loading="lazy" fallbackLabel="STACCATO 프로젝트 화면" />}
            </div>
            <div className="featured-showcase-copy">
              <span className="section-number">FEATURED / 01</span>
              <h3>{showcaseProject.name}</h3>
              <p className="featured-tagline">{showcaseProject.tagline}</p>
              <dl className="featured-facts">
                <div><dt>ROLE</dt><dd>{showcaseProject.resumeHighlight?.role ?? showcaseProject.role[0]}</dd></div>
              </dl>
              <div className="chip-row featured-tech">
                {(showcaseProject.techHighlights ?? showcaseProject.techStack).slice(0, 6).map((tech) => <TechChip label={tech} key={tech} />)}
              </div>
              <dl className="featured-facts featured-result">
                <div><dt>RESULT</dt><dd>{showcaseProject.resumeHighlight?.achievement ?? showcaseProject.retrospective}</dd></div>
              </dl>
              <div className="featured-actions">
                <Link className="button primary" to={`/projects/${showcaseProject.slug}`}>VIEW CASE STUDY <span>↗</span></Link>
                {showcaseProject.deploy.url && <a className="button secondary" href={showcaseProject.deploy.url} target="_blank" rel="noreferrer">LIVE SERVICE <span>↗</span></a>}
              </div>
            </div>
          </Reveal>
        )}
        <div className="home-secondary-projects">
          {secondaryProjects.map((project, index) => (
            <Reveal
              as="article"
              className="project-card home-project-card home-secondary-project"
              delay={index * 70}
              style={{ '--accent': project.accent } as CSSProperties}
              key={project.slug}
            >
              <div className="card-topline"><span>0{index + 2}</span><span>{project.type}</span></div>
              <h3>{project.name}</h3>
              <p className="tagline">{project.tagline}</p>
              <div className="card-meta">
                <div>
                  <span className="meta-label">ROLE</span>
                  <p>{project.resumeHighlight?.role ?? project.role.slice(0, 2).join(' · ')}</p>
                </div>
                <div>
                  <span className="meta-label">CORE TECH</span>
                  <div className="chip-row">
                    {(project.techHighlights ?? project.techStack).slice(0, 5).map((tech) => <TechChip label={tech} key={tech} />)}
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <Link className="text-link" to={`/projects/${project.slug}`} aria-label={`${project.name} 상세 보기`}>
                  VIEW PROJECT <span>↗</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="center-action"><Link className="button secondary" to="/projects">VIEW ALL PROJECTS</Link></div>
      </div>
    </section>
  )
}
