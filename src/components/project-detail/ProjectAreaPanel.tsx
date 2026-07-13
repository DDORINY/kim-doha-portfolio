import type { ProjectArea } from '../../data/projects'
import Reveal from '../Reveal'
import { TechChip } from '../TechIcon'
import ProjectAreaSection from './ProjectAreaSection'

export default function ProjectAreaPanel({ area }: { area: ProjectArea }) {
  return (
    <Reveal
      as="div"
      className="project-area-panel"
      role="tabpanel"
      id={`project-area-panel-${area.id}`}
      aria-labelledby={`project-area-tab-${area.id}`}
      tabIndex={0}
    >
      <ProjectAreaSection index={1} title="파트 개요">
        <p className="project-area-summary">{area.summary}</p>
      </ProjectAreaSection>

      <ProjectAreaSection index={2} title="기술 스택">
        <div className="large-chip-row project-area-stack">
          {area.techStack.map((tech) => <TechChip label={tech} className="" key={tech} />)}
        </div>
      </ProjectAreaSection>

      <ProjectAreaSection index={3} title="담당 구현 범위">
        <ul className="check-list">{area.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
      </ProjectAreaSection>

      <ProjectAreaSection index={4} title="핵심 구조">
        <div className="architecture-diagram project-area-architecture">
          {area.architecture.map((node, index) => (
            <div className="architecture-node" key={node.label}>
              <div className="architecture-box"><strong>{node.label}</strong><span>{node.description}</span></div>
              {index < area.architecture.length - 1 && <span className="architecture-arrow" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
      </ProjectAreaSection>

      <ProjectAreaSection index={5} title="주요 기능">
        <div className="feature-grid">
          {area.features.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3></div>)}
        </div>
      </ProjectAreaSection>

      <ProjectAreaSection index={6} title="구현 포인트">
        <ul className="check-list">{area.implementationPoints.map((item) => <li key={item}>{item}</li>)}</ul>
      </ProjectAreaSection>

      <ProjectAreaSection index={7} title="문제 해결">
        <div className="trouble-list project-area-trouble-list">
          {area.troubleshooting.map((item) => (
            <div className="trouble-card" key={item.title}>
              <h3>{item.title}</h3>
              <dl>
                <div><dt>Problem</dt><dd>{item.problem}</dd></div>
                <div><dt>Cause & Fix</dt><dd>{item.solution}</dd></div>
                <div><dt>Result</dt><dd>{item.result}</dd></div>
              </dl>
            </div>
          ))}
        </div>
      </ProjectAreaSection>

      <ProjectAreaSection index={8} title="구현 증거">
        <div className="evidence-grid project-area-evidence-grid">
          {area.evidence.map((item) => (
            <div className="evidence-card" key={item.label}>
              <span className="evidence-card-label">{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </ProjectAreaSection>
    </Reveal>
  )
}
