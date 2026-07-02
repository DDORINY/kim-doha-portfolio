import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 상대 경로를 사용해 사용자/프로젝트 GitHub Pages 모두에서 동작합니다.
  base: './',
})
