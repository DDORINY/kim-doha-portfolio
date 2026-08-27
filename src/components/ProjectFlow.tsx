import type { Project } from '../data/projects'

export default function ProjectFlow({ project, compact = false }: { project: Project; compact?: boolean }) {
  const hawkServiceSteps = [
    { label: 'Qwen + LoRA', description: '게시판 도메인 생성 모델' },
    { label: 'AI Serving', description: 'FastAPI board/chat inference' },
    { label: 'Backend', description: 'AI Client와 서비스 문맥' },
    { label: 'Board / Chat', description: 'Frontend 사용자 기능' },
  ]
  const steps = (project.slug === 'hawk-ai' ? hawkServiceSteps : project.systemFlow).slice(0, compact ? 5 : 6)

  return (
    <div className={`project-flow${compact ? ' is-compact' : ''}`} aria-label={`${project.name} architecture flow`}>
      {steps.map((step, index) => (
        <div className="project-flow-item" key={`${project.slug}-${step.label}`}>
          <div className="project-flow-node">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step.label}</strong>
            {!compact && <small>{step.description}</small>}
          </div>
          {index < steps.length - 1 && <i aria-hidden="true">→</i>}
        </div>
      ))}
    </div>
  )
}
