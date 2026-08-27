import type { Project } from './projects'

export const heroTechKeywords = [
  'Python',
  'FastAPI',
  'LLM',
  'Qwen / LoRA',
  'AI Service',
  'MySQL',
  'Docker',
  'Linux',
]

export const coreCompetencies = [
  {
    title: 'LLM Service Integration',
    description: 'Qwen·LoRA 기반 LLM 추론을 FastAPI, Backend API, 서비스 UI까지 연결하고 구조화 출력과 fallback 흐름을 구현합니다.',
  },
  {
    title: 'LLM Training Pipeline',
    description: 'Dataset governance부터 학습·평가, Adapter·Model Manifest, REST/SSE Runtime까지 LLM 생명주기를 직접 설계하고 있습니다.',
  },
  {
    title: 'AI Service Backend',
    description: 'FastAPI와 Flask 기반 REST API, Job Orchestration, 데이터 처리, AI Provider 연동 기능을 구현합니다.',
  },
  {
    title: 'Computer Vision & Infrastructure',
    description: 'YOLO·RT-DETR 객체탐지와 Docker·Linux·Nginx 환경의 AI 서비스 통합 경험이 있습니다.',
  },
]

export const featuredProjectSlugs: Project['slug'][] = ['hawk-ai', 'dohalm', 'dohamusic', 'staccato']

export const aiExpertiseAreas = [
  {
    title: 'COMPUTER VISION',
    description: '객체탐지 데이터셋 구성부터 모델 학습, 성능 평가, 추론 API 및 관제 화면 연동까지 수행했습니다.',
    keywords: ['YOLOv8', 'YOLO11', 'RT-DETR', 'OpenCV', 'Roboflow', 'Keras'],
    linkLabel: 'EXPLORE COMPUTER VISION',
    path: '/computer-vision',
  },
  {
    title: 'LLM & AI SERVICE',
    description: 'Qwen·LoRA 학습과 Dataset Governance, FastAPI Runtime, LangChain·LangGraph 기반 서비스 연동을 구현하고 있습니다.',
    keywords: ['Qwen', 'LoRA / QLoRA', 'FastAPI', 'LangChain', 'LangGraph', 'Structured Output'],
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
    description: 'Computer Vision에서 LLM까지 모델·학습·추론 API·Backend·사용자 화면을 연결하는 AI 서비스를 개발하고 있습니다.',
  },
]
