import { Link } from 'react-router-dom'

type PagerProject = { name: string; slug: string }

export default function ProjectPager({ previous, next, side = false }: { previous?: PagerProject; next?: PagerProject; side?: boolean }) {
  const prefix = side ? '/side-projects/' : '/projects/'
  return (
    <nav className="detail-pager" aria-label="프로젝트 이동">
      {previous ? <Link className="detail-pager-side" to={`${prefix}${previous.slug}`}><small>이전 프로젝트</small><strong><span aria-hidden="true">←</span> {previous.name}</strong></Link> : <span className="detail-pager-side is-empty" />}
      <Link className="detail-pager-all" to="/projects">전체 프로젝트</Link>
      {next ? <Link className="detail-pager-side is-next" to={`${prefix}${next.slug}`}><small>다음 프로젝트</small><strong>{next.name} <span aria-hidden="true">→</span></strong></Link> : <span className="detail-pager-side is-empty" />}
    </nav>
  )
}
