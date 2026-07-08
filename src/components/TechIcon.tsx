import type { IconType } from 'react-icons'
import { FaAws } from 'react-icons/fa6'
import {
  SiCss, SiFastapi, SiFlask, SiGit, SiGithub, SiGithubpages, SiGooglemaps, SiHtml5,
  SiJavascript, SiJinja, SiJsonwebtokens, SiKakao, SiKeras, SiLinux, SiMysql, SiNextdotjs,
  SiNginx, SiNumpy, SiOpencv, SiPandas, SiPython, SiPytest, SiReact, SiSocketdotio,
  SiSpringboot, SiSqlalchemy, SiTensorflow, SiTypescript, SiUbuntu, SiVercel, SiVite, SiVmware,
} from 'react-icons/si'

const iconMap: Record<string, IconType> = {
  'react': SiReact,
  'react 19': SiReact,
  'typescript': SiTypescript,
  'javascript': SiJavascript,
  'next.js': SiNextdotjs,
  'vite': SiVite,
  'nginx': SiNginx,
  'flask': SiFlask,
  'flask-migrate': SiFlask,
  'flask-socketio': SiFlask,
  'python': SiPython,
  'fastapi': SiFastapi,
  'opencv': SiOpencv,
  'tensorflow': SiTensorflow,
  'keras': SiKeras,
  'keras 실험': SiKeras,
  'keracv': SiKeras,
  'kerascv': SiKeras,
  'mysql': SiMysql,
  'mysql workbench': SiMysql,
  'sqlalchemy': SiSqlalchemy,
  'linux': SiLinux,
  'ubuntu': SiUbuntu,
  'vmware': SiVmware,
  'git': SiGit,
  'github': SiGithub,
  'github 저장소': SiGithub,
  'github pages': SiGithubpages,
  'spring boot': SiSpringboot,
  'html': SiHtml5,
  'css': SiCss,
  'jinja2': SiJinja,
  'google maps api': SiGooglemaps,
  'kakao navigation api': SiKakao,
  'vercel': SiVercel,
  'numpy': SiNumpy,
  'pandas': SiPandas,
  'pytest': SiPytest,
  'jwt': SiJsonwebtokens,
  'jwt 인증': SiJsonwebtokens,
  'socket.io': SiSocketdotio,
  'aws': FaAws,
  'aws 배포 경험': FaAws,
}

export function resolveTechIcon(label: string): IconType | undefined {
  const key = label.trim().toLowerCase()
  if (iconMap[key]) return iconMap[key]
  const firstToken = key.split(/[\s/·,&]+/)[0]
  return iconMap[firstToken]
}

export default function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = resolveTechIcon(name)
  if (!Icon) return null
  return <Icon className={className ?? 'tech-icon'} aria-hidden="true" />
}

export function TechChip({ label, className = 'chip' }: { label: string; className?: string }) {
  return (
    <span className={className}>
      <TechIcon name={label} />
      {label}
    </span>
  )
}
