export type ProjectLink = { label: string; url?: string; placeholder?: boolean }

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
  systemFlow: { label: string; description: string }[]
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
    slug: 'staccato', name: 'STACCATO', type: 'AI 관제 시스템 · Final Project', period: 'Final Project',
    tagline: 'AI 기반 고속도로 갓길 정차 탐지 관제 시스템',
    summary: 'CCTV 영상에서 차량을 탐지하고 ROI 안의 정차 여부를 판단해 관리자가 이벤트를 확인할 수 있도록 연결한 AI 관제 서비스입니다. AI 추론 결과를 웹, API, 데이터베이스, VM 인프라와 이어 실제 운영 가능한 흐름으로 정리했습니다.',
    background: '고속도로 갓길 정차 차량을 빠르게 인지하고 대응할 수 있도록, 차량 탐지부터 관리자 확인까지 일관된 관제 흐름을 만들기 위해 시작했습니다.',
    role: ['프론트엔드 MVP 기능과 화면 흐름 정리', 'Flask API 연동 상태 및 응답 흐름 점검', 'AI VM / Flask VM / Frontend VM / DB VM 구조 문서화', '보안로그 미리보기 및 다운로드 흐름 점검', '운영 점검 체크리스트 작성', '결과보고서와 발표자료 문서화'],
    features: ['CCTV 영상 기반 차량 객체 탐지', 'ROI 기반 갓길 진입 및 정차 판단', '탐지 이벤트 관리자 대시보드', '보안로그 미리보기와 다운로드', '이벤트 데이터 조회', '서비스별 VM 분리 운영'],
    techStack: ['Next.js', 'Flask', 'FastAPI', 'MySQL', 'YOLO', 'Computer Vision', 'VM Infra'],
    systemFlow: [
      { label: 'CCTV Stream', description: '도로 영상을 추론 입력으로 전달' },
      { label: 'AI VM', description: 'YOLO 탐지와 ROI 정차 판단' },
      { label: 'Flask VM', description: '추론 결과를 API로 연결' },
      { label: 'DB VM', description: '탐지·운영 데이터 저장' },
      { label: 'Frontend VM', description: '관리자 관제 화면 제공' },
    ],
    troubleshooting: [
      { title: '분리된 서비스의 연동 흐름 가시화', situation: 'AI 추론, API, 프론트엔드, DB가 서로 다른 VM에서 동작해 장애 지점을 파악하기 어려웠습니다.', solution: '서비스를 역할별 VM으로 구분하고 요청·응답과 데이터 저장 흐름을 다이어그램 및 체크리스트로 정리했습니다.', result: '시연 전 검증 순서와 문제 추적 경로가 명확해졌습니다.' },
      { title: '보안로그 확인 경험 개선', situation: '운영자가 내용을 확인하려면 로그 파일을 먼저 내려받아야 했습니다.', solution: '웹에서 로그를 미리 본 뒤 필요한 경우 다운로드하는 흐름과 예외 상태를 점검했습니다.', result: '불필요한 다운로드를 줄이고 로그 확인 동선을 단순화했습니다.' },
    ],
    screenshots: [{ src: '/images/staccato-placeholder.svg', alt: 'STACCATO 관리자 대시보드 placeholder', caption: '관리자 관제 화면 · 실제 캡처로 교체 예정' }],
    documents: [{ label: '결과보고서', placeholder: true }, { label: '발표자료', placeholder: true }, { label: '운영 점검 체크리스트', placeholder: true }],
    deploy: { label: 'STACCATO Live Demo', url: 'https://mbc-sw.iptime.org:3221/' },
    github: { label: 'GitHub 저장소', placeholder: true },
    retrospective: '모델 정확도만으로 AI 서비스가 완성되지는 않습니다. 추론 결과가 API와 DB를 거쳐 사용자의 판단으로 이어지고, 운영자가 문제를 점검할 수 있어야 실제로 사용할 수 있는 서비스가 된다는 점을 배웠습니다.', accent: '#70e1f5',
  },
  {
    slug: 'erp', name: 'CommerceOps ERP', type: 'Full-stack · ERP Program', period: 'Team Project',
    tagline: '쇼핑몰 운영 데이터를 하나의 흐름으로 연결한 실무형 ERP',
    summary: '상품 등록부터 주문, 결제, 재고, 관리자 확인까지 쇼핑몰 운영 데이터 흐름을 구현했습니다. AI 기능이 의존할 백엔드 API, 데이터베이스, 인증, 관리자 시스템의 기반 역량을 보여주는 프로젝트입니다.',
    background: '상품, 주문, 결제, 재고를 분리된 기능이 아닌 하나의 서비스 흐름으로 이해하고 안정적인 관리자 경험을 구현하기 위해 진행했습니다.',
    role: ['상품·카테고리 관리 화면 구현', '장바구니와 주문·결제 흐름 구현', '재고 데이터 상태 처리', '관리자 대시보드 UI 구성', 'Spring Boot API 연동', 'JWT 인증 흐름 적용'],
    features: ['상품 및 카테고리 관리', '장바구니와 주문 생성', '결제 상태 관리', '재고 수량 관리', '관리자 대시보드', 'JWT 사용자 인증'],
    techStack: ['Next.js', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
    systemFlow: [{ label: 'Customer / Admin', description: '사용자와 관리자의 요청' }, { label: 'Next.js', description: '스토어·관리자 UI 제공' }, { label: 'Spring Boot API', description: '도메인 로직과 인증 처리' }, { label: 'MySQL', description: '운영 데이터 저장' }],
    troubleshooting: [{ title: '주문과 재고 상태의 일관성', situation: '주문·결제·재고가 연속 변경되어 상태 누락 시 화면과 데이터가 달라질 수 있었습니다.', solution: '도메인별 상태 변화와 API 요청 순서를 명시하고 요청 중·성공·실패 UI를 분리했습니다.', result: '데이터 흐름을 추적하기 쉬워지고 현재 상태를 명확히 전달할 수 있었습니다.' }],
    screenshots: [{ src: '/images/erp-placeholder.svg', alt: 'CommerceOps ERP 대시보드 placeholder', caption: 'ERP 관리자 화면 · 실제 캡처로 교체 예정' }],
    documents: [{ label: '기능 명세서', placeholder: true }, { label: 'ERD 및 API 문서', placeholder: true }],
    deploy: { label: '배포 사이트', placeholder: true }, github: { label: 'GitHub 저장소', placeholder: true },
    retrospective: 'AI 서비스를 안정적으로 제공하려면 모델뿐 아니라 데이터, API 계약, 인증, 운영 화면이 필요합니다. 복잡한 비즈니스 데이터를 서비스로 연결하는 기본기를 다졌습니다.', accent: '#8b80ff',
  },
  {
    slug: '404rnf', name: '404rnf', type: 'Web Service · Mini Project', period: 'Mini Project',
    tagline: '짧은 기간 안에 기획부터 배포까지 완주한 팀 웹 서비스',
    summary: '팀 협업을 바탕으로 기획, 기능 구현, Git 협업, 배포의 전체 사이클을 경험했습니다. 기본 웹 서비스 구현 능력과 빠르게 합의하고 결과물을 만드는 과정을 보여줍니다.',
    background: '제한된 일정 안에 핵심 사용자 흐름을 정의하고 팀원들과 코드를 합쳐 실제 동작하는 웹 서비스를 배포하는 것을 목표로 했습니다.',
    role: ['핵심 사용자 흐름 기획 참여', '담당 화면과 기능 구현', 'Git 브랜치 기반 협업', '통합 테스트 및 배포 경험'],
    features: ['핵심 콘텐츠 탐색', '상세 정보 확인', '사용자 액션 피드백', '반응형 웹 화면'],
    techStack: ['Web Frontend', 'REST API', 'Git', 'GitHub', 'Team Collaboration'],
    systemFlow: [{ label: 'User', description: '콘텐츠 탐색과 기능 사용' }, { label: 'Frontend', description: '화면과 인터랙션 처리' }, { label: 'API', description: '서비스 데이터 연결' }, { label: 'Deploy', description: '통합 결과물 배포' }],
    troubleshooting: [{ title: '짧은 일정에서의 협업 범위 관리', situation: '모든 아이디어를 구현하면 핵심 흐름을 완성하지 못할 위험이 있었습니다.', solution: '필수 기능의 우선순위와 담당 브랜치를 나누고 통합 시점을 관리했습니다.', result: '정해진 기간 안에 핵심 기능을 연결하고 배포까지 완료했습니다.' }],
    screenshots: [{ src: '/images/404rnf-placeholder.svg', alt: '404rnf 프로젝트 화면 placeholder', caption: '미니프로젝트 화면 · 실제 캡처로 교체 예정' }],
    documents: [{ label: '프로젝트 회고', placeholder: true }], deploy: { label: '배포 사이트', placeholder: true }, github: { label: 'GitHub 저장소', placeholder: true },
    retrospective: '작은 프로젝트일수록 빠른 합의와 명확한 역할 분담이 완성도를 좌우했습니다. Git 협업과 배포 흐름을 짧은 주기로 경험했습니다.', accent: '#ffbe70',
  },
]

export const getProject = (slug?: string) => projects.find((project) => project.slug === slug)
