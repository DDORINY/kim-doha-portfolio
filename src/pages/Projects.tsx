import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import SideProjectCard from '../components/SideProjectCard'
import { projects } from '../data/projects'
import { sideProjects } from '../data/sideProjects'

export default function Projects() {
  return (
    <>
      <section className="section page-section"><div className="container"><SectionHeading eyebrow="AI SERVICE PROJECTS" title="모델과 서비스를 연결한 기록" description="AI 관제 시스템부터 ERP와 팀 웹 서비스까지, 데이터가 사용자 경험으로 이어지는 과정을 담았습니다." /><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></div></section>
      {sideProjects.length > 0 && (
        <section className="section side-projects">
          <div className="container">
            <SectionHeading eyebrow="SIDE & MINI BUILDS" title="기타 프로젝트" description="짧게 만들어보고 배포까지 이어본 개인 프로젝트입니다." />
            <div className="side-project-grid">{sideProjects.map((project) => <SideProjectCard project={project} key={project.name} />)}</div>
          </div>
        </section>
      )}
    </>
  )
}
