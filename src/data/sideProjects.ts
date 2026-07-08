export type SideProject = { name: string; description: string; url: string; status?: 'in-progress'; linkLabel?: string; tags?: string[] }

export const sideProjects: SideProject[] = [
  { name: 'AI Developer Portfolio Hub', description: '프로젝트·이력서·학습 기록을 데이터 기반 구조로 통합한 개인 포트폴리오 사이트 (지금 보고 계신 이 사이트입니다)', url: 'https://ddoriny.com/', linkLabel: '포트폴리오 사이트 바로가기', tags: ['React', 'TypeScript', 'Vite', 'GitHub Pages'] },
  { name: '타로카드', description: '재미로 만들어본 타로카드 운세 서비스', url: 'https://tarot.ddoriny.com/', tags: ['Vercel', 'Domain', 'Frontend'] },
  { name: '마피아 게임 (MSW)', description: 'MapleStory Worlds 공모전 출품을 위해 3인 팀으로 개발 중인 마피아 게임', url: 'https://github.com/ai-mafia-detective-team/MapleStory-Worlds-mafia', status: 'in-progress', linkLabel: 'GitHub 저장소 보기', tags: ['MapleStory Worlds', 'Game UI', 'Team Project'] },
]
