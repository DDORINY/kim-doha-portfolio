export type SideProject = {
  slug: string
  name: string
  description: string
  note?: string
  role?: string[]
  features?: string[]
  troubleshooting?: { title: string; situation: string; solution: string; result: string }[]
  retrospective?: string
  image?: string
  url: string
  github?: string
  status?: 'in-progress'
  linkLabel?: string
  githubLabel?: string
  tags?: string[]
  accent?: string
}

export const sideProjects: SideProject[] = [
  {
    slug: 'portfolio-hub',
    name: 'AI Developer Portfolio Hub',
    description: '프로젝트·이력서·학습 기록을 데이터 기반 구조로 통합한 개인 포트폴리오 사이트 (지금 보고 계신 이 사이트입니다)',
    note: 'AI 개발자로 전환하는 과정을 보여주기 위해 React + Vite + TypeScript로 직접 설계·구현했습니다. 프로젝트·프로필 정보를 데이터 파일로 분리해, 새 프로젝트를 추가할 때 화면 코드를 건드리지 않고도 카드·상세·이력서에 동시에 반영되도록 만들었습니다.',
    image: '/images/portfolio-hub-01.png',
    url: 'https://ddoriny.com/',
    github: 'https://github.com/DDORINY/kim-doha-portfolio',
    linkLabel: '포트폴리오 사이트 바로가기',
    tags: ['React', 'TypeScript', 'Vite', 'GitHub Pages'],
    accent: '#8c83ff',
  },
  {
    slug: 'tarot',
    name: '타로카드',
    description: '재미로 만들어본 타로카드 운세 서비스',
    note: '재미로 시작했지만 Next.js App Router와 Supabase를 실제 배포까지 연결해보고 싶어 개인적으로 진행했습니다. 카드를 뽑고 결과를 해석하는 흐름부터 로그인 후 히스토리를 저장하는 흐름까지, 프론트엔드와 백엔드·DB를 함께 다루는 경험을 쌓는 것이 목표였습니다.',
    role: [
      '스프레드 선택 → 카드 드로우 → 결과 해석으로 이어지는 사용자 흐름 설계',
      'Next.js App Router Route Handler(app/api/*)로 카드·스프레드·리딩 API 구현',
      'Supabase Auth 기반 이메일 회원가입·로그인 연동',
      'Supabase PostgreSQL에 리딩 기록·다이어리 저장 구조 설계',
      'Vercel 배포 및 환경변수 구성',
    ],
    features: ['스프레드 선택 후 카드 드로우', '리딩 결과 해석 화면', '리딩 히스토리 조회', '다이어리 기록', '이메일 회원가입 · 로그인'],
    troubleshooting: [
      {
        title: '별도 서버 없이 화면과 API를 하나의 배포로 연결',
        situation: '개인 프로젝트로 별도 백엔드 서버를 운영하기보다 빠르게 배포까지 이어가는 구조가 필요했습니다.',
        solution: 'Next.js App Router의 Route Handler(app/api/*)를 백엔드로 사용해 화면과 API를 하나의 Vercel 배포에 담고, Supabase를 인증·DB로 연결했습니다.',
        result: '별도 서버 없이도 로그인부터 리딩 기록 저장까지 이어지는 흐름을 배포까지 완성할 수 있었습니다.',
      },
    ],
    retrospective: '화면만 만드는 것과 실제로 로그인, 데이터 저장, 배포까지 연결하는 것은 다르다는 걸 체감했습니다. Supabase로 인증과 DB를 함께 다뤄보며 백엔드 없이도 서비스형 구조를 만드는 경험을 쌓았습니다.',
    image: '/images/tarot-cover.png',
    url: 'https://tarot.ddoriny.com/',
    github: 'https://github.com/DDORINY/tarot-note',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    accent: '#e8b04b',
  },
  {
    slug: 'mafia-msw',
    name: '마피아 게임 (MSW)',
    description: 'MapleStory Worlds 공모전 출품을 위해 3인 팀으로 개발 중인 마피아 게임',
    note: '메이플스토리 월드 기반 소셜 디덕션 게임 공모전 출품을 목표로 3인 팀 프로젝트로 시작했습니다. "커닝시티: 지하수사록"이라는 세계관 아래, 낮에는 토론과 투표로 추리하고 밤에는 직업 능력으로 정보를 모으거나 사건을 조작하는 6~8인 마피아 게임을 기획하고 있습니다.',
    role: [
      '프로젝트 기획 총괄 — 게임 콘셉트, 세계관, 진행 흐름 설계',
      '팀 작업 규칙 수립 — 문서 작성 기준, 파일 네이밍, 커밋 컨벤션 등 협업 규칙 정리',
      'UI 디자인 — 로비·방 만들기·매칭 등 화면 UI 설계 (진행 중)',
    ],
    features: [
      '인트로 스토리 연출 및 닉네임 설정',
      '아바타 이동·점프 물리 시뮬레이션이 적용된 로비',
      '방 만들기(인원수·비밀번호 검증) 및 빠른 매칭 UI',
      '프로필 이미지·닉네임·칭호 저장',
      '경찰·의사·마피아 역할 기반 낮/밤 진행 시스템 (설계 중)',
    ],
    retrospective: '게임 기획자로서 콘셉트와 세계관을 잡고 팀이 함께 쓸 작업 규칙을 정하는 것부터 시작해, 지금은 UI 디자인까지 맡으며 기획이 실제 화면과 흐름으로 이어지는 과정을 경험하고 있습니다.',
    image: '/images/mafia-msw-cover.png',
    url: 'https://github.com/ai-mafia-detective-team/MapleStory-Worlds-mafia',
    github: 'https://github.com/ai-mafia-detective-team/MapleStory-Worlds-mafia-docs',
    status: 'in-progress',
    linkLabel: '게임 저장소 보기',
    githubLabel: '기획 문서 저장소',
    tags: ['MapleStory Worlds', 'Lua', 'Game UI', 'Multiplayer'],
    accent: '#ff6b6b',
  },
  {
    slug: 'wildfire-pulsemap',
    name: 'Wildfire PulseMap',
    description: '산불 위험도와 재난문자를 지도 위에서 함께 보여주는 실시간 펄스맵 서비스',
    note: '산불 위험 예보와 재난문자를 따로 확인해야 하는 문제를 해결하고 싶어 개인적으로 시작했습니다. 위험도가 높은 지역과 실제로 관련 재난문자가 발송된 지역을 하나의 지도에서 함께 확인할 수 있는 상황 인지 도구를 만드는 데 집중했습니다.',
    role: [
      '산불위험예보·긴급재난문자 공공데이터 API 수집기 설계 및 구현',
      '화재/산불 관련 문자만 선별하는 키워드 필터링 정책 설계',
      'SQLAlchemy 기반 지역·위험도·재난문자·수집 로그 DB 스키마 설계',
      'Flask API(/api/risk/latest, /api/messages/latest)와 Leaflet 지도 화면 구현',
      'APScheduler 기반 자동 수집 스케줄링 및 중복 실행 방지(lock) 처리',
      'Render 배포 및 SQLite 운영 환경 구성',
    ],
    features: [
      '산불위험예보·긴급재난문자 자동 수집',
      '화재/산불 관련 문자만 선별 저장하는 키워드 필터링',
      'Leaflet 기반 실시간 펄스맵 (위험도·재난문자 마커)',
      '위험도 TOP 지역 및 최근 재난문자 목록',
      'collector 실행 로그 확인 화면',
      '자동 수집 스케줄링 (재난문자 10분 · 위험예보 30분 주기)',
    ],
    troubleshooting: [
      {
        title: '재난문자 오탐 없이 화재 관련 문자만 선별',
        situation: '재난문자에는 산불과 무관한 호우·태풍·산사태·교통·생활안전 문자가 섞여 있어, 단순 키워드 매칭만으로는 무관한 문자까지 함께 저장되는 문제가 있었습니다.',
        solution: '대피·연기·통제·입산금지·소각금지처럼 모호한 키워드는 화재/산불 맥락이 함께 확인될 때만 저장하도록 필터링 정책을 설계하고, 정책상 제외(non_keyword)와 실제 오류를 구분해 로그로 남겼습니다.',
        result: '저장률을 억지로 높이기보다 화재/산불 맥락이 분명한 문자만 정확히 선별해, 위험도 지도의 신뢰도를 높일 수 있었습니다.',
      },
    ],
    retrospective: '위험 예보 데이터와 실제 발송된 재난문자를 하나의 지도에서 연결해보면서, 데이터를 단순히 모으는 것과 신뢰할 수 있는 기준으로 걸러 의미 있게 보여주는 것은 다른 문제라는 걸 배웠습니다. 수집기·필터링·DB·스케줄러·지도 화면까지 하나의 흐름으로 직접 설계하며 백엔드 데이터 파이프라인을 다루는 경험을 쌓았습니다.',
    image: '/images/wildfire-pulsemap-cover.png',
    url: 'https://wildfire.ddoriny.com',
    github: 'https://github.com/DDORINY/wildfire-pulsemap',
    tags: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'APScheduler', 'Leaflet', 'Render'],
    accent: '#f5a524',
  },
]

export const getSideProject = (slug?: string) => sideProjects.find((project) => project.slug === slug)
