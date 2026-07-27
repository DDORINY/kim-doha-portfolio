import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import ProjectCaseStudy from '../components/ProjectCaseStudy'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SideProjectCard from '../components/SideProjectCard'
import { selectedCaseStudySlugs, sideProjectOrder } from '../data/projectListing'
import { projects } from '../data/projects'
import { sideProjects } from '../data/sideProjects'

type ProjectFilter = 'all' | 'ai-service' | 'computer-vision' | 'full-stack' | 'infrastructure' | 'in-progress'

const filters: { key: ProjectFilter; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'ai-service', label: 'AI SERVICE' },
  { key: 'computer-vision', label: 'COMPUTER VISION' },
  { key: 'full-stack', label: 'FULL STACK' },
  { key: 'infrastructure', label: 'INFRASTRUCTURE' },
  { key: 'in-progress', label: 'IN PROGRESS' },
]

const SIDE_PAGE_SIZE = 6
const isDefined = <T,>(value: T | undefined): value is T => value !== undefined
const completedProjects = projects.filter((project) => project.status !== 'in-progress')
const inProgressProjects = projects.filter((project) => project.status === 'in-progress')
const completedSideProjects = sideProjectOrder
  .map((slug) => sideProjects.find((project) => project.slug === slug))
  .filter(isDefined)
  .filter((project) => project.status !== 'in-progress')
const inProgressSideProjects = sideProjectOrder
  .map((slug) => sideProjects.find((project) => project.slug === slug))
  .filter(isDefined)
  .filter((project) => project.status === 'in-progress')
const selectedCaseStudies = selectedCaseStudySlugs.map((slug) => projects.find((project) => project.slug === slug)).filter(isDefined)

function filterProjects(filter: ProjectFilter) {
  if (filter === 'in-progress') return inProgressProjects
  if (filter === 'all' || filter === 'ai-service') return completedProjects
  if (filter === 'computer-vision') return completedProjects.filter((project) => project.categories?.includes('AI / Computer Vision'))
  if (filter === 'full-stack') return completedProjects.filter((project) => project.categories?.includes('Full-stack'))
  return completedProjects.filter((project) => project.categories?.includes('Infra / Deployment'))
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('all')
  const [sidePage, setSidePage] = useState(0)
  const filteredProjects = useMemo(() => filterProjects(filter), [filter])
  const sideTotalPages = Math.ceil(completedSideProjects.length / SIDE_PAGE_SIZE)
  const pagedSideProjects = completedSideProjects.slice(sidePage * SIDE_PAGE_SIZE, sidePage * SIDE_PAGE_SIZE + SIDE_PAGE_SIZE)
  const liveServices = completedProjects.filter((project) => project.deploy.url && !project.deploy.placeholder).length + completedSideProjects.filter((project) => project.url).length
  const summaryMetrics = [
    { label: 'COMPLETED', value: completedProjects.length },
    { label: 'SIDE PROJECTS', value: completedSideProjects.length },
    { label: 'LIVE SERVICES', value: liveServices },
    { label: 'IN PROGRESS', value: inProgressProjects.length + inProgressSideProjects.length },
  ]

  return (
    <div className="projects-page">
      <section className="projects-page-hero page-section" aria-labelledby="projects-page-title">
        <div className="container projects-hero-grid">
          <Reveal className="projects-hero-copy">
            <span className="eyebrow">AI SERVICE PROJECTS</span>
            <h1 id="projects-page-title">모델과 서비스를 연결한 프로젝트</h1>
            <p>AI 모델 실험에서 끝나지 않고,<br />API·데이터베이스·사용자 화면·배포 환경까지 연결한 프로젝트를 정리했습니다.</p>
            <div className="projects-hero-keywords" aria-label="프로젝트 기술 영역">
              {['COMPUTER VISION', 'LLM & AGENT', 'BACKEND API', 'DATABASE', 'DEPLOYMENT'].map((keyword) => <span key={keyword}>{keyword}</span>)}
            </div>
            <a className="projects-hero-link" href="#selected-case-studies">VIEW CASE STUDIES <span>↓</span></a>
          </Reveal>
          <Reveal className="projects-summary-panel" delay={100} aria-label="프로젝트 현황">
            <div className="projects-summary-head"><span>PROJECT INDEX</span><small>LIVE DATA</small></div>
            <dl>{summaryMetrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{String(metric.value).padStart(2, '0')}</dd></div>)}</dl>
          </Reveal>
        </div>
      </section>

      <section className="section projects-case-section" id="selected-case-studies" aria-labelledby="selected-case-studies-title">
        <div className="container">
          <SectionHeading id="selected-case-studies-title" eyebrow="01 / SELECTED WORK" title="SELECTED CASE STUDIES" description="서비스 전체 구조와 개인 역할, 검증 가능한 구현 근거를 중심으로 정리한 대표 프로젝트입니다." />
          <div className="projects-case-layout">
            {selectedCaseStudies.map((project, index) => <ProjectCaseStudy project={project} index={index} featured={index === 0} key={project.slug} />)}
          </div>
        </div>
      </section>

      <section className="section projects-all-section" id="all-projects" aria-labelledby="all-projects-title">
        <div className="container">
          <SectionHeading id="all-projects-title" eyebrow="02 / PROJECT INDEX" title="ALL PROJECTS" description="역할과 구현 근거를 빠르게 비교할 수 있도록 핵심 정보만 압축했습니다." />
          <Reveal className="projects-filter-wrap">
            <div className="project-filter" aria-label="프로젝트 카테고리 필터">
              {filters.map((item) => (
                <button type="button" className={filter === item.key ? 'active' : ''} aria-pressed={filter === item.key} onClick={() => setFilter(item.key)} key={item.key}>{item.label}</button>
              ))}
              <a href="#side-projects">SIDE PROJECTS <span>↓</span></a>
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
          <SectionHeading id="side-projects-title" eyebrow="03 / SIDE BUILDS" title="SIDE PROJECTS & EXPERIMENTS" description="새로운 기술과 서비스 구조를 작게 구현하고, 인증·데이터 저장·자동화·배포까지 실험한 프로젝트입니다." />
          <div className="side-project-grid projects-side-grid">{pagedSideProjects.map((project) => <SideProjectCard project={project} variant="listing" key={project.slug} />)}</div>
          {sideTotalPages > 1 && (
            <div className="pagination">
              <button type="button" onClick={() => setSidePage((page) => Math.max(0, page - 1))} disabled={sidePage === 0}>← 이전</button>
              <div className="pagination-pages">
                {Array.from({ length: sideTotalPages }, (_, index) => <button type="button" key={index} className={index === sidePage ? 'active' : ''} aria-current={index === sidePage ? 'page' : undefined} onClick={() => setSidePage(index)} aria-label={`${index + 1}페이지`}>{index + 1}</button>)}
              </div>
              <button type="button" onClick={() => setSidePage((page) => Math.min(sideTotalPages - 1, page + 1))} disabled={sidePage === sideTotalPages - 1}>다음 →</button>
            </div>
          )}
        </div>
      </section>

      {(inProgressProjects.length > 0 || inProgressSideProjects.length > 0) && (
        <section className="section in-progress-section projects-progress-section" id="in-progress" aria-labelledby="in-progress-title">
          <div className="container">
            <SectionHeading id="in-progress-title" eyebrow="04 / IN PROGRESS" title="현재 진행 중인 프로젝트" description="완료된 기능과 예정 작업을 구분하고, 현재 담당 범위와 다음 단계만 표시합니다." />
            <div className="projects-progress-grid">
              {inProgressProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
              {inProgressSideProjects.map((project) => <SideProjectCard project={project} variant="listing" key={project.slug} />)}
            </div>
          </div>
        </section>
      )}

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
