import TechIcon from '../TechIcon'

export default function ProjectResourceLink({ label, url, disabled = false }: { label: string; url?: string; disabled?: boolean }) {
  if (disabled || !url) return <span className="resource-link disabled" aria-disabled="true"><TechIcon name={label} />{label}<small>비공개</small></span>
  return <a className="resource-link" href={url} target="_blank" rel="noreferrer" aria-label={`${label} 새 창에서 열기`}><TechIcon name={label} />{label}<span aria-hidden="true">↗</span></a>
}
