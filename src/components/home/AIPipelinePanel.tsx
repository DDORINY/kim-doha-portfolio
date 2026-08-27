const pipelineNodes = [
  { label: 'MODEL', detail: 'Qwen · LoRA · YOLO', stage: 'LLM / CV MODEL' },
  { label: 'RUNTIME', detail: 'Transformers · OpenCV', stage: 'TRAIN / INFERENCE' },
  { label: 'SERVING', detail: 'FastAPI · Flask', stage: 'AI SERVING' },
  { label: 'BACKEND', detail: 'Python · Business Logic', stage: 'SERVICE BACKEND' },
  { label: 'DATA', detail: 'MySQL · SQLAlchemy', stage: 'DATABASE' },
  { label: 'PRODUCT', detail: 'React · Next.js', stage: 'FRONTEND PRODUCT' },
]

export default function AIPipelinePanel() {
  return (
    <aside className="home-service-diagram" aria-label="AI 모델을 웹 서비스로 연결하는 개발 구조">
      <div className="home-service-diagram-head"><span>TECHNICAL FLOW</span><strong>AI SERVICE ARCHITECTURE</strong></div>
      <ol>
        {pipelineNodes.map((node, index) => (
          <li key={node.label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><strong>{node.stage}</strong><small><b>{node.label}</b>{node.detail}</small></div>
            {index < pipelineNodes.length - 1 && <i aria-hidden="true">↓</i>}
          </li>
        ))}
      </ol>
    </aside>
  )
}
