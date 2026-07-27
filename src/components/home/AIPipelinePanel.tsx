const pipelineNodes = [
  { label: 'Detection Status', detail: 'YOLO · Vehicle 0.94', type: 'detection', state: 'ACTIVE' },
  { label: 'API Status', detail: 'FastAPI · 200 OK', type: 'api', state: 'ONLINE' },
  { label: 'Processing', detail: 'Inference queue', type: 'processing', state: '82%' },
  { label: 'Database', detail: 'Detection Event', type: 'database', state: 'SYNCED' },
  { label: 'Monitoring', detail: 'Realtime UI', type: 'dashboard', state: 'LIVE' },
  { label: 'Response', detail: 'JSON · bbox, score', type: 'json', state: 'READY' },
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
      <div className="pipeline-overview" aria-label="AI 서비스 실시간 상태 요약">
        <div className="pipeline-status-card">
          <span>DETECTIONS</span>
          <strong className="pipeline-count">
            <span className="pipeline-count-reel" aria-hidden="true"><b>12</b><b>13</b><b>14</b></span>
            <span className="pipeline-count-readable">14</span>
          </strong>
          <small>EVENTS</small>
        </div>
        <div className="pipeline-status-card">
          <span>API</span>
          <strong>200</strong>
          <small>OK</small>
        </div>
        <div className="pipeline-status-card pipeline-processing-card">
          <span>PROCESSING</span>
          <strong>82%</strong>
          <i aria-hidden="true"><b /></i>
        </div>
        <div className="pipeline-status-card">
          <span>DATABASE</span>
          <strong className="pipeline-status-text"><i /> SYNCED</strong>
          <small>HEALTHY</small>
        </div>
      </div>
      <ol className="pipeline-node-list">
        {pipelineNodes.map((node, index) => (
          <li className={`pipeline-node pipeline-node-${node.type}`} key={node.label}>
            <div className="pipeline-node-visual" aria-hidden="true">
              {node.type === 'detection' && <><span className="pipeline-bbox" /><span className="pipeline-target" /></>}
              {node.type === 'api' && <><span className="pipeline-method">POST</span><span className="pipeline-request-dot" /></>}
              {node.type === 'processing' && <><span /><span /><span /></>}
              {node.type === 'json' && <span className="pipeline-braces">{'{ }'}</span>}
              {node.type === 'database' && <><span /><span /><span /></>}
              {node.type === 'dashboard' && <><span /><span /><span /></>}
            </div>
            <div className="pipeline-node-copy"><strong>{node.label}</strong><span>{node.detail}</span></div>
            <span className="pipeline-node-state">{node.state}</span>
            {index < pipelineNodes.length - 1 && <span className="pipeline-connector" aria-hidden="true"><i /></span>}
          </li>
        ))}
      </ol>
      <div className="pipeline-panel-foot"><span>Pipeline <strong>Connected</strong></span><span>Service <strong>Healthy</strong></span></div>
    </aside>
  )
}
