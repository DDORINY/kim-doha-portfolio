import { Link } from 'react-router-dom'
import ImageWithFallback from '../components/ImageWithFallback'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SectionScrollButton from '../components/SectionScrollButton'
import { TechChip } from '../components/TechIcon'
import { projects, type Project } from '../data/projects'

const visionProjectSlugs = ['staccato', '404rnf'] as const

function getVisionProject(slug: (typeof visionProjectSlugs)[number]) {
  const project = projects.find((item) => item.slug === slug)
  if (!project) throw new Error(`Computer Vision project not found: ${slug}`)
  return project
}

const staccato = getVisionProject('staccato')
const roadSafety = getVisionProject('404rnf')

const heroTechGroups = [
  { label: 'MODEL', tech: ['YOLO11', 'YOLOv8', 'RT-DETR', 'Keras'] },
  { label: 'VISION', tech: ['OpenCV', 'ByteTrack'] },
  { label: 'SERVICE', tech: ['Flask', 'FastAPI', 'MySQL', 'Socket.IO'] },
] as const

const modelDevelopment = [
  { code: '01', title: 'Dataset', description: '20,000 images · car / truck / bus · train 16,000 / val 2,000 / test 2,000' },
  { code: '02', title: 'Keras Experiment', description: 'Keras 기반 객체 탐지 모델 실험과 평가 결과 확인' },
  { code: '03', title: 'YOLO Training', description: 'YOLO 계열 모델 학습과 Precision · Recall · F1 · mAP 평가' },
  { code: '04', title: 'RT-DETR Training', description: 'RT-DETR-L 학습과 동일 평가 지표 기반 성능 확인' },
  { code: '05', title: 'Performance Comparison', description: '동일 모델·데이터셋·평가 조건의 최종 성능표 비교' },
  { code: '06', title: 'Final Model Selection', description: '실시간 처리와 서비스 연동성을 함께 검토해 최종 모델 선정 참여' },
] as const

const modelEvidenceImages = [
  { src: '/images/ai-learning/staccato-kerascv-yolov8xs-eval-01.jpg', alt: 'STACCATO KerasCV YOLOv8 객체 탐지 평가 결과', label: 'KERAS EXPERIMENT', caption: 'KerasCV YOLOv8XS · 객체 탐지 평가 결과' },
  { src: '/images/ai-learning/staccato-yolo11s-training-results.png', alt: 'STACCATO YOLO11s 학습 결과 그래프', label: 'YOLO TRAINING', caption: 'YOLO11s · 학습 및 검증 지표' },
  { src: '/images/ai-learning/staccato-rtdetr-l-early-run-results.png', alt: 'STACCATO RT-DETR-L 학습 결과 그래프', label: 'RT-DETR TRAINING', caption: 'RT-DETR-L · 학습 결과' },
] as const

type ProjectView = {
  project: Project
  problem: string
  roles: readonly string[]
  results: readonly string[]
  image: { src: string; alt: string; caption: string }
}

const projectViews: ProjectView[] = [
  {
    project: staccato,
    problem: '고속도로에서 정차 차량이나 갓길 정차는 2차 사고로 이어질 수 있어 빠른 탐지와 관제 대응이 중요합니다.',
    roles: [
      'Keras 기반 객체 탐지 모델 실험',
      'YOLO 및 RT-DETR 모델 학습',
      '모델 성능 비교',
      '최종 모델 선정 참여',
      '프론트엔드 MVP 개발',
      'Flask API 일부 개발 및 AI 연동',
      '객체 탐지 결과(BBOX Metadata) 서비스 연동',
      'AI · Backend · DB · Frontend 4개 VM 통합 및 QA',
    ],
    results: ['Dataset 20,000장', 'mAP50 0.9290', 'F1 0.8932'],
    image: { src: '/images/staccato-05.png', alt: 'STACCATO 모델 성능 비교 화면', caption: '모델 성능 비교 · YOLO11 · Keras YOLOv8 · RT-DETR' },
  },
  {
    project: roadSafety,
    problem: roadSafety.background,
    roles: ['팀장', 'Flask 구조 설계', 'DB 모델링', '관리자 기능', '모델 비교 화면', '위험도 분류'],
    results: [roadSafety.resumeHighlight!.contribution, roadSafety.resumeHighlight!.achievement],
    image: roadSafety.screenshots[0],
  },
]

const pipelineNodes = [
  { code: '01', title: 'Camera', description: 'CCTV · 신고 이미지/영상' },
  { code: '02', title: 'Model', description: '객체 탐지 · confidence · bbox' },
  { code: '03', title: 'API', description: 'FastAPI · Flask' },
  { code: '04', title: 'Database', description: 'MySQL · 탐지 결과 저장' },
  { code: '05', title: 'Dashboard', description: '관제 화면 · 관리자 알림' },
] as const

function ProjectExperience({ item, index }: { item: ProjectView; index: number }) {
  const { project } = item
  return (
    <Reveal as="article" id={`experience-${project.slug}`} className="cv-experience-card" delay={index * 70}>
      <div className="cv-experience-main">
        <div className="cv-experience-heading"><span>0{index + 1} / PROJECT EXPERIENCE</span><strong>COMPLETED</strong></div>
        <h3>{project.name}</h3>
        <p className="cv-project-type">{project.type} · {project.teamNote}</p>
        <div className="cv-project-problem"><span>PROBLEM</span><p>{item.problem}</p></div>
        <div className="cv-project-detail-grid">
          <section><span>MY ROLE</span><ul>{item.roles.map((role) => <li key={role}>{role}</li>)}</ul></section>
          <section><span>RESULT</span><ul>{item.results.map((result) => <li key={result}>{result}</li>)}</ul></section>
        </div>
        <div className="cv-card-actions">
          <Link to={`/projects/${project.slug}`}>DETAIL <span>→</span></Link>
          {project.github.url && <a href={project.github.url} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub 새 창에서 열기`}>GITHUB <span>↗</span></a>}
        </div>
      </div>
      <figure className="cv-evidence-figure">
        <ImageWithFallback src={item.image.src} alt={item.image.alt} loading="lazy" fallbackLabel={`${project.name} 화면`} />
        <figcaption>{item.image.caption}</figcaption>
      </figure>
    </Reveal>
  )
}

export default function ComputerVision() {
  const finalModels = staccato.modelExperiments ?? []

  return (
    <div className="computer-vision-page">
      <section className="cv-hero page-section" aria-labelledby="cv-page-title">
        <div className="container cv-hero-grid">
          <Reveal className="cv-hero-copy">
            <span className="eyebrow">COMPUTER VISION · MODEL TO SERVICE</span>
            <h1 id="cv-page-title">객체 탐지 모델 학습부터<br />서비스 연동까지 수행한 경험</h1>
            <p>객체 탐지 모델 실험과 학습을 수행하고 AI 결과를 API, 데이터베이스, 실시간 관제 화면까지 연결했습니다.</p>
            <div className="cv-hero-tech-groups">
              {heroTechGroups.map((group) => <div key={group.label}><span>{group.label}</span><div className="chip-row">{group.tech.map((tech) => <TechChip label={tech} key={tech} />)}</div></div>)}
            </div>
            <SectionScrollButton className="button primary" targetId="model-development">VIEW MODEL DEVELOPMENT <span>↓</span></SectionScrollButton>
          </Reveal>
          <Reveal className="cv-hero-evidence" delay={100} aria-label="Computer Vision 검증 결과 요약">
            <div className="cv-panel-head"><span>VISION SERVICE EVIDENCE</span><small>VERIFIED DATA</small></div>
            <div className="cv-hero-preview">
              <ImageWithFallback src="/images/staccato-13-detection-stopped-vehicle-2.png" alt="STACCATO 정차 차량 객체 탐지 결과" loading="eager" />
              <span className="cv-detection-label label-a">STOPPED VEHICLE <b>0.89</b></span>
              <span className="cv-detection-label label-b">CAR <b>0.86</b></span>
            </div>
            <dl className="cv-hero-metrics">
              <div><dt>PROJECTS</dt><dd>02</dd></div><div><dt>DATASET</dt><dd>20K</dd></div><div><dt>mAP50</dt><dd>0.9290</dd></div><div><dt>PIPELINE</dt><dd>E2E</dd></div>
            </dl>
            <div className="cv-panel-foot"><span><i /> MODEL → API → DB → UI</span><strong>SERVICE CONNECTED</strong></div>
          </Reveal>
        </div>
      </section>

      <section className="section cv-development-section" id="model-development" aria-labelledby="cv-development-title">
        <div className="container">
          <SectionHeading id="cv-development-title" eyebrow="01 / MODEL DEVELOPMENT" title="MODEL DEVELOPMENT" description="객체 탐지 모델 실험부터 최종 모델 선정까지의 과정입니다." />
          <Reveal className="cv-development-flow" role="list">
            {modelDevelopment.map((step) => <div className="cv-development-step" role="listitem" key={step.code}><span>{step.code}</span><h3>{step.title}</h3><p>{step.description}</p></div>)}
          </Reveal>
          <div className="cv-development-evidence">
            {modelEvidenceImages.map((image, index) => <Reveal as="figure" delay={index * 65} key={image.src}><div><ImageWithFallback src={image.src} alt={image.alt} loading="lazy" /><span>{image.label}</span></div><figcaption>{image.caption}</figcaption></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section cv-experience-section" id="vision-projects" aria-labelledby="cv-experience-title">
        <div className="container">
          <SectionHeading id="cv-experience-title" eyebrow="02 / CORE CV PROJECTS" title="CORE CV PROJECTS" description="모델 개발과 AI 서비스 구현 근거가 확인되는 완료 프로젝트 2개만 표시합니다." />
          <div className="cv-experience-list">{projectViews.map((item, index) => <ProjectExperience item={item} index={index} key={item.project.slug} />)}</div>
        </div>
      </section>

      <section className="section cv-model-section" aria-labelledby="cv-model-title">
        <div className="container">
          <SectionHeading id="cv-model-title" eyebrow="03 / MODEL EVIDENCE" title="MODEL EVIDENCE" description="STACCATO 최종 발표 성능표의 동일 비교 조건 데이터만 사용했습니다." />
          <Reveal className="cv-model-layout">
            <div className="cv-model-summary">
              <span className="cv-final-badge">FINAL MODEL</span><h3>YOLO11s<br />CVAT balanced</h3>
              <p>20,000장 · car / truck / bus 3-class · train 16,000 / val 2,000 / test 2,000</p>
              <div className="cv-final-metrics"><div><span>PRECISION</span><strong>0.9210</strong></div><div><span>RECALL</span><strong>0.8670</strong></div><div><span>F1</span><strong>0.8932</strong></div><div><span>mAP50</span><strong>0.9290</strong></div></div>
              <p className="cv-selection-note">{staccato.modelEvidenceNote}</p>
            </div>
            <div className="cv-model-table-wrap" tabIndex={0} aria-label="STACCATO 모델 성능 비교표, 가로로 스크롤 가능">
              <table className="cv-model-table">
                <caption className="sr-only">STACCATO 동일 최종 비교 조건 모델 성능</caption>
                <thead><tr><th>MODEL</th><th>PRECISION</th><th>RECALL</th><th>F1</th><th>mAP50</th><th>mAP50-95</th><th>RESULT</th></tr></thead>
                <tbody>{finalModels.map((model) => <tr className={model.note.includes('최종') ? 'is-final' : ''} key={model.model}><th>{model.model}</th><td>{model.precision}</td><td>{model.recall}</td><td>{model.f1}</td><td>{model.map50}</td><td>{model.map5095}</td><td>{model.note}</td></tr>)}</tbody>
              </table>
            </div>
          </Reveal>
          <Reveal className="cv-evidence-policy">
            <p>동일 모델·데이터셋·평가 조건에서 검증된 최종 결과만 사용했습니다.</p>
            <details><summary>데이터 검증 기준 보기</summary><p>입력 960 · F1 0.8696 · mAP50 0.9083 후보는 동일 모델·데이터셋·평가 시점이 확인되지 않아 제외했습니다. RT-DETR-L 조기 종료 로그(mAP@0.5 0.786)는 100 epoch 최종 비교표와 다른 실험 시점이므로 혼합하지 않았습니다.</p></details>
          </Reveal>
        </div>
      </section>

      <section className="section cv-pipeline-section" aria-labelledby="cv-pipeline-title">
        <div className="container">
          <SectionHeading id="cv-pipeline-title" eyebrow="04 / END-TO-END PIPELINE" title="END-TO-END PIPELINE" description="객체 탐지 결과가 API와 데이터베이스를 거쳐 사용자 화면에 도달하는 서비스 흐름입니다." />
          <Reveal className="cv-service-pipeline" role="list">
            {pipelineNodes.map((node) => <div className="cv-service-node" role="listitem" key={node.code}><span>{node.code}</span><h3>{node.title}</h3><p>{node.description}</p></div>)}
          </Reveal>
          <div className="cv-pipeline-projects">
            {[staccato, roadSafety].map((project, index) => <Reveal as="article" delay={index * 70} key={project.slug}><div><span>0{index + 1}</span><h3>{project.name}</h3></div><p>{index === 0 ? 'CCTV → YOLO11s → FastAPI · Flask → MySQL → Socket.IO 관제 화면' : '신고 이미지·영상 → YOLOv8 · RT-DETR → Flask → MySQL → 관리자 화면·실시간 알림'}</p><Link to={`/projects/${project.slug}`}>VIEW DETAIL <span>→</span></Link></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section cv-cta-section">
        <div className="container"><Reveal className="cv-cta-panel"><div><span className="eyebrow">MODEL TO SERVICE / CTA</span><h2>구현 근거를 프로젝트 상세에서 확인하세요.</h2><p>시스템 구조, 모델 성능표, 실제 화면과 프로젝트 문서를 확인할 수 있습니다.</p></div><div className="cv-cta-actions"><Link className="button primary" to="/projects">VIEW ALL PROJECTS <span>→</span></Link><Link className="button ghost" to="/contact">CONTACT <span>→</span></Link></div></Reveal></div>
      </section>
    </div>
  )
}
