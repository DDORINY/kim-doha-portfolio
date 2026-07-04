export type SideProject = { name: string; description: string; url: string; status?: 'in-progress'; linkLabel?: string }

export const sideProjects: SideProject[] = [
  { name: '타로카드', description: '재미로 만들어본 타로카드 운세 서비스', url: 'https://tarot.ddoriny.com/' },
  { name: '마피아 게임 (MSW)', description: 'MapleStory Worlds 공모전 출품을 위해 3인 팀으로 개발 중인 마피아 게임', url: 'https://github.com/ai-mafia-detective-team/MapleStory-Worlds-mafia', status: 'in-progress', linkLabel: 'GitHub 저장소 보기' },
]
