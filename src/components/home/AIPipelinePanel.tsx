const pipelineNodes = [
  { label: 'IMAGE', detail: 'CCTV Frame', type: 'image' },
  { label: 'YOLO Detection', detail: 'Vehicle · 0.94', type: 'detection' },
  { label: 'FastAPI', detail: 'POST /inference', type: 'api' },
  { label: 'JSON Response', detail: '{ bbox, score }', type: 'json' },
  { label: 'Database', detail: 'Detection Event', type: 'database' },
  { label: 'Dashboard', detail: 'Realtime UI', type: 'dashboard' },
]

export default function AIPipelinePanel() {
  return (
    <aside className="ai-pipeline-panel" aria-label="이미지 입력부터 관제 대시보드까지 이어지는 AI 서비스 파이프라인">
      <div className="pipeline-panel-head">
        <div>
          <span className="pipeline-kicker">LIVE ARCHITECTURE</span>
          <strong>AI SERVICE PIPELINE</strong>
        </div>
        <span className="pipeline-live"><i /> RUNNING</span>
      </div>
      <ol className="pipeline-node-list">
        {pipelineNodes.map((node, index) => (
          <li className={`pipeline-node pipeline-node-${node.type}`} key={node.label}>
            <div className="pipeline-node-visual" aria-hidden="true">
              {node.type === 'image' && <><span className="pipeline-horizon" /><span className="pipeline-road" /></>}
              {node.type === 'detection' && <><span className="pipeline-bbox" /><span className="pipeline-target" /></>}
              {node.type === 'api' && <><span className="pipeline-method">POST</span><span className="pipeline-request-dot" /></>}
              {node.type === 'json' && <span className="pipeline-braces">{'{ }'}</span>}
              {node.type === 'database' && <><span /><span /><span /></>}
              {node.type === 'dashboard' && <><span /><span /><span /></>}
            </div>
            <div className="pipeline-node-copy"><strong>{node.label}</strong><span>{node.detail}</span></div>
            {index < pipelineNodes.length - 1 && <span className="pipeline-connector" aria-hidden="true"><i /></span>}
          </li>
        ))}
      </ol>
      <div className="pipeline-panel-foot"><span>Pipeline <strong>Connected</strong></span><span>Service <strong>Healthy</strong></span></div>
    </aside>
  )
}
