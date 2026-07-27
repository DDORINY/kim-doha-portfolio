import { profile } from './profile'
import { projects } from './projects'

export const representativeResumeProjects = ['staccato', '404rnf', 'erp'].map((slug) => {
  const project = projects.find((item) => item.slug === slug)
  if (!project) throw new Error(`Resume project not found: ${slug}`)
  return project
})

export const resumeMetrics = [
  { value: profile.careerSummary[0].value, label: 'TOTAL EXPERIENCE', description: '온라인 마케팅·운영 실무 경력' },
  { value: 'AI SERVICE', label: 'SERVICE INTEGRATION', description: '모델·API·DB·웹 화면 연결 경험' },
  { value: 'COMPUTER VISION', label: 'MODEL TO SERVICE', description: 'YOLO 학습·평가·서비스 연동' },
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
  { label: 'AI / VISION', description: '객체탐지 모델 학습·평가와 영상·bbox 처리', skills: selectSkills(['Python', 'PyTorch', 'YOLO', 'OpenCV', 'Keras', 'RT-DETR']) },
  { label: 'BACKEND', description: 'AI 분석 요청과 인증·실시간 서비스 API 구현', skills: selectSkills(['Flask', 'FastAPI', 'REST API', 'JWT', 'Socket.IO', 'Spring Boot']) },
  { label: 'DATA', description: '서비스 데이터 모델링·처리·마이그레이션', skills: selectSkills(['MySQL', 'SQLAlchemy', 'Pandas', 'NumPy', 'Flyway']) },
  { label: 'FRONTEND / INFRA', description: '운영 화면 구현과 Linux 기반 서비스 배포', skills: selectSkills(['React', 'Next.js', 'TypeScript', 'Docker', 'Linux', 'Nginx', 'AWS EC2']) },
] as const

const staccato = representativeResumeProjects.find((project) => project.slug === 'staccato')!
const rnf = representativeResumeProjects.find((project) => project.slug === '404rnf')!
const erp = representativeResumeProjects.find((project) => project.slug === 'erp')!

export const serviceExperience = [
  {
    code: '01', title: 'Model Result', scope: 'PROJECT ENVIRONMENT',
    environment: (staccato.highlights ?? []).slice(0, 3), contribution: staccato.role.find((item) => item.includes('metadata'))!,
  },
  {
    code: '02', title: 'API Integration', scope: 'MY CONTRIBUTION',
    environment: selectSkills(['Flask', 'FastAPI', 'REST API', 'Socket.IO']), contribution: staccato.role.find((item) => item.includes('Flask API 연동'))!,
  },
  {
    code: '03', title: 'Database', scope: 'MY CONTRIBUTION',
    environment: selectSkills(['MySQL', 'SQLAlchemy', 'Flyway']), contribution: rnf.role.find((item) => item.includes('DB 테이블'))!,
  },
  {
    code: '04', title: 'Deployment', scope: 'MY CONTRIBUTION',
    environment: selectSkills(['Docker', 'Linux', 'Nginx', 'AWS EC2']), contribution: erp.resumeHighlight!.achievement,
  },
  {
    code: '05', title: 'Operation Check', scope: 'MY CONTRIBUTION',
    environment: profile.infra.categories[3].items, contribution: '서버·API·DB 연결 상태와 주요 사용자 흐름을 배포 후 점검하고 운영 기준을 문서화했습니다.',
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
