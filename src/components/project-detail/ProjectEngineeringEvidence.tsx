import type { InterviewEvidence } from '../../data/interviewEvidence'
import Reveal from '../Reveal'

export default function ProjectEngineeringEvidence({ evidence }: { evidence: InterviewEvidence }) {
  return (
    <>
      <Reveal as="section" id="decisions" className="detail-section engineering-decisions-section">
        <span className="section-number">05 / ENGINEERING DECISIONS</span><h2>설계 판단과 Trade-off</h2>
        <div className="engineering-decision-grid">{evidence.decisions.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><dl><div><dt>PROBLEM</dt><dd>{item.problem}</dd></div><div><dt>DECISION</dt><dd>{item.decision}</dd></div><div><dt>WHY</dt><dd>{item.why}</dd></div>{item.tradeoff && <div><dt>TRADE-OFF</dt><dd>{item.tradeoff}</dd></div>}</dl></article>)}</div>
      </Reveal>
      <Reveal as="section" id="scope" className="detail-section engineering-scope-section">
        <span className="section-number">06 / SCOPE</span><h2>책임 범위</h2>
        <div className="engineering-scope-grid"><article><span>MY SCOPE</span><ul>{evidence.scope.mine.map((item) => <li key={item}>{item}</li>)}</ul></article>{evidence.scope.team?.length ? <article><span>TEAM SCOPE</span><ul>{evidence.scope.team.map((item) => <li key={item}>{item}</li>)}</ul></article> : null}</div>
      </Reveal>
      <Reveal as="section" id="troubleshooting" className="detail-section engineering-trouble-section">
        <span className="section-number">07 / TROUBLESHOOTING</span><h2>문제 해결과 검증</h2>
        <div className="engineering-trouble-list">{evidence.troubleshooting.map((item) => <article key={item.title}><h3>{item.title}</h3><dl><div><dt>PROBLEM</dt><dd>{item.problem}</dd></div><div><dt>DECISION</dt><dd>{item.decision}</dd></div><div><dt>VERIFICATION</dt><dd>{item.verification}</dd></div><div><dt>RESULT</dt><dd>{item.result}</dd></div></dl></article>)}</div>
      </Reveal>
      <Reveal as="section" id="verification" className="detail-section engineering-verification-section">
        <span className="section-number">08 / VERIFICATION</span><h2>HOW I VERIFIED IT</h2>
        <div className="engineering-verification-grid">{evidence.verification.map((item) => <article key={item.label}><span className={`engineering-status is-${item.status}`}>{item.status.replace('-', ' ').toUpperCase()}</span><h3>{item.label}</h3><p>{item.detail}</p></article>)}</div>
      </Reveal>
      <Reveal as="section" id="code-evidence" className="detail-section engineering-code-section">
        <span className="section-number">09 / CODE EVIDENCE</span><h2>구현 코드 바로 보기</h2>
        <div className="engineering-code-grid">{evidence.codeEvidence.map((item) => <a href={item.url} target="_blank" rel="noreferrer" key={item.url}><span>CODE EVIDENCE</span><h3>{item.label}</h3><p>{item.description}</p><b>VIEW CODE ↗</b></a>)}</div>
      </Reveal>
      <Reveal as="section" id="discussion" className="detail-section engineering-discussion-section">
        <span className="section-number">10 / ENGINEERING DISCUSSION</span><h2>설계 회고</h2>
        <p className="engineering-discussion-intro">구현 과정에서 내린 기술적 판단의 이유와 선택의 한계, 향후 개선 방향을 정리했습니다.</p>
        <div className="engineering-discussion-list">{evidence.discussionPoints.map((item, index) => <article key={item.question}>
          <span className="engineering-discussion-index">{String(index + 1).padStart(2, '0')}</span>
          <div className="engineering-discussion-content">
            <div className="engineering-discussion-question"><small>QUESTION</small><h3>{item.question}</h3></div>
            <dl>
              <div><dt>ANSWER</dt><dd>{item.answer}</dd></div>
              {item.tradeoff && <div><dt>TRADE-OFF</dt><dd>{item.tradeoff}</dd></div>}
              {item.next && <div><dt>NEXT</dt><dd>{item.next}</dd></div>}
            </dl>
          </div>
        </article>)}</div>
      </Reveal>
    </>
  )
}
