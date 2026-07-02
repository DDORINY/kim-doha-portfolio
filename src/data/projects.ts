export type ProjectLink = {
  label: string
  url?: string
  placeholder?: boolean
}

export type Project = {
  slug: 'staccato' | 'erp' | '404rnf'
  name: string
  type: string
  period: string
  tagline: string
  summary: string
  background: string
  role: string[]
  features: string[]
  techStack: string[]
  troubleshooting: { title: string; situation: string; solution: string; result: string }[]
  screenshots: { src: string; alt: string; caption: string }[]
  documents: ProjectLink[]
  deploy: ProjectLink
  github: ProjectLink
  retrospective: string
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'staccato',
    name: 'STACCATO',
    type: '파이널 팀 프로젝트',
    period: '기간 입력 예정',
    tagline: '사용자의 일상을 차곡차곡 기록하는 서비스',
    summary: '팀 프로젝트로 기획부터 UI 구현, 협업까지 경험한 대표 프로젝트입니다. 실제 세부 내용과 수치는 자료 확정 후 교체할 수 있습니다.',
    background: '흩어지는 일상의 순간을 간편하게 남기고 다시 발견할 수 있는 경험을 만들기 위해 시작했습니다.',
    role: ['프론트엔드 화면 설계 및 구현', '재사용 가능한 UI 컴포넌트 구성', 'API 연동 및 상태 처리', '팀 협업과 이슈 관리'],
    features: ['기록 생성 및 조회', '사용자별 콘텐츠 관리', '검색과 필터', '반응형 주요 화면'],
    techStack: ['React', 'TypeScript', 'Vite', 'CSS', 'REST API'],
    troubleshooting: [{
      title: '비동기 화면의 상태 일관성',
      situation: '데이터 요청 시 로딩·성공·오류 상태가 화면마다 다르게 처리되는 문제가 있었습니다.',
      solution: '요청 상태와 UI 표현 규칙을 정리하고 공통 컴포넌트로 분리했습니다.',
      result: '중복 코드를 줄이고 사용자가 현재 상태를 명확히 이해할 수 있도록 개선했습니다.',
    }],
    screenshots: [{ src: '/images/staccato-placeholder.svg', alt: 'STACCATO 화면 placeholder', caption: '대표 화면 · 실제 캡처로 교체 예정' }],
    documents: [{ label: '프로젝트 발표 자료', placeholder: true }, { label: '기능 명세서', placeholder: true }],
    deploy: { label: '배포 사이트', placeholder: true },
    github: { label: 'GitHub 저장소', placeholder: true },
    retrospective: '팀 단위로 하나의 제품을 완성하며 명확한 인터페이스 정의와 작은 단위의 공유가 개발 속도와 품질 모두에 중요하다는 점을 배웠습니다.',
    accent: '#6c63ff',
  },
  {
    slug: 'erp',
    name: 'CommerceOps ERP',
    type: 'ERP 프로그램',
    period: '기간 입력 예정',
    tagline: '커머스 운영 업무를 한 화면에서 관리하는 ERP',
    summary: '상품, 주문, 재고 등 커머스 운영 데이터를 효율적으로 확인하고 관리하기 위한 관리자용 프로그램입니다.',
    background: '반복적인 운영 업무와 분산된 데이터를 일관된 인터페이스로 통합해 실무자의 작업 효율을 높이는 것을 목표로 했습니다.',
    role: ['관리자 대시보드 UI 구현', '데이터 테이블 및 필터 설계', '폼 유효성 검사와 사용자 피드백 처리', '공통 레이아웃 및 컴포넌트 개발'],
    features: ['운영 현황 대시보드', '상품 및 재고 관리', '주문 상태 관리', '검색·필터·페이지네이션'],
    techStack: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'REST API'],
    troubleshooting: [{
      title: '복잡한 테이블의 사용성 개선',
      situation: '정보가 많은 테이블에서 중요한 상태를 빠르게 파악하기 어려웠습니다.',
      solution: '정보 우선순위를 재정의하고 상태 배지, 고정 액션, 필터 구조를 적용했습니다.',
      result: '핵심 데이터 탐색 단계가 단순해지고 업무 흐름이 선명해졌습니다.',
    }],
    screenshots: [{ src: '/images/erp-placeholder.svg', alt: 'CommerceOps ERP 화면 placeholder', caption: '대시보드 화면 · 실제 캡처로 교체 예정' }],
    documents: [{ label: '화면 설계서', placeholder: true }, { label: '프로젝트 문서', placeholder: true }],
    deploy: { label: '데모 사이트', placeholder: true },
    github: { label: 'GitHub 저장소', placeholder: true },
    retrospective: '관리자 도구는 시각적 장식보다 정보 구조와 피드백 속도가 중요했습니다. 사용자의 다음 행동을 예측하는 UI 설계를 연습할 수 있었습니다.',
    accent: '#25c2a0',
  },
  {
    slug: '404rnf',
    name: '404rnf',
    type: '미니프로젝트',
    period: '기간 입력 예정',
    tagline: '짧고 선명한 아이디어를 빠르게 구현한 미니프로젝트',
    summary: '제한된 기간 안에 핵심 사용자 흐름을 정의하고 완성도 있는 프론트엔드 결과물을 만든 프로젝트입니다.',
    background: '작은 범위의 아이디어를 빠르게 검증하며 기획, 구현, 배포의 전체 사이클을 경험하기 위해 진행했습니다.',
    role: ['핵심 사용자 흐름 기획', '페이지 UI와 인터랙션 구현', '반응형 레이아웃 적용', '정적 배포 환경 구성'],
    features: ['핵심 콘텐츠 탐색', '상세 정보 확인', '사용자 액션 피드백', '모바일 최적화'],
    techStack: ['React', 'JavaScript', 'Vite', 'CSS', 'GitHub Pages'],
    troubleshooting: [{
      title: '제한된 일정에서의 범위 관리',
      situation: '짧은 개발 기간에 부가 기능까지 구현하면 핵심 흐름의 완성도가 낮아질 위험이 있었습니다.',
      solution: 'Must/Should/Could 기준으로 기능을 분류하고 핵심 흐름을 먼저 완성했습니다.',
      result: '일정 안에 배포 가능한 결과물을 확보하고 이후 개선 지점도 명확히 남겼습니다.',
    }],
    screenshots: [{ src: '/images/404rnf-placeholder.svg', alt: '404rnf 화면 placeholder', caption: '프로젝트 화면 · 실제 캡처로 교체 예정' }],
    documents: [{ label: '프로젝트 회고', placeholder: true }],
    deploy: { label: '배포 사이트', placeholder: true },
    github: { label: 'GitHub 저장소', placeholder: true },
    retrospective: '완성도를 높이기 위해서는 기능을 많이 넣는 것보다 가장 중요한 사용자 경험을 먼저 끝까지 연결하는 것이 중요하다는 점을 체감했습니다.',
    accent: '#ffb45c',
  },
]

export const getProject = (slug?: string) => projects.find((project) => project.slug === slug)
