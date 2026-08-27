import type { ModelExperimentRow } from './evidence'

export type ProjectLink = { label: string; url?: string; placeholder?: boolean }
export type ExtraSectionAnchor = 'overview' | 'background' | 'role' | 'features' | 'stack' | 'flow' | 'trouble' | 'screens' | 'docs'
export type ExtraSection = { id: string; insertAfter: ExtraSectionAnchor; label: string; heading: string; items: string[] }
export type ProjectCategory = 'AI / Computer Vision' | 'Full-stack' | 'Infra / Deployment'
export type ArchitectureNode = { label: string; sub?: string }
export type ProjectAreaKey = 'frontend' | 'backend' | 'ai' | 'database' | 'infrastructure'
export type ProjectAreaEvidence = { label: string; value: string }
export type ProjectAreaTroubleshooting = { title: string; problem: string; solution: string; result: string }
export type ProjectArea = {
  id: ProjectAreaKey
  label: string
  shortLabel?: string
  summary: string
  techStack: string[]
  architecture: { label: string; description: string }[]
  responsibilities: string[]
  features: string[]
  implementationPoints: string[]
  troubleshooting: ProjectAreaTroubleshooting[]
  evidence: ProjectAreaEvidence[]
}

export type Project = {
  slug: 'staccato' | 'erp' | '404rnf' | 'hawk-ai' | 'dohamusic' | 'dohalm' | 'dohaaudio' | 'dohavocal'
  name: string
  type: string
  period: string
  tagline: string
  teamNote?: string
  status?: 'in-progress'
  categories?: ProjectCategory[]
  highlights?: string[]
  resumeHighlight?: { role: string; contribution: string; achievement: string }
  techHighlights?: string[]
  summary: string
  background: string
  role: string[]
  features: string[]
  techStack: string[]
  systemFlow: { label: string; description: string }[]
  troubleshooting: { title: string; situation: string; solution: string; result: string }[]
  extraSections?: ExtraSection[]
  screenshots: { src: string; alt: string; caption: string; category?: string }[]
  documents: ProjectLink[]
  deploy: ProjectLink
  github: ProjectLink
  retrospective: string
  accent: string
  proofCompetencies?: string[]
  proofEvidence?: string[]
  architectureFlow?: ArchitectureNode[]
  modelExperiments?: ModelExperimentRow[]
  modelEvidenceNote?: string
  datasetSummary?: { title: string; items: string[] }
  operationChecks?: string[]
  aiPipeline?: ArchitectureNode[]
  aiPipelineNote?: string
  aiPipelineImage?: { src: string; alt: string; caption: string }
  projectAreas?: ProjectArea[]
  evidenceOverview?: { label: string; value: string; description: string }[]
}

const legacyProjects: Project[] = [
  {
    slug: 'staccato',
    name: 'STACCATO AI Highway Control',
    type: 'AI 관제 시스템 · Final Project',
    period: 'Final Project',
    tagline: 'YOLO11 기반 CCTV 영상 분석으로 고속도로 정차 차량과 갓길 정차 이벤트를 탐지하고 관제 화면까지 연결한 AI 관제 MVP',
    teamNote: '팀 프로젝트 · AI 모델 실험·서비스 연동·통합 QA 담당',
    categories: ['AI / Computer Vision', 'Infra / Deployment'],
    highlights: ['YOLO11', 'RT-DETR', 'Flask', 'MySQL', 'Socket.IO', '4 VM Integration'],
    techHighlights: ['Python', 'YOLO11', 'Flask', 'MySQL', 'Next.js', 'Linux'],
    resumeHighlight: {
      role: 'Keras·YOLO·RT-DETR 모델 실험 및 비교, 프론트엔드 MVP, Flask API 일부 개발, BBOX 서비스 연동, 4개 VM 통합·QA',
      contribution: 'AI 모델 실험부터 서비스 연동과 통합 테스트까지 담당',
      achievement: '20,000장 데이터셋에서 최종 모델 mAP50 0.9290·F1 0.8932 검증, AI·Backend·DB·Frontend 4개 VM 통합',
    },
    summary: 'Frontend·Flask·AI·DB를 분리한 환경에서 객체탐지 결과를 실제 관제 서비스 흐름으로 연결했습니다. CCTV 프레임 분석, 이벤트 판단, DB 저장, 실시간 알림, 상세 조회와 replay까지 이어지는 전체 흐름을 통합했습니다.',
    background: '객체탐지 모델의 결과를 서비스에서 실제로 활용하려면 후처리, API, DB, 실시간 전달과 관제 UI가 함께 동작해야 했습니다.',
    role: ['YOLO·RT-DETR 모델 학습 및 비교', '프론트엔드 MVP 개발', 'Flask API 일부 개발 및 AI 연동', 'BBOX metadata 연동', '4개 VM 통합·QA'],
    features: ['YOLO11 차량 탐지', '정차·갓길 정차 이벤트 판단', 'Flask API Gateway', 'MySQL 이벤트 저장', 'Socket.IO 실시간 알림', 'CCTV·BBOX·Replay 관제 UI'],
    techStack: ['Next.js', 'TypeScript', 'React', 'Flask', 'FastAPI', 'Python', 'YOLO11', 'RT-DETR', 'OpenCV', 'MySQL', 'SQLAlchemy', 'Linux', 'Nginx'],
    systemFlow: [
      { label: 'CCTV', description: '영상 프레임 입력' },
      { label: 'AI', description: 'YOLO11 객체탐지 및 후처리' },
      { label: 'Flask', description: '이벤트 API 수신 및 서비스 처리' },
      { label: 'MySQL', description: '탐지·이벤트 데이터 저장' },
      { label: 'Frontend', description: '관제 화면·알림·상세 조회' },
    ],
    troubleshooting: [],
    screenshots: [{ src: '/images/staccato-01.png', alt: 'STACCATO', caption: 'STACCATO 서비스 화면' }],
    documents: [{ label: '발표자료', url: '/docs/STACCATO-presentation.pdf' }],
    deploy: { label: '배포 사이트', placeholder: true },
    github: { label: 'GitHub 저장소', placeholder: true },
    retrospective: '모델 정확도뿐 아니라 API 계약, 데이터 정합성, 운영 흐름이 AI 서비스 품질을 결정한다는 점을 경험했습니다.',
    accent: '#55c2ff',
    proofCompetencies: ['Computer Vision', 'AI Service Integration', 'Multi-VM Integration'],
    proofEvidence: ['YOLO11·RT-DETR 비교', 'mAP50 0.9290 · F1 0.8932', '4개 VM 통합'],
  },
  {
    slug: 'erp',
    name: 'CommerceOps ERP',
    type: 'Full-stack · Personal Project',
    period: '2026',
    tagline: '쇼핑몰과 관리자 ERP를 상품·주문·재고·권한 데이터 흐름으로 연결하고 Docker 기반으로 배포한 풀스택 프로젝트',
    teamNote: '개인 프로젝트',
    categories: ['Full-stack', 'Infra / Deployment'],
    highlights: ['Spring Boot', 'Next.js', 'MySQL', 'Docker Compose', 'JWT', 'AWS'],
    techHighlights: ['Spring Boot', 'Next.js', 'MySQL', 'Docker', 'AWS EC2'],
    resumeHighlight: {
      role: '기획, 프론트엔드, 백엔드, DB, AI 운영 UI, Docker·AWS 배포 전체 구현',
      contribution: '개인 풀스택 프로젝트 전체 구현',
      achievement: '상품·주문·재고·물류·회계·권한 흐름을 구현하고 AWS EC2 Docker Compose HTTPS 환경으로 배포',
    },
    summary: 'Spring Boot, Next.js, MySQL을 기반으로 쇼핑몰과 관리자 ERP를 하나의 서비스 흐름으로 구현했습니다.',
    background: '실제 운영 업무에서 상품·주문·재고·고객·권한 정보가 연결되는 구조를 직접 구현해보기 위해 시작했습니다.',
    role: ['서비스 기획', 'Next.js 프론트엔드', 'Spring Boot API', 'MySQL 데이터 모델링', 'Docker·AWS 배포'],
    features: ['상품·주문·재고 관리', '관리자 권한', 'JWT 인증', 'AI 추론 UI', 'Docker Compose 배포'],
    techStack: ['Spring Boot', 'Java', 'Next.js', 'React', 'TypeScript', 'MySQL', 'Docker', 'Nginx', 'AWS EC2', 'FastAPI'],
    systemFlow: [{ label: 'Frontend', description: 'Next.js 쇼핑몰·관리자 UI' }, { label: 'Backend', description: 'Spring Boot REST API' }, { label: 'DB', description: 'MySQL 업무 데이터' }, { label: 'Deploy', description: 'AWS Docker Compose' }],
    troubleshooting: [],
    screenshots: [{ src: '/images/erp-01.png', alt: 'CommerceOps ERP', caption: 'ERP 화면' }],
    documents: [],
    deploy: { label: '배포 사이트', placeholder: true },
    github: { label: 'GitHub 저장소', placeholder: true },
    retrospective: '업무 데이터가 연결되는 구조와 배포 이후 운영까지 풀스택으로 경험했습니다.',
    accent: '#8c83ff',
    proofCompetencies: ['Full-stack', 'Database', 'Deployment'],
    proofEvidence: ['Spring Boot + Next.js', 'MySQL 업무 데이터', 'AWS Docker Compose'],
  },
  {
    slug: '404rnf',
    name: '404RNF',
    type: 'AI Road Hazard Detection · Team Project',
    period: '2026',
    tagline: 'YOLOv8·RT-DETR 기반 도로 낙하물 탐지와 Flask-SocketIO 실시간 위험 알림을 결합한 안전 주행 플랫폼',
    teamNote: '팀 프로젝트 · 팀장',
    categories: ['AI / Computer Vision', 'Full-stack'],
    highlights: ['YOLOv8', 'RT-DETR', 'Flask', 'SQLAlchemy', 'Socket.IO'],
    techHighlights: ['Python', 'Flask', 'YOLOv8', 'RT-DETR', 'MySQL'],
    resumeHighlight: {
      role: '팀장, Flask 백엔드 구조, DB 모델링, 관리자 기능, AI 모델 비교 분석',
      contribution: '기획·구현·통합을 주도',
      achievement: 'YOLOv8·YOLOv8-p2·RT-DETR 비교와 실시간 위험 알림 구조 구현',
    },
    summary: '도로 이미지·영상에서 낙하물을 탐지하고 신고·DB·관리자 대시보드·실시간 알림으로 연결했습니다.',
    background: '낙하물 탐지 모델의 결과를 사용자 신고와 관리자 처리 흐름으로 연결하는 것을 목표로 했습니다.',
    role: ['팀장', 'Flask 백엔드 구조', 'DB 모델링', '관리자 기능', 'AI 모델 비교'],
    features: ['낙하물 탐지', '위험도 분류', '실시간 알림', '관리자 대시보드', '신고 처리'],
    techStack: ['Python', 'Flask', 'YOLOv8', 'RT-DETR', 'OpenCV', 'MySQL', 'SQLAlchemy', 'Flask-SocketIO'],
    systemFlow: [{ label: 'Upload', description: '이미지·영상 신고' }, { label: 'AI', description: '객체탐지' }, { label: 'DB', description: '결과 저장' }, { label: 'Admin', description: '위험 확인·처리' }],
    troubleshooting: [],
    screenshots: [{ src: '/images/404rnf-01.png', alt: '404RNF', caption: '404RNF 메인 화면' }],
    documents: [{ label: '시연 영상', url: 'https://youtu.be/Iet2QiSkU5s' }, { label: '발표자료', url: '/docs/404rnf-presentation.pdf' }],
    deploy: { label: '배포 사이트', url: 'https://404-rnf.ddoriny.com/' },
    github: { label: 'GitHub 저장소', placeholder: true },
    retrospective: '여러 모델을 비교하고 결과를 운영 화면에 연결하면서 AI 서비스 통합 경험을 쌓았습니다.',
    accent: '#ffbe70',
    proofCompetencies: ['AI Model Comparison', 'Realtime Alert', 'Backend'],
    proofEvidence: ['YOLOv8·RT-DETR 비교', 'Socket.IO', 'SQLAlchemy'],
  },
]

const newProjects: Project[] = [
  {
    slug: 'hawk-ai',
    name: 'HAWK-AI',
    type: 'LLM AI Service · Team Project',
    period: '2026.08.04 ~ 2026.09.08',
    tagline: '해안 환경 점검 서비스의 게시판을 구현하고 Qwen+LoRA 기반 글쓰기 AI와 LangGraph 챗봇을 Frontend–Backend–FastAPI 추론 서버까지 연결한 팀 프로젝트',
    teamNote: '팀 프로젝트 · 게시판 및 LLM AI 서비스 연동 담당',
    status: 'in-progress',
    categories: ['Full-stack', 'Infra / Deployment'],
    highlights: ['Qwen + LoRA', 'FastAPI', 'LangChain', 'LangGraph', 'Board AI', 'Frontend–Backend Integration'],
    techHighlights: ['Python', 'FastAPI', 'Qwen', 'LoRA', 'Next.js', 'MySQL'],
    resumeHighlight: {
      role: '게시판 기능 구현 및 Qwen+LoRA AI 글쓰기·챗봇을 Frontend–Backend–FastAPI 추론 서버까지 서비스에 연결',
      contribution: '팀 프로젝트에서 게시판과 LLM AI 서비스 통합 흐름 담당',
      achievement: '게시판 생성 API와 챗봇 API를 실제 서비스 UI에 연결하고 구조화 응답·grounded context·Navigation Action 흐름을 통합',
    },
    summary: 'HAWK-AI는 해안 환경 현장 점검 결과를 업무 데이터로 관리하는 팀 프로젝트입니다. 이 프로젝트에서 게시판 기능과 LLM AI 서비스를 연결했습니다. LLM 저장소의 Qwen 기반 LoRA Adapter를 ai-serving의 FastAPI에서 로드하고, Backend AI client를 거쳐 Frontend 게시판 작성·챗봇 UI에서 사용할 수 있도록 통합했습니다. 게시판 생성은 title·summary·content 구조화 결과를 반환하고, 챗봇은 점검·게시판·통계·화면 이동 의도를 분기합니다.',
    background: '점검 데이터가 쌓여도 현장 담당자가 게시글을 직접 정리하거나 필요한 화면을 찾는 과정에는 반복 작업이 남습니다. 이를 줄이기 위해 점검 맥락을 기반으로 게시글 초안을 생성하고 서비스 정보를 질의하거나 화면 이동을 안내하는 LLM 기능을 실제 제품 흐름에 연결했습니다.',
    role: [
      '게시판 목록·상세·작성 등 서비스 기능 구현 및 Backend API 연동',
      'Qwen Base + 게시판 전용 LoRA Adapter 기반 AI 글쓰기 서비스 연동',
      'FastAPI /api/ai/board 결과를 Backend AI client를 통해 게시판 작성 UI에 연결',
      'LangGraph 기반 /api/ai/chat의 intent·action 구조를 Frontend 챗봇에 연결',
      '구조화 JSON 출력, 입력 검증, 오류·fallback 경로와 서비스 응답 계약 점검',
      '점검/재점검/글로벌 문맥 기반 모델 추천 서비스 UI 연동 작업',
    ],
    features: [
      '게시판 CRUD 및 관리자 게시판 화면',
      'Qwen Base + LoRA Adapter 기반 게시글 제목·요약·본문 자동 생성',
      'LangChain Prompt + Pydantic 구조화 출력',
      'LangGraph 기반 GENERAL·INSPECTION·BOARD·STATISTICS·NAVIGATION intent 분기',
      '점검 데이터가 없는 경우 모델 호출을 피하는 grounded 응답 처리',
      '허용된 Frontend route만 반환하는 Navigation Action',
      'YOLO 객체탐지와 LLM 추론을 동일 FastAPI serving 계층에서 제공',
      '모델 성능·점검 맥락을 바탕으로 후보 모델을 비교하는 추천 UI',
    ],
    techStack: ['Python', 'FastAPI', 'Qwen', 'LoRA', 'PEFT', 'Transformers', 'LangChain', 'LangGraph', 'Pydantic', 'Next.js', 'React', 'MySQL'],
    systemFlow: [
      { label: 'Frontend', description: '게시판 작성·챗봇·추천 UI에서 AI 요청' },
      { label: 'Backend', description: '서비스 권한·데이터 문맥을 구성하고 AI client 호출' },
      { label: 'FastAPI AI Serving', description: '입력 검증 후 board/chat 추론 처리' },
      { label: 'Qwen + LoRA', description: '게시판 도메인 글쓰기 생성' },
      { label: 'LangGraph', description: '챗봇 intent 분기와 Navigation Action 생성' },
      { label: 'Structured Response', description: 'title·summary·content 또는 intent·action 반환' },
    ],
    troubleshooting: [
      { title: 'LLM 출력을 게시판 폼에 안정적으로 연결', situation: '자유 형식 LLM 응답은 제목·요약·본문을 안정적으로 분리하기 어렵고 서비스 입력값을 임의로 바꿀 위험이 있었습니다.', solution: 'JSON 복구와 PydanticOutputParser를 사용하고 grounded 사실 보존 후처리를 적용해 구조화된 BoardDraft만 서비스에 전달하도록 구성했습니다.', result: 'Frontend에서 title·summary·content를 예측 가능한 계약으로 사용할 수 있게 했습니다.' },
      { title: '챗봇의 화면 이동을 안전하게 제한', situation: 'LLM이 임의 URL을 반환하면 존재하지 않거나 허용하지 않은 화면으로 이동할 수 있었습니다.', solution: 'LangGraph의 NAVIGATION 분기에서 실제 Frontend route allowlist만 사용하도록 하고 action.type/path/href를 구조화했습니다.', result: '자연어 요청을 서비스 화면 이동으로 연결하면서도 이동 범위를 통제했습니다.' },
    ],
    screenshots: [
      {
        src: '/images/HAWK-ai.png',
        alt: 'HAWK-AI 해안 폐기물 AI 점검 서비스 홈 화면',
        caption: '해안 폐기물 탐지 결과와 현장 점검 흐름을 제공하는 HAWK-AI 서비스 홈',
        category: 'SERVICE',
      },
    ],
    documents: [],
    deploy: { label: '배포 사이트', url: 'https://hawk-ai.ejjang2030.kr/' },
    github: { label: 'GitHub Organization', url: 'https://github.com/hawk-ai-project' },
    retrospective: 'LLM을 별도 데모로 두는 것이 아니라 실제 게시판과 서비스 컨텍스트에 연결하면서, 모델보다 입력 문맥·출력 계약·fallback·UI 연결이 제품 품질에 중요하다는 점을 확인했습니다.',
    accent: '#43d19e',
    proofCompetencies: ['LLM Service Integration', 'Python Backend', 'Full-stack Integration'],
    proofEvidence: ['Qwen + LoRA', '/api/ai/board · /api/ai/chat', 'Frontend–Backend–AI Serving 연결'],
  },
  {
    slug: 'dohamusic',
    name: 'DohaMusic',
    type: 'AI Music Creation Platform · Personal Project',
    period: '2026.07.23 ~ 진행 중',
    tagline: '가사·음악 생성·Stem 분리·Voice Conversion·Mix·Export를 Workspace와 Job Orchestration으로 연결하는 개인 AI 음악 제작 플랫폼',
    teamNote: '개인 프로젝트 · DohaStudio',
    status: 'in-progress',
    categories: ['Full-stack', 'Infra / Deployment'],
    highlights: ['FastAPI', 'Workspace', 'Job Orchestration', 'Provider Adapter', 'Voice Enrollment', 'Audio Analysis'],
    techHighlights: ['Python', 'FastAPI', 'SQLAlchemy', 'React', 'FFmpeg', 'Provider Pattern'],
    resumeHighlight: {
      role: '제품 아키텍처, FastAPI Backend, Provider 추상화, 비동기 Job/Pipeline, Responsive Studio와 결과 관리 구현',
      contribution: '개인 프로젝트 전체 설계·구현',
      achievement: 'Music→Stem→Voice→Mixer→WAV Export 파이프라인과 Voice Enrollment·History·Project·Result UI를 연결한 로컬 Studio 구축',
    },
    summary: '자연어 프롬프트 또는 사용자가 작성한 가사를 바탕으로 곡을 생성하고, Stem 분리·Voice 처리·Mix·Export까지 이어지는 제작 흐름을 하나의 Workspace와 Job 시스템으로 관리하는 프로젝트입니다. Provider를 교체 가능한 Adapter로 분리하고 실행 결과, 권리 정보, Artifact와 사용자 선택 상태를 추적하는 구조를 설계하고 있습니다.',
    background: 'AI 음악 도구가 각각 독립된 기능으로 존재하면 생성 과정과 결과 버전, 사용자 선택, 권리 정보가 흩어집니다. 이를 하나의 제품 Workflow로 연결하고 재현 가능한 제작 환경을 만들기 위해 시작했습니다.',
    role: ['FastAPI Router·Service·Repository 구조 설계', '비동기 Job·Pipeline Orchestration', 'Music/Stem/Voice/Mixer Provider Adapter 설계', 'Voice Enrollment API와 Responsive Studio 구현', 'History·Project·Result·WAV Player·Download 연결', 'K-POP BPM·LUFS·에너지·후렴 후보 분석 기능 구현'],
    features: ['Music→Stem→Voice→Mixer→WAV Pipeline', '가사 생성·검증·Revision 구조', 'Guided Voice Enrollment', 'Job progress·cancel·retry', 'History·Project·Result 관리', 'BPM·LUFS·후렴 후보 Audio Analysis'],
    techStack: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'React', 'TypeScript', 'FFmpeg', 'Demucs', 'Seed-VC', 'ACE-Step', 'SQLite'],
    systemFlow: [{ label: 'Studio', description: '프롬프트·가사·생성 옵션 입력' }, { label: 'Workspace', description: 'Asset·Job·사용자 선택 상태 관리' }, { label: 'Provider Jobs', description: 'Music·Stem·Voice 작업 실행' }, { label: 'Mixer', description: '보컬·반주 합성 및 headroom 처리' }, { label: 'Result', description: 'WAV·분석 결과·History 관리' }],
    troubleshooting: [],
    screenshots: [],
    documents: [],
    deploy: { label: '로컬 개발', placeholder: true },
    github: { label: 'GitHub 저장소', url: 'https://github.com/DohaStudio/DohaMusic' },
    retrospective: 'AI 모델 하나를 붙이는 것보다 여러 Provider와 사용자의 편집·승인·결과 이력을 일관된 Workspace 계약으로 관리하는 것이 더 큰 시스템 설계 문제라는 점을 다루고 있습니다.',
    accent: '#9f8cff',
    proofCompetencies: ['AI Product Architecture', 'Job Orchestration', 'Provider Integration'],
    proofEvidence: ['Phase 8 Local Studio', 'Music→Stem→Voice→Mix Pipeline', 'Voice Enrollment'],
  },
  {
    slug: 'dohalm',
    name: 'DohaLM',
    type: 'LLM Training & Runtime Provider · Personal Project',
    period: '2026.07.23 ~ 진행 중',
    tagline: 'Dataset Governance부터 Foundation Model, QLoRA Adapter, Evaluation, REST/SSE Runtime까지 재사용 가능한 LLM Provider를 구축하는 개인 프로젝트',
    teamNote: '개인 프로젝트 · DohaStudio',
    status: 'in-progress',
    categories: ['Infra / Deployment'],
    highlights: ['Foundation Model', 'Dataset Governance', 'QLoRA', 'Evaluation', 'REST/SSE', 'Model Manifest'],
    techHighlights: ['Python', 'PyTorch', 'Transformers', 'PEFT', 'FastAPI', 'QLoRA'],
    resumeHighlight: {
      role: 'Dataset governance, Foundation Model 설계·학습 구조, QLoRA Adapter, evaluation, model manifest, inference runtime와 API 구현',
      contribution: '개인 LLM Training Pipeline 및 Provider Runtime 설계·구현',
      achievement: '16.9M 파라미터 DohaLM-Tiny 설계와 Qwen 계열 Adapter Runtime, FastAPI REST/SSE MVP까지 하나의 versioning 체계로 구성',
    },
    summary: 'DohaLM은 최종 사용자 앱이 아니라 다른 프로젝트가 재사용할 수 있는 LLM 모델·추론 Provider입니다. 직접 구현한 Decoder-only Transformer 연구 트랙과 Qwen 기반 재사용 모델 트랙을 분리하고, Dataset review·publication governance, training/evaluation, manifest, loader, inference runtime을 동일한 계약으로 수렴시키고 있습니다.',
    background: 'LLM을 API 호출 수준이 아니라 데이터 준비, 학습, 평가, 모델 artifact, versioning, runtime까지 전체 생명주기로 이해하고 직접 구축하기 위해 시작했습니다.',
    role: ['Dataset review·approval·publication governance 구조 설계', 'DohaLM-Tiny Decoder-only Transformer 설계', '학습 readiness·evaluation gate 설계', 'Qwen 기반 QLoRA Adapter manifest·validator·loader 구현', 'FastAPI REST·SSE inference MVP 구현', 'Model Manifest·versioning·release boundary 설계'],
    features: ['DohaLM-Tiny Foundation Model', 'Dataset Governance', 'Training/Evaluation Pipeline', 'Qwen QLoRA Adapter Runtime', 'REST/Streaming API', 'Model Manifest·Versioning'],
    techStack: ['Python', 'PyTorch', 'Transformers', 'PEFT', 'QLoRA', 'FastAPI', 'Pydantic', 'PostgreSQL'],
    systemFlow: [{ label: 'Dataset', description: '검토·승인·publication governance' }, { label: 'Training', description: 'Foundation 또는 Adapter 학습' }, { label: 'Evaluation', description: '승격 gate와 결과 기록' }, { label: 'Manifest', description: '모델 identity·version 관리' }, { label: 'Runtime', description: 'REST/SSE 추론 제공' }],
    troubleshooting: [],
    screenshots: [],
    documents: [],
    deploy: { label: '로컬 Runtime', placeholder: true },
    github: { label: 'GitHub 저장소', url: 'https://github.com/DohaStudio/DohaLM/tree/develop' },
    retrospective: '모델 학습 코드만으로는 재사용 가능한 LLM 시스템이 되지 않으며 데이터 승인, artifact identity, 평가 gate, runtime contract가 함께 있어야 한다는 기준으로 개발하고 있습니다.',
    accent: '#66a8ff',
    proofCompetencies: ['LLM Training Pipeline', 'Dataset Governance', 'Inference Runtime'],
    proofEvidence: ['16.9M DohaLM-Tiny', 'QLoRA Adapter Runtime', 'FastAPI REST/SSE'],
  },
  {
    slug: 'dohaaudio',
    name: 'DohaAudio',
    type: 'Audio AI Provider · Personal Project',
    period: '2026.07.23 ~ 진행 중',
    tagline: 'Music Generation·Stem Separation·Audio Analysis·Training을 DohaMusic과 분리된 독립 Audio AI Provider로 설계하는 프로젝트',
    teamNote: '개인 프로젝트 · DohaStudio · Architecture Bootstrap',
    status: 'in-progress',
    categories: ['Infra / Deployment'],
    highlights: ['Provider Contract', 'Dataset Policy', 'Model Manifest', 'Training Architecture', 'Artifact Boundary'],
    techHighlights: ['Python', 'Audio AI', 'Provider API', 'Model Manifest'],
    resumeHighlight: {
      role: 'Repository boundary, Provider contract, Dataset·Artifact 정책, Training·Evaluation·Runtime 구조 설계',
      contribution: '개인 프로젝트의 Audio AI Provider 아키텍처 설계',
      achievement: 'DohaMusic 제품 책임과 Music Generation·Stem·Analysis·Training 책임을 분리하고 공통 Job/Artifact 계약 정의',
    },
    summary: '현재는 문서·계약 중심 Architecture bootstrap 단계입니다. 음악 생성, Instrumental, Stem Separation, Audio Analysis, Dataset Pipeline, Training, Evaluation, Model Manifest와 Runtime의 책임을 DohaMusic 제품 서비스와 분리해 독립 Provider로 정의하고 있습니다.',
    background: '제품 서비스와 모델 Provider가 한 저장소에 섞이면 모델 교체와 실험, artifact 관리, 권리 정책이 제품 Workflow와 강하게 결합됩니다. 이를 분리하기 위한 Provider 경계를 먼저 설계하고 있습니다.',
    role: ['DohaMusic–DohaAudio repository boundary 설계', 'MusicGenerationJob·StemSeparationJob·AudioAnalysisJob 계약 정의', 'Dataset·Artifact·Temp 외부 저장 정책 정의', 'Model Manifest·Training·Evaluation·Runtime 책임 정의'],
    features: ['Music Generation 계획', 'Stem Separation 계획', 'Audio Analysis 계획', 'Dataset/Training/Evaluation 설계', 'Provider Runtime 계약'],
    techStack: ['Python', 'Audio AI', 'Provider Architecture', 'Model Manifest', 'Dataset Governance'],
    systemFlow: [{ label: 'DohaMusic', description: 'Workspace와 Job 생성' }, { label: 'DohaAudio Job', description: '독립 Job 계약' }, { label: 'Runtime', description: '향후 Audio AI Provider 실행' }, { label: 'Artifact', description: '결과를 DohaMusic에 반환' }],
    troubleshooting: [],
    screenshots: [],
    documents: [],
    deploy: { label: '구현 예정', placeholder: true },
    github: { label: 'GitHub 저장소', url: 'https://github.com/DohaStudio/DohaAudio' },
    retrospective: '현재 단계에서는 구현 완료를 주장하지 않고, 실제 모델·Runtime 작업 전 책임 경계와 데이터·artifact 정책을 명확히 하는 데 집중하고 있습니다.',
    accent: '#ef9b5d',
    proofCompetencies: ['Architecture Design', 'Provider Boundary', 'Data/Artifact Policy'],
    proofEvidence: ['Provider 계약', 'Job 분리', 'Model Manifest 설계'],
  },
  {
    slug: 'dohavocal',
    name: 'DohaVocal',
    type: 'Vocal AI Provider · Personal Project',
    period: '2026.07.23 ~ 진행 중',
    tagline: 'Singing Voice·Voice Conversion·Vocal Correction을 consent·rights·Asset lineage와 함께 독립 Provider로 설계하는 프로젝트',
    teamNote: '개인 프로젝트 · DohaStudio · Architecture Bootstrap',
    status: 'in-progress',
    categories: ['Infra / Deployment'],
    highlights: ['Consent & Rights', 'Asset Lineage', 'Voice Conversion', 'Derived AssetVersion', 'Provider Contract'],
    techHighlights: ['Python', 'Vocal AI', 'Provider API', 'Asset Lineage'],
    resumeHighlight: {
      role: 'Provider boundary, Vocal Asset lineage, consent/rights, Job·Artifact 계약과 Runtime 구조 설계',
      contribution: '개인 프로젝트의 Vocal AI Provider 아키텍처 설계',
      achievement: 'Voice Enrollment·Recording Take·Training Dataset·Generated Vocal을 분리하고 원본 불변의 파생 AssetVersion 계약 정의',
    },
    summary: '현재는 문서·계약 중심 Architecture bootstrap 단계입니다. Singing Voice, Voice Conversion, Pitch/Timing Correction, Noise Reduction와 Vocal Analysis를 담당할 Provider를 설계하고 있으며, 개인 음성의 동의·권리와 원본 불변 Asset lineage를 핵심 계약으로 두고 있습니다.',
    background: '보컬 AI는 성능뿐 아니라 개인 음성의 동의, 사용 범위, 원본과 파생 결과의 관계를 추적할 수 있어야 합니다. 이를 제품 로직과 분리된 Provider 계약으로 만들기 위해 시작했습니다.',
    role: ['DohaMusic–DohaVocal repository boundary 설계', 'Voice Enrollment Sample과 Training Dataset 권리 경계 정의', '원본 불변·파생 AssetVersion lineage 설계', 'VocalGeneration·VoiceConversion·Correction Job 계약 정의', 'Consent·rights metadata와 artifact 구조 설계'],
    features: ['Singing Voice 계획', 'Voice Conversion 계획', 'Pitch·Timing Correction 계획', 'Consent/Rights 정책', 'Vocal Asset Lineage'],
    techStack: ['Python', 'Vocal AI', 'Provider Architecture', 'Asset Versioning', 'Consent & Rights'],
    systemFlow: [{ label: 'DohaMusic', description: '사용자 권한·Workspace 관리' }, { label: 'Vocal Job', description: '승인된 입력으로 독립 처리' }, { label: 'Derived Artifact', description: '원본을 변경하지 않는 파생 결과' }, { label: 'User Choice', description: 'DohaMusic에서 최종 결과 선택' }],
    troubleshooting: [],
    screenshots: [],
    documents: [],
    deploy: { label: '구현 예정', placeholder: true },
    github: { label: 'GitHub 저장소', url: 'https://github.com/DohaStudio/DohaVocal' },
    retrospective: 'Vocal AI에서 기술 구현과 권리·동의·lineage를 분리해서 생각할 수 없다는 점을 시스템 계약에 반영하고 있습니다.',
    accent: '#f06e9c',
    proofCompetencies: ['Vocal AI Architecture', 'Consent & Rights', 'Asset Lineage'],
    proofEvidence: ['원본 불변', '파생 AssetVersion', 'Enrollment/Training 분리'],
  },
]

export const projects: Project[] = [...legacyProjects, ...newProjects]
export const getProject = (slug?: string) => projects.find((project) => project.slug === slug)
