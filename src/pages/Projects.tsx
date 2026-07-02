import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

export default function Projects() {
  return <section className="section page-section"><div className="container"><SectionHeading eyebrow="PROJECTS" title="작업과 배움의 기록" description="각 프로젝트에서 맡은 역할, 기술적 선택, 문제 해결 과정을 확인할 수 있습니다." /><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></div></section>
}
