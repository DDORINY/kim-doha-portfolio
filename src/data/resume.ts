import { profile } from './profile'
import { projects } from './projects'

export const representativeResumeProjects = ['hawk-ai', 'doha-studio', 'staccato'].map((slug) => {
  const project = projects.find((item) => item.slug === slug)
  if (!project) throw new Error(`Resume project not found: ${slug}`)
  return project
})

export const resumeMetrics = [
  { value: profile.careerSummary[0].value, label: 'TOTAL EXPERIENCE', description: '온라인 마케팅·운영 실무 경력' },
  { value: 'AI SERVICE', label: 'SERVICE INTEGRATION', description: '모델·API·DB·웹 화면 연결 경험' },
  { value: 'COMPUTER VISION', label: 'MODEL TO SERVICE', description: 'YOLO 학습·평가·서비스 연동' },
] as const

export const resumeProfileSummary = [
  profile.intro,
  `지원 직무: ${profile.positioning.statement}`,
  profile.careerSummary.find((item) => item.label === '핵심 강점')!.value,
] as const

export const resumeCompetencies = [
  {
    id: 'model',
    code: '01',
    title: 'AI Model Integration',
    icon: 'OpenCV',
    description: '객체탐지 결과의 confidence·bounding box·metadata를 API와 서비스 화면으로 연결합니다.',
    tech: ['YOLO', 'OpenCV', 'Keras', 'Python'],
  },
  {
    id: 'backend',
    code: '02',
    title: 'Python Backend',
    icon: 'Python',
    description: 'Flask와 FastAPI로 AI 분석 요청, 서비스 API와 실시간 데이터 흐름을 구현합니다.',
    tech: ['Python', 'Flask', 'FastAPI', 'REST API'],
  },
  {
    id: 'data',
    code: '03',
    title: 'Data & Database',
    icon: 'MySQL',
    description: '탐지·신고·상품·주문·재고 데이터를 MySQL 기반 서비스 구조로 연결합니다.',
    tech: ['MySQL', 'SQLAlchemy', 'Pandas', 'NumPy'],
  },
  {
    id: 'infra',
    code: '04',
    title: 'Deployment & Infrastructure',
    icon: 'Linux',
    description: 'Docker·Linux·Nginx 환경을 구성하고 배포 후 API와 DB 연결 상태를 점검합니다.',
    tech: ['Docker', 'Linux', 'Nginx', 'AWS EC2'],
  },
] as const

const sourceSkills = new Set([
  ...Object.values(profile.skills).flat(),
  ...projects.flatMap((project) => project.techStack),
])

function selectSkills(requested: readonly string[]) {
  return requested.map((skill) => {
    const exact = [...sourceSkills].find((source) => source.toLowerCase() === skill.toLowerCase())
    const related = [...sourceSkills].find((source) => source.toLowerCase().startsWith(skill.toLowerCase()))
    return exact ?? related ?? skill
  })
}

export const resumeSkillGroups = [
  { label: 'LLM / AI ENGINEERING', description: 'LLM 학습·Adapter·추론 Runtime과 구조화 응답 파이프라인', skills: ['Qwen', 'LoRA / QLoRA', 'Transformers', 'PEFT', 'PyTorch', 'LangChain', 'LangGraph', 'Structured Output'], featured: true },
  { label: 'AI SERVICE / BACKEND', description: 'AI 추론 요청과 응답 검증, 도메인 로직과 서비스 API 구현', skills: selectSkills(['Python', 'FastAPI', 'Flask', 'REST API', 'Pydantic', 'JWT', 'Socket.IO', 'SQLAlchemy']), featured: false },
  { label: 'COMPUTER VISION', description: '객체탐지 모델 학습·평가와 영상·BBOX 후처리', skills: ['YOLO11', 'YOLOv8', 'RT-DETR', 'OpenCV', 'ByteTrack', 'Keras'], featured: false },
  { label: 'DATA', description: '서비스 데이터와 AI Dataset·Artifact 관리', skills: ['MySQL', 'SQLAlchemy', 'Pandas', 'NumPy', 'JSONL', 'Dataset Validation'], featured: false },
  { label: 'FRONTEND / INFRA', description: 'AI 사용자 기능 구현과 Linux 기반 서비스 배포', skills: selectSkills(['React', 'Next.js', 'TypeScript', 'Docker', 'Linux', 'Nginx', 'AWS EC2']), featured: false },
] as const

export const serviceExperience = [
  {
    code: '01', title: 'Model / Adapter', scope: 'HAWK-AI · DOHA STUDIO / DOHALM',
    environment: ['Qwen', 'LoRA / QLoRA', 'Transformers', 'PEFT'], contribution: 'HAWK-AI의 게시글 생성용 Qwen LoRA와 DohaLM의 QLoRA 학습·평가 및 Adapter artifact 흐름을 구현했습니다.',
  },
  {
    code: '02', title: 'AI Serving', scope: 'HAWK-AI · DOHA STUDIO / DOHALM',
    environment: ['FastAPI Runtime', 'REST / SSE', 'Structured Output'], contribution: 'FastAPI 추론 Runtime, Pydantic 구조화 응답과 DohaLM REST·SSE API를 구성하고 계약 테스트로 검증했습니다.',
  },
  {
    code: '03', title: 'Backend Integration', scope: 'HAWK-AI',
    environment: ['AI Client', 'Validation', 'Timeout Handling'], contribution: 'Backend AI Client에서 추론 요청, timeout·응답 검증과 허용된 사용자 action을 도메인 서비스에 연결했습니다.',
  },
  {
    code: '04', title: 'Data / Artifact', scope: 'DOHA STUDIO / DOHALM · SERVICE DATA',
    environment: ['JSONL', 'Dataset Validation', 'Manifest', 'MySQL'], contribution: 'Dataset 품질 검증과 processing·evaluation manifest, Adapter lifecycle을 관리하고 서비스 데이터를 MySQL에 연결했습니다.',
  },
  {
    code: '05', title: 'Product Experience', scope: 'HAWK-AI · STACCATO',
    environment: ['Board / Chat', 'React / Next.js', 'BBOX UI'], contribution: 'HAWK-AI 게시판·채팅 기능과 STACCATO 탐지 BBOX 관제 화면에 AI 결과를 사용자가 확인할 수 있는 형태로 연결했습니다.',
  },
  {
    code: '06', title: 'Deployment / Operations', scope: 'SERVICE DELIVERY',
    environment: ['Docker', 'Linux', 'Nginx', 'VM Integration'], contribution: 'Linux 기반 배포 환경과 API·DB 연결 상태를 점검하고, STACCATO의 AI·Backend·DB·Frontend 4개 VM 통합 QA를 수행했습니다.',
  },
] as const

export function certificationStatus(title: string) {
  if (title.includes('우수상')) return 'AWARD'
  if (title.includes('ADsP')) return 'CERTIFIED'
  return 'COMPLETED'
}

export function educationStatus(period: string) {
  return period.includes('진행 중') || period.includes('예정') ? 'TRAINING' : 'COMPLETED'
}
