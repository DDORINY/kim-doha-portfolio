const pipelineNodes = [
  { label: 'LLM / CV', detail: 'Model & Inference' },
  { label: 'AI Serving', detail: 'FastAPI / Flask' },
  { label: 'Python Backend', detail: 'API & Business Logic' },
  { label: 'Database', detail: 'MySQL / SQLAlchemy' },
  { label: 'Web Service', detail: 'Frontend Integration' },
]

export default function AIPipelinePanel() {
  return (
    <aside className="home-service-diagram" aria-label="AI 모델을 웹 서비스로 연결하는 개발 구조">
      <div className="home-service-diagram-head"><span>TECHNICAL FLOW</span><strong>AI SERVICE ARCHITECTURE</strong></div>
      <ol>
        {pipelineNodes.map((node, index) => (
          <li key={node.label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><strong>{node.label}</strong><small>{node.detail}</small></div>
            {index < pipelineNodes.length - 1 && <i aria-hidden="true">↓</i>}
          </li>
        ))}
      </ol>
    </aside>
  )
}
