import ImageWithFallback from '../components/ImageWithFallback'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { TechChip } from '../components/TechIcon'
import { aiLearningOverview, datasetEvidence, experimentSummary, learningExperiments, learningNotes, learningProjectMap, learningTracks, modelComparisonTable, profile, realtimePerformance } from '../data/profile'

export default function AILearning() {
  return (
    <section className="section page-section learning-page">
      <div className="container">
        <div className="learning-header">
          <SectionHeading eyebrow="AI EXPERIMENT REPORT" title="모델에서 서비스까지" description="AI를 이해하고, 웹 서비스에 연결하고, 운영 가능한 형태로 만드는 학습 과정을 실험 리포트 형태로 정리했습니다." />
          <a className="button primary" href={profile.notion} target="_blank" rel="noreferrer">Notion 학습 기록 ↗</a>
        </div>
        <div className="learning-block">
          <span className="eyebrow">EXPERIMENT SUMMARY</span>
          <div className="metric-card-grid">
            {experimentSummary.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <span className="metric-card-value">{metric.value}</span>
                <span className="metric-card-label">{metric.label}</span>
                {metric.description && <p>{metric.description}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="learning-block"><span className="eyebrow">LEARNING NOTES</span><div className="large-chip-row">{learningNotes.map((note) => <span key={note}>{note}</span>)}</div></div>
        <div className="learning-block"><span className="eyebrow">OVERVIEW</span><p className="lead-copy">{aiLearningOverview}</p></div>
        <div className="learning-block">
          <SectionHeading eyebrow="DATASET EVIDENCE" title="데이터셋 구성" description="AIHub 공개 데이터와 직접 수집 데이터, 클래스 밸런스 조정 데이터셋까지 3가지 구성으로 학습 결과를 비교했습니다." />
          <div className="experiment-table-wrap">
            <table className="experiment-table">
              <thead><tr><th>데이터 출처</th><th>수량</th><th>비고</th></tr></thead>
              <tbody>{datasetEvidence.map((row) => <tr key={row.source}><td>{row.source}</td><td>{row.volume}</td><td>{row.note}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
        <div className="learning-block">
          <SectionHeading eyebrow="MODEL COMPARISON" title="모델 비교 실험" description="KerasCV YOLOv8-xs, Custom Keras MobileNetV3-FPN, YOLO11n(baseline·stage2), YOLO11s(stage2·CVAT balanced), RT-DETR-L을 목적·결과·배운 점·프로젝트 적용 기준으로 비교했습니다. Keras 두 항목은 실제 정량 평가 수치, YOLO/RT-DETR는 최종 발표 성능표 기준 수치입니다." />
          <div className="experiment-table-wrap">
            <table className="experiment-table">
              <thead><tr><th>Model</th><th>Purpose</th><th>Result</th><th>What I Learned</th><th>Project Application</th></tr></thead>
              <tbody>{modelComparisonTable.map((row) => <tr key={row.model}><td>{row.model}</td><td>{row.purpose}</td><td>{row.result}</td><td>{row.learned}</td><td>{row.application}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
        <div className="learning-block">
          <SectionHeading eyebrow="REALTIME PERFORMANCE" title="실시간 처리 성능 비교" description="정확도뿐 아니라 실시간 CCTV 관제에 적용 가능한 처리 속도·학습 시간까지 함께 비교했습니다." />
          <div className="metric-card-grid">
            {realtimePerformance.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <span className="metric-card-value">{metric.value}</span>
                <span className="metric-card-label">{metric.label}</span>
                {metric.description && <p>{metric.description}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="roadmap" aria-label="AI 서비스 개발 학습 로드맵">
          <div className="roadmap-line" />
          {learningTracks.map((track) => (
            <button
              type="button"
              className="roadmap-step"
              key={track.key}
              onClick={() => document.getElementById(`track-${track.key}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              <span className="roadmap-node">{track.key}</span>
              <span className="roadmap-title">{track.title}</span>
            </button>
          ))}
        </div>
        <div className="learning-grid">
          {learningTracks.map((track) => (
            <Reveal as="article" id={`track-${track.key}`} className="learning-card" key={track.key}>
              <span className="learning-number">{track.key}</span>
              <h2>{track.title}</h2>
              <p>{track.description}</p>
              <div className="chip-row">{track.topics.map((topic) => <TechChip label={topic} key={topic} />)}</div>
            </Reveal>
          ))}
        </div>
        <div className="learning-block">
          <SectionHeading eyebrow="EXPERIMENTS" title="Keras 실험과 모델 비교 기록" description="모델 학습 흐름, 영상 데이터 처리, 옵티마이저·해상도 비교까지 직접 실험한 기록입니다. 그래프는 실제 학습 결과 캡처입니다." />
          <div className="cert-list">
            {learningExperiments.map((exp) => (
              <Reveal as="div" className="trouble-card" key={exp.title}>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
                <div className="chip-row">{exp.keywords.map((keyword) => <TechChip label={keyword} key={keyword} />)}</div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="learning-block">
          <SectionHeading eyebrow="TRAINING RESULT GALLERY" title="학습 곡선 · Confusion Matrix · 비교 그래프" description="최종 선정 모델 YOLO11s CVAT balanced의 학습 곡선·PR/F1 curve·confusion matrix·validation 예측 결과를 포함해, YOLO11n·RT-DETR-L 비교 학습, optimizer·해상도 비교 결과까지 모아 정리했습니다." />
          <div className="evidence-gallery">
            {learningExperiments.flatMap((exp) => exp.images ?? []).map((img) => (
              <figure key={img.src}>
                <a href={img.src} target="_blank" rel="noreferrer" aria-label={`${img.caption} 크게 보기`}>
                  <ImageWithFallback src={img.src} alt={img.caption} loading="lazy" fallbackLabel="학습 결과 이미지 준비 중" />
                </a>
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="learning-block">
          <SectionHeading eyebrow="LEARNING → SERVICE CONNECTION" title="학습을 서비스에 연결한 기록" description="'학습했습니다'가 아니라, 배운 내용을 어떤 프로젝트의 어떤 로직에 실제로 연결했는지 정리했습니다." />
          <div className="trouble-list">
            {learningProjectMap.map((item) => (
              <Reveal as="div" className="trouble-card" key={item.title}>
                <h3>{item.title} <span aria-hidden="true">→</span> {item.project}</h3>
                <dl>
                  <div><dt>Learning</dt><dd>{item.learning}</dd></div>
                  <div><dt>Project</dt><dd>{item.project}</dd></div>
                  <div><dt>Applied</dt><dd>{item.applied}</dd></div>
                </dl>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal as="div" className="learning-note"><span className="eyebrow">CURRENT DIRECTION</span><h2>AI의 결과가 사용자의 행동으로 이어지는 전체 흐름을 공부합니다.</h2><p>모델 성능뿐 아니라 데이터 입력, API 응답, 화면의 피드백, 운영과 배포까지 함께 고려합니다.</p></Reveal>
      </div>
    </section>
  )
}
