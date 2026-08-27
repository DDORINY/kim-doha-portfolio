import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import ProjectCaseStudy from '../components/ProjectCaseStudy'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SectionScrollButton from '../components/SectionScrollButton'
import SideProjectCard from '../components/SideProjectCard'
import { projectListingMeta, sideProjectOrder } from '../data/projectListing'
import { projects, type Project } from '../data/projects'
import { sideProjects } from '../data/sideProjects'

type ProjectFilter = 'all' | 'ai-service' | 'computer-vision' | 'full-stack' | 'infrastructure' | 'in-progress'

const filters: { key: ProjectFilter; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'ai-service', label: 'LLM / AI SERVICE' },
  { key: 'computer-vision', label: 'COMPUTER VISION' },
  { key: 'full-stack', label: 'FULL STACK' },
  { key: 'infrastructure', label: 'INFRA / SYSTEM' },
  { key: 'in-progress', label: 'IN PROGRESS' },
]

const isDefined = <T,>(value: T | undefined): value is T => value !== undefined
const getProjectBySlug = (slug: Project['slug']) => projects.find((project) => project.slug === slug)
const featuredProject = getProjectBySlug('hawk-ai')
const selectedProjects = (['doha-studio', 'staccato', 'erp'] as Project['slug'][]).map(getProjectBySlug).filter(isDefined)
const orderedSideProjects = sideProjectOrder.map((slug) => sideProjects.find((project) => project.slug === slug)).filter(isDefined)
const aiServiceSlugs = new Set<Project['slug']>(['hawk-ai', 'doha-studio'])
const portfolioMap = [
  { label: 'CURRENT FOCUS', value: 'LLM · AI SERVICE' },
  { label: 'FEATURED', value: 'HAWK-AI' },
  { label: 'PERSONAL AI PRODUCT', value: 'DOHA STUDIO' },
  { label: 'CV EXPERIENCE', value: 'STACCATO' },
]

function filterProjects(filter: ProjectFilter) {
  if (filter === 'all') return projects
  if (filter === 'ai-service') return projects.filter((project) => aiServiceSlugs.has(project.slug))
  if (filter === 'in-progress') return projects.filter((project) => project.status === 'in-progress')
  if (filter === 'computer-vision') return projects.filter((project) => project.categories?.includes('AI / Computer Vision'))
  if (filter === 'full-stack') return projects.filter((project) => project.categories?.includes('Full-stack'))
  return projects.filter((project) => project.categories?.includes('Infra / Deployment'))
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('all')
  const filteredProjects = useMemo(() => filterProjects(filter), [filter])

  return (
    <div className="projects-page">
      <section className="projects-page-hero page-section" aria-labelledby="projects-page-title">
        <div className="container projects-hero-grid">
          <Reveal className="projects-hero-copy">
            <span className="eyebrow">PROJECTS</span>
            <h1 id="projects-page-title">AI 모델에서<br />실제 서비스까지.</h1>
            <p>LLM · Computer Vision 모델부터 Python Backend, Database, 사용자 기능까지 연결한 프로젝트를 정리했습니다.</p>
            <div className="projects-hero-keywords" aria-label="프로젝트 기술 영역">
              {['LLM', 'AI SERVICE', 'BACKEND', 'COMPUTER VISION'].map((keyword) => <span key={keyword}>{keyword}</span>)}
            </div>
            <SectionScrollButton className="projects-hero-link" targetId="featured-project">EXPLORE PROJECTS <span>↓</span></SectionScrollButton>
          </Reveal>
          <Reveal className="projects-summary-panel" delay={100} aria-label="현재 포트폴리오 구성">
            <div className="projects-summary-head"><span>PORTFOLIO MAP</span><small>{String(projects.length).padStart(2, '0')} PROJECTS</small></div>
            <dl>{portfolioMap.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
          </Reveal>
        </div>
      </section>

      {featuredProject && (
        <section className="section projects-featured-section" id="featured-project" aria-labelledby="featured-project-title">
          <div className="container">
            <SectionHeading id="featured-project-title" eyebrow="01 / FEATURED PROJECT" title="HAWK-AI" description="게시판과 LLM 추론 서비스를 실제 제품 흐름에 연결한 현재 핵심 팀 프로젝트입니다." />
            <ProjectCaseStudy project={featuredProject} index={0} featured />
          </div>
        </section>
      )}

      <section className="section projects-selected-section" aria-labelledby="selected-projects-title">
        <div className="container">
          <SectionHeading id="selected-projects-title" eyebrow="02 / SELECTED PROJECTS" title="SELECTED PROJECTS" description="모델 연구, 제품 파이프라인, 운영형 AI 시스템의 구현 범위를 빠르게 비교할 수 있습니다." />
          <div className="projects-selected-grid">
            {selectedProjects.map((project, index) => <ProjectCaseStudy project={project} index={index + 1} key={project.slug} />)}
          </div>
        </div>
      </section>

      <section className="section projects-all-section" id="all-projects" aria-labelledby="all-projects-title">
        <div className="container">
          <SectionHeading id="all-projects-title" eyebrow="03 / PROJECT INDEX" title="ALL PROJECTS" description="전체 메인 프로젝트를 상태와 기술 영역으로 필터링해 비교할 수 있습니다." />
          <Reveal className="projects-filter-wrap">
            <div className="project-filter" aria-label="프로젝트 카테고리 필터">
              {filters.map((item) => <button type="button" className={filter === item.key ? 'active' : ''} aria-pressed={filter === item.key} onClick={() => setFilter(item.key)} key={item.key}>{item.label}</button>)}
              <SectionScrollButton className="projects-side-scroll" targetId="side-projects">SIDE PROJECTS <span>↓</span></SectionScrollButton>
            </div>
            <p className="projects-result-count" role="status" aria-live="polite">{filteredProjects.length} PROJECT{filteredProjects.length === 1 ? '' : 'S'}</p>
          </Reveal>
          <div className="project-grid projects-compact-grid">
            {filteredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section side-projects projects-side-section" id="side-projects" aria-labelledby="side-projects-title">
        <div className="container">
          <SectionHeading id="side-projects-title" eyebrow="04 / SIDE BUILDS" title="SIDE PROJECTS & EXPERIMENTS" description="새로운 기술과 서비스 구조를 작게 구현하고, 인증·데이터 저장·자동화·배포까지 실험한 프로젝트입니다." />
          <div className="side-project-grid projects-side-grid">{orderedSideProjects.map((project) => <SideProjectCard project={project} variant="listing" key={project.slug} />)}</div>
        </div>
      </section>

      <section className="section projects-contact-section">
        <div className="container">
          <Reveal className="projects-contact-panel">
            <div><span className="eyebrow">NEXT / CONTACT</span><h2>프로젝트에 대해 더 이야기해볼까요?</h2><p>구현 범위와 역할, 기술 선택의 이유가 궁금하다면 편하게 연락해 주세요.</p></div>
            <Link className="button primary" to="/contact">CONTACT <span>→</span></Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
