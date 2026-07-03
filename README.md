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

기본 배포 방식은 **GitHub Actions**입니다. 저장소 Settings → Pages → Source를 GitHub Actions로 선택하면 `.github/workflows/deploy.yml`이 `main` push 시 빌드 결과물을 배포합니다.

`npm run deploy`는 `predeploy` 빌드 후 `dist`를 `gh-pages` 브랜치에 올리는 수동 배포 명령입니다. 수동 배포를 사용할 때는 Pages Source를 해당 브랜치로 변경해야 합니다. 두 방식 중 하나만 실제 배포 소스로 사용하세요.
