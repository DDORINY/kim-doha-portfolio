import ImageWithFallback from '../components/ImageWithFallback'
import { AccuracyComparisonChart, TrainingTimeChart } from '../components/PerfBarChart'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { TechChip } from '../components/TechIcon'
import { aiLearningOverview, cpuBaselineRange, datasetEvidence, experimentSummary, learningExperiments, learningNotes, learningProjectMap, learningTracks, modelComparisonTable, profile, realtimeAccuracyChart, trainingTimeChart } from '../data/profile'

export default function AILearning() {
  return (
    <section className="section page-section learning-page">
      <div className="container">
        <div className="learning-header">
          <SectionHeading eyebrow="AI EXPERIMENT REPORT" title="모델에서 서비스까지" description="AI를 이해하고, 웹 서비스에 연결하고, 운영 가능한 형태로 만드는 학습 과정을 실험 리포트 형태로 정리했습니다." />
          <a className="button primary" href={profile.notion} target="_blank" rel="noreferrer">Notion 학습 기록 ↗</a>
        </div>

        <div className="learning-block">
          <SectionHeading eyebrow="01 / OVERVIEW" title="한눈에 보는 학습 요약" description={aiLearningOverview} />
          <div className="metric-card-grid">
            {experimentSummary.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <span className="metric-card-value">{metric.value}</span>
                <span className="metric-card-label">{metric.label}</span>
                {metric.description && <p>{metric.description}</p>}
              </div>
            ))}
          </div>
          <div className="large-chip-row" style={{ marginTop: 18 }}>{learningNotes.map((note) => <span key={note}>{note}</span>)}</div>
        </div>

        <div className="learning-block">
          <SectionHeading eyebrow="02 / LEARNING ROADMAP" title="학습 로드맵" description="Python 기초부터 배포·운영까지, 순서대로 쌓아온 학습 단계입니다." />
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
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <div className="chip-row">{track.topics.map((topic) => <TechChip label={topic} key={topic} />)}</div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="learning-block">
          <SectionHeading eyebrow="03 / DATASET EVIDENCE" title="데이터셋 구성" description="AIHub 공개 데이터와 직접 수집 데이터, 클래스 밸런스 조정 데이터셋까지 3가지 구성으로 학습 결과를 비교했습니다." />
          <div className="experiment-table-wrap">
            <table className="experiment-table">
              <thead><tr><th>데이터 출처</th><th>수량</th><th>비고</th></tr></thead>
              <tbody>{datasetEvidence.map((row) => <tr key={row.source}><td>{row.source}</td><td>{row.volume}</td><td>{row.note}</td></tr>)}</tbody>
            </table>
          </div>
        </div>

        <div className="learning-block">
          <SectionHeading eyebrow="04 / MODEL PERFORMANCE SUMMARY" title="모델 성능 요약" description="KerasCV YOLOv8-xs, Custom Keras MobileNetV3-FPN, YOLO11n(baseline·stage2), YOLO11s(stage2·CVAT balanced), RT-DETR-L을 목적·결과·배운 점·프로젝트 적용 기준으로 비교했습니다. Keras 두 항목은 실제 정량 평가 수치, YOLO/RT-DETR는 최종 발표 성능표 기준 수치입니다." />
          <div className="experiment-table-wrap">
            <table className="experiment-table">
              <thead><tr><th>Model</th><th>Purpose</th><th>Result</th><th>What I Learned</th><th>Project Application</th></tr></thead>
              <tbody>{modelComparisonTable.map((row) => <tr key={row.model}><td>{row.model}</td><td>{row.purpose}</td><td>{row.result}</td><td>{row.learned}</td><td>{row.application}</td></tr>)}</tbody>
            </table>
          </div>
          <h3 className="learning-subheading">실시간 처리 성능 비교</h3>
          <p className="learning-subheading-desc">정확도뿐 아니라 실시간 CCTV 관제에 적용 가능한 처리 속도·학습 시간까지 함께 비교했습니다.</p>
          <AccuracyComparisonChart rows={realtimeAccuracyChart} cpuRange={cpuBaselineRange} />
          <h4 className="perf-chart-title">GPU 학습 소요 시간 비교</h4>
          <TrainingTimeChart rows={trainingTimeChart} />
        </div>

        <div className="learning-block">
          <SectionHeading eyebrow="05 / EXPERIMENT LOG" title="실험별 상세 기록" description="모델 학습 흐름, 영상 데이터 처리, 옵티마이저·해상도 비교까지 직접 실험한 기록입니다. 각 실험 아래 그래프는 해당 실험의 실제 학습 결과 캡처입니다." />
          <div className="experiment-log">
            {learningExperiments.map((exp) => (
              <Reveal as="article" className="trouble-card experiment-log-card" key={exp.title}>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
                <div className="chip-row">{exp.keywords.map((keyword) => <TechChip label={keyword} key={keyword} />)}</div>
                {exp.images?.length ? (
                  <div className="evidence-gallery experiment-log-gallery">
                    {exp.images.map((img) => (
                      <figure key={img.src}>
                        <a href={img.src} target="_blank" rel="noreferrer" aria-label={`${img.caption} 크게 보기`}>
                          <ImageWithFallback src={img.src} alt={img.caption} loading="lazy" fallbackLabel="학습 결과 이미지 준비 중" />
                        </a>
                        <figcaption>{img.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="learning-block">
          <SectionHeading eyebrow="06 / LEARNING → SERVICE CONNECTION" title="학습을 서비스에 연결한 기록" description="'학습했습니다'가 아니라, 배운 내용을 어떤 프로젝트의 어떤 로직에 실제로 연결했는지 정리했습니다." />
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

        <Reveal as="div" className="learning-note"><span className="eyebrow">07 / CURRENT DIRECTION</span><h2>AI의 결과가 사용자의 행동으로 이어지는 전체 흐름을 공부합니다.</h2><p>모델 성능뿐 아니라 데이터 입력, API 응답, 화면의 피드백, 운영과 배포까지 함께 고려합니다.</p></Reveal>
      </div>
    </section>
  )
}
