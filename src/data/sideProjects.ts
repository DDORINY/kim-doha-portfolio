export type SideProject = {
  slug: string
  name: string
  description: string
  note?: string
  url: string
  github?: string
  status?: 'in-progress'
  linkLabel?: string
  tags?: string[]
}

export const sideProjects: SideProject[] = [
  {
    slug: 'portfolio-hub',
    name: 'AI Developer Portfolio Hub',
    description: '프로젝트·이력서·학습 기록을 데이터 기반 구조로 통합한 개인 포트폴리오 사이트 (지금 보고 계신 이 사이트입니다)',
    note: 'AI 서비스 개발자로 전환하는 과정을 보여주기 위해 React + Vite + TypeScript로 직접 설계·구현했습니다. 프로젝트·프로필 정보를 데이터 파일로 분리해, 새 프로젝트를 추가할 때 화면 코드를 건드리지 않고도 카드·상세·이력서에 동시에 반영되도록 만들었습니다.',
    url: 'https://ddoriny.com/',
    github: 'https://github.com/DDORINY/kim-doha-portfolio',
    linkLabel: '포트폴리오 사이트 바로가기',
    tags: ['React', 'TypeScript', 'Vite', 'GitHub Pages'],
  },
  {
    slug: 'tarot',
    name: '타로카드',
    description: '재미로 만들어본 타로카드 운세 서비스',
    url: 'https://tarot.ddoriny.com/',
    tags: ['Vercel', 'Domain', 'Frontend'],
  },
  {
    slug: 'mafia-msw',
    name: '마피아 게임 (MSW)',
    description: 'MapleStory Worlds 공모전 출품을 위해 3인 팀으로 개발 중인 마피아 게임',
    url: 'https://github.com/ai-mafia-detective-team/MapleStory-Worlds-mafia',
    status: 'in-progress',
    linkLabel: 'GitHub 저장소 보기',
    tags: ['MapleStory Worlds', 'Game UI', 'Team Project'],
  },
]

export const getSideProject = (slug?: string) => sideProjects.find((project) => project.slug === slug)
