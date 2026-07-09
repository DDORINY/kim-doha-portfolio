import type { EvidenceMetric } from './evidence'

type Certification = { title: string; issuer: string; date: string; image?: string }

export const profile = {
  name: '김도하',
  role: 'AI Developer',
  photo: '/images/KIMDOHA.jpg',
  intro: '온라인 마케팅·운영 직무에서 5년 8개월의 실무 경험을 쌓은 뒤, 데이터 기반 의사결정과 업무 자동화의 필요성을 느껴 AI 개발자로 전환을 준비하고 있습니다.',
  email: 'jihun22400669@gmail.com',
  github: 'https://github.com/DDORINY',
  portfolio: 'https://ddoriny.com',
  notion: 'https://app.notion.com/p/doreen1004/0-AI-320bec735c3780c7bfcffcc2425e59f2',
  positioning: {
    position: 'AI 개발자 / Python·Flask 기반 AI 백엔드 개발자',
    statement: 'AI 모델 결과를 API, DB, 프론트엔드 화면과 연결해 실제 사용 가능한 서비스로 구현하는 개발자',
  },
  coreCompetencies: [
    'YOLO 기반 객체탐지 결과를 Flask API, MySQL, 프론트엔드 관제 화면으로 연결한 경험',
    'AI VM · Flask VM · Frontend VM · DB VM 분리 구조에서 서버 연동 및 운영 점검 경험',
    '온라인 마케팅·운영 5년 8개월 경험을 바탕으로 서비스 흐름과 사용자 문제를 이해하는 개발자',
    'Python, Flask, MySQL, React/Next.js 기반 AI 서비스 MVP 구현 경험',
  ],
  careerSummary: [
    { label: '총 경력', value: '5년 8개월' },
    { label: '이전 직무', value: '온라인 마케팅, 광고 운영, 쇼핑몰 운영, 콘텐츠 제작, 운영 지원' },
    { label: '전환 목표', value: 'AI 개발자, AI 객체탐지 개발자' },
    { label: '핵심 강점', value: '운영 경험 기반의 문제 파악 능력, 데이터 기반 사고, 서비스 흐름 이해, AI 모델과 웹 서비스 연동 경험' },
    { label: '관심 분야', value: 'Computer Vision, Object Detection, Flask API, 데이터베이스 연동, AI 서비스 운영' },
    { label: '입사 가능일', value: '협의 가능 (2026.07.09 ~ 09.09 AI 심화반 교육 예정이나 근무 조건 협의 시 교육 기간 중에도 즉시 입사 가능)' },
  ],
  about: [
    '부트캠프 과정에서 저는 단순히 기능을 구현하는 것을 넘어, 실제 서비스 흐름 안에서 발생하는 문제를 구조화하고 해결하는 방법을 배웠습니다.',
    '초기 미니 프로젝트에서는 Python과 Flask를 활용해 LMS 기능을 웹 서비스로 재구성했습니다. 처음에는 화면과 기능 구현에 집중했지만, 프로젝트가 커질수록 코드가 한곳에 몰리면 유지보수가 어렵다는 문제를 느꼈습니다. 이를 해결하기 위해 Route, Service, Repository 계층을 분리하고, 데이터베이스 접근과 비즈니스 로직의 역할을 나누는 방식으로 구조를 개선했습니다. 이 경험을 통해 개발에서 중요한 것은 단순히 작동하는 코드를 만드는 것이 아니라, 이후 수정과 확장이 가능한 구조를 설계하는 것임을 배웠습니다.',
    '파이널 프로젝트에서는 AI 사고 탐지 서비스를 개발하며 프론트엔드, Flask API 서버, AI 추론 서버, DB 서버가 분리된 구조를 경험했습니다. CCTV 영상 분석 결과를 관리자 화면에서 확인하고, 탐지 결과를 데이터로 저장하며, 사용자가 실제로 확인할 수 있는 관제 흐름을 구성했습니다. 이 과정에서 AI 모델 자체만큼 중요한 것은 AI 결과를 서비스 안에서 안정적으로 연결하고, 사용자가 이해할 수 있는 형태로 제공하는 것이라는 점을 체감했습니다.',
    '객체 탐지 모델을 훈련하는 과정에서는 데이터의 중요성을 직접 체감했습니다. 미니 프로젝트와 파이널 프로젝트 모두에서 직접 데이터를 수집하고 라벨링을 진행했으며, 중간 학습 결과를 확인하면서 부족한 클래스의 데이터를 추가로 확보하고 문제가 되는 데이터는 제거하는 방식으로 데이터셋을 개선했습니다. 특히 파이널 프로젝트에서는 AI허브 데이터 약 2만 장, 직접 수집한 데이터 약 2천 장, 그리고 두 데이터를 결합해 클래스 밸런스를 조정한 데이터셋까지 총 3가지 데이터셋을 구성해 훈련 결과를 비교했습니다.',
    '모델 실험에서는 YOLOv8부터 YOLOv11까지 다양한 버전을 적용했고, RT-DETR 모델도 함께 훈련하며 객체 탐지 성능을 비교했습니다. 이 과정에서 옵티마이저, 이미지 해상도, 사전 학습 가중치 등 학습 조건을 바꿔가며 결과 차이를 확인했고, GPU와 CPU 환경 차이에 따른 실행 및 학습 환경도 비교했습니다. 또한 Keras를 활용해 직접 구성한 모델 구조와 YOLO 기반 구조를 실험해보며, Keras는 구조를 이해하고 실험하는 데에는 도움이 되었지만 실제 객체 탐지 서비스에 적용하기에는 구현과 성능 측면에서 어려움이 크다는 점을 경험했습니다.',
    '미니 프로젝트가 객체를 탐지하고 바운딩 박스로 표시하는 수준이었다면, 파이널 프로젝트에서는 탐지 결과를 후처리해 실제 서비스 이벤트로 연결하는 데 집중했습니다. 탐지된 객체를 추적하고, 일정 시간 동안 움직임이 없을 경우 정차 이벤트를 발생시키는 로직을 구현했으며, ROI 구역을 지정해 해당 영역 안에 차량이 정차하는 경우 별도의 이벤트가 발생하도록 구성했습니다. 이를 통해 객체 탐지는 모델 결과를 출력하는 것에서 끝나는 것이 아니라, 서비스 목적에 맞는 후처리와 판단 로직이 결합되어야 실제 사용자에게 의미 있는 기능이 된다는 점을 배웠습니다.',
    '또한 서비스 운영 안정성을 높이기 위해 보안 점검과 패치에도 참여했습니다. 위험 가능성이 있는 API 접근, 내부 서비스 노출, 인증·권한 검증 흐름을 점검하고 개선 방향을 정리했으며, 현재는 일일 점검 체크리스트를 통해 서버 연결 상태, API 응답, DB 연동, AI 서버 상태 등을 확인하고 있습니다. 이 경험을 통해 AI 개발자는 모델 성능뿐 아니라 데이터 품질, 서비스 연결 구조, 보안, 운영 안정성까지 함께 고려해야 한다는 점을 배웠습니다.',
    '프로젝트를 진행하며 서버 연결 오류, API 응답 문제, DB 연동 문제, 배포 환경 차이 등 여러 이슈를 마주했습니다. 처음에는 오류 메시지를 단순히 해결해야 할 문제로만 봤지만, 점차 로그를 확인하고 요청 흐름을 따라가며 원인을 좁혀가는 방식으로 접근하게 되었습니다. 이를 통해 문제 해결은 감으로 판단하는 것이 아니라, 데이터와 흐름을 근거로 원인을 검증하는 과정이라는 점을 배웠습니다.',
    '또한 운영·마케팅 업무 경험을 바탕으로, 실제 현장에서는 반복적인 확인 작업과 수작업 관리가 많다는 것을 알고 있었습니다. 부트캠프 프로젝트를 거치며 이러한 운영 문제를 개발로 자동화할 수 있다는 가능성을 확인했고, 단순한 기능 구현보다 사용자의 업무 흐름을 개선하는 서비스 개발에 더 큰 관심을 갖게 되었습니다.',
    '저는 앞으로도 AI를 단순히 기능으로 붙이는 개발자가 아니라, 실제 문제를 이해하고 이를 서비스 구조 안에서 안정적으로 연결하는 개발자로 성장하고 싶습니다. Python, Flask, Spring Boot, Next.js 기반의 프로젝트 경험을 바탕으로 운영 문제를 발견하고, 데이터를 연결하며, 사용자가 체감할 수 있는 AI 연동 서비스를 만드는 SW 개발자가 되겠습니다.',
  ],
  desiredRoles: ['AI 개발자', 'AI 객체탐지 개발자', 'Computer Vision 개발자', 'Python / Flask 기반 AI 백엔드 개발자', 'AI 모델 연동 개발자'],
  roleStrengths: [
    {
      role: 'AI 개발자',
      points: [
        'YOLO 기반 객체탐지 결과를 웹 관제 화면과 DB에 연결',
        'AI VM · Flask VM · Frontend VM · DB VM 분리 구조 경험',
        'bbox · confidence · metadata 기반 프론트 표시 흐름 이해',
      ],
    },
    {
      role: '백엔드 / API 개발자',
      points: [
        'Flask, FastAPI, Spring Boot 기반 API 연동 경험',
        'JWT 인증, MySQL, SQLAlchemy, REST API 구조 경험',
        'API 응답 계약 테스트 및 health check 점검 경험',
      ],
    },
    {
      role: '프론트엔드 개발자',
      points: [
        'React, Next.js, TypeScript 기반 화면 구현',
        '관제 대시보드, 이벤트 상세, 관리자 화면 UI 구성',
        'API 연동, 상태 처리, 영상·이미지 표시 흐름 경험',
      ],
    },
    {
      role: '운영 / 인프라 보조 역량',
      points: [
        'Linux, SSH, 방화벽, DB 설치, Nginx, 배포 점검 경험',
        'Vercel, GitHub Pages, AWS 배포 경험',
        '서버 health check와 운영 문서화 경험',
      ],
    },
  ],
  infra: {
    summary: '프로젝트를 단순 구현에 그치지 않고, Linux/VMware/AWS/Vercel 환경에서 직접 배포하며 서버 실행, 포트 설정, SSH 접속, DNS 도메인 연결, DB 연동, HTTPS 및 프록시 설정까지 경험했습니다. 이를 통해 프론트엔드·백엔드·DB·AI 서버가 실제 운영 환경에서 연결되는 전체 흐름을 이해하고 점검할 수 있습니다.',
    categories: [
      { title: 'Linux / VM', items: ['Linux 서버 환경 구성', 'SSH 접속 및 서버 관리', 'VMware 기반 VM 분리 운영', '방화벽 및 포트 설정'] },
      { title: 'Cloud / Hosting', items: ['AWS 배포 경험', 'Vercel 프론트엔드 배포', '운영 환경 변수 관리', '배포 후 서비스 상태 점검'] },
      { title: 'Domain / DNS', items: ['직접 도메인 연결', 'DNS 레코드 설정', 'GitHub Pages 또는 Vercel 도메인 연결 경험', 'HTTPS 접속 확인'] },
      { title: 'Operation Check', items: ['API health check', 'DB 연결 확인', '프론트엔드/백엔드 연동 점검', '브라우저 기준 QA 및 오류 확인'] },
    ],
  },
  certifications: [
    { title: '데이터분석준전문가(ADsP)', issuer: '한국데이터베이스진흥원', date: '2025.11 합격', image: '/images/adsp-certificate.jpg' },
    { title: 'AI/데이터 분석 부트캠프 수료증', issuer: 'MBC 아카데미 · 대보정보통신', date: '2025.12.31 ~ 2026.07.07 수료', image: '/images/mbc-academy-certificate.jpg' },
    { title: '개인평가 우수상 (1위)', issuer: 'MBC 아카데미 · 대보정보통신', date: '2026.07 수상', image: '/images/mbc-academy-award.jpg' },
  ] as Certification[],
  education: [
    { title: '학점은행제 컴퓨터공학 전공', period: '2020.06 ~ 2026.08(후기) · 학사 학위 취득 예정', description: '자료구조, 알고리즘, 운영체제, 데이터베이스, Python 프로그래밍, 데이터 처리, 머신러닝 이론 및 모델 구현을 학습했습니다.' },
    { title: 'AI/데이터 분석 부트캠프 · MBC 아카데미 · 대보정보통신', period: '2025.12.31 ~ 2026.07.07 · 수료 (개인평가 우수상 1위)', description: 'Python 기반 머신러닝·딥러닝 모델 구현, OpenCV 영상 처리, CNN 이미지 분류, 교차검증·하이퍼파라미터 튜닝, Flask API 개발, Database 연동, Git/GitHub 협업, Linux 개발 환경을 학습했습니다.' },
    { title: 'AI 심화반 · Roboflow 기반 부유물 탐지 시스템 구축 과정', period: '2026.07.09 ~ 2026.09.09 · 진행 예정', description: 'Roboflow를 활용한 데이터셋 구축과 모델 학습으로 부유물(하천·해양 등) 탐지 시스템을 구축하는 과정을 심화 학습합니다.' },
  ],
  workExperience: [
    {
      role: '온라인 마케팅 팀장', period: '2018.05 ~ 2022.04',
      description: 'KT 강남본부 소속 유무선 대리점에서 온라인 마케팅과 영업 지원 업무를 수행했습니다.',
      tasks: ['온라인 마케팅 운영', '현장 영업 마케팅 지원', '전산 교육', 'KT 정책 교육 진행', '매월 정책 변경사항 교육 및 실무 적용 지원'],
      takeaway: '마케팅 운영과 현장 지원 업무를 수행하며 반복적인 운영 업무, 정책 변경 대응, 데이터 관리의 중요성을 경험했습니다. 이를 통해 업무 자동화와 데이터 기반 의사결정의 필요성을 인식하게 되었습니다.',
    },
    {
      role: '자기주도 학습 (디자인·영상 편집)', period: '2022.05 ~ 2023.02',
      description: '이직 전환기 동안 Photoshop, Illustrator, 영상 편집 툴을 독학하며 콘텐츠 제작 역량을 쌓았습니다.',
      tasks: ['Photoshop 이미지 편집', 'Illustrator 벡터 디자인', '영상 편집 툴 학습 및 실습'],
      takeaway: '이 시기에 쌓은 디자인·영상 편집 역량은 이후 온라인 쇼핑몰 운영 직무에서 상세페이지 제작과 상품 촬영·편집 업무에 바로 활용되었습니다.',
    },
    {
      role: '광고마케팅 / 대리', period: '2023.03 ~ 2025.10',
      description: '배달 프랜차이즈 본사 경영지원팀에서 2023.03 계약직으로 입사해 2024.03 정규직(대리)으로 전환되었으며, 온라인 마케팅, 쇼핑몰 운영, 콘텐츠 제작, 광고 운영 업무를 수행했습니다.',
      tasks: ['신입 교육', '온라인 마케팅 업무 지원', '온라인 쇼핑몰 오픈 초기 세팅', '신메뉴 개발 테스트', '상세페이지 제작', '상품 촬영 및 편집', '영상 편집', '단가 측정', '네이버 광고 운영'],
      takeaway: '상품 데이터 관리, 상세페이지 제작, 광고 운영, 콘텐츠 제작을 수행하며 운영 과정에서 발생하는 반복 업무와 데이터 기반 판단의 필요성을 체감했습니다. 이 경험을 바탕으로 AI와 자동화 기술을 활용해 실제 업무 문제를 해결하는 개발자로 전환을 준비하게 되었습니다.',
    },
  ],
  skills: {
    'AI / Computer Vision': ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'TensorFlow', 'Keras', 'KerasCV', 'OpenCV', 'CNN', 'YOLO', 'Object Detection', 'Computer Vision'],
    'Backend / Database': ['Flask', 'REST API', 'SQLAlchemy', 'MySQL', 'MySQL Workbench', 'Pytest'],
    'Frontend / Collaboration / Infra': ['Next.js', 'TypeScript', 'Git', 'GitHub', 'Linux', 'Ubuntu', 'VMware'],
  },
  skillUsage: {
    'AI / Computer Vision': [
      { skill: 'YOLO', usage: 'STACCATO 차량 탐지, 404 R·N·F 낙하물 탐지 모델 비교' },
      { skill: 'OpenCV', usage: '영상 프레임 처리 및 bbox 좌표 변환' },
      { skill: 'Keras / TensorFlow', usage: 'CNN 기반 이미지 분류 실험' },
    ],
    'Backend / Database': [
      { skill: 'Flask', usage: 'AI 분석 요청, 인증, 신고·이벤트 API 구현' },
      { skill: 'MySQL', usage: '사용자·신고·탐지 로그·알림 데이터 저장' },
      { skill: 'SQLAlchemy', usage: '모델·Repository 계층 구성' },
    ],
    'Frontend / Collaboration / Infra': [
      { skill: 'Next.js', usage: 'STACCATO 관제 화면, CommerceOps ERP 운영 화면 구현' },
      { skill: 'Linux / VMware', usage: 'VM 분리 운영 및 서버 실행·점검' },
      { skill: 'Git / GitHub', usage: '팀 프로젝트 협업 및 버전 관리' },
    ],
  },
}

export const homeEvidenceMetrics: EvidenceMetric[] = [
  { label: 'VM 분리 운영', value: '4개', description: 'AI · Flask · Frontend · DB VM 분리 구조 (STACCATO)' },
  { label: '주요 화면 QA', value: '8개+', description: '로그인 · 이벤트 · 스냅샷 · 알림 등 브라우저 기준 확인' },
  { label: '객체탐지', value: 'YOLOv11', description: 'CCTV 차량 탐지 · ROI 기반 이벤트 판단' },
  { label: '실시간 알림', value: 'Socket.IO', description: '관제 화면에 실시간 이벤트 전달' },
  { label: '이벤트 저장', value: 'MySQL', description: '탐지 로그 · 알림 · metadata 저장' },
  { label: '배포 구성', value: 'HTTPS · Nginx', description: '리버스 프록시 및 AI media proxy 구성' },
]

export const homeModelMetrics: EvidenceMetric[] = [
  { label: 'Final Model', value: 'YOLO11s CVAT balanced', description: '실시간 CCTV 처리·ByteTrack 추적까지 고려해 최종 선정' },
  { label: 'Dataset', value: '20,000 images', description: 'car / truck / bus 3-class로 재구성한 최종 학습 데이터셋' },
  { label: 'Classes', value: 'car · truck · bus', description: 'Highway CCTV vehicle detection 기준 3개 클래스' },
  { label: 'mAP50', value: '0.9290', description: 'YOLO11s CVAT balanced 기준 (Precision 0.9210 · Recall 0.8670)' },
  { label: 'F1 Score', value: '0.8932', description: '최종 선정 모델의 정밀도·재현율 균형 지표' },
  { label: 'mAP50-95', value: '0.7680', description: 'RT-DETR-L(0.7681)과 근접한 수준까지 확보' },
]

export const learningTracks = [
  { key: '01', title: 'Python', description: 'AI 개발의 기반 문법과 데이터 처리, 모듈 활용을 학습합니다.', topics: ['Fundamentals', 'Data Handling', 'Automation'] },
  { key: '02', title: 'Machine Learning', description: '전처리부터 모델 학습과 평가까지 머신러닝 흐름을 익힙니다.', topics: ['Preprocessing', 'Training', 'Evaluation'] },
  { key: '03', title: 'Deep Learning', description: 'TensorFlow/Keras로 CNN 모델을 구성해 이미지 데이터를 학습하고, loss·accuracy·validation 결과로 예측 성능을 해석하는 흐름을 실습합니다.', topics: ['Keras / TensorFlow', 'CNN', 'Training Loop'] },
  { key: '04', title: 'Computer Vision', description: 'OpenCV로 이미지·영상 데이터를 처리하며, CCTV 기반 프로젝트에 필요한 frame, bbox, ROI 개념을 정리합니다.', topics: ['OpenCV', 'Frame / BBOX', 'ROI'] },
  { key: '05', title: 'YOLO / Object Detection', description: 'YOLO 기반 객체 탐지와 ROI 판단 로직을 학습하고, STACCATO 정차 차량 탐지와 404RNF 낙하물 탐지에 적용했습니다.', topics: ['YOLO', 'Object Detection', 'ROI Logic'] },
  { key: '06', title: 'AI API Integration', description: 'Flask/FastAPI로 AI VM의 탐지 결과를 API 응답으로 전달하고, DB 저장과 Frontend 화면 표시까지 연결하는 흐름을 학습합니다.', topics: ['Flask', 'FastAPI', 'API Design'] },
  { key: '07', title: 'Deployment / Operation', description: 'Linux, VM, Vercel, AWS, DNS 설정과 health check를 통해 AI 서비스 운영 흐름을 학습합니다.', topics: ['Linux', 'VM', 'Vercel', 'AWS', 'DNS', 'Health Check'] },
]

export const aiLearningOverview = 'Python 기초부터 머신러닝, Keras 기반 딥러닝 실험, OpenCV 영상 처리, YOLO 객체 탐지, Flask/FastAPI 연동까지 학습하며 AI 모델 결과를 실제 웹 서비스에서 활용하는 흐름을 정리했습니다.'

export const learningNotes = [
  'Python 데이터 처리',
  '머신러닝 전처리와 평가',
  'TensorFlow/Keras 딥러닝 실험',
  'CNN 이미지 분류',
  'OpenCV 이미지·영상 처리',
  'YOLO 객체 탐지',
  'Flask/FastAPI API 연동',
  'Linux/배포/운영 점검',
]

type LearningExperiment = { title: string; description: string; keywords: string[]; images?: { src: string; caption: string }[] }

export const learningExperiments = [
  {
    title: 'Keras / TensorFlow Experiment',
    description: 'TensorFlow/Keras로 이미지 데이터 전처리, CNN 모델 구성, 학습, 예측 결과 확인 과정을 실습했습니다. 데이터가 모델에 입력되고 예측 결과로 이어지는 흐름과, loss·accuracy·validation 결과로 모델 성능을 해석하는 과정을 직접 경험했습니다. 최종 프로젝트에서 YOLO 기반 탐지 결과를 단순히 사용하는 것이 아니라, 모델 입력·출력·confidence가 서비스 로직과 어떻게 연결되는지 이해하는 기반이 되었습니다.',
    keywords: ['TensorFlow', 'Keras', 'CNN', 'Image Classification', 'Training / Validation', 'Prediction Result'],
  },
  {
    title: 'Computer Vision 학습',
    description: 'OpenCV로 이미지와 영상 데이터를 다루는 방법을 학습하며, CCTV 영상 기반 프로젝트를 이해하기 위해 frame, bbox, confidence, ROI 개념을 정리했습니다. 영상에서 AI 탐지 결과를 화면에 정확히 표시하려면 원본 프레임 크기와 bbox 좌표 변환이 중요하다는 점을 학습했습니다.',
    keywords: ['OpenCV', 'Frame Processing', 'BBOX', 'ROI', 'Video Pipeline'],
  },
  {
    title: 'YOLO11n · YOLO11s · RT-DETR-L 모델 비교 실험',
    description: '동일하게 3-class로 정리하고 클래스 밸런스를 맞춘 데이터셋으로 YOLO11n·YOLO11s·RT-DETR-L 계열을 함께 학습시켜 학습 곡선(loss·precision·recall·mAP)과 confusion matrix를 직접 비교했습니다. 최종 발표 성능표 기준 YOLO11n stage2는 mAP50 0.8949·mAP50-95 0.7329, RT-DETR-L은 mAP50 0.9107·mAP50-95 0.7681까지 수렴했습니다. 이 실험을 통해 모델 구조에 따라 수렴 속도와 최종 성능이 어떻게 달라지는지 확인했고, 이후 데이터 밸런싱을 거친 YOLO11s CVAT balanced(mAP50 0.9290·F1 0.8932)를 최종 모델로 선정했습니다.',
    keywords: ['YOLO11n', 'YOLO11s', 'RT-DETR-L', 'mAP', 'Confusion Matrix', 'Training Curve'],
    images: [
      { src: '/images/ai-learning/yolo11n-training-results.png', caption: 'YOLO11n 학습 곡선 · loss / precision / recall / mAP' },
      { src: '/images/ai-learning/yolo11n-confusion-matrix.png', caption: 'YOLO11n Confusion Matrix · 클래스별 예측 정확도' },
      { src: '/images/ai-learning/rtdetr-l-training-results.png', caption: 'RT-DETR-L 학습 곡선 · 동일 데이터셋 비교 학습' },
    ],
  },
  {
    title: 'RT-DETR-L 예비 학습 로그 (조기 종료 실험)',
    description: 'RT-DETR-L을 YOLO11s와 동일한 3-class balanced 데이터셋(20,000장)으로 학습한 예비 실험 로그입니다. patience 20 조건에서 약 20 epoch 시점에 조기 종료되어, 이 로그 자체의 실측치는 mAP@0.5 0.786(car 0.826·truck 0.752·bus 0.782)으로 최종 발표 성능표에 사용한 100 epoch 완료 기준 수치(mAP50 0.9107)와는 다릅니다. 최종 비교표에는 100 epoch 완료 기준 수치를 사용했고, 이 로그는 RT-DETR-L의 학습 초반 수렴 양상을 보여주는 보조 자료로 남겨둡니다.',
    keywords: ['RT-DETR-L', '조기 종료', 'Early Stopping', '예비 실험', 'mAP@0.5 0.786'],
    images: [
      { src: '/images/ai-learning/staccato-rtdetr-l-early-run-results.png', caption: 'Training Results (조기 종료 로그) — patience 20 조건으로 약 20 epoch 시점에 학습이 종료된 RT-DETR-L 예비 실험입니다. 최종 비교표(100 epoch 완료 기준)와는 다른, 학습 초반 수렴 상태를 보여줍니다.' },
      { src: '/images/ai-learning/staccato-rtdetr-l-early-run-pr-curve.png', caption: 'Precision-Recall Curve (조기 종료 로그) — 이 실험 로그 자체의 실측치는 all classes mAP@0.5 0.786(car 0.826·truck 0.752·bus 0.782)입니다. 최종 발표 성능표의 RT-DETR-L mAP50 0.9107은 100 epoch 완료 기준의 별도 최종 실험 수치이며, 이 그래프와는 다른 실험 시점의 결과입니다.' },
      { src: '/images/ai-learning/staccato-rtdetr-l-early-run-confusion-matrix-normalized.png', caption: 'Confusion Matrix Normalized (조기 종료 로그) — 학습 초반 단계에서의 클래스별 예측 안정성을 보여주는 보조 자료입니다.' },
      { src: '/images/ai-learning/staccato-rtdetr-l-early-run-val-pred-01.jpg', caption: 'Validation Predictions (조기 종료 로그) — 학습 초반 단계 RT-DETR-L의 실제 예측 결과 예시입니다.' },
    ],
  },
  {
    title: 'YOLO11n · YOLOv8n 동일 Balanced 데이터셋 보조 비교',
    description: 'YOLO11s CVAT balanced와 동일한 3-class balanced 데이터셋(20,000장)으로 YOLO11n·YOLOv8n을 100 epoch 완료까지 학습한 보조 비교 실험입니다. 실측치(results.csv 최종 epoch 기준) YOLO11n은 Precision 0.9056·Recall 0.8475·mAP50 0.9166·mAP50-95 0.7426, YOLOv8n은 Precision 0.9047·Recall 0.8513·mAP50 0.9176·mAP50-95 0.7429을 기록했습니다. 최종 발표 성능표의 YOLO11n baseline/stage2 수치와는 별도로 진행한 실험이며, 동일 데이터셋에서 경량 모델 간 성능이 서로 비슷한 수준으로 수렴한다는 것을 확인했습니다.',
    keywords: ['YOLO11n', 'YOLOv8n', '동일 데이터셋 비교', 'mAP50 0.9166', 'mAP50 0.9176'],
    images: [
      { src: '/images/ai-learning/staccato-yolo11n-balanced-training-results.png', caption: 'YOLO11n Training Results — 동일 balanced 데이터셋 기준 100 epoch 학습 곡선입니다. mAP50 0.9166·mAP50-95 0.7426으로 수렴했습니다.' },
      { src: '/images/ai-learning/staccato-yolo11n-balanced-pr-curve.png', caption: 'YOLO11n Precision-Recall Curve — car(0.944)·truck(0.899)·bus(0.907), 전체 클래스 mAP@0.5 0.917입니다.' },
      { src: '/images/ai-learning/staccato-yolov8n-balanced-training-results.png', caption: 'YOLOv8n Training Results — 동일 balanced 데이터셋 기준 100 epoch 학습 곡선입니다. mAP50 0.9176·mAP50-95 0.7429로 수렴했습니다.' },
      { src: '/images/ai-learning/staccato-yolov8n-balanced-pr-curve.png', caption: 'YOLOv8n Precision-Recall Curve — car(0.944)·truck(0.900)·bus(0.910), 전체 클래스 mAP@0.5 0.918입니다.' },
    ],
  },
  {
    title: 'YOLO11s CVAT Balanced — 최종 선정 모델 학습 결과',
    description: 'car·truck·bus 3-class로 재구성한 20,000장 규모의 balanced 데이터셋(highway CCTV vehicle detection)으로 YOLO11s를 100 epoch 학습한 최종 선정 모델의 실제 학습 로그입니다. Precision 0.9210 · Recall 0.8670 · F1 0.8932 · mAP50 0.9290 · mAP50-95 0.7680을 기록했고, ByteTrack 추적 및 ROI 기반 정차·이벤트 판단 로직과 연결해 STACCATO의 최종 탐지 모델로 채택했습니다.',
    keywords: ['YOLO11s', 'CVAT balanced', '20,000 images', 'car/truck/bus', 'Final Model'],
    images: [
      { src: '/images/ai-learning/staccato-yolo11s-training-results.png', caption: 'Training Results — YOLO11s CVAT balanced 모델의 100 epoch 학습 결과입니다. box_loss·cls_loss·dfl_loss가 지속적으로 감소하고 precision·recall·mAP50·mAP50-95가 안정적으로 수렴하는 흐름을 확인할 수 있습니다.' },
      { src: '/images/ai-learning/staccato-yolo11s-pr-curve.png', caption: 'Precision-Recall Curve — car(0.950)·truck(0.915)·bus(0.924) 3개 클래스 기준 PR curve입니다. 전체 클래스 기준 mAP@0.5가 0.929로 나타나 최종 선정 모델의 탐지 성능 근거로 사용했습니다.' },
      { src: '/images/ai-learning/staccato-yolo11s-f1-confidence.png', caption: 'F1-Confidence Curve — confidence threshold에 따른 F1 변화를 보여줍니다. 전체 클래스 기준 F1이 0.89(threshold 0.445)까지 도달하며, 실시간 탐지에서 threshold 조정 근거로 활용했습니다.' },
      { src: '/images/ai-learning/staccato-yolo11s-precision-confidence.png', caption: 'Precision-Confidence Curve — confidence를 높일수록 precision이 1.0에 근접하는 흐름을 보여주며, 전체 클래스 기준 precision 1.00에 도달하는 threshold(0.997)를 확인할 수 있습니다.' },
      { src: '/images/ai-learning/staccato-yolo11s-recall-confidence.png', caption: 'Recall-Confidence Curve — confidence 임계값이 낮을 때 recall이 0.96까지 확보되며, threshold를 높일수록 recall이 감소하는 trade-off를 확인할 수 있습니다.' },
      { src: '/images/ai-learning/staccato-yolo11s-confusion-matrix-normalized.png', caption: 'Confusion Matrix Normalized — 클래스별 예측 안정성을 확인하기 위한 normalized confusion matrix입니다. car 0.92·truck 0.87·bus 0.88의 분류 정확도와 함께, background 오탐 경향(각 0.72·0.22·0.06)도 함께 확인했습니다.' },
      { src: '/images/ai-learning/staccato-yolo11s-label-distribution.jpg', caption: 'Label Distribution — 최종 학습 데이터셋(20,000장)의 클래스 분포와 bbox 위치·크기 분포입니다. car 201,838건·truck 56,257건·bus 20,254건의 인스턴스로 구성되며, 도로 CCTV 환경에서 차량이 화면 중앙~하단에 주로 위치하는 경향을 확인할 수 있습니다.' },
      { src: '/images/ai-learning/staccato-yolo11s-val-pred-01.jpg', caption: 'Validation Predictions (배치 1) — validation 이미지에 대한 실제 예측 결과입니다. 주간·야간·안개 등 다양한 환경에서 car·truck·bus 탐지가 정상적으로 수행되는지 확인하기 위한 근거 이미지입니다.' },
      { src: '/images/ai-learning/staccato-yolo11s-val-pred-02.jpg', caption: 'Validation Predictions (배치 2) — 서로 다른 CCTV 구간·시간대에서의 탐지 결과로, 다양한 도로 환경에서의 일반화 성능을 확인할 수 있습니다.' },
      { src: '/images/ai-learning/staccato-yolo11s-val-pred-03.jpg', caption: 'Validation Predictions (배치 3) — 다수 차량이 밀집한 구간에서도 car·truck·bus를 개별적으로 탐지하는지 확인한 결과입니다.' },
    ],
  },
  {
    title: '하이퍼파라미터 실험 (Optimizer · 해상도)',
    description: 'Optimizer(Adam·AdamW·SGD+Nesterov)와 입력 해상도(416·512·640)를 바꿔가며 동일 조건에서 val_loss를 비교한 결과, AdamW + 512 해상도 조합이 Best Val Loss 1.1729로 가장 낮았습니다. 이후 추가 안정화 작업을 통해 best val_loss를 1.1200까지 낮췄지만, 최종 평가에서는 mAP50 0.2832 · F1 0.4137 · FPS 3.55로 실시간 관제 서비스에 적용하기에는 한계가 있었습니다. 이 Keras 실험은 최종 모델 채택이 아니라 객체탐지 구조·bbox 라벨 처리·평가 파이프라인을 이해하기 위한 보조 실험으로 진행했고, 최종 모델은 YOLO 계열(YOLO11s CVAT balanced)로 결정했습니다.',
    keywords: ['Optimizer', 'AdamW', 'Image Resolution', 'Hyperparameter Tuning', 'Best Val Loss 1.1729'],
    images: [
      { src: '/images/ai-learning/keras-optimizer-compare-val-loss.png', caption: 'Optimizer 비교 · Adam vs AdamW vs SGD+Nesterov val_loss' },
      { src: '/images/ai-learning/keras-resolution-compare-val-loss.png', caption: '입력 해상도 비교 · 416 vs 512 vs 640 val_loss' },
    ],
  },
  {
    title: 'KerasCV YOLOv8-xs 정성 평가 (AdamW · img512 · 100 epoch)',
    description: 'AIHub 전체 20k 데이터셋, AdamW optimizer, 입력 해상도 512, 100 epoch, confidence threshold 0.05 조건으로 학습한 KerasCV YOLOv8-xs 모델의 실제 검증 이미지입니다. 초록 박스(GT)는 정답 라벨, 빨간 박스(P)는 모델 예측 결과입니다. confidence threshold를 낮게(0.05) 설정했음에도 야간·혼잡 구간에서 GT 대비 누락되는 차량이 많고 예측 confidence도 낮게(0.1~0.3대) 나타나, 이전에 기록한 최종 평가(mAP50 0.2832·F1 0.4137·FPS 3.55)가 왜 실시간 서비스 적용에 한계가 있었는지를 시각적으로 보여줍니다.',
    keywords: ['KerasCV', 'YOLOv8-xs', 'AdamW', 'img512', 'GT vs Prediction'],
    images: [
      { src: '/images/ai-learning/staccato-kerascv-yolov8xs-eval-01.jpg', caption: 'GT(초록) vs Prediction(빨강) 비교 — 주간 혼잡 구간. 일부 차량은 confidence 0.3~0.7대로 탐지되지만 다수 GT 박스가 예측되지 않는 것을 확인할 수 있습니다.' },
      { src: '/images/ai-learning/staccato-kerascv-yolov8xs-eval-02.jpg', caption: 'GT(초록) vs Prediction(빨강) 비교 — 야간 구간. 조도가 낮아지며 예측 confidence가 0.1대까지 떨어지고 트럭·버스 오탐지(P car로 잘못 분류)도 함께 나타납니다.' },
      { src: '/images/ai-learning/staccato-kerascv-yolov8xs-eval-03.jpg', caption: 'GT(초록) vs Prediction(빨강) 비교 — 대형 차량(트럭·버스) 구간에서 낮은 confidence(0.07~0.19)로 탐지 품질이 저하되는 사례입니다.' },
      { src: '/images/ai-learning/staccato-kerascv-yolov8xs-eval-04.jpg', caption: 'GT(초록) vs Prediction(빨강) 비교 — 다차선 야간 구간. 가까운 차량은 상대적으로 안정적으로 탐지되지만 원거리 차량은 누락 빈도가 높습니다.' },
    ],
  },
  {
    title: 'Custom Keras MobileNetV3-FPN 평가 (quick eval · global center decoding)',
    description: 'KerasCV 라이브러리 대신 MobileNetV3 backbone과 FPN을 직접 구성하고, bbox 중심점(global center) 기반 디코딩 방식을 적용해본 커스텀 Keras 모델의 quick 평가(val 200장 샘플, img size 512) 결과입니다. 초록 박스(GT)와 빨간 박스(P)를 비교하면 주간 구간에서는 confidence 0.6~0.99대로 시각적으로는 그럴듯하게 탐지하는 것처럼 보이지만, 실제 정량 평가에서는 mAP50 0.0061 · mAP50-95 0.0013 · F1 0.041(precision 0.055 · recall 0.032, tp 199 · fp 3435 · fn 5999, conf 0.6 기준)로 매우 낮았습니다. 샘플 이미지의 confidence만으로는 실제 탐지 품질을 판단할 수 없고, 전체 데이터셋 기준 mAP·F1로 검증해야 한다는 점을 이 실험을 통해 체감했습니다. FPS는 약 13.96(latency 약 71.6ms)로 측정되었습니다.',
    keywords: ['Custom Keras', 'MobileNetV3', 'FPN', 'Global Center Decoding', 'mAP50 0.0061'],
    images: [
      { src: '/images/ai-learning/staccato-keras-custom-mnv3fpn-eval-01.jpg', caption: 'GT(초록) vs Prediction(빨강) 비교 — 주간 혼잡 구간. 다수 차량이 confidence 0.7~0.99대로 안정적으로 탐지되지만 중복 박스도 함께 관찰됩니다.' },
      { src: '/images/ai-learning/staccato-keras-custom-mnv3fpn-eval-02.jpg', caption: 'GT(초록) vs Prediction(빨강) 비교 — 근거리 차량은 confidence 0.9 이상으로 정확히 탐지되는 사례입니다.' },
      { src: '/images/ai-learning/staccato-keras-custom-mnv3fpn-eval-03.jpg', caption: 'GT(초록) vs Prediction(빨강) 비교 — 트럭 구간에서 confidence 0.6~0.8대로 탐지되나 일부 중복·오분류 박스가 함께 나타납니다.' },
      { src: '/images/ai-learning/staccato-keras-custom-mnv3fpn-eval-04.jpg', caption: 'GT(초록) vs Prediction(빨강) 비교 — 다차선 구간에서도 대부분의 차량이 준수한 confidence로 탐지되는 결과입니다.' },
      { src: '/images/ai-learning/staccato-keras-custom-mnv3fpn-eval-05.jpg', caption: 'GT(초록) vs Prediction(빨강) 비교 — 트럭·버스가 섞인 구간에서 confidence 0.64~0.88대의 탐지 결과를 보여줍니다.' },
      { src: '/images/ai-learning/staccato-keras-custom-mnv3fpn-eval-06.jpg', caption: 'GT(초록) vs Prediction(빨강) 비교 — 다른 시간대 구간에서도 차량 위치·클래스가 비교적 정확히 예측된 사례입니다.' },
    ],
  },
] as LearningExperiment[]

export const experimentSummary: EvidenceMetric[] = [
  { label: 'Dataset', value: '3종 비교', description: 'AIHub 약 2만 장 + 직접수집 약 2천 장 + 클래스 밸런스 조정 데이터셋' },
  { label: 'Model', value: 'YOLO11s CVAT balanced · RT-DETR-L · YOLO11n · KerasCV', description: '5개 모델 비교 실험, 최종 발표 성능표 기준' },
  { label: 'Training', value: 'YOLO11s 약 15시간 · RT-DETR-L 약 3일', description: '동일 GPU 환경 기준 학습 소요 시간 비교' },
  { label: 'Evaluation', value: 'mAP50 0.9290 / F1 0.8932', description: 'YOLO11s CVAT balanced(최종 선정 모델) 기준' },
  { label: 'Service Application', value: 'STACCATO · 404 R·N·F', description: '탐지 결과를 이벤트 판단 로직과 API 응답으로 연결' },
]

export const realtimePerformance: EvidenceMetric[] = [
  { label: 'YOLO11s (최종 선정)', value: 'mAP50 0.9290 · F1 0.8932', description: '정확도와 속도 균형 우수, 실시간 처리 안정적' },
  { label: 'RT-DETR-L', value: 'mAP50 0.9107 · F1 0.8768', description: '정확도는 높지만 추론 속도는 상대적으로 낮음' },
  { label: 'CPU baseline models', value: 'mAP50 0.40~0.65 · F1 0.40~0.70', description: 'CPU 환경은 학습·추론 속도 모두 실시간 처리에 한계' },
  { label: 'GPU 학습 시간', value: 'YOLO11s 약 15시간 · RT-DETR-L 약 3일', description: '동일 GPU 환경 기준 학습 소요 시간 비교' },
]

type DatasetEvidenceRow = { source: string; volume: string; note: string }

export const datasetEvidence: DatasetEvidenceRow[] = [
  { source: 'AIHub 데이터', volume: '약 20,000장', note: '공개 데이터셋 기반 초기 학습 (전체 수집량 기준)' },
  { source: '직접 수집 데이터', volume: '약 2,000장', note: '부족한 클래스 보강을 위해 직접 수집·라벨링 (전체 수집량 기준)' },
  { source: 'YOLO11s CVAT balanced 최종 학습 데이터셋', volume: '20,000장', note: 'AIHub + 직접 수집 데이터를 car/truck/bus 3-class로 재구성·밸런스 조정한 최종 선정 모델의 학습 데이터셋 (위 전체 수집량의 단순 합산이 아닌 재구성된 데이터셋)' },
  { source: 'Train / Validation 분할 비율', volume: 'TODO', note: '정확한 분할 비율은 현재 기록에 없어 추가 확인 필요' },
  { source: '총 비교 데이터셋 수', volume: '3가지', note: 'AIHub 단독 · 직접 수집 포함 · 밸런스 조정 데이터셋 학습 결과 비교' },
]

export const modelComparisonTable: { model: string; purpose: string; result: string; learned: string; application: string }[] = [
  { model: 'KerasCV YOLOv8-xs', purpose: '객체탐지 구조·bbox 라벨 처리·평가 파이프라인 이해', result: 'Best Val Loss 1.1729(AdamW+512) → 안정화 후 1.1200, 최종 평가 mAP50 0.2832 · F1 0.4137 · FPS 3.55', learned: '데이터 입력 → 모델 출력 → confidence로 이어지는 흐름과 threshold 평가 방식 이해', application: '최종 모델 채택 대신 YOLO 계열 도입 근거 마련 (실시간 처리 한계 확인)' },
  { model: 'Custom Keras MobileNetV3-FPN', purpose: '직접 설계한 backbone·FPN 구조로 커스텀 객체탐지 모델 구현', result: 'mAP50 0.0061 · mAP50-95 0.0013 · F1 0.041 (quick eval, val 200장, conf 0.6 기준)', learned: '샘플 이미지의 confidence만으로는 실제 탐지 품질을 판단할 수 없고 mAP·F1 등 전체 데이터셋 기준 정량 평가가 필요하다는 것을 체감', application: '커스텀 아키텍처 직접 구현 경험 확보, 최종 모델 채택 대신 YOLO 계열 도입 근거 마련' },
  { model: 'YOLO11n baseline', purpose: '경량 모델 기준 성능 확보', result: 'Precision 0.8714 · Recall 0.7766 · F1 0.8213 · mAP50 0.8647 · mAP50-95 0.7144', learned: '튜닝 이전 기준 성능과 개선 여지 확인', application: '이후 stage2 튜닝의 비교 기준선' },
  { model: 'YOLO11n stage2', purpose: '경량·실시간 후보 모델 성능 개선', result: 'Precision 0.8839 · Recall 0.8246 · F1 0.8532 · mAP50 0.8949 · mAP50-95 0.7329', learned: '2단계 튜닝으로 baseline 대비 성능 향상 폭 확인', application: '경량 후보로 검토, 최종 미채택' },
  { model: 'YOLO11s 640 stage2', purpose: '경량·정확도 균형 후보 모델 검증', result: 'Precision 0.8850 · Recall 0.8456 · F1 0.8648 · mAP50 0.9089 · mAP50-95 0.7587', learned: '모델 크기·해상도 조정에 따른 성능 변화 확인', application: '중간 후보로 검증 후 CVAT balanced 데이터셋으로 추가 개선' },
  { model: 'YOLO11s CVAT balanced', purpose: '실시간 객체 탐지 최종 모델 확보', result: 'Precision 0.9210 · Recall 0.8670 · F1 0.8932 · mAP50 0.9290 · mAP50-95 0.7680', learned: '데이터 밸런싱이 모델 성능에 미치는 영향 확인', application: 'STACCATO 정차 차량 탐지 최종 MVP 모델로 채택' },
  { model: 'RT-DETR-L', purpose: 'Transformer 기반 고정확도 탐지 구조 비교', result: 'Precision 0.8989 · Recall 0.8558 · F1 0.8768 · mAP50 0.9107 · mAP50-95 0.7681 (정확도 최고)', learned: 'CNN 계열과 다른 학습 곡선 패턴, GPU 기준 약 3일의 긴 학습 시간과 높은 추론 비용 확인', application: '비교 실험용으로 검증, 실시간성·연동성 고려해 최종 MVP에는 미채택' },
]

export const learningProjectMap = [
  { title: 'Keras / CNN', learning: '이미지 분류와 딥러닝 학습 흐름 이해', project: 'STACCATO', applied: 'YOLO 탐지 결과를 사용하기 전 Keras로 직접 CNN을 학습시켜 입력 → 출력 → confidence로 이어지는 흐름을 확인' },
  { title: 'OpenCV / Computer Vision', learning: 'CCTV 영상과 이미지 처리 흐름 이해', project: 'STACCATO', applied: 'CCTV 프레임 크기와 bbox 좌표를 percentage로 변환해 관제 화면에 BBOX overlay를 정확한 위치에 표시' },
  { title: 'YOLO / Object Detection', learning: '객체 탐지 모델과 confidence, bbox 결과 이해', project: 'STACCATO, 404 R·N·F AI', applied: 'STACCATO 정차 차량 탐지(YOLOv11), 404RNF 낙하물 탐지(YOLOv8·RT-DETR)에서 confidence·bbox 기준 이벤트 판단 로직 구현' },
  { title: 'Flask / FastAPI API Integration', learning: 'AI 모델 결과를 API 응답으로 전달하는 구조 학습', project: 'STACCATO, 404 R·N·F AI', applied: 'AI VM(FastAPI) → Flask VM(API Gateway) → MySQL 저장 → Socket.IO 알림까지 이어지는 API 계약을 설계하고 pytest로 검증' },
  { title: 'Database / Metadata', learning: '탐지 결과, 신고, 이벤트 metadata 저장 구조 이해', project: 'STACCATO, CommerceOps ERP', applied: '탐지 로그·신고·알림·주문 데이터를 MySQL 테이블로 설계하고 SQLAlchemy Repository 계층으로 접근을 분리' },
  { title: 'Linux / Deployment', learning: 'Linux, VM, 배포, health check, DNS/도메인 설정 경험', project: 'STACCATO, AI Developer Portfolio Hub', applied: 'STACCATO는 4개 VM의 SSH 접속·방화벽·health check 점검, 포트폴리오 허브는 GitHub Pages + 커스텀 도메인 배포 파이프라인 구축' },
]

export const contactSummary = 'AI 객체탐지 서비스 개발자를 목표로, 모델 실험부터 API 연동, DB 저장, 프론트엔드 화면 반영, Linux/VM 기반 배포 점검까지 경험했습니다.'

export const contactKeywords = ['AI Developer', 'Computer Vision', 'Object Detection', 'Flask / FastAPI', 'MySQL', 'Linux / VM', 'Deployment']

export const contactTopics = [
  'AI 개발자 포지션',
  'Computer Vision / Object Detection 프로젝트',
  'Flask/FastAPI 기반 AI API 연동',
  '프론트엔드와 AI 결과 시각화 연동',
  'Linux/VM 기반 배포 및 운영 점검',
  '포트폴리오 및 프로젝트 관련 문의',
]

type FaqRelatedLink = { label: string; to?: string; url?: string }
type FaqItem = { q: string; a: string; related?: FaqRelatedLink[] }

export const contactFaq: FaqItem[] = [
  {
    q: '마케팅 경력에서 AI 개발자로 전환하신 이유가 궁금합니다.',
    a: '5년 8개월간 온라인 마케팅·운영 업무를 하며 반복적인 확인 작업과 수작업 관리가 많다는 것을 느꼈습니다. 데이터를 기반으로 판단하고 자동화할 수 있는 부분이 많다고 생각했고, 이를 직접 만들 수 있는 개발자가 되고 싶어 컴퓨터공학을 전공하고 AI/데이터 분석 부트캠프에 참여했습니다.',
    related: [{ label: 'Resume · 경력 요약', to: '/resume' }],
  },
  {
    q: 'AI 모델 연구가 아니라 왜 \'AI 개발자\'를 목표로 하시나요?',
    a: 'STACCATO 프로젝트를 진행하며 모델의 정확도만큼 중요한 것이 그 결과를 실제 화면·DB·운영 흐름에 안정적으로 연결하는 일이라는 것을 체감했습니다. 모델을 만드는 사람보다, 모델의 결과를 사용자가 체감할 수 있는 서비스로 완성하는 사람으로 성장하고 싶습니다.',
    related: [{ label: 'STACCATO 프로젝트', to: '/projects/staccato' }, { label: 'AI 모델 비교 실험', to: '/ai-learning' }],
  },
  {
    q: 'STACCATO 프로젝트에서 실제로 어떤 역할을 맡으셨나요?',
    a: '프론트엔드 MVP 화면 정리, Flask API 연동 점검, VM 인프라 연결 점검, 운영 문서화를 담당했고 Keras 기반 AI 모델 실험도 직접 진행했습니다. 팀 프로젝트였고 개인 기여도는 약 50% 정도입니다.',
    related: [{ label: 'STACCATO 상세 · Evidence', to: '/projects/staccato' }, { label: '운영 점검 체크리스트', to: '/projects/staccato' }, { label: 'GitHub 코드', url: 'https://github.com/staccato-ai-highway-control/staccato-ai-highway-control' }],
  },
  {
    q: '협업 중 겪은 어려움은 어떻게 해결하셨나요?',
    a: '404 R·N·F 프로젝트에서 팀장을 맡으며, 기능이 늘어날수록 라우트 코드에 비즈니스 로직과 DB 접근이 뒤섞여 유지보수가 어려워지는 문제를 겪었습니다. Service·Repository 계층 분리를 팀에 제안하고 구조를 정리해 각자 맡은 부분의 영향 범위를 명확히 했습니다.',
    related: [{ label: '404 R·N·F AI 상세', to: '/projects/404rnf' }, { label: 'GitHub 코드', url: 'https://github.com/lms-mini-project/AI-accident-detection' }],
  },
  {
    q: '입사(또는 실무 투입) 가능 시기가 언제인가요?',
    a: '2026년 7월 9일부터 9월 9일까지 AI 심화반(Roboflow 기반 부유물 탐지) 교육이 예정되어 있지만, 근무 조건 협의 시 교육 기간 중에도 즉시 입사가 가능합니다.',
    related: [{ label: 'Resume · 경력 요약', to: '/resume' }],
  },
  {
    q: '학위는 언제 취득하시나요?',
    a: '학점은행제로 컴퓨터공학을 전공했고, 2026년 8월(후기) 학사 학위 취득 예정입니다.',
    related: [{ label: 'Resume · 교육', to: '/resume' }],
  },
  {
    q: '왜 Python과 Flask를 주로 사용하시나요?',
    a: 'AI 모델 학습·추론 생태계가 Python 중심이라 모델과 서비스를 연결하기에 적합하다고 판단했습니다. Flask는 구조가 단순해 API Gateway·인증·DB 연동 흐름을 직접 설계하며 배우기 좋았고, 이후 FastAPI·Spring Boot·Next.js로도 확장하며 실험했습니다.',
    related: [{ label: 'Resume · 기술 스택', to: '/resume' }],
  },
  {
    q: '앞으로의 커리어 목표는 무엇인가요?',
    a: 'AI를 단순히 기능으로 붙이는 개발자가 아니라, 실제 운영 문제를 이해하고 AI 결과를 서비스 구조 안에서 안정적으로 연결하는 개발자로 성장하고 싶습니다. Computer Vision·Object Detection 기반 서비스에서 데이터부터 운영까지 책임질 수 있는 역량을 쌓아가고 있습니다.',
    related: [{ label: 'AI Learning · 실험 기록', to: '/ai-learning' }, { label: 'Projects 전체 보기', to: '/projects' }],
  },
]
