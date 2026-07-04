import { useEffect, useState } from 'react'

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`scroll-top-button${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="맨 위로 이동"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      ↑
    </button>
  )
}
