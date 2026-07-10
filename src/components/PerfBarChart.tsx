import type { AccuracyBarDatum } from '../data/profile'

type CpuRange = { name: string; map50: [number, number]; f1: [number, number]; note: string }
type TimeDatum = { name: string; hours: number; label: string }

const pct = (value: number) => `${(value * 100).toFixed(1)}%`

export function AccuracyComparisonChart({ rows, cpuRange }: { rows: AccuracyBarDatum[]; cpuRange: CpuRange }) {
  return (
    <div className="perf-chart" role="img" aria-label="YOLO11s, RT-DETR-L, CPU baseline 모델의 mAP50·F1 비교 막대그래프">
      <div className="perf-legend">
        <span className="perf-legend-item"><i className="perf-swatch perf-swatch-map50" aria-hidden="true" />mAP50</span>
        <span className="perf-legend-item"><i className="perf-swatch perf-swatch-f1" aria-hidden="true" />F1</span>
      </div>
      {rows.map((row) => (
        <div className="perf-row" key={row.name}>
          <div className="perf-row-label">{row.name}</div>
          <div className="perf-bar-line">
            <div className="perf-bar-track"><div className="perf-bar-fill perf-swatch-map50" style={{ width: pct(row.map50) }} /></div>
            <span className="perf-bar-value">{row.map50.toFixed(4)}</span>
          </div>
          <div className="perf-bar-line">
            <div className="perf-bar-track"><div className="perf-bar-fill perf-swatch-f1" style={{ width: pct(row.f1) }} /></div>
            <span className="perf-bar-value">{row.f1.toFixed(4)}</span>
          </div>
          <p className="perf-row-note">{row.note}</p>
        </div>
      ))}
      <div className="perf-row">
        <div className="perf-row-label">{cpuRange.name}</div>
        <div className="perf-bar-line">
          <div className="perf-bar-track">
            <div className="perf-bar-range perf-swatch-map50-range" style={{ left: pct(cpuRange.map50[0]), width: pct(cpuRange.map50[1] - cpuRange.map50[0]) }} />
          </div>
          <span className="perf-bar-value">{cpuRange.map50[0].toFixed(2)} ~ {cpuRange.map50[1].toFixed(2)}</span>
        </div>
        <div className="perf-bar-line">
          <div className="perf-bar-track">
            <div className="perf-bar-range perf-swatch-f1-range" style={{ left: pct(cpuRange.f1[0]), width: pct(cpuRange.f1[1] - cpuRange.f1[0]) }} />
          </div>
          <span className="perf-bar-value">{cpuRange.f1[0].toFixed(2)} ~ {cpuRange.f1[1].toFixed(2)}</span>
        </div>
        <p className="perf-row-note">{cpuRange.note}</p>
      </div>
    </div>
  )
}

export function TrainingTimeChart({ rows }: { rows: TimeDatum[] }) {
  const max = Math.max(...rows.map((r) => r.hours))
  return (
    <div className="perf-chart" role="img" aria-label="YOLO11s와 RT-DETR-L의 GPU 학습 소요 시간 비교 막대그래프">
      {rows.map((row) => (
        <div className="perf-row" key={row.name}>
          <div className="perf-row-label">{row.name}</div>
          <div className="perf-bar-line">
            <div className="perf-bar-track"><div className="perf-bar-fill perf-swatch-time" style={{ width: pct(row.hours / max) }} /></div>
            <span className="perf-bar-value">{row.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
