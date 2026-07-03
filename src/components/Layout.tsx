import { type ReactNode, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/profile'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/ai-learning', label: 'AI Learning' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="홈으로 이동">
            <span className="brand-mark">D.</span>
            <span>DOHA KIM</span>
          </Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="메뉴 열기">
            <span /><span />
          </button>
          <nav className={open ? 'nav open' : 'nav'} aria-label="주요 메뉴">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main key={location.pathname}>{children}</main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}. AI Service Developer Portfolio.</p>
          <Link to="/contact">함께 이야기하기 →</Link>
        </div>
      </footer>
    </div>
  )
}
