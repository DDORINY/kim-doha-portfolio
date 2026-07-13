import type { ModelExperimentRow } from './evidence'

export type ProjectLink = { label: string; url?: string; placeholder?: boolean }

export type ExtraSectionAnchor = 'overview' | 'background' | 'role' | 'features' | 'stack' | 'flow' | 'trouble' | 'screens' | 'docs'
export type ExtraSection = { id: string; insertAfter: ExtraSectionAnchor; label: string; heading: string; items: string[] }

export type ProjectCategory = 'AI / Computer Vision' | 'Full-stack' | 'Infra / Deployment'

export type ArchitectureNode = { label: string; sub?: string }

export type ProjectAreaKey = 'frontend' | 'backend' | 'ai' | 'database' | 'infrastructure'

export type ProjectAreaEvidence = { label: string; value: string }

export type ProjectAreaTroubleshooting = { title: string; problem: string; solution: string; result: string }

/** 기술 영역(Frontend/Backend/AI/Database/Infrastructure) 탭 하나의 콘텐츠 — CommerceOps ERP처럼 영역별 상세 구현을 탭으로 분리하는 프로젝트에서 사용 */
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
  slug: 'staccato' | 'erp' | '404rnf'
  name: string
  type: string
  period: string
  tagline: string
  teamNote?: string
  /** 개발 진행 중인 프로젝트를 완료 프로젝트와 분리해서 보여주기 위한 상태 표시 */
  status?: 'in-progress'
  categories?: ProjectCategory[]
  highlights?: string[]
  resumeHighlight?: { role: string; contribution: string; achievement: string }
  /** 이력서 프로젝트 카드용 핵심 기술 4~6개 (techStack에서 발췌, 중요도순 — highlights와 달리 기능 태그가 아닌 기술 스택 우선순위) */
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
  /** Projects 목록 카드에 노출할 "무엇을 증명하는지" 요약 — 핵심 역량 */
  proofCompetencies?: string[]
  /** Projects 목록 카드에 노출할 "무엇을 증명하는지" 요약 — 대표 증거 */
  proofEvidence?: string[]
  /** 상세페이지 System Architecture Evidence 다이어그램 노드 (VM 흐름 등) */
  architectureFlow?: ArchitectureNode[]
  /** 상세페이지 AI Model Evidence 표에 쓰이는 모델 실험 비교 행 (최종 발표 PPT 성능표 기준) */
  modelExperiments?: ModelExperimentRow[]
  /** AI Model Evidence 표 아래 노출되는 최종 모델 선정 근거 문구 */
  modelEvidenceNote?: string
  /** AI Model Evidence 영역에 노출되는 최종 모델 데이터셋 요약 카드 */
  datasetSummary?: { title: string; items: string[] }
  /** 상세페이지 Operation Evidence 카드에 쓰이는 운영 점검 항목 (모두 기존 troubleshooting/role/qa 내용에서 정리) */
  operationChecks?: string[]
  /** AI 탐지 파이프라인을 아키텍처 다이어그램으로 보여주는 노드 (YOLO→ByteTrack→ROI 등) */
  aiPipeline?: ArchitectureNode[]
  /** AI 탐지 파이프라인 다이어그램 아래 붙는 짧은 설명 */
  aiPipelineNote?: string
  /** AI 탐지 파이프라인을 뒷받침하는 실제 화면 (화면 캡처 갤러리와 중복되지 않는 1장) */
  aiPipelineImage?: { src: string; alt: string; caption: string }
  /** 기술 영역 탭(Frontend/Backend/AI/Database/Infrastructure) — 존재할 때만 상세페이지에 탭 UI를 표시 */
  projectAreas?: ProjectArea[]
}

export const projects: Project[] = [
  {
    slug: 'staccato', name: 'STACCATO AI Highway Control', type: 'AI 관제 시스템 · Final Project', period: 'Final Project',
    tagline: 'YOLOv11 기반 CCTV 영상 분석으로 고속도로 정차 차량과 갓길 정차 이벤트를 탐지하고, 관제자가 실시간으로 확인할 수 있도록 구축한 AI 관제 MVP 시스템',
    teamNote: '팀 프로젝트 · 개인 기여도 약 50%',
    categories: ['AI / Computer Vision', 'Infra / Deployment'],
    highlights: ['YOLOv11', 'Keras 실험', 'BBOX Overlay', 'VM 분리 운영', 'Socket.IO', 'AI Media Proxy'],
    techHighlights: ['Python', 'YOLOv11', 'Flask', 'MySQL', 'Next.js', 'Linux'],
    resumeHighlight: {
      role: '프론트엔드 MVP 정리, Flask API 연동 점검, VM 인프라 연결 점검, 운영 문서화',
      contribution: '개인 기여도 약 50%',
      achievement: '4개 VM(AI·Flask·Frontend·DB) 기반 구조에서 AI 탐지 결과를 관제 화면·DB 저장·실시간 알림·리플레이까지 연결, 주요 화면 8개 이상 QA 수행',
    },
    summary: '단순 웹 서비스가 아니라 Frontend VM · Flask VM · AI VM · DB VM을 분리해 운영한 AI 서비스 통합 프로젝트입니다. CCTV 영상에서 YOLOv11로 차량을 탐지하고 ROI·이동량 기준으로 정차·갓길 정차 이벤트를 판단해, Flask API Gateway를 거쳐 MySQL에 저장하고 Socket.IO로 관제 화면에 실시간 전달합니다. 이벤트 목록·상세·스냅샷·MP4 replay까지 이어지는 흐름을 실제 운영 가능한 MVP로 구현했습니다.',
    background: '고속도로에서 정차 차량이나 갓길 정차는 2차 사고로 이어질 수 있어 빠른 탐지와 관제 대응이 중요합니다. CCTV 영상은 실시간으로 확인해야 하지만 사람이 모든 화면을 지속적으로 감시하기는 어렵기 때문에 AI 기반 이상 상황 탐지가 필요하다고 판단했습니다. AI가 탐지한 결과를 화면에 표시하는 데서 끝내지 않고, DB 저장, 실시간 알림, 이벤트 상세 확인, 스냅샷·영상 replay까지 하나의 흐름으로 연결하는 것을 목표로 삼았습니다.',
    role: [
      '프론트엔드 MVP 화면 정리 및 관제 UI(CCTV 스트림·BBOX overlay·이벤트 목록) 구성',
      'Flask API 연동 점검 및 프론트-백엔드 데이터 흐름 확인',
      '이벤트 상세 화면(스냅샷·탐지 정보·MP4 replay) 확인 흐름 점검',
      'AI 탐지 결과가 BBOX overlay로 정확히 표시되도록 metadata(bbox·frame 크기) 구조 검토',
      'Frontend VM·Flask VM·AI VM·DB VM 간 연결 상태 점검 및 문제 해결',
      'HTTPS/Nginx 리버스 프록시, Socket.IO, AI media proxy 연결 구조 점검',
      'pytest 기반 API 응답 계약 테스트 작성 및 검증',
      'SSH 기반 원격 서버 접속, 방화벽 포트 및 환경변수 설정',
      '보안 로그, 서버 상태, API health check, DB 연결 상태 등 운영 점검 문서화',
      'VM별 역할 분리, 배포 기준, 점검 체크리스트 정리 및 최종 발표·시연 준비',
      '프론트엔드 MVP 정리와 Flask API 연동 점검 외에도, Keras 기반 AI 모델 실험을 직접 수행하며 데이터 전처리, 모델 학습, 예측 결과 확인 과정을 경험했습니다. 이를 통해 최종 YOLO 기반 AI VM의 탐지 결과를 단순히 화면에 표시하는 수준이 아니라, 모델 입력·출력·confidence·bbox metadata가 서비스 구조와 어떻게 연결되는지 이해하고 점검했습니다.',
    ],
    features: [
      'YOLOv11 기반 차량 탐지',
      'bbox 중심 이동량 기반 정차 차량 추정',
      'ROI · Rule Engine 기반 이상 이벤트 탐지',
      '정차 차량 · 갓길 정차 이벤트 생성',
      'Flask API Gateway를 통한 AI 이벤트 수신 및 DB 저장',
      'MySQL 기반 사고·탐지 로그·알림·파일 metadata 저장',
      'Socket.IO 기반 실시간 관제 알림',
      'CCTV 스트림 · BBOX overlay · 이벤트 목록 확인 (관제 화면)',
      '이벤트 상세 화면 — 스냅샷 · 탐지 정보 · MP4 replay 확인',
      '사용자 신고 업로드 및 회원가입 · 로그인 · 마이페이지',
      'AI media proxy를 통한 영상 접근 구조',
    ],
    techStack: ['Next.js', 'TypeScript', 'React', 'Nginx', 'Flask', 'Python', 'JWT', 'Socket.IO', 'FastAPI', 'YOLOv11', 'RT-DETR', 'OpenCV', 'TensorFlow', 'Keras', 'MySQL', 'SQLAlchemy', 'Linux', 'Ubuntu', 'VMware', 'systemd', 'SSH', 'Git', 'GitHub'],
    systemFlow: [
      { label: '사용자 접속', description: '사용자가 브라우저에서 Frontend VM에 접속' },
      { label: 'API Gateway 요청', description: 'Frontend VM이 Flask VM API Gateway로 요청 전달' },
      { label: 'AI 분석 연계', description: 'Flask VM이 AI VM에 분석을 요청하거나 AI VM의 이벤트를 수신' },
      { label: '차량 탐지', description: 'AI VM이 CCTV 프레임에서 YOLOv11 기반 차량 탐지 수행' },
      { label: '정차 판단', description: 'ROI와 이동량 기준으로 정차·갓길 정차 이벤트 판단' },
      { label: '이벤트 수신', description: 'Flask VM이 AI 이벤트 payload를 수신' },
      { label: 'DB 저장', description: '사고 정보, 탐지 로그, 실시간 이벤트 기록을 MySQL에 저장' },
      { label: '실시간 알림', description: 'Socket.IO로 관제 화면에 실시간 이벤트 알림 전송' },
      { label: '관제 화면 반영', description: '이벤트 목록·상세·스냅샷·영상 replay를 관제 화면에서 확인' },
    ],
    troubleshooting: [
      { title: '분리된 서비스의 연동 흐름 가시화', situation: 'AI 추론, API, 프론트엔드, DB가 서로 다른 VM(AI VM·Flask VM·Frontend VM·DB VM)에서 동작해 장애 지점을 파악하기 어려웠습니다.', solution: '서비스를 역할별 VM으로 구분하고 요청·응답과 데이터 저장 흐름을 다이어그램 및 체크리스트로 정리했습니다.', result: '시연 전 검증 순서와 문제 추적 경로가 명확해졌습니다.' },
      { title: 'BBOX Overlay를 위한 좌표 metadata 정합성 확보', situation: 'AI 탐지 결과를 화면에 표시하려 했지만, bbox 좌표만으로는 원본 프레임 크기와 좌표 형식을 알 수 없어 프론트엔드에서 정확한 위치에 겹쳐 그릴 수 없었습니다.', solution: 'bbox 좌표 형식(xyxy)과 원본 frame_width·frame_height를 metadata로 함께 전달받아, 화면 비율 기준 percentage 좌표로 변환하는 구조로 정리했습니다.', result: 'CCTV 화면 크기와 무관하게 BBOX overlay가 정확한 위치에 표시되도록 개선했습니다.' },
      { title: 'CCTV 스트림과 AI 분석 FPS 분리', situation: 'CCTV 스트림 재생 속도와 동일한 주기로 AI 분석을 수행하면 서버 부담이 커지고 응답이 지연되는 문제가 있었습니다.', solution: 'CCTV 스트림 표시와 AI 분석 요청 주기를 분리해, 분석은 별도 FPS 기준으로 수행하도록 구조를 조정했습니다.', result: '서버 부담을 줄이면서도 이상 상황을 안정적으로 탐지할 수 있었습니다.' },
      { title: 'Socket.IO 알림과 DB 저장 순서 정합성', situation: 'AI 이벤트 발생 시 DB 저장과 실시간 알림을 동시에 처리하면, DB 저장이 실패해도 관제 화면에는 이벤트가 표시되는 정합성 문제가 있었습니다.', solution: 'DB 저장이 완료된 이후에만 Socket.IO emit이 수행되도록 순서를 강제해 데이터 정합성을 확보했습니다.', result: '저장되지 않은 이벤트가 관제 화면에 노출되는 문제를 방지했습니다.' },
      { title: 'HTTPS 환경에서 AI 영상 접근 경로 문제', situation: 'HTTPS로 전환한 뒤 브라우저가 AI VM의 주소를 직접 호출하면서 스냅샷·영상 미리보기가 차단되는 문제가 발생했습니다.', solution: '/ai-media 프록시 경로를 통해 Frontend·Flask VM을 경유하도록 구조를 변경하고, API 응답의 media URL을 HTTPS 경로로 변환했습니다.', result: 'HTTPS 환경에서도 스냅샷과 영상 재생이 정상적으로 동작하도록 안정화했습니다.' },
      { title: 'API 응답 계약 검증', situation: 'Flask API와 프론트엔드·DB 간 데이터 구조가 어긋나면 관제 화면이 깨질 위험이 있었습니다.', solution: 'pytest 기반으로 API 응답 스키마와 분석 상태(QUEUED·RUNNING·COMPLETED·FAILED) 전이를 검증하는 테스트를 작성했습니다.', result: '연동 안정성을 높이고 배포 전 문제를 조기에 발견할 수 있었습니다.' },
      { title: 'GPU 실행 환경 구성과 인프라 연결 점검', situation: 'AI VM에서 객체탐지 모델을 실행하려면 GPU 드라이버와 실행 환경이 서버 조건에 맞게 구성돼야 했고, VM 간 방화벽·DB 연결 상태도 확인이 필요했습니다.', solution: 'SSH로 각 VM에 접속해 방화벽 포트를 열고 MySQL 연결을 설정했으며, GPU 드라이버와 관련 실행 환경을 구성해 모델이 서버에서 정상 동작하도록 조정했습니다.', result: '로컬 개발 환경과 서버 환경의 차이로 인한 실행 문제를 해결하고 안정적으로 서비스를 구동할 수 있었습니다.' },
      { title: '최종 MVP 범위 정리', situation: '개발 과정에서 Map API, GPS 기반 위치 표시, LLM/Chatbot, Docker Compose 배포, 강화학습 기반 자동 재학습 등 다양한 아이디어가 논의되었지만, 발표 일정 안에 안정적으로 구현·검증 가능한 범위를 정할 필요가 있었습니다.', solution: '핵심 흐름(CCTV 관제, AI 탐지, API Gateway, DB 저장, 실시간 알림, 스냅샷·영상 replay)에 집중하고, 나머지 기능은 최종 MVP 범위에서 제외하기로 팀과 합의했습니다.', result: '한정된 기간 안에 안정적으로 동작하는 MVP를 완성하고, 발표와 시연 범위를 명확히 할 수 있었습니다.' },
    ],
    extraSections: [
      { id: 'vm-roles', insertAfter: 'features', label: 'ARCHITECTURE', heading: '시스템 아키텍처 · 서버 구성', items: [
        'Frontend VM — Next.js 기반 관제 화면, CCTV 스트림 표시, BBOX overlay, 사용자 화면 제공',
        'Flask VM — API Gateway, 인증·권한 처리, DB 저장, AI 이벤트 수신, 실시간 이벤트 기록',
        'AI VM — FastAPI 기반 YOLO 추론, ROI 기반 정차 판단, 이벤트 payload 생성',
        'DB VM — MySQL 기반 사용자·사고·탐지 로그·알림·파일 metadata 저장',
      ] },
      { id: 'ai-logic', insertAfter: 'flow', label: 'AI DETECTION LOGIC', heading: 'AI 탐지 및 이벤트 판단 구조', items: [
        'YOLOv11 탐지 결과를 bbox·class·confidence·track_id·source 등 표준화된 Detection 데이터로 변환',
        'bbox 좌표는 xyxy 형식 metadata로 명시해 프론트엔드 overlay 계산이 가능하도록 구성',
        'CCTV 원거리 차량 탐지를 보완하기 위해 프레임 상단 crop 탐지 구조 적용',
        '실시간 추론에서 원본 탐지 결과, 화면 표시용 탐지 결과, 사고 이벤트 판단 결과를 분리해 관리',
        'ROI 판단 시 bbox 중앙점이 아닌, 차량이 도로에 닿는 위치에 가까운 bbox 하단 중심점 사용',
        '차량별 track history 기준으로 프레임 간 이동량과 주변 차량 흐름을 비교해 정차 후보 판단',
        '일정 시간 이상 정차 상태 유지 및 cooldown 조건을 통과할 때 이벤트 생성',
        '동일 차량·동일 카메라/ROI에서 이벤트가 반복 발생하지 않도록 중복 방지 로직 적용',
      ] },
      { id: 'ai-experiment', insertAfter: 'flow', label: 'AI EXPERIMENT', heading: 'AI 모델 실험 및 Keras 기반 검증', items: [
        '최종 MVP에서는 YOLOv11 기반 차량 탐지 모델을 사용했지만, AI 모델 동작 원리를 이해하기 위해 Keras 기반 실험을 직접 진행',
        '차량·도로 위험 상황 탐지 문제를 이해하기 위해 데이터 전처리, 모델 학습, 예측 결과 확인 과정을 수행',
        'Keras 실험을 통해 이미지 데이터가 모델에 입력되고 학습 결과가 분류·판단 결과로 이어지는 과정을 확인',
        '최종 AI VM의 YOLO 탐지 결과를 단순히 사용하는 것이 아니라, 모델 입력·출력·성능 확인 관점에서 이해하고 점검',
        '이 경험을 바탕으로 AI 탐지 결과·confidence·bbox·이벤트 판단 흐름을 서비스 화면과 DB 구조에 연결하는 과정을 더 잘 이해',
      ] },
      { id: 'frontend-notes', insertAfter: 'flow', label: 'CONTROL UI', heading: '관제 화면 구현 포인트', items: [
        'CCTV 목록 조회 시 모든 스트림을 즉시 probing하지 않고, 선택된 CCTV 기준으로 stream·BBOX 조회',
        '브라우저가 AI VM을 직접 호출하지 않도록 Next.js API Route/프록시 경로를 통해 접근',
        'AI VM에서 반환된 frame_width·frame_height·bbox_format·detections metadata 검증',
        '원본 프레임 좌표를 화면 비율 기준 percentage 좌표로 변환해 BBOX overlay 표시',
        '이벤트 상세 화면에서 스냅샷, 탐지 정보, MP4 replay를 확인할 수 있도록 구성',
        'HTTPS 환경에서 /ai-media 프록시를 통해 AI VM 주소 노출 없이 영상 접근 가능하도록 설계',
      ] },
      { id: 'infra', insertAfter: 'flow', label: 'INFRA & OPS', heading: 'VM 분리 운영 및 배포 점검', items: [
        'DB VM — MySQL 직접 설치, schema import, table count 및 seed data 검증',
        'Flask VM — Python venv, Flask dependency 설치, DB 연결 및 /health 확인',
        'Frontend VM — Node.js/npm 기반 Next.js 실행, Nginx HTTPS reverse proxy 구성',
        'AI VM — FastAPI 기반 inference 서비스, systemd 기반 서비스 제어',
        '네트워크 정책 — Flask VM만 DB 3306 접근, Frontend VM만 Flask 5000 접근하도록 제한',
        '.env·.env.local·.venv·node_modules는 Git에 올리지 않고 VM별 환경변수로 관리',
        '서버 실행 상태와 DB 데이터는 Git pull만으로 복제되지 않아, 운영 문서로 기준을 별도 정리',
      ] },
      { id: 'security', insertAfter: 'flow', label: 'SECURITY', heading: '보안 및 안정화 점검', items: [
        'AI VM·Flask VM 간 내부 API 요청은 내부 token 기반으로 보호',
        'JWT 인증과 role 기반 권한 decorator로 보호 API 접근 제어',
        '가입 직후 계정은 PENDING 상태로 생성, ACTIVE 상태가 되어야 로그인 가능하도록 설계',
        '파일 업로드 시 원본 파일명 대신 UUID 저장명과 SHA-256 해시 사용',
        'AI 이벤트 저장과 Socket.IO 발송을 분리해 DB transaction 실패와 알림 실패가 섞이지 않도록 구성',
        '보안 로그와 서버 health check로 운영 상태를 점검하는 흐름을 문서화',
      ] },
      { id: 'qa', insertAfter: 'trouble', label: 'VERIFICATION', heading: '검증 및 QA', items: [
        'Flask health check 200 OK 확인',
        'Flask pytest 통과',
        'Frontend HTTPS 접속 확인 및 Nginx HTTPS reverse proxy 동작 확인',
        'Socket.IO polling 200 OK 및 sid 반환 확인',
        '/api/events 응답의 AI media URL이 HTTPS /ai-media 경로로 변환되는지 확인',
        'AI VM compileall 통과',
        '브라우저 기준 로그인 · 이벤트 목록 · 상세 · 스냅샷 · 영상 재생 · 다운로드 · 실시간 알림 확인',
      ] },
      { id: 'achievements', insertAfter: 'trouble', label: 'ACHIEVEMENTS', heading: '성과', items: [
        'AI 탐지 → 이벤트 저장 → 실시간 알림 → 관제 화면 표시로 이어지는 End-to-End 흐름 구현',
        'Frontend VM · Flask VM · AI VM · DB VM을 분리한 실서비스형 AI 시스템 구조 경험',
        'YOLOv11 기반 정차 차량 탐지와 ROI 기반 이상 이벤트 판단 구조 이해 및 통합',
        '실시간 Socket.IO 알림, 영상 replay, 스냅샷, BBOX overlay 등 관제 시스템 핵심 UI 구성',
        '서버 health check, HTTPS 프록시, AI media proxy, DB 연결 등 운영 점검 경험 확보',
        '최종 발표·시연을 위한 사용설명서, 관리자 매뉴얼, 릴리즈 체크리스트, 인프라 문서 정리',
      ] },
    ],
    screenshots: [
      { src: '/images/staccato-01.png', alt: 'STACCATO 메인 화면', caption: '메인 화면 · AI 기반 고속도로 정차 탐지 소개', category: '서비스 소개' },
      { src: '/images/staccato-10-dashboard-live.png', alt: 'STACCATO 통합 관제 대시보드 실시간 화면', caption: '통합 관제 대시보드 (실제 운영 화면) · 전체 이벤트 100건, CCTV 온라인 상태 실시간 확인', category: '관제 대시보드' },
      { src: '/images/staccato-11-cctv-bbox.png', alt: 'STACCATO CCTV 관제 BBOX 탐지 화면', caption: 'CCTV 관제 실시간 화면 · YOLO 탐지 BBOX(car 73%) 오버레이 실제 표시', category: '관제 대시보드' },
      { src: '/images/staccato-05.png', alt: 'STACCATO 모델 성능 비교 화면', caption: '모델 성능 비교 · YOLO11 · Keras YOLOv8 · RT-DETR 비교', category: 'AI 탐지 결과' },
      { src: '/images/staccato-12-detection-stopped-vehicle.png', alt: 'STACCATO 정차 차량 객체 탐지 결과', caption: '실제 탐지 결과 · STOPPED_VEHICLE 이벤트 판단 및 confidence 표시 (터널 구간)', category: 'AI 탐지 결과' },
      { src: '/images/staccato-14-replay-shoulder-stop.png', alt: 'STACCATO 갓길 정차 이벤트 리플레이 화면', caption: '이벤트 리플레이 · SHOULDER_STOP 갓길 정차 탐지, 스냅샷·영상 재생 및 이벤트 목록 확인', category: 'AI 탐지 결과' },
      { src: '/images/staccato-04.png', alt: 'STACCATO 신고 목록 화면', caption: '신고 목록 · 접수된 신고 조회 및 AI 분석 요청', category: '신고 · 이벤트 관리' },
      { src: '/images/staccato-06.png', alt: 'STACCATO 리플레이 화면', caption: '리플레이 · 탐지 이벤트 영상 재생 및 상세 확인', category: '신고 · 이벤트 관리' },
      { src: '/images/staccato-07.png', alt: 'STACCATO 알림 화면', caption: '알림 · 실시간 사고 이벤트 알림 및 상세 정보', category: '신고 · 이벤트 관리' },
      { src: '/images/staccato-08.png', alt: 'STACCATO 운영 환경 정보 화면', caption: '운영 환경 정보 · VM별 인프라 구성 현황', category: '운영 · 보안' },
      { src: '/images/staccato-15-bug-report-board.png', alt: 'STACCATO 버그리포트 게시판 실제 운영 화면', caption: '버그리포트 게시판 (실제 운영) · 정기점검·이슈 조치 이력 20건 관리', category: '운영 · 보안' },
      { src: '/images/staccato-16-security-log-auto-report.png', alt: 'STACCATO 자동 보안 로그 게시판', caption: '자동 보안 로그 · 3시간 주기 자동 접속 로그 리포트 생성·다운로드 확인', category: '운영 · 보안' },
    ],
    documents: [{ label: '시연 영상', url: 'https://youtu.be/l2xOOqAfufo' }, { label: '발표자료', url: '/docs/STACCATO-presentation.pdf' }, { label: '결과보고서', placeholder: true }, { label: '사용자 매뉴얼', placeholder: true }, { label: '관리자 매뉴얼', placeholder: true }, { label: '릴리즈 체크리스트', placeholder: true }, { label: '코드리뷰', placeholder: true }],
    deploy: { label: 'STACCATO Live Demo', url: 'https://mbc-sw.iptime.org:3221/' },
    github: { label: 'GitHub 저장소', url: 'https://github.com/staccato-ai-highway-control/staccato-ai-highway-control' },
    retrospective: '모델 정확도만으로 AI 서비스가 완성되지는 않습니다. 추론 결과가 API와 DB를 거쳐 사용자의 판단으로 이어지고, 운영자가 문제를 점검할 수 있어야 실제로 사용할 수 있는 서비스가 된다는 점을 배웠습니다.', accent: '#70e1f5',
    proofCompetencies: ['AI 서비스 통합', '객체탐지', 'VM 운영'],
    proofEvidence: ['모델 성능표', '관제 화면', 'VM 구조도', '운영 점검'],
    architectureFlow: [
      { label: 'User Browser', sub: '관제자 접속' },
      { label: 'Frontend VM', sub: 'Next.js · BBOX overlay' },
      { label: 'Flask API Gateway', sub: '인증 · DB 저장' },
      { label: 'AI VM / YOLO Detection', sub: 'FastAPI · YOLOv11' },
      { label: 'MySQL DB', sub: '탐지 로그 · 이벤트 저장' },
      { label: 'Socket.IO Alert', sub: '실시간 알림' },
      { label: 'CCTV Monitoring UI', sub: '관제 화면 반영' },
    ],
    aiPipeline: [
      { label: 'YOLO 탐지', sub: 'bus/car/truck 분류' },
      { label: 'ByteTrack 추적', sub: 'track_id 기반 동일 차량 유지' },
      { label: 'bottom_center 계산', sub: 'bbox 하단 중심점 위치 변화 분석' },
      { label: 'ROI 판단', sub: 'ROI 영역 내 위치·이동 상태 분석' },
      { label: '위험 감지', sub: '갓길 정차 · 급감속 이벤트 생성' },
    ],
    aiPipelineNote: 'YOLO로 탐지한 차량을 ByteTrack으로 프레임 간 추적하고, bbox 하단 중심점(bottom_center)의 위치 변화를 ROI 기준으로 분석해 갓길 정차·급감속 같은 위험 상황을 이벤트로 생성합니다.',
    aiPipelineImage: { src: '/images/staccato-13-detection-stopped-vehicle-2.png', alt: 'STACCATO 정차 차량 객체 탐지 결과', caption: '실제 탐지 결과 · STOPPED_VEHICLE 3.0s 지속 판단, confidence 0.86·0.89' },
    modelExperiments: [
      { model: 'RT-DETR-L', precision: '0.8989', recall: '0.8558', f1: '0.8768', map50: '0.9107', map5095: '0.7681', note: '정확도 최고' },
      { model: 'YOLO11s 640 stage2', precision: '0.8850', recall: '0.8456', f1: '0.8648', map50: '0.9089', map5095: '0.7587', note: '경량·실시간 후보' },
      { model: 'YOLO11s CVAT balanced', precision: '0.9210', recall: '0.8670', f1: '0.8932', map50: '0.9290', map5095: '0.7680', note: '최종 선정 모델' },
      { model: 'YOLO11n stage2', precision: '0.8839', recall: '0.8246', f1: '0.8532', map50: '0.8949', map5095: '0.7329', note: '경량 후보' },
      { model: 'YOLO11n baseline', precision: '0.8714', recall: '0.7766', f1: '0.8213', map50: '0.8647', map5095: '0.7144', note: '기준 모델' },
    ],
    modelEvidenceNote: '최종 적용 모델은 YOLO11s CVAT balanced입니다. RT-DETR-L은 mAP50-95 기준으로 높은 성능을 보였지만, 실시간 CCTV 스트림 처리, ByteTrack 추적, ROI 기반 이벤트 판단, 관제 화면 연동까지 고려했을 때 YOLO11s CVAT balanced가 가장 안정적인 균형을 보였습니다.',
    datasetSummary: {
      title: 'YOLO11s CVAT balanced Dataset',
      items: [
        '20,000 images',
        'train 16,000 · val 2,000 · test 2,000 (80% · 10% · 10%)',
        'car / truck / bus 3-class relabeling',
        'highway CCTV vehicle detection',
        'balanced dataset for real-time detection',
        'connected with ByteTrack, bottom_center, ROI event logic',
      ],
    },
    operationChecks: [
      'SSH 기반 VM 접속 정상 (AI · Flask · Frontend · DB)',
      'Flask API health check 200 OK 확인',
      'Flask pytest 응답 계약 테스트 통과',
      'Frontend HTTPS 접속 및 Nginx reverse proxy 동작 확인',
      'CCTV 스트림 및 객체탐지 BBOX overlay 정상 표시 확인',
      'MySQL DB 연결 및 이벤트 저장 확인',
      'Socket.IO 실시간 알림 연결 및 sid 반환 확인',
      '브라우저 기준 로그인 · 이벤트 목록 · 스냅샷 · 영상 재생 QA (8개 이상 화면)',
    ],
  },
  {
    slug: 'erp', name: 'CommerceOps ERP', type: 'Full-stack · Personal Project', period: 'v1.0 배포 완료',
    tagline: '쇼핑몰 사용자 기능부터 상품·주문·재고·물류·회계·권한·AI 운영까지 하나의 데이터 흐름으로 연결한 AI 커머스 ERP',
    teamNote: '개인 프로젝트 · 기획부터 배포까지 전체 구현',
    categories: ['Full-stack', 'Infra / Deployment'],
    highlights: ['쇼핑몰 + ERP', 'Permission 권한', '재고·물류·회계', 'AI 운영 기능', 'Docker Compose', 'AWS HTTPS 배포'],
    techHighlights: ['Spring Boot', 'Next.js', 'MySQL', 'Python', 'Docker', 'AWS'],
    resumeHighlight: {
      role: '쇼핑몰·관리자 ERP 전체 기능 설계 및 구현, AI 운영 기능 구성, AWS 배포',
      contribution: '개인 프로젝트 · 기획부터 배포까지 전체 구현',
      achievement: '상품·주문·재고·생산·바코드·출고·배송·회계·권한·AI 운영 기능을 하나의 데이터 흐름으로 연결하고 AWS EC2 Docker Compose HTTPS 환경으로 배포',
    },
    summary: "Next.js와 Spring Boot를 기반으로 사용자 쇼핑몰과 관리자 ERP를 함께 구현한 개인 프로젝트입니다. 상품·카테고리·주문·결제에서 시작해 재고·창고·생산·바코드·출고·배송·회계·권한 관리까지 운영 흐름을 확장했고, ERP 데이터를 AI 학습 후보 데이터로 연결해 상품 추천·수요 예측·리뷰 분석·이상 주문 탐지 등 관리자 의사결정 보조 화면을 구현했습니다. AWS EC2에 MySQL·Spring Boot·Next.js·Nginx를 Docker Compose로 구성하고 Let's Encrypt HTTPS 환경으로 배포했습니다.",
    background: "쇼핑몰의 상품·주문·결제와 관리자의 재고·물류·회계·권한을 분리된 기능이 아니라 하나의 데이터 흐름으로 연결하고, 이 운영 데이터를 AI 의사결정 보조 기능까지 확장할 수 있는 구조로 구현하기 위해 개인적으로 시작했습니다.",
    role: ['쇼핑몰·관리자 ERP 전체 기능 설계 및 구현', 'AI 운영 기능 구성', 'AWS EC2 Docker Compose HTTPS 배포'],
    features: ['사용자 쇼핑몰', '관리자 대시보드', '상품·카테고리·배너 CMS', '주문·결제·환불 관리', '재고·생산·바코드 관리', '출고·배송·반품 관리', '회계·정산 관리', '권한 기반 관리자 메뉴', 'AI 운영 대시보드'],
    techStack: ['Next.js', 'TypeScript', 'React', 'Spring Boot', 'Java 17', 'Spring Security', 'JWT', 'JPA', 'MySQL 8', 'Flyway', 'Python', 'PyTorch', 'Docker', 'Docker Compose', 'Nginx', 'AWS EC2', "Let's Encrypt"],
    systemFlow: [
      { label: 'Customer / Admin', description: '쇼핑몰 사용자와 관리자의 요청' },
      { label: 'Next.js', description: '사용자 쇼핑몰과 관리자 ERP 화면 제공' },
      { label: 'Spring Boot API', description: 'JWT 인증, Role·Permission 검증, ERP 도메인 로직 처리' },
      { label: 'MySQL', description: '상품·주문·재고·물류·회계 등 운영 데이터 저장' },
      { label: 'AI Dataset Export', description: 'ERP 데이터를 마스킹·합성해 AI 학습 후보 데이터로 변환' },
      { label: 'Admin AI 운영 화면', description: '추천·예측·분석·탐지 결과를 관리자가 검토' },
    ],
    troubleshooting: [
      {
        title: 'Role만으로는 부족한 관리자 권한 체계를 프론트-백엔드 전반에 통일',
        situation: '상품·주문·재고·배송·회계 기능이 늘어나며 ADMIN·MANAGER 같은 Role만으로는 화면 메뉴 노출과 실제 서버 실행 권한을 세밀하게 나누기 어려웠습니다.',
        solution: '백엔드는 Role을 1차 조건으로 유지하면서 permission code 기반 세부 권한을 추가 검증하고, 프론트엔드는 서버가 반환한 permission code로 메뉴와 실행 버튼을 제어해 두 계층의 권한 판단 기준을 일치시켰습니다.',
        result: '기능이 늘어나도 화면에 보이는 메뉴와 실제로 실행 가능한 서버 권한이 어긋나지 않는 일관된 권한 체계를 갖췄습니다.',
      },
    ],
    screenshots: [{ src: '/images/erp-01.png', alt: 'CommerceOps 쇼핑몰 메인 화면', caption: '사용자 쇼핑몰 메인 화면 · 상품 검색 · 메인 배너 · 로그인/마이페이지 진입', category: '사용자 쇼핑몰' }],
    documents: [
      { label: 'API 명세', url: 'https://github.com/DDORINY/commerceops-erp/blob/main/docs/architecture/API_REFERENCE.md' },
      { label: 'DB 스키마', url: 'https://github.com/DDORINY/commerceops-erp/blob/main/docs/architecture/DATABASE_SCHEMA.md' },
      { label: 'AI 데모 가이드', url: 'https://github.com/DDORINY/commerceops-erp/blob/main/docs/ai/PORTFOLIO_AI_DEMO_GUIDE.md' },
      { label: 'AWS HTTPS 운영 가이드', url: 'https://github.com/DDORINY/commerceops-erp/blob/main/docs/operations/AWS_SINGLE_EC2_HTTPS.md' },
    ],
    deploy: { label: 'CommerceOps Live Demo', url: 'https://commerceops.ddoriny.com' },
    github: { label: 'GitHub 저장소', url: 'https://github.com/DDORINY/commerceops-erp' },
    retrospective: '모델이나 화면 하나만으로는 서비스가 완성되지 않는다는 것을 다시 확인했습니다. 상품부터 재고·물류·회계·권한까지 이어지는 데이터 흐름을 먼저 안정적으로 설계해야 그 위에 AI 추천·예측·이상 탐지 같은 기능이 의미를 가진다는 것을 CommerceOps ERP를 v1.0까지 완성하며 체감했습니다. 배포 환경까지 직접 구성하면서 기능 구현과 운영 안정성을 함께 고려하는 개발자로 한 단계 성장했습니다.', accent: '#8b80ff',
    proofCompetencies: ['풀스택 ERP 설계', 'AI 운영 통합', 'AWS 배포'],
    proofEvidence: ['5개 기술 영역', 'AI 운영 대시보드', 'AWS HTTPS 배포'],
    projectAreas: [
      {
        id: 'frontend', label: 'Frontend',
        summary: 'Next.js와 TypeScript를 기반으로 일반 사용자 쇼핑몰과 관리자 ERP를 하나의 프론트엔드 애플리케이션으로 구성했습니다.',
        techStack: ['Next.js', 'React', 'TypeScript', 'REST API', 'JWT', 'Responsive UI'],
        architecture: [
          { label: 'Customer Store', description: '상품 목록·상세·장바구니·주문·마이페이지' },
          { label: 'Admin ERP', description: '상품·주문·재고·배송·회계·권한·AI 운영' },
          { label: 'Service Layer', description: '도메인별 API 호출 함수와 응답 처리' },
          { label: 'Spring Boot API', description: '인증과 ERP 비즈니스 데이터 제공' },
        ],
        responsibilities: [
          '사용자 쇼핑몰과 관리자 ERP 화면 전체 구성',
          '상품·카테고리·배너 관리 UI 구현',
          '장바구니·주문·결제·마이페이지 구현',
          '재고·창고·생산·바코드 관리 화면 구현',
          '출고·송장·배송·반품 관리 화면 구현',
          '직원·부서·직급·권한 관리 화면 구현',
          '회계·정산·운영 분석 화면 구현',
          'AI 운영 화면 구현',
        ],
        features: ['사용자 쇼핑몰', '관리자 대시보드', '상품·카테고리·배너 CMS', '주문·결제·환불 관리', '재고·생산·바코드 관리', '출고·배송·반품 관리', '회계·정산 관리', '권한 기반 관리자 메뉴', 'AI 운영 대시보드'],
        implementationPoints: [
          '화면에서 API를 직접 호출하지 않고 도메인별 Service Layer로 분리',
          '사용자 쇼핑몰과 관리자 ERP 라우팅 및 레이아웃 분리',
          'JWT 인증 상태에 따라 보호 화면 접근 제어',
          '백엔드에서 반환한 permission code를 기준으로 메뉴와 실행 버튼 제어',
          '목록·상세·등록·수정 화면의 loading, success, error 상태 분리',
          '관리자 기능이 많아져도 유지보수할 수 있도록 도메인 단위로 화면 구성',
        ],
        troubleshooting: [
          {
            title: '관리자 기능 증가에 따른 화면 복잡도',
            problem: '상품·주문·재고·배송·회계 기능이 증가하면서 하나의 관리자 구조에서 메뉴와 화면 흐름이 복잡해졌습니다.',
            solution: '관리 기능을 도메인 단위 메뉴와 서비스 계층으로 분리하고, 공통 목록·상세·폼 패턴을 재사용했습니다.',
            result: '기능 추가 시 영향 범위가 줄고 관리자 화면의 탐색 구조가 명확해졌습니다.',
          },
          {
            title: '관리자 Role과 실제 기능 권한 불일치',
            problem: 'ADMIN 또는 MANAGER 역할만으로 메뉴를 표시하면 실제 실행 권한과 UI가 달라질 수 있었습니다.',
            solution: '백엔드에서 effective permission 목록을 받아 메뉴와 변경 버튼을 permission code 기준으로 제어했습니다.',
            result: '화면 접근 상태와 서버 권한 정책의 일관성을 높였습니다.',
          },
        ],
        evidence: [
          { label: '사용자 영역', value: '상품·장바구니·주문·마이페이지' },
          { label: '관리자 영역', value: '상품부터 AI 운영까지 통합' },
          { label: '권한 UI', value: 'Permission code 기반' },
          { label: 'API 연결', value: '도메인별 Service Layer' },
        ],
      },
      {
        id: 'backend', label: 'Backend',
        summary: 'Spring Boot와 Java 17을 기반으로 인증, 권한, 상품, 주문, 재고, 물류, 회계 등 ERP 전체 비즈니스 로직을 구현했습니다.',
        techStack: ['Spring Boot', 'Java 17', 'Spring Security', 'JWT', 'JPA', 'Hibernate', 'REST API', 'JUnit'],
        architecture: [
          { label: 'Controller', description: 'HTTP 요청과 응답 계약 처리' },
          { label: 'Service', description: 'ERP 도메인 비즈니스 로직과 트랜잭션' },
          { label: 'Repository', description: 'JPA 기반 데이터 접근' },
          { label: 'MySQL', description: '쇼핑몰 및 ERP 운영 데이터 저장' },
        ],
        responsibilities: [
          'JWT 로그인·Refresh Token·로그아웃 구현',
          '공통 API 응답과 페이지 응답 구조 구성',
          '상품·카테고리·배너 API 구현',
          '장바구니·주문·결제·환불 API 구현',
          '재고 예약·차감·이동 API 구현',
          '생산 입고·바코드·출고 API 구현',
          '송장·배송 추적·반품 API 구현',
          '회계 원장·거래·기간 마감 API 구현',
          '직원·조직·권한 그룹 API 구현',
          '관리자 감사 로그 구현',
          'AI 데이터셋 Export와 운영 지표 API 구현',
        ],
        features: ['JWT 인증', 'Role 기반 접근 제어', 'Permission code 기반 세부 권한', '상품·주문·재고 도메인 API', '창고·생산·출고·배송 API', '회계·정산 API', '감사 로그', 'AI 데이터셋 Export'],
        implementationPoints: [
          'Controller, Service, Repository, Entity, DTO 계층 분리',
          'ApiResponse와 PageResponse를 사용한 일관된 응답 계약',
          'Role 검증 후 PermissionChecker를 이용한 세부 실행 권한 재검증',
          '주문 생성부터 결제·재고 예약·출고·회계 반영까지 상태 흐름 연결',
          '관리자 변경 작업에 before/after JSON과 요청 정보를 감사 로그로 저장',
          '도메인 서비스에 트랜잭션 경계를 명확히 설정',
        ],
        troubleshooting: [
          {
            title: 'Role만으로 부족한 관리자 권한 구조',
            problem: 'MANAGER와 ADMIN 역할만으로는 상품 수정, 환불, 재고 변경 등 세부 기능을 안전하게 나누기 어려웠습니다.',
            solution: 'Role을 1차 접근 조건으로 사용하고 Controller 실행 시 permission code를 추가 검증하도록 확장했습니다.',
            result: '관리자 역할을 유지하면서 기능 단위 권한 제어가 가능해졌습니다.',
          },
          {
            title: '주문·결제·재고 상태 정합성',
            problem: '주문 생성, 결제 승인, 재고 차감이 각각 처리되면 일부 단계 실패 시 데이터가 불일치할 수 있었습니다.',
            solution: '상태 전이 순서와 트랜잭션 범위를 정의하고 재고 예약과 결제 상태를 분리해 관리했습니다.',
            result: '주문 처리 상태를 추적하기 쉬워지고 데이터 정합성이 개선되었습니다.',
          },
        ],
        evidence: [
          { label: '인증', value: 'JWT Access·Refresh Token' },
          { label: '권한', value: 'Role + Permission Code' },
          { label: 'API', value: '쇼핑몰·ERP 전체 도메인' },
          { label: '감사', value: '변경 전후 JSON 로그' },
        ],
      },
      {
        id: 'ai', label: 'AI',
        summary: 'ERP 운영 데이터를 AI 학습 데이터로 변환하고 추천·예측·분석 결과를 관리자가 검토할 수 있는 운영 화면으로 연결했습니다.',
        techStack: ['Python', 'PyTorch', 'pandas', 'scikit-learn', 'JSON', 'JSONL', 'Baseline Model'],
        architecture: [
          { label: 'ERP Data', description: '상품·재고·주문·리뷰 운영 데이터' },
          { label: 'Dataset Export', description: 'Spring Boot API 기반 데이터셋 추출' },
          { label: 'Masking', description: '개인정보 제거 및 합성 데이터 구성' },
          { label: 'Training', description: 'Python baseline 학습·평가' },
          { label: 'Admin AI UI', description: '추천·예측·분석 결과 검토' },
        ],
        responsibilities: [
          'AI 데이터셋 Export 구조 설계',
          '개인정보 마스킹 기준 적용',
          '합성 샘플 데이터 구성',
          '수요 예측 baseline 학습·평가 스크립트 구성',
          '리뷰 감성 baseline 학습·평가 스크립트 구성',
          '상품 추천 후보 화면 구현',
          '수요 예측 화면 구현',
          '리뷰 분석 화면 구현',
          '이상 주문 탐지 화면 구현',
          'AI 리스크 알림과 리포트 화면 구현',
        ],
        features: ['상품 추천 후보', '상품 수요 예측', '리뷰 감성 분석', '이상 주문 탐지', '재고·정산 리스크 알림', 'AI 근거 리포트', '합성 데이터 학습', '개인정보 마스킹'],
        implementationPoints: [
          '실제 고객 데이터 대신 개인정보가 없는 합성 샘플 데이터 사용',
          '운영 DB 원본과 모델 체크포인트를 Git 추적 대상에서 제외',
          '데이터셋 Export, 전처리, 학습, 평가, 리포트 단계를 분리',
          'PyTorch 환경에서는 .pt 모델을 생성하고 미설치 환경에서는 메타데이터로 입력 구조 검증',
          'AI 결과를 자동 실행이 아닌 관리자 의사결정 보조 지표로 제공',
          '현재 운영 화면은 baseline 설명과 rule-based 점수를 조합해 안정적인 데모 제공',
        ],
        troubleshooting: [
          {
            title: '실제 운영 데이터가 없는 AI 포트폴리오',
            problem: '개인 프로젝트에서는 실제 고객 주문·리뷰 데이터를 안전하게 확보할 수 없었습니다.',
            solution: '개인정보 없는 합성 데이터를 구성하고 동일한 Export·학습·평가 구조를 재현했습니다.',
            result: '실제 데이터 없이도 ERP 데이터가 AI 운영 화면까지 연결되는 구조를 검증할 수 있었습니다.',
          },
          {
            title: 'AI 데모 안정성과 실제 추론 범위',
            problem: '배포 서버에서 모든 모델을 실시간 추론하면 데모 안정성과 서버 자원 문제가 발생할 수 있었습니다.',
            solution: 'baseline 모델 학습 구조는 유지하고 운영 화면에서는 rule-based 점수와 모델 설명을 함께 사용했습니다.',
            result: '제한된 서버 환경에서도 AI 운영 흐름을 안정적으로 시연할 수 있게 되었습니다.',
          },
        ],
        evidence: [
          { label: '학습 모델', value: '수요 예측·리뷰 감성 baseline' },
          { label: '운영 기능', value: '추천·예측·분석·탐지' },
          { label: '데이터', value: '합성 샘플 + 마스킹 Export' },
          { label: '적용 방식', value: '관리자 의사결정 보조' },
        ],
      },
      {
        id: 'database', label: 'Database',
        summary: '쇼핑몰 거래 데이터와 ERP 운영 데이터를 하나의 MySQL 구조로 연결하고 Flyway로 스키마 변경 이력을 관리했습니다.',
        techStack: ['MySQL 8', 'JPA', 'Hibernate', 'Flyway', 'H2 Test', 'ERD'],
        architecture: [
          { label: 'Commerce', description: '회원·상품·장바구니·주문·결제' },
          { label: 'Inventory', description: 'SKU·창고·재고·생산·바코드' },
          { label: 'Logistics', description: '출고·송장·배송·반품' },
          { label: 'Management', description: '직원·권한·회계·감사 로그' },
        ],
        responsibilities: [
          '회원·직원·부서·권한 테이블 설계',
          '상품·카테고리·SKU·배너 테이블 설계',
          '주문·주문 항목·결제 테이블 설계',
          '창고·재고·예약·재고 이동 테이블 설계',
          '생산·입고·바코드 테이블 설계',
          '출고·송장·배송 추적·반품 테이블 설계',
          '회계 원장·거래·정산 테이블 설계',
          '감사 로그와 운영 설정 테이블 설계',
          'Flyway 마이그레이션 관리',
        ],
        features: ['주문 상품 Snapshot', '결제 Idempotency Key', '재고와 예약 재고 분리', 'SKU와 상품 마스터 분리', '재고 변경 이력', '배송 추적 이벤트', '회계 원장·거래', '관리자 감사 로그', 'Flyway 버전 관리'],
        implementationPoints: [
          '주문 시 상품명·가격·옵션을 Snapshot으로 저장',
          '결제 중복 실행 방지를 위해 idempotency key 사용',
          'warehouse stock과 stock reservation을 분리',
          '재고 변경 전후 수량과 원인을 inventory log에 기록',
          '상품과 SKU를 분리해 옵션·바코드 단위 재고 관리',
          '출고·배송·반품 이벤트를 주문과 별도 이력으로 관리',
          '회계 거래를 reference type과 reference id로 원본 업무 데이터와 연결',
          'Flyway를 이용해 스키마 변경 순서와 배포 이력 관리',
        ],
        troubleshooting: [
          {
            title: '기능 확장에 따른 스키마 변경 관리',
            problem: '상품 중심 구조에서 재고·생산·배송·회계까지 확장되며 DB 변경이 반복되었습니다.',
            solution: 'JPA Entity 변경만 사용하는 대신 Flyway 마이그레이션 파일로 변경 순서를 관리했습니다.',
            result: '환경별 스키마 차이를 줄이고 배포 시 DB 변경 내역을 추적할 수 있게 되었습니다.',
          },
          {
            title: '상품 재고와 SKU 재고의 역할 분리',
            problem: '옵션 상품이 추가되면서 상품 단위 재고만으로는 바코드와 실제 재고를 관리하기 어려웠습니다.',
            solution: '상품 마스터와 SKU를 분리하고 SKU별 바코드와 안전재고를 관리하도록 확장했습니다.',
            result: '옵션·바코드·창고 단위로 확장 가능한 재고 구조를 만들었습니다.',
          },
        ],
        evidence: [
          { label: 'DBMS', value: 'MySQL 8' },
          { label: '마이그레이션', value: 'Flyway V1 이상 누적 관리' },
          { label: '주요 영역', value: 'Commerce·Inventory·Logistics·Accounting' },
          { label: '이력 관리', value: '재고·배송·감사 로그' },
        ],
      },
      {
        id: 'infrastructure', label: 'Infrastructure',
        summary: "AWS EC2에 Docker Compose 기반 운영 환경을 구성하고 Nginx Reverse Proxy와 Let's Encrypt를 이용해 HTTPS로 배포했습니다.",
        techStack: ['AWS EC2', 'Docker', 'Docker Compose', 'Nginx', "Let's Encrypt", 'Certbot', 'Linux', 'systemd', 'HTTPS'],
        architecture: [
          { label: 'Browser', description: 'commerceops.ddoriny.com HTTPS 접속' },
          { label: 'Nginx', description: 'Reverse Proxy 및 TLS 종료' },
          { label: 'Next.js', description: 'Frontend Container :3000' },
          { label: 'Spring Boot', description: 'Backend Container :8080' },
          { label: 'MySQL', description: 'Database Container :3306' },
        ],
        responsibilities: [
          'AWS EC2 서버 환경 구성',
          'Dockerfile과 Docker Compose 운영 구조 구성',
          'MySQL·Backend·Frontend·Nginx 컨테이너 분리',
          'Nginx Reverse Proxy 설정',
          '도메인과 Elastic IP 연결',
          "Let's Encrypt HTTPS 인증서 발급",
          'HTTP에서 HTTPS 301 리다이렉트 구성',
          'Certbot 인증서 자동 갱신 구성',
          'Docker Volume을 이용한 DB·업로드·인증서 유지',
          '배포 후 컨테이너·API·HTTPS 상태 검증',
        ],
        features: ['AWS EC2 배포', 'Docker Compose', 'Nginx Reverse Proxy', 'HTTPS', 'Certbot 자동 갱신', 'Container Health Check', 'Docker Volume', '내부 네트워크 격리'],
        implementationPoints: [
          '외부에는 80과 443만 공개하고 3000·8080·3306은 Docker 내부 네트워크에서만 사용',
          'Nginx가 / 요청은 Frontend로, /api와 /uploads는 Backend로 전달',
          'MySQL health check 성공 이후 Backend를 시작하도록 의존성 구성',
          'MySQL 데이터, 업로드 파일, 인증서를 Named Volume으로 유지',
          '인증서가 없는 최초 실행에서는 HTTP 설정으로 기동 후 Certbot 발급',
          '인증서 발급 후 Nginx를 재생성해 HTTPS와 301 redirect 활성화',
          'systemd timer와 Certbot container를 이용해 인증서 자동 갱신',
        ],
        troubleshooting: [
          {
            title: '인증서 발급 전 Nginx 시작 실패',
            problem: '최초 배포 시 인증서 파일이 없으면 HTTPS Nginx 설정을 바로 사용할 수 없었습니다.',
            solution: '인증서 존재 여부에 따라 HTTP bootstrap 설정과 HTTPS 설정을 선택하도록 분리했습니다.',
            result: '최초 배포에서도 서비스가 정상 기동하고 이후 HTTPS로 안전하게 전환할 수 있게 되었습니다.',
          },
          {
            title: '제한된 EC2 메모리에서 다중 컨테이너 운영',
            problem: 'MySQL, Spring Boot, Next.js, Nginx를 한 EC2에서 실행하면서 메모리 부족 가능성이 있었습니다.',
            solution: '컨테이너별 memory limit과 JVM·Node 메모리 옵션을 설정하고 MySQL 설정을 경량화했습니다.',
            result: '단일 EC2 환경에서 전체 서비스를 안정적으로 구동할 수 있었습니다.',
          },
        ],
        evidence: [
          { label: '배포', value: 'AWS EC2' },
          { label: '구성', value: 'MySQL·Backend·Frontend·Nginx' },
          { label: '보안', value: 'HTTPS·내부 포트 격리' },
          { label: '운영', value: 'Health Check·Certbot Timer' },
        ],
      },
    ],
  },
  {
    slug: '404rnf', name: '404 R·N·F AI', type: 'AI 낙하물 탐지 · Mini Project', period: 'Mini Project',
    tagline: 'AI 객체 탐지와 실시간 알림을 결합해 도로 위 낙하물 위험을 탐지·분석·관리하는 안전 주행 플랫폼',
    teamNote: '팀 프로젝트(팀장) · 개인 기여도 약 80% 이상',
    categories: ['AI / Computer Vision'],
    highlights: ['YOLOv8', 'RT-DETR', 'AI 모델 비교', 'Flask-SocketIO', 'DB 설계', '팀장'],
    techHighlights: ['Flask', 'YOLOv8', 'RT-DETR', 'MySQL', 'SQLAlchemy', 'LLM'],
    resumeHighlight: {
      role: '팀장, Flask 백엔드 구조 설계, DB 모델링, 관리자 기능, AI 모델 비교분석 구현',
      contribution: '팀장 · 개인 기여도 약 80% 이상',
      achievement: '신고 → AI 분석 → 위험도 분류 → 실시간 알림 → 관리자 처리까지 End-to-End 흐름 구현, YOLOv8·RT-DETR·YOLOv8-p2 3개 모델 비교분석 기능 구현',
    },
    summary: '단순 신고 접수 서비스가 아니라, AI 탐지 → 위험도 분석 → 알림 생성 → 관리자 확인 → 지도 기반 모니터링으로 이어지는 하나의 흐름을 완성하는 데 집중한 프로젝트입니다. 도로 위 낙하물 이미지·영상을 YOLOv8 · RT-DETR 기반으로 탐지해 위험도를 주의·위험·긴급 단계로 분류하고, 위험 신호는 Flask-SocketIO로 관리자 화면에 즉시 전달합니다. 지도 기반 위험 시각화와 경로 위험 분석까지 연결해 실제 운영 가능한 안전 주행 플랫폼 형태로 구현했습니다.',
    background: '도로 위 낙하물은 운전자에게 즉각적인 위험이 되지만, 발견과 공유가 늦어지면 2차 사고로 이어질 수 있습니다. 사용자가 직접 신고한 이미지·영상을 기반으로 AI가 위험 객체를 분석하고 관리자가 빠르게 확인할 수 있는 구조가 필요하다고 판단했고, 신고 → AI 분석 → 실시간 알림 → 관리자 처리까지의 과정을 하나의 서비스 흐름으로 연결하는 것을 목표로 팀 프로젝트를 시작했습니다.',
    role: [
      '팀장으로서 전체 기능 구조와 개발 방향 수립',
      'Flask 기반 백엔드 프레임워크 구조 설계 및 초기화',
      'DB 테이블 설계 및 SQLAlchemy 모델 구조 정리',
      '회원가입·로그인 및 관리자 권한 신청·승인 구조 설계·구현',
      '관리자 대시보드(신고 통계·상태 처리·권한 신청 관리) 구현',
      'AI 탐지 결과를 관리자 화면에서 확인할 수 있도록 서비스·리포지토리 계층 구조 설계',
      '동일 신고 데이터 기준 YOLOv8 · RT-DETR · YOLOv8-p2 비교분석 기능 구현',
      '프로젝트 전반의 기능 통합, 오류 점검, 문서화 총괄',
    ],
    features: [
      'AI 낙하물 탐지 — 이미지·영상 업로드 시 YOLO 기반 객체 탐지 수행',
      '위험도 분석 — 탐지 결과를 주의·위험·긴급 단계로 자동 분류',
      '실시간 알림 — 위험·긴급 데이터 발생 시 Flask-SocketIO로 관리자 알림 전송',
      '지도 기반 모니터링 — 위험 위치 지도 표시 및 최신 탐지 리스트 제공',
      '경로 위험 분석 — 출발지·도착지 기준 경로 내 위험 요소 분석',
      '관리자 기능 — 신고 관리, 상태 처리, 위험 통계, AI 탐지 로그 관리',
      'AI 모델 비교분석 — 동일 신고 데이터 기준 YOLOv8 · RT-DETR · YOLOv8-p2 결과 비교',
      '회원 권한 신청 및 승인 관리',
      'LLM 기반 신고 제목·내용 자동 생성',
    ],
    techStack: ['Flask', 'SQLAlchemy', 'Flask-Migrate', 'Flask-SocketIO', 'HTML', 'CSS', 'JavaScript', 'Jinja2', 'MySQL', 'YOLOv8', 'YOLOv8-p2', 'RT-DETR', 'LLM', 'Google Maps API', 'Kakao Navigation API'],
    systemFlow: [
      { label: '신고 업로드', description: '사용자가 도로 위 낙하물 이미지 또는 영상을 신고로 업로드' },
      { label: 'AI 객체 탐지', description: 'YOLOv8 · RT-DETR 모델이 낙하물 객체 탐지 수행' },
      { label: '탐지 결과 저장', description: '탐지 객체, 신뢰도, 위치 정보를 DB에 저장' },
      { label: '위험도 분석', description: '탐지 결과를 기준으로 주의·위험·긴급 단계로 분류' },
      { label: 'Alert 생성', description: '위험·긴급 상황이면 Alert 데이터 생성' },
      { label: '실시간 전송', description: 'Flask-SocketIO로 관리자 화면에 실시간 전송' },
      { label: '대시보드 반영', description: '관리자 대시보드와 지도 기반 모니터링 화면에 즉시 반영' },
      { label: '신고 처리', description: '관리자가 신고 상태를 확인하고 처리' },
    ],
    troubleshooting: [
      { title: '3개 AI 모델 중 최적 모델 선정', situation: '낙하물 탐지에 YOLOv8, YOLOv8-p2, RT-DETR 중 어떤 모델이 적합한지 판단할 기준이 없었습니다.', solution: '동일한 신고 데이터로 세 모델을 각각 추론하고, 탐지 수·신뢰도·처리 시간 등 복합 지표로 결과를 나란히 비교할 수 있는 AI 분석비교 기능을 관리자 페이지에 구현했습니다.', result: '단일 기준이 아닌 복합 지표로 모델을 판단하는 경험을 쌓았고, 상황에 맞는 모델을 선택할 근거를 마련했습니다.' },
      { title: '이미지·영상 처리 구조 분리', situation: '이미지와 영상은 분석 방식(단일 프레임 vs 다중 프레임)이 달라 동일한 처리 로직을 적용하기 어려웠습니다.', solution: '파일 타입을 판별해 이미지는 즉시 추론하고, 영상은 샘플 FPS 기준으로 프레임을 추출한 뒤 순차 추론하도록 분석 모드를 분리했습니다.', result: '파일 형식과 관계없이 안정적으로 탐지 결과를 생성할 수 있었습니다.' },
      { title: '실시간 알림의 신뢰성 확보', situation: '탐지된 모든 객체를 알림으로 보내면 관리자가 정작 중요한 위험 신호를 놓칠 위험이 있었고, 서버 이벤트와 관리자 UI 상태가 어긋날 위험도 있었습니다.', solution: 'Flask-SocketIO 기반으로 위험·긴급 단계로 분류된 이벤트만 필터링해 전송하도록 하고, Socket 이벤트를 별도 모듈로 분리해 관리했습니다.', result: '불필요한 알림을 줄이고 실제 대응이 필요한 상황에 집중할 수 있는 안정적인 알림 구조를 갖췄습니다.' },
      { title: '관리자 권한 구조 설계', situation: '일반 회원과 관리자 권한을 구분하고 신청·승인하는 흐름이 없어 접근 통제가 불명확했습니다.', solution: '회원 권한 신청 구조를 설계하고, 신청 리스트 확인과 상태 변경이 가능한 관리자 페이지를 구현했습니다.', result: '권한별 접근을 명확히 통제하고 관리자 승인 프로세스를 갖출 수 있었습니다.' },
      { title: 'Service·Repository 계층 분리 필요성 체감', situation: '기능이 늘어나면서 라우트 코드에 비즈니스 로직과 DB 접근 로직이 뒤섞여 유지보수가 어려워졌습니다.', solution: 'Service 계층에서 비즈니스 로직을, Repository 계층에서 DB 접근을 전담하도록 구조를 재정리했습니다.', result: '기능 추가·수정 시 영향 범위를 예측하기 쉬워지고 코드 가독성이 개선되었습니다.' },
    ],
    extraSections: [
      { id: 'modelcompare', insertAfter: 'features', label: 'MODEL COMPARISON', heading: 'AI 모델 비교분석 기능', items: [
        'YOLOv8 · RT-DETR · YOLOv8-p2 세 모델을 동일한 신고 데이터 기준으로 비교분석',
        '모델별 탐지 수, 평균 신뢰도, 최대 신뢰도, 처리 시간, 베스트 프레임 정보를 결과로 저장',
        '이미지와 영상을 모두 분석할 수 있도록 비교 모드를 분리해 설계',
        '영상은 샘플 FPS 기준으로 프레임을 추출한 뒤 분석 수행',
        '분석 실행 상태를 대기·진행중·완료·부분완료·실패로 관리해 진행 상황 추적',
        '관리자 화면에서 모델별 결과를 비교해 상황에 맞는 모델을 선택할 수 있도록 설계',
      ] },
      { id: 'architecture', insertAfter: 'stack', label: 'ARCHITECTURE', heading: '아키텍처', items: [
        'Flask 앱을 중심으로 API · Service · Repository · Model 계층을 분리해 구성',
        '비즈니스 로직과 DB 접근 로직을 분리해 유지보수성과 확장성을 확보',
        '관리자·신고·AI 분석·실시간 알림·지도 모니터링 기능을 Blueprint 단위로 분리',
        'Socket 이벤트를 별도 모듈로 분리해 실시간 알림 기능을 독립적으로 관리',
        'Flask-Migrate(Alembic) 기반 마이그레이션으로 DB 스키마 변경 이력을 관리',
      ] },
      { id: 'achievements', insertAfter: 'trouble', label: 'ACHIEVEMENTS', heading: '성과', items: [
        'AI 탐지 · 신고 · 관리자 처리 · 실시간 알림을 하나의 서비스 흐름으로 통합',
        '관리자 기준 AI 분석 대시보드와 탐지 로그 관리 기능 구현',
        '동일 데이터 기반 모델 비교분석 기능으로 AI 모델 선택 근거 마련',
        'DB · 백엔드 · AI 분석 · 관리자 화면을 연결한 풀스택 프로젝트 경험 확보',
        '팀 프로젝트에서 기능 설계부터 구현, 통합, 문서화까지 주도',
      ] },
    ],
    screenshots: [{ src: '/images/404rnf-01.png', alt: '404RNF 메인 화면', caption: '메인 화면 · 실시간 낙하물 탐지 소개' }],
    documents: [{ label: '시연 영상', url: 'https://youtu.be/Iet2QiSkU5s' }, { label: '발표자료', url: '/docs/404rnf-presentation.pdf' }, { label: '코드리뷰', url: '/docs/404rnf-code-review.pdf' }],
    deploy: { label: '배포 사이트', url: 'https://404-rnf.ddoriny.com/' }, github: { label: 'GitHub 저장소', url: 'https://github.com/lms-mini-project/AI-accident-detection' },
    retrospective: 'AI 탐지 결과를 화면에 출력하는 수준을 넘어, DB에 저장하고 관리자 통계·로그로 연결하는 구조가 중요하다는 것을 배웠습니다. 여러 AI 모델을 비교하며 탐지 수·신뢰도·처리 시간 등 복합 지표로 판단하는 경험을 쌓았고, 프로젝트 규모가 커질수록 Service·Repository 계층 분리가 왜 필요한지 체감했습니다. 모델 성능뿐 아니라 실시간성, 권한 관리, 데이터 흐름을 함께 고려해야 실제로 동작하는 안전 서비스가 된다는 것을 팀과 함께 배운 프로젝트였습니다.', accent: '#ffbe70',
    proofCompetencies: ['AI 모델 비교분석', '실시간 알림', '관리자 시스템'],
    proofEvidence: ['3개 모델 비교표', '위험도 분류 로직', 'Flask-SocketIO 알림 구조'],
  },
]

export const getProject = (slug?: string) => projects.find((project) => project.slug === slug)
