---
name: nextkit-patterns
description: NextKit 코드베이스의 반복 패턴, Next.js 16 API 준수 현황, 공통 이슈
metadata:
  type: project
---

NextKit (Next.js 16.2.9 + React 19.2.4 + TypeScript strict) 스타터킷 코드 리뷰 - 2026-06-28 완료.

**Why:** 향후 리뷰에서 이미 확인된 패턴을 중복 검토하지 않기 위함.

**확인된 올바른 패턴:**
- `params: Promise<{ slug: string }>`와 `await params` 패턴 올바르게 사용됨 (`[slug]/page.tsx`)
- `generateStaticParams()` 올바르게 구현됨
- Server/Client 컴포넌트 경계 잘 분리됨: `Providers`, `ThemeToggle`, 사이드바 등 인터랙티브만 `'use client'`
- `suppressHydrationWarning`이 `<html>`에 올바르게 적용됨
- 외부 링크에 `rel="noopener noreferrer"` 일관 적용
- `Button` 컴포넌트에 CVA로 `icon-sm`, `icon-xs`, `icon-lg` 커스텀 사이즈 정의됨
- Tailwind CSS 4의 `@theme inline` + OKLCH 색상 시스템 올바르게 구현
- `radix-ui` 통합 패키지(v1.6) 사용 — 개별 `@radix-ui/*` 패키지 아닌 모노 패키지

**반복 발견된 이슈 (주의해서 검토):**
- 클립보드 API 사용 시 try/catch 없는 패턴 (`doc-code.tsx`)
- 파일 중간에 위치한 `import` 문 — ESM 규칙 위반 (`demos.tsx`)
- SWR fetcher의 HTTP 오류 처리 누락 (`response.ok` 체크 없음)
- `Record<string, ...>` 대신 더 강한 타입(`Record<Category, ...>`) 활용 미흡
- UI 텍스트 한국어화 미완성 (doc-code.tsx의 "Copy"/"Copied!" 등)
- `theme-toggle.tsx`의 `aria-label="Toggle theme"` 영어 잔존

**프로젝트 구조 특이사항:**
- `demos.tsx` (780줄): 모든 컴포넌트 데모가 단일 파일에 집중, 파일 중간에 `import useSWR`
- `previews.tsx`: demos.tsx와 거의 동일한 import 구조, 카드 썸네일용 경량 버전
- `component-list.ts`: 컴포넌트 메타데이터 + 카테고리 색상/아이콘 맵 (Category 타입 정의됨)
- `hooks/index.ts`: usehooks-ts re-export + 커스텀 useTheme 래퍼
- 인코멘트된(비활성화된) 컴포넌트들 다수 존재 (Button, Input, Badge, Alert 등)

**How to apply:** 이 파일에서 새 코드를 리뷰할 때 위 확인된 패턴은 재확인 불필요. 위에 나열된 공통 이슈 패턴을 우선적으로 검토할 것.
