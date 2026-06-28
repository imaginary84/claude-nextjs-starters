# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
```

테스트 설정 없음.

## Architecture

### Next.js 16 주의사항
`node_modules/next/dist/docs/` 를 참고할 것. 핵심 breaking change:
- 동적 라우트의 `params`가 `Promise<{...}>`로 변경 — 반드시 `await params`로 사용
- `generateStaticParams()`는 동일 파일에서 export

### 레이아웃 구조

```
src/app/layout.tsx           ← 루트: Providers > Navbar > main > Footer > Toaster
src/app/providers.tsx        ← Client: ThemeProvider(next-themes) + TooltipProvider
src/app/dashboard/layout.tsx ← Sidebar 레이아웃 (src/components/layout/sidebar.tsx)
src/app/docs/layout.tsx      ← DocsSidebar 레이아웃
```

### 컴포넌트 등록 시스템

새 컴포넌트를 showcase에 추가할 때 3곳을 수정해야 한다:

1. **`src/lib/component-list.ts`** — `componentList` 배열에 `ComponentMeta` 항목 추가. `category`는 반드시 `Category` 타입(`CATEGORIES` 중 하나). `categoryColors`, `categoryIcons`도 `Record<Category, ...>` 타입이므로 누락 시 TS 오류 발생.
2. **`src/app/components/previews.tsx`** — `slug` → 정적 미리보기 컴포넌트 매핑 추가
3. **`src/app/components/demos.tsx`** — `slug` → 인터랙티브 데모 컴포넌트 추가 (Client Component)

컴포넌트 상세 페이지(`src/app/components/[slug]/page.tsx`)는 `componentList`에서 자동으로 `generateStaticParams()`를 생성한다.

### 훅

`@/hooks`에서 import (next-themes에서 직접 import 금지):

```ts
import { useTheme } from '@/hooks'
// resolvedTheme: 'light' | 'dark' | undefined (SSR 중 undefined)
```

usehooks-ts 유틸리티도 `@/hooks`에서 re-export됨: `useMediaQuery`, `useLocalStorage`, `useDebounceValue`, `useWindowSize`, `useEventListener`

### UI 컴포넌트

`src/components/ui/`는 shadcn/ui 자동 생성 파일 — 직접 수정하지 않는다. 추가 시 `npx shadcn add <component>` 사용.

cn() 유틸리티: `import { cn } from '@/lib/utils'`

### 스타일

Tailwind CSS 4 사용 (tailwind.config.js 없음, PostCSS 기반). 테마 토큰은 `src/app/globals.css`에 CSS 변수로 정의. 다크모드는 `class` 전략(`ThemeProvider attribute="class"`).
