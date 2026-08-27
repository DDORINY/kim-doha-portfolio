import { useEffect, useId, useRef, useState } from 'react'
import type { ArchitectureNode } from '../data/projects'

type MermaidDiagramProps = {
  chart: string
  title: string
  description: string
  fallback: ArchitectureNode[]
}

export default function MermaidDiagram({ chart, title, description, fallback }: MermaidDiagramProps) {
  const reactId = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const renderCount = useRef(0)
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? 'dark')
  const [svg, setSvg] = useState('')
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(document.documentElement.dataset.theme ?? 'dark'))
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let cancelled = false
    const renderDiagram = async () => {
      try {
        setFailed(false)
        const { default: mermaid } = await import('mermaid')
        const styles = getComputedStyle(document.documentElement)
        const color = (name: string, fallbackColor: string) => styles.getPropertyValue(name).trim() || fallbackColor
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          suppressErrorRendering: true,
          theme: 'base',
          fontFamily: 'Inter, Pretendard, sans-serif',
          themeVariables: {
            background: color('--surface', theme === 'dark' ? '#111827' : '#ffffff'),
            primaryColor: color('--surface-2', theme === 'dark' ? '#182235' : '#f5f7fb'),
            primaryTextColor: color('--text', theme === 'dark' ? '#eef1f8' : '#121620'),
            primaryBorderColor: color('--line-strong', '#667085'),
            lineColor: color('--muted-soft', '#7b8497'),
            secondaryColor: color('--surface', theme === 'dark' ? '#111827' : '#ffffff'),
            tertiaryColor: color('--bg', theme === 'dark' ? '#0a0e19' : '#f8fafc'),
            clusterBkg: color('--surface', theme === 'dark' ? '#111827' : '#ffffff'),
            clusterBorder: color('--line', '#d0d5dd'),
            fontSize: '14px',
          },
          flowchart: { htmlLabels: true, curve: 'basis', padding: 14, nodeSpacing: 34, rankSpacing: 42 },
        })
        renderCount.current += 1
        const result = await mermaid.render(`architecture-${reactId}-${renderCount.current}`, chart)
        if (!cancelled) setSvg(result.svg.replace('<svg ', '<svg aria-hidden="true" focusable="false" '))
      } catch (error) {
        console.error(`Failed to render Mermaid architecture: ${title}`, error)
        if (!cancelled) {
          setSvg('')
          setFailed(true)
        }
      }
    }
    void renderDiagram()
    return () => { cancelled = true }
  }, [chart, reactId, theme, title])

  return (
    <div className="mermaid-diagram-shell">
      <div className="mermaid-diagram-head"><h3>{title}</h3><p>{description}</p></div>
      {!failed && !svg && <div className="mermaid-diagram-loading" aria-live="polite">Architecture diagram loading</div>}
      {svg && <div className="mermaid-diagram-canvas" role="img" aria-label={`${title}. ${description}`} dangerouslySetInnerHTML={{ __html: svg }} />}
      {failed && <div className="mermaid-diagram-fallback" role="img" aria-label={`${title} textual architecture`}><strong>TEXT ARCHITECTURE</strong><p>다이어그램을 표시하지 못해 동일한 흐름을 텍스트로 제공합니다.</p><div className="mermaid-fallback-flow">{fallback.map((node, index) => <div className="mermaid-fallback-node" key={`${node.label}-${index}`}><strong>{String(index + 1).padStart(2, '0')} / {node.label}</strong>{node.sub && <span>{node.sub}</span>}</div>)}</div></div>}
    </div>
  )
}
