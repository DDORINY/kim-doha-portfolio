import SectionHeading from '../components/SectionHeading'
import { aiLearningOverview, learningExperiments, learningNotes, learningProjectMap, learningTracks, profile } from '../data/profile'

export default function AILearning() {
  return (
    <section className="section page-section learning-page">
      <div className="container">
        <div className="learning-header">
          <SectionHeading eyebrow="AI LEARNING" title="모델에서 서비스까지" description="AI를 이해하고, 웹 서비스에 연결하고, 운영 가능한 형태로 만드는 학습 과정을 기록합니다." />
          <a className="button primary" href={profile.notion} target="_blank" rel="noreferrer">Notion 학습 기록 ↗</a>
        </div>
        <div className="learning-block"><span className="eyebrow">LEARNING NOTES</span><div className="large-chip-row">{learningNotes.map((note) => <span key={note}>{note}</span>)}</div></div>
        <div className="learning-block"><span className="eyebrow">OVERVIEW</span><p className="lead-copy">{aiLearningOverview}</p></div>
        <div className="learning-path" aria-label="AI 서비스 개발 학습 방향">
          <span>DATA</span><i>→</i><span>MODEL</span><i>→</i><span>API</span><i>→</i><span>SERVICE</span>
        </div>
        <div className="learning-grid">
          {learningTracks.map((track) => (
            <article className="learning-card" key={track.key}>
              <span className="learning-number">{track.key}</span>
              <h2>{track.title}</h2>
              <p>{track.description}</p>
              <div className="chip-row">{track.topics.map((topic) => <span className="chip" key={topic}>{topic}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="learning-block">
          <SectionHeading eyebrow="EXPERIMENTS" title="Keras 실험과 Computer Vision 학습" description="모델 학습 흐름과 영상 데이터 처리를 직접 실험하며 이해했습니다." />
          <div className="cert-list">
            {learningExperiments.map((exp) => (
              <div className="trouble-card" key={exp.title}>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
                <div className="chip-row">{exp.keywords.map((keyword) => <span className="chip" key={keyword}>{keyword}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="learning-block">
          <SectionHeading eyebrow="PROJECT APPLICATION" title="학습 내용의 프로젝트 적용" description="학습한 내용이 STACCATO·404RNF 프로젝트의 어떤 부분과 연결되는지 정리했습니다." />
          <div className="trouble-list">
            {learningProjectMap.map((item) => (
              <div className="trouble-card" key={item.title}>
                <h3>{item.title}</h3>
                <dl>
                  <div><dt>Learning</dt><dd>{item.learning}</dd></div>
                  <div><dt>Project</dt><dd>{item.project}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </div>
        <div className="learning-note"><span className="eyebrow">CURRENT DIRECTION</span><h2>AI의 결과가 사용자의 행동으로 이어지는 전체 흐름을 공부합니다.</h2><p>모델 성능뿐 아니라 데이터 입력, API 응답, 화면의 피드백, 운영과 배포까지 함께 고려합니다.</p></div>
      </div>
    </section>
  )
}
