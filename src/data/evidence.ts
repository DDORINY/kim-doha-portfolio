// 근거 중심 포트폴리오 섹션에서 공유하는 타입 모음.
// profile.ts와 projects.ts가 함께 사용하므로 순환 참조를 피하기 위해 별도 파일로 분리했습니다.

export type EvidenceMetric = { label: string; value: string; description?: string }

/** 가로 막대 그래프로 표시하는 성능 지표. value는 0~1 비율(막대 너비 계산용), display는 화면에 보이는 텍스트 값 */
export type PerformanceMetric = { label: string; value: number; display: string; description?: string }

export type SupportingEvidenceItem = { label: string; value: string }

export type EvidenceImage = { src: string; alt: string; caption: string }

export type EvidenceSection = { title: string; description: string; metrics?: EvidenceMetric[]; images?: EvidenceImage[]; items?: string[] }

export type ModelExperimentRow = {
  model: string
  precision: string
  recall: string
  f1: string
  map50: string
  map5095: string
  /** 특징 (PPT 성능표의 비고 컬럼) */
  note: string
}
