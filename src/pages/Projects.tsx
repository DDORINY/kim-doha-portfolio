import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import SideProjectCard from '../components/SideProjectCard'
import { projects, type ProjectCategory } from '../data/projects'
import { sideProjects } from '../data/sideProjects'

const categoryFilters: ProjectCategory[] = ['AI / Computer Vision', 'Full-stack', 'Infra / Deployment']
const SIDE_PAGE_SIZE = 6

const inProgressProjects = projects.filter((project) => project.status === 'in-progress')
const inProgressSideProjects = sideProjects.filter((project) => project.status === 'in-progress')

export default function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All')
  const completedProjects = (filter === 'All' ? projects : projects.filter((project) => project.categories?.includes(filter))).filter((project) => project.status !== 'in-progress')

  const completedSideProjects = sideProjects.filter((project) => project.status !== 'in-progress')

  const [sidePage, setSidePage] = useState(0)
  const sideTotalPages = Math.ceil(completedSideProjects.length / SIDE_PAGE_SIZE)
  const pagedSideProjects = completedSideProjects.slice(sidePage * SIDE_PAGE_SIZE, sidePage * SIDE_PAGE_SIZE + SIDE_PAGE_SIZE)

  return (
    <>
      <section className="section page-section">
        <div className="container">
          <SectionHeading eyebrow="AI SERVICE PROJECTS" title="모델과 서비스를 연결한 기록" description="AI 모델 실험, API 연동, DB 저장, 프론트엔드 화면, 배포·운영 점검까지 직접 연결하며 만든 프로젝트를 정리했습니다." />
          <div className="project-filter">
            <button type="button" className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
            {categoryFilters.map((category) => (
              <button type="button" className={filter === category ? 'active' : ''} onClick={() => setFilter(category)} key={category}>{category}</button>
            ))}
            <button type="button" onClick={() => document.getElementById('side-projects')?.scrollIntoView({ behavior: 'smooth' })}>Side Project</button>
          </div>
          <div className="project-grid">{completedProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
        </div>
      </section>
      {sideProjects.length > 0 && (
        <section className="section side-projects" id="side-projects">
          <div className="container">
            <SectionHeading eyebrow="SIDE & MINI BUILDS" title="기타 프로젝트" description="작게 만들어보며 배포, 도메인 연결, 게임 UI, 자동화 아이디어를 실험한 프로젝트입니다." />
            <div className="side-project-grid">{pagedSideProjects.map((project) => <SideProjectCard project={project} key={project.name} />)}</div>
            {sideTotalPages > 1 && (
              <div className="pagination">
                <button type="button" onClick={() => setSidePage((p) => Math.max(0, p - 1))} disabled={sidePage === 0}>← 이전</button>
                <div className="pagination-pages">
                  {Array.from({ length: sideTotalPages }, (_, i) => (
                    <button type="button" key={i} className={i === sidePage ? 'active' : ''} onClick={() => setSidePage(i)} aria-label={`${i + 1}페이지`}>{i + 1}</button>
                  ))}
                </div>
                <button type="button" onClick={() => setSidePage((p) => Math.min(sideTotalPages - 1, p + 1))} disabled={sidePage === sideTotalPages - 1}>다음 →</button>
              </div>
            )}
          </div>
        </section>
      )}
      {(inProgressProjects.length > 0 || inProgressSideProjects.length > 0) && (
        <section className="section in-progress-section">
          <div className="container">
            <SectionHeading eyebrow="IN PROGRESS" title="개발 진행 중인 프로젝트" description="대표 프로젝트와 사이드 프로젝트를 가리지 않고, 아직 개발이 끝나지 않은 것들만 모아 따로 관리합니다." />
            {inProgressProjects.length > 0 && (
              <div className="project-grid">{inProgressProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
            )}
            {inProgressSideProjects.length > 0 && (
              <div className="side-project-grid" style={inProgressProjects.length > 0 ? { marginTop: 16 } : undefined}>
                {inProgressSideProjects.map((project) => <SideProjectCard project={project} key={project.name} />)}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}
