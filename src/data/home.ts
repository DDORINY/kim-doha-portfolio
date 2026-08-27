import type { Project } from './projects'

export const heroTechKeywords = [
  'LLM',
  'QWEN',
  'LoRA / QLoRA',
  'FastAPI',
  'PYTHON',
  'MYSQL',
  'YOLO',
  'DOCKER',
]

export const coreCompetencies = [
  {
    title: 'LLM Engineering',
    description: 'Qwen 기반 Fine-Tuning, LoRA/QLoRA, Dataset Pipeline, Structured Output, Inference Runtime을 다룹니다.',
    evidence: ['HAWK-AI', 'DOHA STUDIO / DohaLM'],
    keywords: ['Qwen', 'LoRA / QLoRA', 'Transformers', 'PEFT', 'Prompt', 'Structured Output'],
  },
  {
    title: 'AI Service Integration',
    description: 'AI 모델의 추론 결과를 Backend API, Database, Frontend 기능으로 연결합니다.',
    evidence: ['HAWK-AI', 'STACCATO', 'DOHA STUDIO'],
    keywords: ['FastAPI', 'Flask', 'REST API', 'AI Serving', 'Service Integration'],
  },
  {
    title: 'Backend & Data',
    description: 'Python Backend에서 서비스 API, 비즈니스 로직, 인증과 데이터를 연결합니다.',
    evidence: ['HAWK-AI', 'DOHA STUDIO', 'CommerceOps ERP'],
    keywords: ['Python', 'FastAPI', 'Flask', 'MySQL', 'SQLAlchemy'],
  },
  {
    title: 'Computer Vision',
    description: 'YOLO와 RT-DETR 기반 객체탐지 모델 학습과 영상 분석, 서비스 연동 경험이 있습니다.',
    evidence: ['STACCATO', '404 R·N·F AI'],
    keywords: ['YOLO', 'RT-DETR', 'OpenCV', 'Keras'],
  },
]

export const featuredProjectSlugs: Project['slug'][] = ['hawk-ai', 'doha-studio', 'staccato']

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
    description: '5년 8개월간 마케팅·운영·상품 데이터와 실제 업무 프로세스를 경험했습니다.',
  },
  {
    step: '02',
    title: 'Computer Science & AI',
    description: '컴퓨터공학과 AI·데이터 교육을 통해 Python, 데이터베이스, 모델과 웹 개발 기반을 쌓았습니다.',
  },
  {
    step: '03',
    title: 'AI Service Development',
    description: 'LLM·Backend·Computer Vision을 연결하는 AI 서비스를 개발하고 있습니다.',
  },
]
