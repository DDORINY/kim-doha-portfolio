# 김도하 포트폴리오 허브

React + Vite + TypeScript 기반의 정적 포트폴리오입니다. GitHub Pages 호환성을 위해 `HashRouter`와 상대 asset base를 사용합니다.

## 실행

```bash
npm install
npm run dev
npm run build
```

## 콘텐츠 교체

- 프로젝트 정보: `src/data/projects.ts`
- 프로필/연락처: `src/data/profile.ts`
- 프로젝트 이미지: `public/images`
- 이력서 및 문서: `public/docs`

placeholder 링크는 화면에서 비활성 상태로 표시됩니다. 실제 링크와 파일을 추가한 뒤 해당 항목의 `placeholder`를 제거하세요.

## GitHub Pages

저장소 Settings → Pages → Source를 **GitHub Actions**로 선택하면 `.github/workflows/deploy.yml`이 빌드 결과물을 배포합니다.
