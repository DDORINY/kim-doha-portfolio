// 근거 중심 포트폴리오 섹션에서 공유하는 타입 모음.
// profile.ts와 projects.ts가 함께 사용하므로 순환 참조를 피하기 위해 별도 파일로 분리했습니다.

export type EvidenceMetric = { label: string; value: string; description?: string }

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
