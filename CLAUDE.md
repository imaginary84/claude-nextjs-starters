# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

```bash
npm run dev      # 개발 서버 (http://localhost:3000) — Turbopack 기본 활성화
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
npm run lint     # ESLint 검사
```

테스트 설정 없음.

## 스택

- **Next.js 16.2.9** + **React 19** (App Router, Turbopack 기본)
- **Tailwind CSS 4** (PostCSS 기반, `tailwind.config.js` 없음)
- **shadcn/ui** — style: `radix-nova`, baseColor: `neutral`, `radix-ui` v1 통합 패키지 사용
- **SWR** — 클라이언트 데이터 페칭
- **React Hook Form** + **Zod** — 폼 검증 (`zod`는 `@hookform/resolvers` 의존성으로 설치됨)
- **sonner** — 토스트 알림 (`<Toaster />`는 `app/layout.tsx`에 이미 등록됨)

## 경로 별칭

`@/*` → `src/*` (tsconfig.json paths)

## 레이아웃 구조

```
src/app/layout.tsx            ← 루트: Providers > Navbar(fixed h-16) > main(flex-1 pt-16) > Footer > Toaster
src/app/providers.tsx         ← Client: ThemeProvider(next-themes, attribute="class") + TooltipProvider
src/app/dashboard/layout.tsx  ← Sidebar 레이아웃 (src/components/layout/sidebar.tsx)
src/app/docs/layout.tsx       ← DocsSidebar 레이아웃
```

새 페이지 레이아웃에서 `pt-16`은 불필요 — 루트 레이아웃 `main`에 이미 적용됨.

## Next.js 16 주의사항

`node_modules/next/dist/docs/` 를 참고할 것. 핵심 breaking change:

- 동적 라우트의 `params`와 `searchParams` 모두 `Promise<{...}>`로 변경 — 반드시 `await params` / `await searchParams`로 사용
- `generateStaticParams()`는 동일 파일에서 export

## 컴포넌트 등록 시스템

새 컴포넌트를 showcase에 추가할 때 **3곳** 수정:

1. **`src/lib/component-list.ts`** — `componentList` 배열에 `ComponentMeta` 항목 추가
   - `category`는 반드시 기존 `Category` 타입 중 하나: `'폼 요소' | '표시' | '피드백' | '네비게이션' | '오버레이' | '데이터' | 'API 예제'`
   - **새 카테고리 추가 시** `CATEGORIES as const` 배열 + `categoryColors` Record + `categoryIcons` Record 세 곳 모두 수정
2. **`src/app/components/previews.tsx`** — `slug` → 정적 미리보기 컴포넌트 매핑 추가
3. **`src/app/components/demos.tsx`** — `slug` → 인터랙티브 데모 컴포넌트 추가 (Client Component)

`src/app/components/[slug]/page.tsx`는 `componentList`에서 `generateStaticParams()`를 자동 생성한다.

## 훅

`@/hooks`에서 import (next-themes에서 직접 import 금지):

```ts
import { useTheme } from '@/hooks'
// theme: 'light' | 'dark' | 'system'
// resolvedTheme: 'light' | 'dark' | undefined  (SSR 중 undefined)
// isDark: boolean  (resolvedTheme === 'dark' 단축키)
```

usehooks-ts 유틸리티도 `@/hooks`에서 re-export: `useMediaQuery`, `useLocalStorage`, `useDebounceValue`, `useWindowSize`, `useEventListener`

## 데이터 페칭

SWR 패턴:

```ts
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

const { data, error, isLoading, mutate } = useSWR<T>(url, fetcher)
```

## 폼

React Hook Form + Zod 패턴:

```ts
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
```

## Toast

```ts
import { toast } from 'sonner'

toast('메시지')
toast.success('저장되었습니다.')
toast.error('오류가 발생했습니다.')
toast.loading('처리 중...')
```

`<Toaster />`는 `app/layout.tsx`에 이미 등록됨 — 별도 설정 불필요.

## UI 컴포넌트 및 스타일

- `src/components/ui/` — shadcn/ui 자동 생성 파일, **직접 수정 금지**. 추가: `npx shadcn add <component>`
- `cn()` 유틸리티: `import { cn } from '@/lib/utils'`
- 테마 토큰: `src/app/globals.css` CSS 변수 (oklch 색상 공간)
- 다크모드: `class` 전략 (`ThemeProvider attribute="class"`)
- 애니메이션: `tw-animate-css` (Tailwind 플러그인으로 자동 로드)
- 폰트: Geist Sans (`--font-geist-sans`) / Geist Mono (`--font-geist-mono`)
- Button `size="icon-sm"` — radix-nova 스타일에서 추가된 아이콘 전용 소형 사이즈 (기본 shadcn에 없음)
