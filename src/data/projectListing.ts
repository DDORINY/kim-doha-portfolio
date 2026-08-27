import type { Project } from './projects'

export type ProjectListingMeta = {
  what: string
  role: string
  evidence: string[]
  maturity: 'completed' | 'in-progress'
  subtitle?: string
  currentStatus?: string
  currentScope?: string
  nextMilestone?: string
}

export const selectedCaseStudySlugs: Project['slug'][] = ['hawk-ai', 'doha-studio', 'staccato']

export const sideProjectOrder = ['wildfire-pulsemap', 'portfolio-hub', 'mafia-msw', 'tarot'] as const

export const sideProjectListingMeta: Record<string, { proof: string; currentStatus?: string; currentScope?: string; nextMilestone?: string }> = {
  'wildfire-pulsemap': { proof: '공공데이터 수집·키워드 필터링·DB·스케줄러·Leaflet 지도를 하나의 흐름으로 구현' },
  'portfolio-hub': { proof: '데이터 기반 화면 구조와 HashRouter, GitHub Pages, custom domain 배포 구성' },
  tarot: { proof: 'Supabase Auth·PostgreSQL 기록 저장과 Next.js API를 Vercel 배포까지 연결' },
  'mafia-msw': {
    proof: '3인 팀의 게임 콘셉트·세계관·협업 규칙과 로비·매칭 UI를 설계하고 MapleStory Worlds 공모전 출품 완료',
    currentStatus: 'CONTEST SUBMISSION COMPLETE',
    currentScope: '프로젝트 기획 총괄, 협업 규칙 정리, 로비·방 만들기·매칭 UI 설계 및 공모전 출품',
  },
}

export const projectListingMeta: Record<Project['slug'], ProjectListingMeta> = {
  staccato: {
    what: 'YOLO11 기반 CCTV 차량 탐지 결과를 Flask API, MySQL, Socket.IO 관제 화면으로 연결한 AI 관제 MVP',
    role: 'Keras·YOLO·RT-DETR 모델 실험 및 비교, 프론트엔드 MVP, Flask API 일부 개발, BBOX 연동, 4개 VM 통합·QA',
    evidence: ['20,000장 데이터셋', 'mAP50 0.9290 · F1 0.8932', 'AI·Backend·DB·Frontend 4개 VM 통합'],
    maturity: 'completed',
  },
  erp: {
    what: '쇼핑몰과 관리자 ERP를 하나의 데이터 흐름으로 연결하고 AWS Docker Compose HTTPS 환경으로 배포한 개인 풀스택 프로젝트',
    role: '기획, 프론트엔드, 백엔드, DB, AI 운영 UI, Docker·AWS 배포 전체 구현',
    evidence: ['상품·주문·재고·물류·회계·권한 연결', 'Permission 기반 관리자 권한', 'AWS EC2 Docker Compose HTTPS 배포'],
    maturity: 'completed',
  },
  '404rnf': {
    what: 'YOLOv8과 RT-DETR 기반 도로 낙하물 탐지와 실시간 위험 알림을 결합한 안전 주행 플랫폼',
    role: '팀장, Flask 백엔드 구조, DB 모델링, 관리자 기능, AI 모델 비교 분석',
    evidence: ['개인 기여도 약 80% 이상', 'YOLOv8·RT-DETR·YOLOv8-p2 비교', 'Flask-SocketIO 알림·SQLAlchemy DB 구조'],
    maturity: 'completed',
    subtitle: 'AI Road Hazard Detection Platform',
  },
  'hawk-ai': {
    what: '해안 환경 점검 데이터와 게시판을 연결하고 Qwen+LoRA 기반 AI 글쓰기·챗봇·모델 추천을 서비스에 통합한 팀 프로젝트',
    role: '게시판 기능 구현 및 Frontend–Backend–FastAPI LLM 추론 서비스 연동, 구조화 출력·추천 UI 통합',
    evidence: ['Qwen Base + LoRA 게시판 생성', 'FastAPI /api/ai/board·/api/ai/chat', 'Backend AI client와 게시판·챗봇 Frontend 연결'],
    maturity: 'in-progress',
    currentStatus: 'TEAM PROJECT / INTEGRATION',
    currentScope: '게시판 및 LLM AI 서비스 통합, 구조화 응답·서비스 화면 연동 검증',
    nextMilestone: '2026.09.08 팀 프로젝트 마무리 및 통합 검증',
  },
  'doha-studio': {
    what: 'LLM·Audio·Vocal AI Provider를 Music Product Workspace와 Job·Artifact 계약으로 연결하는 multi-repository 개인 AI 제품',
    role: 'DohaMusic Product·Orchestration, DohaLM Model·Runtime, Audio·Vocal Provider architecture 설계 및 개발',
    evidence: ['Workspace·Job·Artifact 제품 흐름', 'Qwen·QLoRA·REST/SSE LLM Runtime', 'Audio·Vocal Provider Architecture'],
    maturity: 'in-progress',
    subtitle: 'AI Music Creation Product Ecosystem',
    currentStatus: 'PERSONAL PROJECT / IN PROGRESS',
    currentScope: 'Product Workspace, Job Orchestration, Model·Runtime과 Provider 경계 개발',
    nextMilestone: 'Provider 통합 계약 검증과 공개 운영 조건 강화',
  },
  dohamusic: {
    what: '가사·음악 생성·Stem·Voice·Mix·Export를 Workspace와 Job Orchestration으로 연결하는 개인 AI 음악 제작 플랫폼',
    role: '제품 아키텍처, FastAPI Backend, Provider 추상화, 비동기 Job/Pipeline, Frontend Studio 및 결과 관리 구현',
    evidence: ['Phase 8 로컬 Studio 완료', 'Music→Stem→Voice→Mixer→WAV Pipeline', 'Provider·Artifact·Workspace 경계 설계'],
    maturity: 'in-progress',
    currentStatus: 'PERSONAL PROJECT / IN PROGRESS',
    currentScope: 'Workspace·Job Orchestration, 음악 생성 파이프라인, Voice Enrollment, K-POP 분석·편집 기능 고도화',
    nextMilestone: 'DohaLM·DohaAudio·DohaVocal Provider 연동 및 공개 운영 조건 강화',
  },
  dohalm: {
    what: 'Foundation Model 연구와 QLoRA Adapter·Inference Runtime·REST/SSE API를 하나의 재사용 LLM Provider로 설계한 개인 프로젝트',
    role: 'Dataset governance, Foundation Model 실험 구조, 학습·평가 파이프라인, manifest·runtime·API 설계 및 구현',
    evidence: ['DohaLM-Tiny 16.9M Decoder-only Transformer', 'Qwen/QLoRA Adapter Runtime', 'FastAPI REST·SSE MVP'],
    maturity: 'in-progress',
    currentStatus: 'PERSONAL PROJECT / IN PROGRESS',
    currentScope: 'Dataset governance와 Foundation Model readiness, reusable model/runtime, 배포 계약 정비',
    nextMilestone: '승인된 모델 artifact 기반 versioned release와 Python SDK',
  },
  dohaaudio: {
    what: '음악 생성·Stem Separation·Audio Analysis·Training·Evaluation을 독립 Provider로 분리하기 위한 Audio AI 프로젝트',
    role: 'Repository boundary, Provider contract, Dataset·Artifact 정책, Training·Evaluation·Runtime 아키텍처 설계',
    evidence: ['DohaMusic과 Provider 책임 분리', 'Dataset/Artifact 외부 저장 정책', 'Music Generation·Analysis Runtime 계약'],
    maturity: 'in-progress',
    currentStatus: 'ARCHITECTURE BOOTSTRAP',
    currentScope: '문서·계약·Provider Architecture 및 데이터/모델 관리 기준 정립',
    nextMilestone: 'Music Generator·Training·Runtime Provider API 구현',
  },
  dohavocal: {
    what: 'Singing Voice·Voice Conversion·Vocal Correction을 권리·동의·Asset lineage와 함께 분리하는 Vocal AI Provider 프로젝트',
    role: 'Provider boundary, Vocal Asset lineage, consent/rights, Job·Artifact 계약과 Runtime 구조 설계',
    evidence: ['원본 불변·파생 AssetVersion', 'Voice Enrollment과 Training Dataset 분리', 'DohaMusic Orchestrator 경유 Provider 계약'],
    maturity: 'in-progress',
    currentStatus: 'ARCHITECTURE BOOTSTRAP',
    currentScope: 'Vocal Provider 문서·계약·권리/동의·Asset lineage 구조 정립',
    nextMilestone: 'Singing Voice·Voice Conversion·Vocal Correction Runtime 구현',
  },
}
