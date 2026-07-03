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
    slug: '404rnf', name: '404RNF', type: 'AI 낙하물 탐지 · Mini Project', period: 'Mini Project',
    tagline: 'AI 기반 낙하물 탐지와 실시간 알림으로 만든 안전 주행 통합 플랫폼',
    summary: '도로 위 낙하물을 AI로 탐지하고 위험도를 판단해 실시간 알림을 제공하며, 지도 기반 위험 시각화와 경로 기반 위험 분석까지 연결한 안전 주행 서비스입니다. YOLOv8, YOLOv8-p2, RT-DETR 세 모델을 비교분석하고 LLM으로 신고 작성을 보조하는 AI 파이프라인을 구축했습니다.',
    background: '도로 위 낙하물을 빠르게 인지하고, 지도와 경로 기반으로 위험을 사전에 알릴 수 있는 안전 주행 플랫폼을 팀 프로젝트로 구현하기 위해 시작했습니다.',
    role: ['DB 테이블 설계 및 전체 데이터 구조 정의', 'Flask 앱 초기화와 공통 프레임워크 구성', '회원 CRUD 및 관리자 권한 신청 구조 설계', '관리자 대시보드(통계, 신고 리스트·상태 변경) 구현', 'AI 객체 탐지 모델 개발 및 학습', 'YOLOv8 · YOLOv8-p2 · RT-DETR 3개 모델 비교분석 기능 설계', '프로젝트 전체 구조 설계 및 팀 통합 총괄'],
    features: ['YOLO · RT-DETR 기반 낙하물 객체 탐지', '위험도(주의·위험·긴급) 자동 분류', 'Flask-SocketIO 실시간 위험 알림', '지도 기반 위험 위치 시각화', '경로(출발지·도착지) 기반 위험 분석', '신고 등록 및 AI 분석 연계', '관리자 대시보드 및 신고 상태 처리', 'LLM 기반 신고 제목·내용 자동 생성', '동일 데이터 기준 3개 AI 모델 비교분석'],
    techStack: ['Flask', 'SQLAlchemy', 'Flask-Migrate', 'Flask-SocketIO', 'YOLOv8', 'RT-DETR', 'LLM', 'MySQL', 'Google Maps API', 'Kakao Navigation API'],
    systemFlow: [
      { label: '사용자 업로드', description: '이미지·영상 업로드' },
      { label: 'AI 객체 탐지', description: 'YOLOv8 · RT-DETR로 낙하물 탐지' },
      { label: '위험도 분석', description: '주의·위험·긴급 단계로 분류' },
      { label: 'Alert 생성', description: '위험·긴급 단계에서 알림 생성' },
      { label: '실시간 전송', description: 'WebSocket으로 관리자 화면에 전송' },
      { label: '지도 반영', description: '탐지 현황 및 경로 위험 분석에 반영' },
    ],
    troubleshooting: [
      { title: '3개 AI 모델 중 최적 모델 선정', situation: '낙하물 탐지에 YOLOv8, YOLOv8-p2, RT-DETR 중 어떤 모델이 적합한지 판단할 기준이 없었습니다.', solution: '동일한 데이터셋으로 세 모델을 각각 학습·추론하고 결과를 나란히 비교할 수 있는 AI 분석비교 기능을 관리자 페이지에 구현했습니다.', result: '모델별 탐지 결과를 객관적으로 비교하고 상황에 맞는 모델을 선택할 근거를 마련했습니다.' },
      { title: '실시간 알림의 신뢰성 확보', situation: '탐지된 모든 객체를 알림으로 보내면 관리자가 정작 중요한 위험 신호를 놓칠 위험이 있었습니다.', solution: 'Flask-SocketIO 기반으로 위험·긴급 단계로 분류된 이벤트만 필터링해 관리자 화면에 실시간 전송하도록 구성했습니다.', result: '불필요한 알림을 줄이고 실제 대응이 필요한 상황에 집중할 수 있게 되었습니다.' },
      { title: '관리자 권한 구조 설계', situation: '일반 회원과 관리자 권한을 구분하고 신청·승인하는 흐름이 없어 접근 통제가 불명확했습니다.', solution: '회원 권한 신청 구조를 설계하고, 신청 리스트 확인과 상태 변경이 가능한 관리자 페이지를 구현했습니다.', result: '권한별 접근을 명확히 통제하고 관리자 승인 프로세스를 갖출 수 있었습니다.' },
    ],
    screenshots: [{ src: '/images/404rnf-01.png', alt: '404RNF 메인 화면', caption: '메인 화면 · 실시간 낙하물 탐지 소개' }],
    documents: [{ label: '시연 영상', url: 'https://youtu.be/Iet2QiSkU5s' }, { label: '발표자료', url: '/docs/404rnf-presentation.pdf' }, { label: '코드리뷰', url: '/docs/404rnf-code-review.pdf' }],
    deploy: { label: '배포 사이트', url: 'https://404-rnf.ddoriny.com/' }, github: { label: 'GitHub 저장소', url: 'https://github.com/lms-mini-project/AI-accident-detection' },
    retrospective: 'AI 탐지부터 실시간 알림, 지도 기반 위험 분석까지 이어지는 전체 파이프라인을 팀과 함께 설계하고 구현했습니다. 모델 성능뿐 아니라 실시간성, 권한 관리, 데이터 흐름을 함께 고려해야 실제로 동작하는 안전 서비스가 된다는 것을 배웠습니다.', accent: '#ffbe70',
  },
]

export const getProject = (slug?: string) => projects.find((project) => project.slug === slug)
