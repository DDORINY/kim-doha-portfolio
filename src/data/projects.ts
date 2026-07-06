export type ProjectLink = { label: string; url?: string; placeholder?: boolean }

export type ExtraSectionAnchor = 'overview' | 'background' | 'role' | 'features' | 'stack' | 'flow' | 'trouble' | 'screens' | 'docs'
export type ExtraSection = { id: string; insertAfter: ExtraSectionAnchor; label: string; heading: string; items: string[] }

export type ProjectCategory = 'AI / Computer Vision' | 'Full-stack' | 'Infra / Deployment'

export type Project = {
  slug: 'staccato' | 'erp' | '404rnf'
  name: string
  type: string
  period: string
  tagline: string
  teamNote?: string
  categories?: ProjectCategory[]
  highlights?: string[]
  resumeHighlight?: { role: string; contribution: string; achievement: string }
  summary: string
  background: string
  role: string[]
  features: string[]
  techStack: string[]
  systemFlow: { label: string; description: string }[]
  troubleshooting: { title: string; situation: string; solution: string; result: string }[]
  extraSections?: ExtraSection[]
  screenshots: { src: string; alt: string; caption: string }[]
  documents: ProjectLink[]
  deploy: ProjectLink
  github: ProjectLink
  retrospective: string
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'staccato', name: 'STACCATO AI Highway Control', type: 'AI 관제 시스템 · Final Project', period: 'Final Project',
    tagline: 'YOLOv11 기반 CCTV 영상 분석으로 고속도로 정차 차량과 갓길 정차 이벤트를 탐지하고, 관제자가 실시간으로 확인할 수 있도록 구축한 AI 관제 MVP 시스템',
    teamNote: '팀 프로젝트 · 개인 기여도 약 50%',
    categories: ['AI / Computer Vision', 'Infra / Deployment'],
    highlights: ['YOLOv11', 'Keras 실험', 'BBOX Overlay', 'VM 분리 운영', 'Socket.IO', 'AI Media Proxy'],
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
      { src: '/images/staccato-01.png', alt: 'STACCATO 메인 화면', caption: '메인 화면 · AI 기반 고속도로 정차 탐지 소개' },
      { src: '/images/staccato-02.png', alt: 'STACCATO 통합 관제 대시보드', caption: '통합 관제 대시보드 · 이벤트·신고·CCTV 현황 요약' },
      { src: '/images/staccato-03.png', alt: 'STACCATO CCTV 관제 화면', caption: 'CCTV 관제 · 실시간 카메라 영상 및 탐지 표시' },
      { src: '/images/staccato-04.png', alt: 'STACCATO 신고 목록 화면', caption: '신고 목록 · 접수된 신고 조회 및 AI 분석 요청' },
      { src: '/images/staccato-05.png', alt: 'STACCATO 모델 성능 비교 화면', caption: '모델 성능 비교 · YOLO11 · Keras YOLOv8 · RT-DETR 비교' },
      { src: '/images/staccato-06.png', alt: 'STACCATO 리플레이 화면', caption: '리플레이 · 탐지 이벤트 영상 재생 및 상세 확인' },
      { src: '/images/staccato-07.png', alt: 'STACCATO 알림 화면', caption: '알림 · 실시간 사고 이벤트 알림 및 상세 정보' },
      { src: '/images/staccato-08.png', alt: 'STACCATO 운영 환경 정보 화면', caption: '운영 환경 정보 · VM별 인프라 구성 현황' },
      { src: '/images/staccato-09.png', alt: 'STACCATO 버그리포트 화면', caption: '버그리포트 · 점검 및 이슈 처리 이력' },
    ],
    documents: [{ label: '시연 영상', url: 'https://youtu.be/l2xOOqAfufo' }, { label: '발표자료', url: '/docs/STACCATO-presentation.pdf' }, { label: '결과보고서', placeholder: true }, { label: '사용자 매뉴얼', placeholder: true }, { label: '관리자 매뉴얼', placeholder: true }, { label: '릴리즈 체크리스트', placeholder: true }, { label: '코드리뷰', placeholder: true }],
    deploy: { label: 'STACCATO Live Demo', url: 'https://mbc-sw.iptime.org:3221/' },
    github: { label: 'GitHub 저장소', url: 'https://github.com/staccato-ai-highway-control/staccato-ai-highway-control' },
    retrospective: '모델 정확도만으로 AI 서비스가 완성되지는 않습니다. 추론 결과가 API와 DB를 거쳐 사용자의 판단으로 이어지고, 운영자가 문제를 점검할 수 있어야 실제로 사용할 수 있는 서비스가 된다는 점을 배웠습니다.', accent: '#70e1f5',
  },
  {
    slug: 'erp', name: 'CommerceOps ERP', type: 'Full-stack · Personal Project', period: '개인 프로젝트 · 진행 중',
    tagline: '쇼핑몰 운영 데이터를 하나의 흐름으로 연결하는 실무형 ERP (개발 중)',
    teamNote: '개인 프로젝트 · 현재 개발 진행 중',
    categories: ['Full-stack'],
    highlights: ['Spring Boot', 'Next.js', 'MySQL', 'JWT 인증', '주문·재고 흐름', '관리자 API'],
    resumeHighlight: {
      role: '상품·주문·결제·재고 흐름 구현, 관리자 대시보드 UI, JWT 인증 흐름 적용',
      contribution: '개인 프로젝트 · 진행 중',
      achievement: 'Spring Boot API와 Next.js 프론트엔드를 연동해 상품 등록부터 주문·결제·재고·관리자 확인까지 이어지는 운영 데이터 흐름 구현 중',
    },
    summary: '개인 프로젝트로 진행하고 있는 쇼핑몰 운영 ERP입니다. 상품 등록부터 주문, 결제, 재고, 관리자 확인까지 쇼핑몰 운영 데이터 흐름을 구현하고 있으며, AI 기능이 의존할 백엔드 API, 데이터베이스, 인증, 관리자 시스템의 기반 역량을 쌓기 위해 진행 중입니다.',
    background: '상품, 주문, 결제, 재고를 분리된 기능이 아닌 하나의 서비스 흐름으로 이해하고 안정적인 관리자 경험을 구현하기 위해 개인적으로 시작했습니다.',
    role: ['상품·카테고리 관리 화면 구현', '장바구니와 주문·결제 흐름 구현', '재고 데이터 상태 처리', '관리자 대시보드 UI 구성', 'Spring Boot API 연동', 'JWT 인증 흐름 적용'],
    features: ['상품 및 카테고리 관리', '장바구니와 주문 생성', '결제 상태 관리', '재고 수량 관리', '관리자 대시보드', 'JWT 사용자 인증'],
    techStack: ['Next.js', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
    systemFlow: [{ label: 'Customer / Admin', description: '사용자와 관리자의 요청' }, { label: 'Next.js', description: '스토어·관리자 UI 제공' }, { label: 'Spring Boot API', description: '도메인 로직과 인증 처리' }, { label: 'MySQL', description: '운영 데이터 저장' }],
    troubleshooting: [{ title: '주문과 재고 상태의 일관성', situation: '주문·결제·재고가 연속 변경되어 상태 누락 시 화면과 데이터가 달라질 수 있었습니다.', solution: '도메인별 상태 변화와 API 요청 순서를 명시하고 요청 중·성공·실패 UI를 분리했습니다.', result: '데이터 흐름을 추적하기 쉬워지고 현재 상태를 명확히 전달할 수 있었습니다.' }],
    screenshots: [{ src: '/images/erp-placeholder.svg', alt: 'CommerceOps ERP 대시보드 placeholder', caption: 'ERP 관리자 화면 · 실제 캡처로 교체 예정' }],
    documents: [{ label: '기능 명세서', placeholder: true }, { label: 'ERD 및 API 문서', placeholder: true }],
    deploy: { label: '배포 사이트', placeholder: true }, github: { label: 'GitHub 저장소', url: 'https://github.com/DDORINY/commerceops-erp' },
    retrospective: 'AI 서비스를 안정적으로 제공하려면 모델뿐 아니라 데이터, API 계약, 인증, 운영 화면이 필요하다는 것을 이 프로젝트를 진행하며 체감하고 있습니다. 복잡한 비즈니스 데이터를 서비스로 연결하는 기본기를 다지는 중입니다.', accent: '#8b80ff',
  },
  {
    slug: '404rnf', name: '404 R·N·F AI', type: 'AI 낙하물 탐지 · Mini Project', period: 'Mini Project',
    tagline: 'AI 객체 탐지와 실시간 알림을 결합해 도로 위 낙하물 위험을 탐지·분석·관리하는 안전 주행 플랫폼',
    teamNote: '팀 프로젝트(팀장) · 개인 기여도 약 80% 이상',
    categories: ['AI / Computer Vision'],
    highlights: ['YOLOv8', 'RT-DETR', 'AI 모델 비교', 'Flask-SocketIO', 'DB 설계', '팀장'],
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
  },
]

export const getProject = (slug?: string) => projects.find((project) => project.slug === slug)
