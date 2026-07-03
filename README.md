# 김도하 AI 개발자 포트폴리오 허브

AI 모델을 웹 서비스, API, 데이터베이스, 배포 환경과 연결한 경험을 소개하는 React + Vite + TypeScript 기반 정적 포트폴리오입니다. GitHub Pages 호환성을 위해 `HashRouter`와 상대 asset base를 사용합니다.

## 실행

```bash
npm install
npm run dev
npm run build
npm run deploy
```

## 콘텐츠 교체

- 프로젝트 정보: `src/data/projects.ts`
- 프로필/연락처: `src/data/profile.ts`
- AI 학습 페이지: `src/pages/AILearning.tsx`
- 프로젝트 이미지: `public/images`
- 이력서 및 문서: `public/docs`

placeholder 링크는 화면에서 비활성 상태로 표시됩니다. 실제 링크와 파일을 추가한 뒤 해당 항목의 `placeholder`를 제거하세요.

## GitHub Pages

Pages Source는 **Deploy from a branch → `gh-pages` → `/ (root)`**를 사용합니다. `.github/workflows/deploy.yml`은 `main` push 시 `npm run deploy`를 실행해 빌드 결과물을 `gh-pages` 브랜치에 자동 게시합니다.

PowerShell 실행 정책으로 `npm.ps1`이 차단되는 환경에서는 `npm.cmd run build`, `npm.cmd run deploy`를 사용해 수동 배포할 수 있습니다.
