import { useEffect, useState } from 'react'

const themes = [
  { key: 'dark', label: '다크', swatch: 'linear-gradient(135deg, #0a0e19 50%, #8c83ff 50%)' },
  { key: 'white', label: '화이트', swatch: 'linear-gradient(135deg, #ffffff 50%, #6c63ff 50%)' },
  { key: 'pink', label: '핑크', swatch: 'linear-gradient(135deg, #fff2f7 50%, #ec4899 50%)' },
  { key: 'green', label: '그린', swatch: 'linear-gradient(135deg, #f1faf4 50%, #1ea36b 50%)' },
  { key: 'blue', label: '블루', swatch: 'linear-gradient(135deg, #f1f6ff 50%, #2f6fed 50%)' },
] as const

type ThemeKey = (typeof themes)[number]['key']

const STORAGE_KEY = 'theme'

function getInitialTheme(): ThemeKey {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return themes.some((theme) => theme.key === stored) ? (stored as ThemeKey) : 'dark'
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeKey>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return (
    <div className="theme-switcher" role="group" aria-label="테마 선택">
      {themes.map((item) => (
        <button
          key={item.key}
          type="button"
          className={item.key === theme ? 'active' : ''}
          style={{ background: item.swatch }}
          onClick={() => setTheme(item.key)}
          aria-label={`${item.label} 테마로 변경`}
          aria-pressed={item.key === theme}
        />
      ))}
    </div>
  )
}
