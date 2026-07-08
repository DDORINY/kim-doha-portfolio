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
    image: '/images/mafia-msw-cover.png',
    url: 'https://github.com/ai-mafia-detective-team/MapleStory-Worlds-mafia',
    status: 'in-progress',
    linkLabel: 'GitHub 저장소 보기',
    tags: ['MapleStory Worlds', 'Game UI', 'Team Project'],
    accent: '#ff6b6b',
  },
]

export const getSideProject = (slug?: string) => sideProjects.find((project) => project.slug === slug)
