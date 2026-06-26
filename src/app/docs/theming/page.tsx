import { Badge } from '@/components/ui/badge'
import { DocCallout } from '@/components/docs/doc-callout'
import { DocCode } from '@/components/docs/doc-code'
import { DocsToc } from '@/components/docs/docs-toc'

const toc = [
  { id: 'overview', label: '개요' },
  { id: 'how-it-works', label: '작동 방식' },
  { id: 'use-theme', label: 'useTheme 훅' },
  { id: 'colors', label: '색상 시스템' },
  { id: 'customizing', label: '커스터마이징' },
]

export default function ThemingPage() {
  return (
    <div className="flex gap-8 max-w-5xl mx-auto px-6 py-10">
      <article className="flex-1 min-w-0 space-y-8">
        <div className="space-y-3">
          <Badge variant="secondary">핵심 개념</Badge>
          <h1 className="text-3xl font-bold text-foreground">테마</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            NextKit은 FOUC(스타일 없는 콘텐츠 깜빡임) 없이 다크/라이트/시스템 테마를
            완벽하게 지원합니다.
          </p>
        </div>

        <section className="space-y-4">
          <h2 id="overview" className="text-xl font-semibold text-foreground">
            개요
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            테마는 의존성으로 설치된{' '}
            <strong className="text-foreground">next-themes</strong>와 Tailwind
            CSS 4 CSS 사용자 정의 속성을 결합하여 작동합니다.{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              dark
            </code>{' '}
            CSS 클래스가{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              &lt;html&gt;
            </code>{' '}
            요소에 토글되며, 모든 색상은{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              globals.css
            </code>
            의 CSS 변수로 정의됩니다.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="how-it-works" className="text-xl font-semibold text-foreground">
            작동 방식
          </h2>
          <p className="text-sm text-muted-foreground">
            next-themes의{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              ThemeProvider
            </code>{' '}
            가{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              Providers
            </code>
            를 통해 루트 레이아웃에 추가됩니다:
          </p>
          <DocCode
            language="tsx"
            code={`// app/providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from '@/components/ui/tooltip'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </ThemeProvider>
  )
}`}
          />
          <DocCallout type="note">
            <code className="font-mono text-xs bg-muted px-1 rounded">
              &lt;html&gt;
            </code>{' '}
            요소의{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              suppressHydrationWarning
            </code>{' '}
            은 next-themes가 클라이언트에서{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              dark
            </code>{' '}
            클래스를 주입할 때 React 하이드레이션 경고를 방지합니다.
          </DocCallout>
        </section>

        <section className="space-y-4">
          <h2 id="use-theme" className="text-xl font-semibold text-foreground">
            useTheme 훅
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            NextKit은{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              src/hooks/use-theme.ts
            </code>{' '}
            에 타입이 있는 반환 값과 편의 속성으로 next-themes 훅을 래핑한 커스텀{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              useTheme
            </code>{' '}
            훅을 제공합니다:
          </p>
          <DocCode
            language="tsx"
            code={`import { useTheme } from '@/hooks'

function MyComponent() {
  const {
    theme,          // 'light' | 'dark' | 'system'
    setTheme,       // (theme: Theme) => void
    resolvedTheme,  // 'light' | 'dark' (실제 해석된 값)
    isDark,         // boolean 단축키
    systemTheme,    // OS 설정
  } = useTheme()

  return (
    <button onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      테마 전환
    </button>
  )
}`}
          />
          <DocCallout type="info">
            조건부 UI 렌더링 시{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">theme</code>
            이 아닌{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              resolvedTheme
            </code>{' '}
            을 항상 사용하세요.{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">theme</code>
            은{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              &#39;system&#39;
            </code>
            일 수 있습니다.
          </DocCallout>
        </section>

        <section className="space-y-4">
          <h2 id="colors" className="text-xl font-semibold text-foreground">
            색상 시스템
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            색상은{' '}
            <strong className="text-foreground">OKLCH 색상 공간</strong>을 사용하며{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              src/app/globals.css
            </code>
            에 CSS 사용자 정의 속성으로 정의됩니다. Tailwind CSS 4는{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              @theme inline
            </code>
            으로 이를 매핑합니다:
          </p>
          <DocCode
            language="css"
            code={`:root {
  --background: oklch(1 0 0);          /* 흰색 */
  --foreground: oklch(0.145 0 0);      /* 거의 검정 */
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... */
}

.dark {
  --background: oklch(0.145 0 0);     /* 어두운 배경 */
  --foreground: oklch(0.985 0 0);     /* 거의 흰색 */
  --primary: oklch(0.922 0 0);
  /* ... */
}`}
          />
        </section>

        <section className="space-y-4">
          <h2 id="customizing" className="text-xl font-semibold text-foreground">
            색상 커스터마이징
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            색상 팔레트를 변경하려면{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              globals.css
            </code>
            의{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">:root</code>{' '}
            와{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">.dark</code>{' '}
            블록을 수정하세요. OKLCH 값 생성은 shadcn/ui 테마 생성기{' '}
            <strong className="text-foreground">ui.shadcn.com/themes</strong>를
            사용하세요.
          </p>
          <DocCallout type="tip">
            Tailwind CSS 4에는 별도의{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              tailwind.config.js
            </code>{' '}
            가 없습니다 — 모든 커스터마이징은{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              globals.css
            </code>
            의{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              @theme inline
            </code>{' '}
            지시어를 통해 이루어집니다.
          </DocCallout>
        </section>
      </article>

      <aside className="hidden xl:block w-48 shrink-0">
        <div className="sticky top-24">
          <DocsToc items={toc} />
        </div>
      </aside>
    </div>
  )
}
