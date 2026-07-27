import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjectSlugs } from '../../data/home'
import { projects } from '../../data/projects'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { TechChip } from '../TechIcon'

const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined)

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
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <Reveal
              as="article"
              className="project-card home-project-card"
              delay={index * 70}
              style={{ '--accent': project.accent } as CSSProperties}
              key={project.slug}
            >
              <div className="card-topline"><span>0{index + 1}</span></div>
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
