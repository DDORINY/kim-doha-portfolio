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

export const selectedCaseStudySlugs: Project['slug'][] = ['staccato', 'erp', '404rnf']

export const sideProjectOrder = ['wildfire-pulsemap', 'portfolio-hub', 'mafia-msw', 'tarot'] as const

export const sideProjectListingMeta: Record<string, { proof: string; currentStatus?: string; currentScope?: string; nextMilestone?: string }> = {
  'wildfire-pulsemap': { proof: '공공데이터 수집·키워드 필터링·DB·스케줄러·Leaflet 지도를 하나의 흐름으로 구현' },
  'portfolio-hub': { proof: '데이터 기반 화면 구조와 HashRouter, GitHub Pages, custom domain 배포 구성' },
  tarot: { proof: 'Supabase Auth·PostgreSQL 기록 저장과 Next.js API를 Vercel 배포까지 연결' },
  'mafia-msw': {
    proof: '3인 팀의 게임 콘셉트·세계관·협업 규칙과 로비·매칭 UI 설계 진행',
    currentStatus: 'UI DESIGN / PLANNING',
    currentScope: '프로젝트 기획 총괄, 협업 규칙 정리, 로비·방 만들기·매칭 UI 설계',
    nextMilestone: '경찰·의사·마피아 역할 기반 낮·밤 진행 시스템 설계',
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
  roadbogo: {
    what: 'AI 위험 후보를 관제자의 확인과 현장 출동 업무까지 연결하도록 설계 중인 도로 안전관제 시스템',
    role: 'MySQL 데이터 구조, Primary–Replica, Event Outbox, 트랜잭션 정책, Raspberry Pi 연동 스키마 설계',
    evidence: ['MVP 37개 테이블 상세 설계', 'Event Outbox·Primary–Replica 구조', 'GPS·Heartbeat·출동 명령 스키마'],
    maturity: 'in-progress',
    currentStatus: 'SYSTEM DESIGN',
    currentScope: 'DB·인프라 상세 설계와 라즈베리파이 출동 단말 데이터 구조 정리',
    nextMilestone: '설계 기준을 바탕으로 DB·인프라 연동 구현 및 통합 검증',
  },
}
