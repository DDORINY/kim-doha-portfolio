export type NavigationItem = {
  title: string
  path: string
  icon?: string
}

export const navigationItems: NavigationItem[] = [
  { title: 'HOME', path: '/' },
  { title: 'PROJECTS', path: '/projects' },
  { title: 'COMPUTER VISION', path: '/computer-vision' },
  { title: 'LLM & AI', path: '/llm' },
  { title: 'RESUME', path: '/resume' },
  { title: 'CONTACT', path: '/contact' },
]

export const pageTitles: Record<string, string> = {
  '/': 'Kim DoHa | AI Service Developer',
  '/projects': 'Projects | Kim DoHa',
  '/computer-vision': 'Computer Vision | Kim DoHa',
  '/llm': 'LLM & AI | Kim DoHa',
  '/resume': 'Resume | Kim DoHa',
  '/contact': 'Contact | Kim DoHa',
}
