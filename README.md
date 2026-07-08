# AI Developer Portfolio Hub

## 프로젝트 소개

AI 개발자로 전환하는 과정을 보여주는 개인 포트폴리오 사이트입니다. 프로젝트·이력서·학습 기록이 노션, 깃허브, 개별 PDF로 흩어지는 문제를 해결하기 위해, React + Vite + TypeScript로 데이터 기반 구조를 직접 설계·구현했습니다. 라이브: [ddoriny.com](https://ddoriny.com/)

## 주요 기능

- 프로젝트 목록 및 상세 페이지 (카테고리 필터, 역할·기여도·성과 요약)
- AI Learning 학습 → 프로젝트 적용 매핑
- Resume 기반 자격증·경력·직무별 강점 정리
- 다크 기본 포함 5종 컬러 테마 전환
- 반응형 UI, 스크롤 리빌 애니메이션
- GitHub Pages + 커스텀 도메인 자동 배포

## 기술 스택

React 19, TypeScript, Vite, React Router (HashRouter), CSS, GitHub Pages, gh-pages

## 구현 포인트

- **데이터 분리**: 프로젝트·프로필 정보를 `src/data/projects.ts`, `src/data/profile.ts`에 타입 기반으로 정의해, 화면 컴포넌트를 수정하지 않고 데이터 파일만 수정해도 카드·상세·이력서에 동시에 반영되도록 구성했습니다.
- **재사용 컴포넌트**: `Layout`, `ProjectCard`, `SectionHeading`, `ThemeSwitcher`, `ScrollTopButton`, `Reveal` 등으로 UI를 분리했습니다.
- **HashRouter 기반 라우팅 대응**: GitHub Pages는 서버 라우팅 설정이 불가능해 `BrowserRouter` 사용 시 하위 경로 새로고침에서 404가 발생합니다. `HashRouter` + 상대 base 경로(`./`)로 전환해 어떤 경로에서 새로고침해도 정상 동작하도록 했습니다.
- **커스텀 도메인 연결**: `CNAME`으로 `ddoriny.com`을 GitHub Pages에 연결하고, `.github/workflows/deploy.yml`로 `main` push 시 빌드·배포를 자동화했습니다.
- **반응형 레이아웃**: 모바일 햄버거 메뉴, 그리드 컬럼 축소 등 브레이크포인트별 레이아웃을 적용했습니다.

## 트러블슈팅

| 문제 | 해결 |
|---|---|
| GitHub Pages에서 새로고침 시 404 발생 가능 | `HashRouter` + 상대 base 경로 적용 |
| 스크롤 리빌 애니메이션이 카드 hover 효과를 가림 | CSS 특이도 순서를 조정해 `.reveal` 기본 규칙을 스타일시트 상단으로 이동 |
| 고해상도 인증서 이미지로 페이지 용량 증가 | `sharp`로 리사이즈·압축 (2~2.5MB → 140~160KB) |
| 한글 파일명으로 인한 배포 호환성 우려 | 영문 kebab-case 파일명으로 통일 |
| 프로젝트 수 증가 시 화면 유지보수 부담 | 프로젝트 데이터를 `projects.ts`로 분리, 화면은 렌더링만 담당 |
| 준비되지 않은 문서 링크의 깨진 링크 위험 | `placeholder` 플래그로 "자료 준비 중" 상태 렌더링 |
| 커스텀 도메인 HTTPS 인증서 미발급 | GitHub Pages API로 원인 진단, 도메인 재등록 절차 확인 (진행 중) |
| Google Fonts `@import`로 인한 렌더링 차단 (Lighthouse Performance 68점) | `preconnect` + `media="print" onload` 비동기 폰트 로드 패턴 적용 |

## Lighthouse 성능·접근성 (Before → After)

> **측정 기준**: 배포 사이트(ddoriny.com)가 아닌 **로컬 프리뷰 빌드**(`vite preview`, 프로덕션 번들과 동일한 산출물) 기준으로 측정했습니다. 배포 사이트는 CDN·네트워크 조건에 따라 실측치가 달라질 수 있습니다.
>
> 리포트 원본: [`public/docs/lighthouse/lighthouse-before.json`](public/docs/lighthouse/lighthouse-before.json), [`public/docs/lighthouse/lighthouse-after.json`](public/docs/lighthouse/lighthouse-after.json), [`public/docs/lighthouse/lighthouse-after.html`](public/docs/lighthouse/lighthouse-after.html)

| 지표 | Before | After |
|---|---|---|
| Performance | 68 | 96 |
| Accessibility | 98 | 100 |
| Best Practices | 100 | 100 |
| SEO | 91 | 100 |
| LCP (Largest Contentful Paint) | 5.2s | 2.5s |
| FCP (First Contentful Paint) | 5.0s | 1.4s |

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
