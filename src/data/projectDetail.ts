import { projectListingMeta, sideProjectOrder, sideProjectListingMeta } from './projectListing'
import { projects, type Project } from './projects'
import { sideProjects, type SideProject } from './sideProjects'

export type DetailEvidence = { label: string; value: string; description?: string }
export type FeatureGroup = { title: string; description?: string }

export const mainDetailSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'problem-solving', label: 'Problem Solving' },
  { id: 'resources', label: 'Screens & Resources' },
  { id: 'retrospective', label: 'Retrospective' },
] as const

export const sideDetailSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'architecture', label: 'Technical Notes' },
  { id: 'evidence', label: 'Evidence / Screens' },
  { id: 'problem-solving', label: 'Problem Solving' },
  { id: 'retrospective', label: 'Retrospective' },
] as const

export function getProjectStatus(project: Project | SideProject) {
  return project.status === 'in-progress' ? 'IN DEVELOPMENT' : 'COMPLETED'
}

export function getProjectHeroImage(project: Project) {
  if (project.slug === 'staccato') return project.screenshots[1] ?? project.screenshots[0]
  return project.screenshots[0]
}

export function getFeatureGroups(features: string[], limit = 6): FeatureGroup[] {
  if (features.length <= limit) return features.map((title) => ({ title }))
  const size = Math.ceil(features.length / limit)
  const groups: FeatureGroup[] = []
  for (let index = 0; index < features.length; index += size) {
    const items = features.slice(index, index + size)
    groups.push({ title: items[0], description: items.slice(1).join(' · ') || undefined })
  }
  return groups.slice(0, limit)
}

export function getProjectEvidence(project: Project): DetailEvidence[] {
  const explicit = (project.evidenceOverview ?? [])
    .filter((item) => item.value && !/TODO|미기록|준비 중/i.test(`${item.value} ${item.description}`))
    .slice(0, 6)
  if (explicit.length) return explicit

  const listing = projectListingMeta[project.slug]
  const labels = ['IMPLEMENTATION', 'RESULT', 'DELIVERY']
  const evidence = listing.evidence.slice(0, 5).map((value, index) => ({
    label: labels[index] ?? `EVIDENCE ${String(index + 1).padStart(2, '0')}`,
    value,
  }))
  if (listing.role) evidence.push({ label: 'MY SCOPE', value: listing.role })
  return evidence.slice(0, 6)
}

export function getSideProjectEvidence(project: SideProject): DetailEvidence[] {
  const listing = sideProjectListingMeta[project.slug]
  const values = [...(project.proofEvidence ?? []), ...(project.proofCompetencies ?? [])]
  if (listing?.proof) values.unshift(listing.proof)
  return [...new Set(values)].slice(0, 5).map((value, index) => ({
    label: index === 0 ? 'IMPLEMENTED SCOPE' : `EVIDENCE ${String(index + 1).padStart(2, '0')}`,
    value,
  }))
}

export function getAdjacentProjects(slug: Project['slug']) {
  const index = projects.findIndex((project) => project.slug === slug)
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  }
}

export function getAdjacentSideProjects(slug: string) {
  const ordered = sideProjectOrder
    .map((item) => sideProjects.find((project) => project.slug === item))
    .filter((project): project is SideProject => Boolean(project))
  const index = ordered.findIndex((project) => project.slug === slug)
  return {
    previous: index > 0 ? ordered[index - 1] : undefined,
    next: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : undefined,
  }
}

export function splitRetrospective(text?: string) {
  if (!text) return []
  const sentences = text.match(/[^.!?。]+[.!?。]?/g)?.map((item) => item.trim()).filter(Boolean) ?? [text]
  const groups = [
    { label: '배운 점', value: sentences[0] },
    { label: '개선 관점', value: sentences[1] },
    { label: '다음 적용', value: sentences.slice(2).join(' ') },
  ]
  return groups.filter((item) => item.value)
}
