import type { KeyboardEvent } from 'react'
import type { ProjectArea, ProjectAreaKey } from '../../data/projects'

export default function ProjectAreaTabs({ areas, activeId, onChange }: { areas: ProjectArea[]; activeId: ProjectAreaKey; onChange: (id: ProjectAreaKey) => void }) {
  const focusTab = (id: ProjectAreaKey) => {
    document.getElementById(`project-area-tab-${id}`)?.focus()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') return
    event.preventDefault()
    let nextIndex = index
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % areas.length
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + areas.length) % areas.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = areas.length - 1
    const nextArea = areas[nextIndex]
    onChange(nextArea.id)
    focusTab(nextArea.id)
  }

  return (
    <div className="project-area-tabs" role="tablist" aria-label="기술 영역">
      {areas.map((area, index) => (
        <button
          type="button"
          key={area.id}
          id={`project-area-tab-${area.id}`}
          role="tab"
          aria-selected={activeId === area.id}
          aria-controls={`project-area-panel-${area.id}`}
          tabIndex={activeId === area.id ? 0 : -1}
          className={activeId === area.id ? 'project-area-tab active' : 'project-area-tab'}
          onClick={() => onChange(area.id)}
          onKeyDown={(event) => handleKeyDown(event, index)}
        >
          {area.shortLabel ?? area.label}
        </button>
      ))}
    </div>
  )
}
