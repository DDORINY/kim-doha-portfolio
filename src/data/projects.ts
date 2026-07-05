export type ProjectLink = { label: string; url?: string; placeholder?: boolean }

export type Project = {
  slug: 'staccato' | 'erp' | '404rnf'
  name: string
  type: string
  period: string
  tagline: string
  teamNote?: string
  summary: string
  background: string
  role: string[]
  features: string[]
  techStack: string[]
  systemFlow: { label: string; description: string }[]
  troubleshooting: { title: string; situation: string; solution: string; result: string }[]
  modelComparison?: string[]
  architecture?: string[]
  achievements?: string[]
  screenshots: { src: string; alt: string; caption: string }[]
  documents: ProjectLink[]
  deploy: ProjectLink
  github: ProjectLink
  retrospective: string
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'staccato', name: 'STACCATO', type: 'AI 관제 시스템 · Final Project', period: 'Final Project',
    tagline: 'AI 기반 고속도로 갓길 정차 탐지 관제 시스템',
    teamNote: '팀 프로젝트 · 개인 기여도 약 50%',
    summary: '고속도로 CCTV 영상에서 차량 객체(car·truck·bus)를 탐지하고 정차·이상 상황을 판단해, 신고 접수부터 분석 상태 관리, 관제 대시보드까지 이어지는 AI 관제 서비스입니다. YOLO 기반 탐지 실험과 Flask API, MySQL, 프론트엔드 연동을 통해 실제 운영 가능한 흐름으로 구현했습니다.',
    background: '고속도로 갓길 정차 및 이상 상황을 빠르게 인지하고 대응할 수 있도록, 차량 탐지부터 신고 접수, 관리자 확인까지 일관된 관제 흐름을 만들기 위해 시작했습니다.',
    role: ['YOLO 기반 차량 객체 탐지 실험', 'car·truck·bus 클래스 대상 객체 탐지 성능 비교', 'Flask API와 AI 분석 서버 연동 흐름 구현', 'MySQL 기반 탐지 결과 및 이벤트 데이터 관리', '프론트엔드 관제 화면과 API 응답 데이터 구조 연결', 'AI VM·Flask VM·Frontend VM·DB VM 분리 환경 연동 문제 해결', 'pytest 기반 API 테스트 및 응답 계약 검증', 'SSH 기반 원격 서버 접속 및 방화벽 포트 설정', 'GPU 드라이버 설치 및 AI 모델 실행 환경 구성', '정기 시스템 점검(VM 상태·API 응답·DB 연동) 및 보안 점검 참여'],
    features: ['CCTV 영상 기반 차량 객체 탐지 (car·truck·bus)', '정차 및 이상 상황 탐지 흐름', '신고 접수 및 분석 요청 API', '분석 상태 관리 (QUEUED·RUNNING·COMPLETED·FAILED)', 'bbox 좌표 기반 관제 화면 시각화', '탐지 이벤트 데이터베이스 저장 및 조회', '관리자 대시보드(신고·CCTV·이벤트·시스템 상태)', 'pytest 기반 API 응답 계약 테스트'],
    techStack: ['Python', 'Flask', 'MySQL', 'SQLAlchemy', 'YOLO', 'OpenCV', 'TensorFlow', 'Keras', 'Next.js', 'TypeScript', 'Linux', 'Ubuntu', 'VMware', 'SSH', 'Git', 'GitHub'],
    systemFlow: [
      { label: 'CCTV Stream', description: '도로 영상을 추론 입력으로 전달' },
      { label: 'AI VM', description: 'YOLO 기반 차량(car·truck·bus) 탐지와 정차 판단' },
      { label: 'Flask VM', description: '신고·분석 요청 API와 상태 관리' },
      { label: 'DB VM', description: '탐지·이벤트 데이터 저장' },
      { label: 'Frontend VM', description: '관리자 관제 화면 제공' },
    ],
    troubleshooting: [
      { title: '분리된 서비스의 연동 흐름 가시화', situation: 'AI 추론, API, 프론트엔드, DB가 서로 다른 VM(AI VM·Flask VM·Frontend VM·DB VM)에서 동작해 장애 지점을 파악하기 어려웠습니다.', solution: '서비스를 역할별 VM으로 구분하고 요청·응답과 데이터 저장 흐름을 다이어그램 및 체크리스트로 정리했습니다.', result: '시연 전 검증 순서와 문제 추적 경로가 명확해졌습니다.' },
      { title: '차량 클래스별 탐지 성능 비교', situation: 'car, truck, bus 등 차량 유형에 따라 탐지 정확도가 달라져 오탐·미탐 원인을 파악하기 어려웠습니다.', solution: '클래스별 탐지 성능을 비교 실험하고 결과를 정리해 정차·이상 상황 판단 기준에 반영했습니다.', result: '차량 유형에 따른 탐지 신뢰도 차이를 파악하고 판단 로직을 개선했습니다.' },
      { title: 'API 응답 계약 검증', situation: 'Flask API와 프론트엔드·DB 간 데이터 구조가 어긋나면 관제 화면이 깨질 위험이 있었습니다.', solution: 'pytest 기반으로 API 응답 스키마와 분석 상태(QUEUED·RUNNING·COMPLETED·FAILED) 전이를 검증하는 테스트를 작성했습니다.', result: '연동 안정성을 높이고 배포 전 문제를 조기에 발견할 수 있었습니다.' },
      { title: '정기 점검을 통한 서비스 안정성 관리', situation: '여러 VM과 API가 연동된 상태에서 배포 이후에도 서비스가 계속 정상 동작하는지 지속적으로 확인할 필요가 있었습니다.', solution: 'VM 상태, API 응답, DB 연동을 주기적으로 점검하는 정기 점검 프로세스를 운영하며 응답 지연·리소스 사용량 증가 같은 이상 징후를 조기에 발견했습니다.', result: '배포 이후에도 서비스 상태를 지속적으로 관리하고 문제를 빠르게 파악할 수 있는 운영 체계를 갖췄습니다.' },
      { title: '서비스 보안 점검 참여', situation: '여러 VM으로 분리된 구조에서 서비스 간 접근 제어와 인증 체계가 의도대로 지켜지고 있는지 확인할 필요가 있었습니다.', solution: '팀 내 보안 점검에 참여해 서비스 간 접근 권한과 인증 검증 항목을 점검하고 개선이 필요한 부분을 정리했습니다.', result: '운영 환경에서 지켜야 할 접근 제어 원칙을 팀과 함께 명확히 하고 개선 방향에 반영했습니다.' },
      { title: '보안로그 확인 경험 개선', situation: '운영자가 내용을 확인하려면 로그 파일을 먼저 내려받아야 했습니다.', solution: '웹에서 로그를 미리 본 뒤 필요한 경우 다운로드하는 흐름과 예외 상태를 점검했습니다.', result: '불필요한 다운로드를 줄이고 로그 확인 동선을 단순화했습니다.' },
      { title: 'GPU 실행 환경 구성과 인프라 연결 점검', situation: 'AI VM에서 객체탐지 모델을 실행하려면 GPU 드라이버와 실행 환경이 서버 조건에 맞게 구성돼야 했고, VM 간 방화벽·DB 연결 상태도 확인이 필요했습니다.', solution: 'SSH로 각 VM에 접속해 방화벽 포트를 열고 MySQL 연결을 설정했으며, GPU 드라이버와 관련 실행 환경을 구성해 모델이 서버에서 정상 동작하도록 조정했습니다.', result: '로컬 개발 환경과 서버 환경의 차이로 인한 실행 문제를 해결하고 안정적으로 서비스를 구동할 수 있었습니다.' },
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
    documents: [{ label: '시연 영상', url: 'https://youtu.be/l2xOOqAfufo' }, { label: '결과보고서', placeholder: true }, { label: '발표자료', url: '/docs/STACCATO-presentation.pdf' }, { label: '운영 점검 체크리스트', placeholder: true }],
    deploy: { label: 'STACCATO Live Demo', url: 'https://mbc-sw.iptime.org:3221/' },
    github: { label: 'GitHub 저장소', url: 'https://github.com/staccato-ai-highway-control/staccato-ai-highway-control' },
    retrospective: '모델 정확도만으로 AI 서비스가 완성되지는 않습니다. 추론 결과가 API와 DB를 거쳐 사용자의 판단으로 이어지고, 운영자가 문제를 점검할 수 있어야 실제로 사용할 수 있는 서비스가 된다는 점을 배웠습니다.', accent: '#70e1f5',
  },
  {
    slug: 'erp', name: 'CommerceOps ERP', type: 'Full-stack · Personal Project', period: '개인 프로젝트 · 진행 중',
    tagline: '쇼핑몰 운영 데이터를 하나의 흐름으로 연결하는 실무형 ERP (개발 중)',
    teamNote: '개인 프로젝트 · 현재 개발 진행 중',
    summary: '개인 프로젝트로 진행하고 있는 쇼핑몰 운영 ERP입니다. 상품 등록부터 주문, 결제, 재고, 관리자 확인까지 쇼핑몰 운영 데이터 흐름을 구현하고 있으며, AI 기능이 의존할 백엔드 API, 데이터베이스, 인증, 관리자 시스템의 기반 역량을 쌓기 위해 진행 중입니다.',
    background: '상품, 주문, 결제, 재고를 분리된 기능이 아닌 하나의 서비스 흐름으로 이해하고 안정적인 관리자 경험을 구현하기 위해 개인적으로 시작했습니다.',
    role: ['상품·카테고리 관리 화면 구현', '장바구니와 주문·결제 흐름 구현', '재고 데이터 상태 처리', '관리자 대시보드 UI 구성', 'Spring Boot API 연동', 'JWT 인증 흐름 적용'],
    features: ['상품 및 카테고리 관리', '장바구니와 주문 생성', '결제 상태 관리', '재고 수량 관리', '관리자 대시보드', 'JWT 사용자 인증'],
    techStack: ['Next.js', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
    systemFlow: [{ label: 'Customer / Admin', description: '사용자와 관리자의 요청' }, { label: 'Next.js', description: '스토어·관리자 UI 제공' }, { label: 'Spring Boot API', description: '도메인 로직과 인증 처리' }, { label: 'MySQL', description: '운영 데이터 저장' }],
    troubleshooting: [{ title: '주문과 재고 상태의 일관성', situation: '주문·결제·재고가 연속 변경되어 상태 누락 시 화면과 데이터가 달라질 수 있었습니다.', solution: '도메인별 상태 변화와 API 요청 순서를 명시하고 요청 중·성공·실패 UI를 분리했습니다.', result: '데이터 흐름을 추적하기 쉬워지고 현재 상태를 명확히 전달할 수 있었습니다.' }],
    screenshots: [{ src: '/images/erp-placeholder.svg', alt: 'CommerceOps ERP 대시보드 placeholder', caption: 'ERP 관리자 화면 · 실제 캡처로 교체 예정' }],
    documents: [{ label: '기능 명세서', placeholder: true }, { label: 'ERD 및 API 문서', placeholder: true }],
    deploy: { label: '배포 사이트', placeholder: true }, github: { label: 'GitHub 저장소', placeholder: true },
    retrospective: 'AI 서비스를 안정적으로 제공하려면 모델뿐 아니라 데이터, API 계약, 인증, 운영 화면이 필요하다는 것을 이 프로젝트를 진행하며 체감하고 있습니다. 복잡한 비즈니스 데이터를 서비스로 연결하는 기본기를 다지는 중입니다.', accent: '#8b80ff',
  },
  {
    slug: '404rnf', name: '404 R·N·F AI', type: 'AI 낙하물 탐지 · Mini Project', period: 'Mini Project',
    tagline: 'AI 객체 탐지와 실시간 알림을 결합해 도로 위 낙하물 위험을 탐지·분석·관리하는 안전 주행 플랫폼',
    teamNote: '팀 프로젝트(팀장) · 개인 기여도 약 80% 이상',
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
    modelComparison: [
      'YOLOv8 · RT-DETR · YOLOv8-p2 세 모델을 동일한 신고 데이터 기준으로 비교분석',
      '모델별 탐지 수, 평균 신뢰도, 최대 신뢰도, 처리 시간, 베스트 프레임 정보를 결과로 저장',
      '이미지와 영상을 모두 분석할 수 있도록 비교 모드를 분리해 설계',
      '영상은 샘플 FPS 기준으로 프레임을 추출한 뒤 분석 수행',
      '분석 실행 상태를 대기·진행중·완료·부분완료·실패로 관리해 진행 상황 추적',
      '관리자 화면에서 모델별 결과를 비교해 상황에 맞는 모델을 선택할 수 있도록 설계',
    ],
    architecture: [
      'Flask 앱을 중심으로 API · Service · Repository · Model 계층을 분리해 구성',
      '비즈니스 로직과 DB 접근 로직을 분리해 유지보수성과 확장성을 확보',
      '관리자·신고·AI 분석·실시간 알림·지도 모니터링 기능을 Blueprint 단위로 분리',
      'Socket 이벤트를 별도 모듈로 분리해 실시간 알림 기능을 독립적으로 관리',
      'Flask-Migrate(Alembic) 기반 마이그레이션으로 DB 스키마 변경 이력을 관리',
    ],
    achievements: [
      'AI 탐지 · 신고 · 관리자 처리 · 실시간 알림을 하나의 서비스 흐름으로 통합',
      '관리자 기준 AI 분석 대시보드와 탐지 로그 관리 기능 구현',
      '동일 데이터 기반 모델 비교분석 기능으로 AI 모델 선택 근거 마련',
      'DB · 백엔드 · AI 분석 · 관리자 화면을 연결한 풀스택 프로젝트 경험 확보',
      '팀 프로젝트에서 기능 설계부터 구현, 통합, 문서화까지 주도',
    ],
    screenshots: [{ src: '/images/404rnf-01.png', alt: '404RNF 메인 화면', caption: '메인 화면 · 실시간 낙하물 탐지 소개' }],
    documents: [{ label: '시연 영상', url: 'https://youtu.be/Iet2QiSkU5s' }, { label: '발표자료', url: '/docs/404rnf-presentation.pdf' }, { label: '코드리뷰', url: '/docs/404rnf-code-review.pdf' }],
    deploy: { label: '배포 사이트', url: 'https://404-rnf.ddoriny.com/' }, github: { label: 'GitHub 저장소', url: 'https://github.com/lms-mini-project/AI-accident-detection' },
    retrospective: 'AI 탐지 결과를 화면에 출력하는 수준을 넘어, DB에 저장하고 관리자 통계·로그로 연결하는 구조가 중요하다는 것을 배웠습니다. 여러 AI 모델을 비교하며 탐지 수·신뢰도·처리 시간 등 복합 지표로 판단하는 경험을 쌓았고, 프로젝트 규모가 커질수록 Service·Repository 계층 분리가 왜 필요한지 체감했습니다. 모델 성능뿐 아니라 실시간성, 권한 관리, 데이터 흐름을 함께 고려해야 실제로 동작하는 안전 서비스가 된다는 것을 팀과 함께 배운 프로젝트였습니다.', accent: '#ffbe70',
  },
]

export const getProject = (slug?: string) => projects.find((project) => project.slug === slug)
