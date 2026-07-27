import type { Project } from './projects'

export const heroTechKeywords = [
  'Python',
  'FastAPI',
  'Flask',
  'Computer Vision',
  'LLM',
  'MySQL',
  'Docker',
  'Linux',
]

export const coreCompetencies = [
  {
    title: 'AI Service Integration',
    description: 'AI 모델과 외부 AI API를 웹 서비스 기능으로 연결하고 사용자가 이용할 수 있는 형태로 구현합니다.',
  },
  {
    title: 'Computer Vision',
    description: 'YOLO, RT-DETR, OpenCV를 활용한 객체탐지 모델 학습, 성능 비교 및 실시간 영상 분석 경험이 있습니다.',
  },
  {
    title: 'Backend Development',
    description: 'FastAPI와 Flask 기반 REST API, 인증, 데이터 처리, AI 추론 서버 연동 기능을 구현합니다.',
  },
  {
    title: 'Deployment & Infrastructure',
    description: 'Docker, Linux, Nginx 환경에서 서비스를 구성하고 프론트엔드, 백엔드, AI, 데이터베이스를 연결합니다.',
  },
]

export const featuredProjectSlugs: Project['slug'][] = ['staccato', 'erp', '404rnf']

export const aiExpertiseAreas = [
  {
    title: 'COMPUTER VISION',
    description: '객체탐지 데이터셋 구성부터 모델 학습, 성능 평가, 추론 API 및 관제 화면 연동까지 수행했습니다.',
    keywords: ['YOLOv8', 'YOLO11', 'RT-DETR', 'OpenCV', 'Roboflow', 'Keras'],
    linkLabel: 'EXPLORE COMPUTER VISION',
    path: '/computer-vision',
  },
  {
    title: 'LLM & AI AGENT',
    description: 'LLM API를 활용한 문서 분석, 정보 추출, 업무 자동화 및 AI 에이전트 서비스를 개발합니다.',
    keywords: ['LLM API', 'Prompt Engineering', 'Structured Output', 'AI Agent', 'Document Analysis', 'Automation'],
    linkLabel: 'EXPLORE LLM & AI',
    path: '/llm',
  },
]

export const careerJourney = [
  {
    step: '01',
    title: 'Business & Operations',
    description: '온라인 마케팅과 운영 업무를 5년 8개월간 수행하며 광고 운영, 상품 데이터 관리, 쇼핑몰 구축과 업무 프로세스를 경험했습니다.',
  },
  {
    step: '02',
    title: 'Computer Science & AI',
    description: '컴퓨터공학 전공 과정과 AI·데이터 분석 교육을 통해 Python, 데이터베이스, 머신러닝, 딥러닝과 웹 개발을 학습했습니다.',
  },
  {
    step: '03',
    title: 'AI Service Development',
    description: 'Computer Vision, Python API, 데이터베이스와 사용자 화면을 연결하며 AI 기능을 실제 서비스로 구현하는 프로젝트를 수행하고 있습니다.',
  },
]
