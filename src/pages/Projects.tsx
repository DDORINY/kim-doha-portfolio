import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import SideProjectCard from '../components/SideProjectCard'
import { projects, type ProjectCategory } from '../data/projects'
import { sideProjects } from '../data/sideProjects'

const categoryFilters: ProjectCategory[] = ['AI / Computer Vision', 'Full-stack', 'Infra / Deployment', 'Meta / Portfolio']

export default function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All')
  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.categories?.includes(filter))

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
          <div className="project-grid">{filteredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
        </div>
      </section>
      {sideProjects.length > 0 && (
        <section className="section side-projects" id="side-projects">
          <div className="container">
            <SectionHeading eyebrow="SIDE & MINI BUILDS" title="기타 프로젝트" description="작게 만들어보며 배포, 도메인 연결, 게임 UI, 자동화 아이디어를 실험한 프로젝트입니다." />
            <div className="side-project-grid">{sideProjects.map((project) => <SideProjectCard project={project} key={project.name} />)}</div>
          </div>
        </section>
      )}
    </>
  )
}
