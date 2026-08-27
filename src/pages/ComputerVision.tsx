import { Link } from 'react-router-dom'
import ImageWithFallback from '../components/ImageWithFallback'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SectionScrollButton from '../components/SectionScrollButton'
import { TechChip } from '../components/TechIcon'
import { projects, type Project } from '../data/projects'
import { projectInterviewEvidence } from '../data/interviewEvidence'

const getProject = (slug: Project['slug']) => {
  const project = projects.find((item) => item.slug === slug)
  if (!project) throw new Error(`Project not found: ${slug}`)
  return project
}
const staccato = getProject('staccato')
const staccatoEvidence = projectInterviewEvidence.staccato
const roadSafety = getProject('404rnf')
const statusLabel = (project: Project) => (project.status === 'in-progress' ? 'IN PROGRESS' : 'COMPLETED')

const servicePipeline = [
  ['01', 'Camera / Media', 'CCTV · 신고 이미지와 영상'],
  ['02', 'Detection Model', 'YOLO · RT-DETR 객체 탐지'],
  ['03', 'Post Processing', 'Tracking · ROI · Movement Rules'],
  ['04', 'AI / Backend API', 'FastAPI · Flask 서비스 연동'],
  ['05', 'Database', 'MySQL 탐지·이벤트 저장'],
  ['06', 'Service UI', 'Dashboard · Realtime Alerts'],
] as const
const trainingSteps = [
  ['01', 'Dataset', '3-class 데이터 검증과 분할'],
  ['02', 'Keras Experiment', '객체 탐지 구조와 평가 실험'],
  ['03', 'YOLO Training', 'YOLO 계열 학습과 평가'],
  ['04', 'RT-DETR Training', '동일 지표 기반 후보 검증'],
  ['05', 'Model Comparison', 'Precision · Recall · F1 · mAP 비교'],
  ['06', 'Final Selection', '성능과 서비스 적합성 검토'],
] as const
const evidenceImages = [
  ['/images/ai-learning/staccato-kerascv-yolov8xs-eval-01.jpg', 'KerasCV 객체 탐지 평가 결과', 'KERAS EXPERIMENT'],
  ['/images/ai-learning/staccato-yolo11s-training-results.png', 'YOLO11s 학습 결과', 'YOLO TRAINING'],
  ['/images/ai-learning/staccato-rtdetr-l-early-run-results.png', 'RT-DETR-L 학습 결과', 'RT-DETR TRAINING'],
] as const
const techGroups = [
  ['MODEL', ['YOLO11', 'YOLOv8', 'RT-DETR', 'Keras']],
  ['VISION', ['OpenCV', 'ByteTrack']],
  ['BACKEND', ['Python', 'Flask', 'FastAPI']],
  ['DATA / SERVICE', ['MySQL', 'SQLAlchemy', 'Socket.IO']],
] as const

export default function ComputerVision() {
  const finalModels = staccato.modelExperiments ?? []
  return (
    <div className="cv2-page">
      <section className="cv2-hero page-section" aria-labelledby="cv-page-title">
        <div className="container cv2-hero-grid">
          <Reveal className="cv2-hero-copy">
            <span className="eyebrow">COMPUTER VISION</span>
            <h1 id="cv-page-title">
              MODEL
              <br />
              TO
              <br />
              <span>SERVICE</span>
            </h1>
            <p>객체 탐지 모델을 학습하고 추론 결과를 API·DB·실시간 관제 화면까지 연결했습니다.</p>
            <div className="cv2-hero-tech">
              {['YOLO', 'RT-DETR', 'OpenCV', 'FastAPI'].map((tech) => (
                <TechChip label={tech} key={tech} />
              ))}
            </div>
            <div className="cv2-hero-actions">
              <SectionScrollButton className="button primary" targetId="vision-pipeline">
                VIEW SERVICE PIPELINE
              </SectionScrollButton>
              <SectionScrollButton className="button secondary" targetId="staccato-featured">
                VIEW PROJECTS
              </SectionScrollButton>
            </div>
          </Reveal>
          <Reveal className="cv2-hero-visual" delay={80}>
            <ImageWithFallback src="/images/staccato-11-cctv-bbox.png" alt="STACCATO CCTV 관제 객체 탐지 서비스 화면" loading="eager" />
            <span>STACCATO / LIVE CCTV SERVICE</span>
          </Reveal>
        </div>
        <Reveal className="container cv2-metric-bar">
          <div>
            <strong>02</strong>
            <span>CV PROJECTS</span>
          </div>
          <div>
            <strong>20K</strong>
            <span>DATASET</span>
          </div>
          <div>
            <strong>0.9290</strong>
            <span>mAP50</span>
          </div>
          <div>
            <strong>E2E</strong>
            <span>SERVICE PIPELINE</span>
          </div>
        </Reveal>
      </section>

      <section className="section cv2-pipeline-section" id="vision-pipeline" aria-labelledby="cv-pipeline-title">
        <div className="container">
          <SectionHeading id="cv-pipeline-title" eyebrow="01 / MODEL TO SERVICE" title="END-TO-END VISION PIPELINE" description="탐지 결과를 후처리와 이벤트 로직을 거쳐 실제 운영 화면까지 전달합니다." />
          <Reveal className="cv2-pipeline" role="list">
            {servicePipeline.map(([code, title, description], index) => (
              <div className="cv2-pipeline-item" role="listitem" key={code}>
                <div>
                  <span>{code}</span>
                  <strong>{title}</strong>
                  <small>{description}</small>
                </div>
                {index < servicePipeline.length - 1 && <i aria-hidden="true">→</i>}
              </div>
            ))}
          </Reveal>
          <Reveal className="cv2-postprocess">
            <span>POST PROCESSING</span>
            <div>
              {['Bounding Box', 'Tracking', 'Movement Threshold', 'ROI Rules', 'Event Generation'].map((item) => (
                <b key={item}>{item}</b>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section cv2-featured-section" id="staccato-featured" aria-labelledby="cv-staccato-title">
        <div className="container">
          <SectionHeading id="cv-staccato-title" eyebrow="02 / FEATURED CV PROJECT" title="STACCATO" description="Object Detection부터 Event Logic, API, DB, 실시간 관제 UI까지 연결한 고속도로 안전 관제 팀 프로젝트입니다." />
          <Reveal as="article" className="cv2-featured-card">
            <div className="cv2-featured-copy">
              <div className="cv2-project-meta">
                <span>AI HIGHWAY CONTROL · TEAM PROJECT</span>
                <b>{statusLabel(staccato)}</b>
              </div>
              <h3>
                Detection
                <br />
                to realtime control.
              </h3>
              <p>YOLO11s 탐지 결과와 BBOX metadata를 Flask API·MySQL·Socket.IO 관제 화면까지 연결했습니다.</p>
              <div className="cv2-role-block">
                <span>MY ROLE</span>
                <div>
                  {['Keras Experiment', 'YOLO / RT-DETR Training', 'Model Comparison', 'Frontend MVP', 'Flask API Integration', 'BBOX Integration', '4 VM Integration / QA'].map((role) => (
                    <b key={role}>{role}</b>
                  ))}
                </div>
              </div>
              <div className="cv2-featured-actions">
                <Link className="button primary" to="/projects/staccato">
                  VIEW PROJECT DETAIL
                </Link>
                {staccato.github.url && (
                  <a className="button secondary" href={staccato.github.url} target="_blank" rel="noreferrer">
                    GITHUB ↗
                  </a>
                )}
              </div>
            </div>
            <div className="cv2-featured-media">
              <figure>
                <ImageWithFallback src="/images/staccato-10-dashboard-live.png" alt="STACCATO 실시간 관제 대시보드" loading="lazy" />
                <figcaption>Realtime control dashboard</figcaption>
              </figure>
              <figure>
                <ImageWithFallback src="/images/staccato-12-detection-stopped-vehicle.png" alt="STACCATO 정차 차량 탐지 화면" loading="lazy" />
                <figcaption>Stopped vehicle event detection</figcaption>
              </figure>
            </div>
          </Reveal>
          <Reveal className="cv2-featured-evidence">
            <div>
              <span>DATASET</span>
              <strong>20,000 images</strong>
            </div>
            <div>
              <span>FINAL MODEL</span>
              <strong>YOLO11s</strong>
            </div>
            <div>
              <span>mAP50</span>
              <strong>0.9290</strong>
            </div>
            <div>
              <span>F1</span>
              <strong>0.8932</strong>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section cv2-secondary-section" aria-labelledby="cv-rnf-title">
        <div className="container cv2-secondary-grid">
          <Reveal className="cv2-secondary-copy">
            <SectionHeading id="cv-rnf-title" eyebrow="03 / CV PROJECT" title="404RNF" description="도로 낙하물 탐지 결과를 위험도 분류, 실시간 알림, 관리자 처리 흐름으로 연결한 팀 프로젝트입니다." />
            <div className="cv2-project-meta">
              <span>ROAD HAZARD DETECTION · TEAM PROJECT</span>
              <b>{statusLabel(roadSafety)}</b>
            </div>
            <div className="cv2-secondary-flow">Detection → Risk Classification → Realtime Alert → Admin UI</div>
            <dl>
              <div>
                <dt>MY ROLE</dt>
                <dd>Team Lead · Backend Structure · DB Modeling · Model Comparison · Admin Features</dd>
              </div>
              <div>
                <dt>STACK</dt>
                <dd>YOLOv8 · RT-DETR · Flask · Socket.IO</dd>
              </div>
            </dl>
            <Link className="text-link" to="/projects/404rnf">
              VIEW PROJECT DETAIL <span>→</span>
            </Link>
          </Reveal>
          <Reveal className="cv2-secondary-image" delay={80}>
            <ImageWithFallback src="/images/404rnf-01.png" alt="404RNF 도로 낙하물 탐지 서비스" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {staccatoEvidence && (
        <section className="section cv2-decision-section" aria-label="STACCATO engineering decisions">
          <div className="container">
            <Reveal className="cv2-decision-strip">
              <span>ENGINEERING DECISIONS</span>
              <div>
                {staccatoEvidence.decisions.map((decision) => (
                  <article key={decision.title}>
                    <b>{decision.title}</b>
                    <p>{decision.decision}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section cv2-evidence-section" aria-labelledby="cv-model-title">
        <div className="container">
          <SectionHeading id="cv-model-title" eyebrow="04 / MODEL EVIDENCE" title="FINAL MODEL & COMPARISON" description="동일 최종 비교 조건으로 검증된 STACCATO 모델 성능만 표시합니다." />
          <div className="cv2-evidence-layout">
            <Reveal className="cv2-final-model">
              <span>FINAL MODEL</span>
              <h3>
                YOLO11s
                <br />
                CVAT BALANCED
              </h3>
              <p>20,000 images · car / truck / bus · 3 classes</p>
              <dl>
                <div>
                  <dt>PRECISION</dt>
                  <dd>0.9210</dd>
                </div>
                <div>
                  <dt>RECALL</dt>
                  <dd>0.8670</dd>
                </div>
                <div>
                  <dt>F1</dt>
                  <dd>0.8932</dd>
                </div>
                <div>
                  <dt>mAP50</dt>
                  <dd>0.9290</dd>
                </div>
              </dl>
            </Reveal>
            <Reveal className="cv2-table-wrap" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th>MODEL</th>
                    <th>PRECISION</th>
                    <th>RECALL</th>
                    <th>F1</th>
                    <th>mAP50</th>
                    <th>mAP50-95</th>
                    <th>RESULT</th>
                  </tr>
                </thead>
                <tbody>
                  {finalModels.map((model) => (
                    <tr className={model.note.includes('최종') ? 'is-final' : ''} key={model.model}>
                      <th>{model.model}</th>
                      <td>{model.precision}</td>
                      <td>{model.recall}</td>
                      <td>{model.f1}</td>
                      <td>{model.map50}</td>
                      <td>{model.map5095}</td>
                      <td>{model.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>{staccato.modelEvidenceNote}</p>
            </Reveal>
          </div>
          <div className="cv2-evidence-gallery">
            {evidenceImages.map(([src, alt, label], index) => (
              <Reveal as="figure" delay={index * 50} key={src}>
                <ImageWithFallback src={src} alt={alt} loading="lazy" />
                <figcaption>{label}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cv2-training-section" aria-labelledby="cv-training-title">
        <div className="container">
          <SectionHeading id="cv-training-title" eyebrow="05 / TRAINING PROCESS" title="COMPACT MODEL DEVELOPMENT" description="데이터 준비부터 후보 모델 비교와 최종 선정까지의 검증 흐름입니다." />
          <Reveal className="cv2-training-flow">
            {trainingSteps.map(([code, title, description], index) => (
              <div key={code}>
                <span>{code}</span>
                <strong>{title}</strong>
                <small>{description}</small>
                {index < trainingSteps.length - 1 && <i aria-hidden="true">→</i>}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section cv2-stack-section" aria-labelledby="cv-stack-title">
        <div className="container">
          <SectionHeading id="cv-stack-title" eyebrow="06 / TECH STACK" title="VISION SERVICE TOOLKIT" description="모델 학습, 후처리, Backend와 실시간 서비스 연결에 사용한 기술입니다." />
          <div className="cv2-stack-grid">
            {techGroups.map(([label, items], index) => (
              <Reveal as="article" delay={index * 50} key={label}>
                <span>{label}</span>
                <div>
                  {items.map((item) => (
                    <TechChip label={item} key={item} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section cv2-cta-section">
        <div className="container">
          <Reveal className="cv2-cta">
            <div>
              <span className="eyebrow">MODEL TO SERVICE / CTA</span>
              <h2>프로젝트 구현 근거를 확인하세요.</h2>
              <p>모델 성능, 시스템 구조, 실제 서비스 화면과 담당 범위를 상세 페이지에서 확인할 수 있습니다.</p>
            </div>
            <div>
              <Link className="button primary" to="/projects">
                VIEW PROJECTS
              </Link>
              <Link className="button secondary" to="/contact">
                CONTACT
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
