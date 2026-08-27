import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

const studioMembers = (['dohalm', 'dohaaudio', 'dohavocal'] as const)
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined)
const dohaMusic = projects.find((project) => project.slug === 'dohamusic')

export default function DohaStudioOverview() {
  if (!dohaMusic) return null

  return (
    <section className="section home-doha-studio" aria-labelledby="home-doha-studio-title">
      <div className="container home-doha-layout">
        <div className="home-doha-copy">
          <SectionHeading id="home-doha-studio-title" eyebrow="03 / PERSONAL AI ECOSYSTEM" title="DOHA STUDIO" description="AI 제품과 모델 Provider를 분리해 재사용 가능한 개인 개발 생태계로 구축하고 있습니다." />
          <p>DohaMusic이 Workspace와 Job을 관리하고, DohaLM·DohaAudio·DohaVocal이 각 AI 책임을 독립 Provider로 담당합니다.</p>
          <p className="home-doha-period">2026.07.23 — PRESENT</p>
          <Link className="text-link" to="/projects#all-projects">EXPLORE ECOSYSTEM <span>→</span></Link>
        </div>
        <Reveal className="home-studio-system" aria-label="Doha Studio repository ecosystem">
          <div className="home-studio-product">
            <span>PRODUCT / WORKSPACE</span><strong>{dohaMusic.name}</strong><small>Workspace · Jobs · Mix · Export</small><b>ACTIVE DEVELOPMENT</b>
          </div>
          <div className="home-studio-connector" aria-hidden="true"><i /><i /><i /></div>
          <div className="home-studio-providers">
            {studioMembers.map((project) => (
              <div key={project.slug}>
                <span>{project.slug === 'dohalm' ? 'LLM PROVIDER' : project.slug === 'dohaaudio' ? 'AUDIO AI PROVIDER' : 'VOCAL AI PROVIDER'}</span>
                <strong>{project.name}</strong>
                <b>{project.slug === 'dohalm' ? 'ACTIVE DEVELOPMENT' : 'ARCHITECTURE'}</b>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
