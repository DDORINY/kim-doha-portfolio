import type { ModelExperimentRow } from './evidence'

export type ProjectLink = { label: string; url?: string; placeholder?: boolean }
export type ExtraSectionAnchor = 'overview' | 'background' | 'role' | 'features' | 'stack' | 'flow' | 'trouble' | 'screens' | 'docs'
export type ExtraSection = { id: string; insertAfter: ExtraSectionAnchor; label: string; heading: string; items: string[] }
export type ProjectCategory = 'AI / Computer Vision' | 'Full-stack' | 'Infra / Deployment'
export type ArchitectureNode = { label: string; sub?: string }
export type ProjectArchitectureDiagram = {
  chart: string
  summary: string
  keyFlow: string
  notes: { label: string; text: string }[]
}
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
  slug: 'staccato' | 'erp' | '404rnf' | 'hawk-ai' | 'doha-studio' | 'dohamusic' | 'dohalm' | 'dohaaudio' | 'dohavocal'
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
  architectureDiagram?: ProjectArchitectureDiagram
  modelExperiments?: ModelExperimentRow[]
  modelEvidenceNote?: string
  datasetSummary?: { title: string; items: string[] }
  operationChecks?: string[]
  aiPipeline?: ArchitectureNode[]
  aiPipelineNote?: string
  aiPipelineImage?: { src: string; alt: string; caption: string }
  projectAreas?: ProjectArea[]
  evidenceOverview?: { label: string; value: string; description: string }[]
  repositories?: { name: string; role: string; status: string; description: string; github: string; tech: string[] }[]
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
    architectureDiagram: {
      chart: `flowchart TB
  subgraph AI["AI VM"]
    CCTV["CCTV Stream"] --> MODEL["YOLO11s"]
    MODEL --> POST["BBOX + Event Logic"]
  end
  subgraph SERVICE["FLASK / DB"]
    POST --> API["Flask API"]
    API --> DB[("MySQL<br/>Detection / Event")]
    API --> SOCKET["Socket.IO<br/>Realtime Event"]
  end
  subgraph PRODUCT["CONTROL UI"]
    SOCKET --> UI["Control Dashboard"]
    DB --> UI
  end`,
      summary: 'AI 추론부터 이벤트 저장과 실시간 관제 화면까지 4개 VM의 서비스 경계를 연결한 구조입니다.',
      keyFlow: 'CCTV frame → YOLO11s detection → BBOX·event logic → Flask·MySQL → Socket.IO control UI',
      notes: [
        { label: 'MODEL & POSTPROCESS', text: 'YOLO11s 탐지 결과를 BBOX metadata와 정차 이벤트 판단으로 변환합니다.' },
        { label: 'PERSISTED CONTRACT', text: 'Flask 서비스가 탐지·이벤트 데이터를 MySQL에 저장해 조회 흐름을 유지합니다.' },
        { label: 'REALTIME UI', text: 'Socket.IO 이벤트와 저장 데이터를 관제 대시보드의 알림·상세 조회로 연결합니다.' },
      ],
    },
    troubleshooting: [],
    screenshots: [{ src: '/images/staccato-01.png', alt: 'STACCATO', caption: 'STACCATO 서비스 화면' }],
    documents: [{ label: '발표자료', url: '/docs/STACCATO-presentation.pdf' }],
    deploy: { label: '배포 사이트', placeholder: true },
    github: { label: 'GitHub 저장소', placeholder: true },
    retrospective: '모델 정확도뿐 아니라 API 계약, 데이터 정합성, 운영 흐름이 AI 서비스 품질을 결정한다는 점을 경험했습니다.',
    accent: '#55c2ff',
    proofCompetencies: ['Computer Vision', 'AI Service Integration', 'Multi-VM Integration'],
    proofEvidence: ['YOLO11·RT-DETR 비교', 'mAP50 0.9290 · F1 0.8932', '4개 VM 통합'],
    modelExperiments: [
      { model: 'RT-DETR-L', precision: '0.8989', recall: '0.8558', f1: '0.8768', map50: '0.9107', map5095: '0.7681', note: 'mAP50-95 최고' },
      { model: 'YOLO11s 640 stage2', precision: '0.8850', recall: '0.8456', f1: '0.8648', map50: '0.9089', map5095: '0.7587', note: '경량·실시간 후보' },
      { model: 'YOLO11s CVAT balanced', precision: '0.9210', recall: '0.8670', f1: '0.8932', map50: '0.9290', map5095: '0.7680', note: '최종 선정 모델' },
      { model: 'YOLO11n stage2', precision: '0.8839', recall: '0.8246', f1: '0.8532', map50: '0.8949', map5095: '0.7329', note: '경량 후보' },
      { model: 'YOLO11n baseline', precision: '0.8714', recall: '0.7766', f1: '0.8213', map50: '0.8647', map5095: '0.7144', note: '기준 모델' },
    ],
    modelEvidenceNote: '최종 적용 모델은 YOLO11s CVAT balanced입니다. RT-DETR-L은 mAP50-95 기준으로 높은 성능을 보였지만, 실시간 CCTV 스트림 처리, ByteTrack 추적, ROI 기반 이벤트 판단, 관제 화면 연동까지 고려했을 때 YOLO11s CVAT balanced가 가장 안정적인 균형을 보였습니다.',
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
    architectureDiagram: {
      chart: `flowchart TB
  subgraph PRODUCT["PRODUCT SERVICE"]
    FE["Next.js Frontend<br/>Board / Chat UI"] --> BE["Backend<br/>Domain + AI Client"]
    BE --> DB[("MySQL")]
  end
  subgraph AI["AI SERVING"]
    AIS["FastAPI AI Serving<br/>/board · /chat"] --> LLM["Qwen + LoRA<br/>Board Generation"]
    AIS --> GRAPH["LangGraph<br/>Intent / Action"]
    LLM --> STRUCT["Pydantic<br/>Structured Output"]
    GRAPH --> STRUCT
  end
  BE --> AIS
  STRUCT --> BE`,
      summary: '제품 서비스와 AI Serving을 분리하고 Backend AI client가 두 계층의 응답 계약을 중재합니다.',
      keyFlow: 'Board·Chat UI → Backend context → FastAPI → Qwen+LoRA or LangGraph → validated response → product UI',
      notes: [
        { label: 'SERVICE BOUNDARY', text: 'Frontend는 모델을 직접 호출하지 않고 Backend의 권한·업무 문맥을 거쳐 AI Serving에 접근합니다.' },
        { label: 'VALIDATION', text: '게시글과 챗봇 결과는 Pydantic 기반 구조화 응답으로 검증한 뒤 제품 계층에 반환합니다.' },
        { label: 'PRODUCT INTEGRATION', text: '생성 결과와 Navigation Action을 게시판 폼과 챗봇 UI의 실제 동작으로 연결합니다.' },
      ],
    },
    troubleshooting: [
      { title: 'LLM 출력을 게시판 폼에 안정적으로 연결', situation: '자유 형식 LLM 응답은 제목·요약·본문을 안정적으로 분리하기 어렵고 서비스 입력값을 임의로 바꿀 위험이 있었습니다.', solution: 'JSON 복구와 PydanticOutputParser를 사용하고 grounded 사실 보존 후처리를 적용해 구조화된 BoardDraft만 서비스에 전달하도록 구성했습니다.', result: 'Frontend에서 title·summary·content를 예측 가능한 계약으로 사용할 수 있게 했습니다.' },
      { title: '챗봇의 화면 이동을 안전하게 제한', situation: 'LLM이 임의 URL을 반환하면 존재하지 않거나 허용하지 않은 화면으로 이동할 수 있었습니다.', solution: 'LangGraph의 NAVIGATION 분기에서 실제 Frontend route allowlist만 사용하도록 하고 action.type/path/href를 구조화했습니다.', result: '자연어 요청을 서비스 화면 이동으로 연결하면서도 이동 범위를 통제했습니다.' },
    ],
    screenshots: [
      {
        src: '/images/HAWK-ai.png?v=2',
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
    architectureDiagram: {
      chart: `flowchart TB
  subgraph PRODUCT["LOCAL STUDIO · IMPLEMENTED"]
    UI["Responsive Studio UI"] --> API["FastAPI Backend"]
    API --> WS["Workspace / Project"]
    WS --> JOB["Job / Pipeline Orchestrator"]
    JOB --> CURRENT["Current Provider Adapters<br/>Mock · ACE-Step · Demucs · Seed-VC"]
    CURRENT --> MIX["Default Mixer"]
    MIX --> RESULT["Result · History · WAV"]
  end
  subgraph PLANNED["EXTERNAL PROVIDERS · PLANNED"]
    LM["DohaLM"]
    AUDIO["DohaAudio"]
    VOCAL["DohaVocal"]
  end
  JOB -. "planned contract" .-> LM
  JOB -. "planned runtime" .-> AUDIO
  JOB -. "planned runtime" .-> VOCAL
  classDef planned stroke-dasharray: 6 4,fill:#ffffff00
  class LM,AUDIO,VOCAL planned`,
      summary: '현재 동작하는 로컬 Studio 파이프라인과 향후 연결할 외부 Provider 경계를 구분한 구조입니다.',
      keyFlow: 'Studio input → Workspace → Job orchestration → current adapters → Mixer → versioned result',
      notes: [
        { label: 'IMPLEMENTED PRODUCT', text: 'FastAPI와 Workspace·Job·Mixer·Result UI를 통해 로컬 제작 흐름이 현재 동작합니다.' },
        { label: 'PROVIDER ABSTRACTION', text: 'ACE-Step·Demucs·Seed-VC 등을 교체 가능한 Adapter 계약 뒤에 배치했습니다.' },
        { label: 'PLANNED BOUNDARY', text: 'DohaLM·DohaAudio·DohaVocal은 아직 외부 Provider 연결 계획이며 점선으로 분리했습니다.' },
      ],
    },
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
    architectureDiagram: {
      chart: `flowchart TB
  subgraph DATA["DATA GOVERNANCE"]
    RAW["Dataset Sources"] --> GOV["Review · Approval<br/>Publication"]
  end
  subgraph MODEL["TRAINING & EVALUATION"]
    GOV --> TRAIN["Foundation / QLoRA Training"]
    TRAIN --> EVAL["Evaluation Gate"]
    EVAL --> ART["Model / Adapter Artifact"]
    ART --> MAN["Manifest · Version"]
  end
  subgraph SERVE["INFERENCE SERVICE"]
    MAN --> RUN["Provider Runtime"]
    RUN --> API["FastAPI<br/>REST / SSE"]
  end`,
      summary: '데이터 승인부터 학습·평가·버전 관리·추론 API까지 모델 생명주기를 하나의 승격 흐름으로 연결합니다.',
      keyFlow: 'Dataset review → training → evaluation gate → versioned artifact manifest → runtime → REST/SSE',
      notes: [
        { label: 'DATA GOVERNANCE', text: '검토·승인·publication 단계를 통과한 데이터만 학습 입력으로 승격합니다.' },
        { label: 'PROMOTION GATE', text: 'Foundation·QLoRA 결과는 평가와 manifest 검증을 거쳐 재사용 가능한 artifact가 됩니다.' },
        { label: 'RUNTIME CONTRACT', text: '동일한 model identity와 version을 Provider Runtime과 FastAPI REST·SSE에서 사용합니다.' },
      ],
    },
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

const dohaMusic = newProjects.find((project) => project.slug === 'dohamusic')!
const dohaStudio: Project = {
  ...dohaMusic,
  slug: 'doha-studio',
  name: 'DOHA STUDIO',
  type: 'Personal Project · AI Product / AI System Architecture',
  period: '2026.07.23 ~ PRESENT',
  tagline: 'LLM·Audio·Vocal AI Provider를 Music Product Workspace와 연결하는 multi-repository 개인 AI 제작 플랫폼 프로젝트',
  teamNote: '개인 프로젝트 · Product / Model / Provider 전체 설계·개발',
  categories: ['Full-stack', 'Infra / Deployment'],
  highlights: ['AI Product', 'Job Orchestration', 'LLM Runtime', 'Provider Architecture', 'Artifact Lifecycle'],
  techHighlights: ['Python', 'FastAPI', 'React', 'PyTorch', 'QLoRA', 'Provider Pattern'],
  resumeHighlight: {
    role: 'DohaMusic Product·Orchestration, DohaLM Model·Runtime, Audio·Vocal Provider architecture 설계 및 개발',
    contribution: '개인 AI Product Ecosystem 전체 설계·구현',
    achievement: 'Workspace·Job·Artifact 제품 흐름과 Dataset·Model·Runtime, Audio·Vocal Provider 책임을 4개 repository 계약으로 분리',
  },
  summary: '음악 제작 Workspace를 중심으로 LLM, Audio, Vocal AI 기능을 독립 Provider로 분리하고 Job·Artifact 계약으로 연결하는 개인 AI 시스템 프로젝트입니다. DohaMusic은 제품과 orchestration을, DohaLM은 LLM 모델 생명주기와 Runtime을 담당하며 DohaAudio·DohaVocal은 architecture bootstrap 단계의 Provider 경계를 정의합니다.',
  background: '음악 생성 도구와 모델 Runtime을 한 코드베이스에 결합하면 제품 Workflow, 장시간 AI Job, 모델 실험과 Artifact 생명주기가 함께 변경됩니다. 사용자 제작 경험은 하나로 유지하면서 각 AI 책임을 독립적으로 개발·검증하기 위해 multi-repository 구조로 분리했습니다.',
  role: ['DohaMusic Workspace·Job·Artifact·Mix/Export 제품 구조 설계', '비동기 Pipeline과 Provider Adapter 구현', 'DohaLM Dataset Governance·Training·Evaluation·Manifest 구현', 'Qwen·QLoRA Adapter와 FastAPI REST/SSE Runtime 구현', 'DohaAudio·DohaVocal Provider 책임·Job·Artifact 계약 설계', 'Repository 간 구현 상태와 통합 경계 검증'],
  features: ['Music Product Workspace', 'Async Job Orchestration', 'Artifact·Result Lifecycle', 'LLM Dataset·Training·Runtime', 'Audio AI Provider Architecture', 'Vocal AI Rights·Lineage Architecture'],
  techStack: ['Python', 'FastAPI', 'SQLAlchemy', 'React', 'TypeScript', 'PyTorch', 'Transformers', 'PEFT', 'LoRA / QLoRA', 'Pydantic', 'FFmpeg', 'Demucs', 'Seed-VC', 'ACE-Step', 'SQLite'],
  systemFlow: [{ label: 'DohaMusic', description: 'Product·Workspace·Orchestration' }, { label: 'Provider Contract', description: 'Job·Artifact 경계' }, { label: 'DohaLM', description: 'LLM Model·Runtime' }, { label: 'DohaAudio / Vocal', description: 'Architecture·In Progress' }, { label: 'Result', description: 'Mix·Export·History' }],
  architectureDiagram: {
    chart: `flowchart TB
  USER["User / Creator"]
  subgraph PRODUCT["DohaMusic · ACTIVE DEVELOPMENT"]
    UI["Studio UI"] --> API["Product API"]
    API --> WS["Workspace"]
    WS --> JOB["Job Orchestration"]
    JOB --> ART["Artifact Management"]
    ART --> MIX["Mix / Export"]
  end
  subgraph PROVIDERS["AI PROVIDERS"]
    LM["DohaLM<br/>Model & Runtime · ACTIVE"]
    AUDIO["DohaAudio<br/>Architecture / In Progress"]
    VOCAL["DohaVocal<br/>Architecture / In Progress"]
  end
  USER --> UI
  JOB --> LM
  JOB -. "provider contract" .-> AUDIO
  JOB -. "provider contract" .-> VOCAL
  LM --> ART
  AUDIO -.-> ART
  VOCAL -.-> ART
  classDef planned stroke-dasharray: 6 4,fill:#ffffff00
  class AUDIO,VOCAL planned`,
    summary: 'DohaMusic의 제품 Workflow와 세 AI Provider의 변경 주기·Runtime 책임을 repository 계약으로 분리한 구조입니다.',
    keyFlow: 'Creator → DohaMusic Workspace → Job Orchestration → AI Provider → Artifact → Mix / Export',
    notes: [
      { label: 'PRODUCT', text: 'DohaMusic이 Studio UI, Workspace, Job, Artifact와 Mix·Export 사용자 흐름을 관리합니다.' },
      { label: 'MODEL & RUNTIME', text: 'DohaLM이 Dataset Governance, 학습·평가, Adapter Manifest와 REST·SSE Runtime을 담당합니다.' },
      { label: 'STATUS BOUNDARY', text: 'DohaAudio·DohaVocal은 architecture bootstrap 단계이며 완료된 Runtime처럼 표시하지 않습니다.' },
    ],
  },
  github: { label: 'GitHub Organization', url: 'https://github.com/DohaStudio' },
  retrospective: '제품과 Provider를 나누는 것 자체보다 Workspace·Job·Artifact와 Model Runtime 사이의 계약, 실패 처리와 version identity를 명확히 하는 일이 multi-repository 구조의 핵심임을 확인했습니다.',
  proofCompetencies: ['AI Product Architecture', 'LLM Model & Runtime', 'Provider Integration'],
  proofEvidence: ['DohaMusic Workspace·Job Pipeline', 'DohaLM QLoRA·REST/SSE Runtime', 'Audio·Vocal Provider Architecture'],
  repositories: [
    { name: 'DohaMusic', role: 'Product / Workspace / Orchestrator', status: 'ACTIVE DEVELOPMENT', description: 'Studio UI, Workspace, Job, Artifact, Provider Integration, Mix와 Export를 담당합니다.', github: 'https://github.com/DohaStudio/DohaMusic', tech: ['FastAPI', 'React', 'SQLAlchemy', 'FFmpeg'] },
    { name: 'DohaLM', role: 'LLM Model & Runtime Provider', status: 'ACTIVE DEVELOPMENT', description: 'Dataset Governance, Training, Evaluation, Adapter Manifest와 REST/SSE Runtime을 담당합니다.', github: 'https://github.com/DohaStudio/DohaLM/tree/develop', tech: ['PyTorch', 'Transformers', 'PEFT', 'FastAPI'] },
    { name: 'DohaAudio', role: 'Audio AI Provider', status: 'ARCHITECTURE / IN PROGRESS', description: 'Audio processing·generation Job, Dataset, Model Manifest와 Artifact Provider 경계를 설계합니다.', github: 'https://github.com/DohaStudio/DohaAudio', tech: ['Python', 'Audio AI', 'Provider Contract'] },
    { name: 'DohaVocal', role: 'Vocal AI Provider', status: 'ARCHITECTURE / IN PROGRESS', description: 'Vocal processing Job, consent·rights와 원본 불변 Asset lineage 경계를 설계합니다.', github: 'https://github.com/DohaStudio/DohaVocal', tech: ['Python', 'Vocal AI', 'Asset Lineage'] },
  ],
}

const legacyDohaSlugs = new Set<Project['slug']>(['dohamusic', 'dohalm', 'dohaaudio', 'dohavocal'])
export const projects: Project[] = [...legacyProjects, ...newProjects.filter((project) => !legacyDohaSlugs.has(project.slug)), dohaStudio]
export const getProject = (slug?: string) => projects.find((project) => project.slug === slug)
