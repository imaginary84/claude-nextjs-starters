import { Badge } from '@/components/ui/badge'
import { DocCallout } from '@/components/docs/doc-callout'
import { DocCode } from '@/components/docs/doc-code'
import { DocsToc } from '@/components/docs/docs-toc'

const toc = [
  { id: 'overview', label: '개요' },
  { id: 'use-theme', label: 'useTheme' },
  { id: 'use-media-query', label: 'useMediaQuery' },
  { id: 'use-local-storage', label: 'useLocalStorage' },
  { id: 'use-debounce', label: 'useDebounceValue' },
  { id: 'use-window-size', label: 'useWindowSize' },
]

export default function HooksPage() {
  return (
    <div className="flex gap-8 max-w-5xl mx-auto px-6 py-10">
      <article className="flex-1 min-w-0 space-y-8">
        <div className="space-y-3">
          <Badge variant="secondary">핵심 개념</Badge>
          <h1 className="text-3xl font-bold text-foreground">훅</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            NextKit은 일반적인 패턴을 위한 훅 컬렉션과 함께 제공됩니다. 모든 훅은{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">@/hooks</code>
            에서 import할 수 있습니다.
          </p>
        </div>

        <section className="space-y-4">
          <h2 id="overview" className="text-xl font-semibold text-foreground">
            개요
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">훅</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">출처</th>
                  <th className="text-left py-2 font-semibold text-foreground">설명</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { hook: 'useTheme', source: '커스텀 (next-themes 래퍼)', desc: '다크/라이트/시스템 테마 전환' },
                  { hook: 'useMediaQuery', source: 'usehooks-ts', desc: '반응형 CSS 미디어 쿼리 감지' },
                  { hook: 'useLocalStorage', source: 'usehooks-ts', desc: '동기화된 localStorage 상태' },
                  { hook: 'useDebounceValue', source: 'usehooks-ts', desc: '유휴 상태까지 값 업데이트 지연' },
                  { hook: 'useWindowSize', source: 'usehooks-ts', desc: '창 너비와 높이 추적' },
                  { hook: 'useEventListener', source: 'usehooks-ts', desc: 'DOM 이벤트 리스너 안전하게 연결' },
                ].map((row) => (
                  <tr key={row.hook}>
                    <td className="py-2 pr-4 font-mono text-xs text-foreground">{row.hook}</td>
                    <td className="py-2 pr-4 text-muted-foreground">{row.source}</td>
                    <td className="py-2 text-muted-foreground">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DocCallout type="tip">
            직접 usehooks-ts를 import하는 대신{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">@/hooks</code>
            에서 import하세요. index 파일이 모든 것을 re-export하여 필요한 것만
            tree-shake할 수 있습니다.
          </DocCallout>
        </section>

        <section className="space-y-4">
          <h2 id="use-theme" className="text-xl font-semibold text-foreground">
            useTheme
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <Badge variant="outline" className="text-xs mr-2">직접 개발</Badge>
            next-themes의{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">useTheme</code>
            을 타입이 있는 반환 값과{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">isDark</code>{' '}
            편의 boolean으로 래핑합니다.
          </p>
          <DocCode
            language="tsx"
            code={`import { useTheme } from '@/hooks'

function ThemeToggle() {
  const { resolvedTheme, setTheme, isDark } = useTheme()

  return (
    <button onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? '라이트 모드' : '다크 모드'}
    </button>
  )
}`}
          />
          <DocCallout type="info">
            SSR 안전: next-themes가 스타일 없는 콘텐츠의 깜빡임이 없도록
            차단 스크립트를 주입합니다.{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">resolvedTheme</code>
            은 SSR 중{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">undefined</code>
            를 반환합니다 — 조건부 UI에는{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">mounted</code>{' '}
            가드를 사용하세요.
          </DocCallout>
        </section>

        <section className="space-y-4">
          <h2 id="use-media-query" className="text-xl font-semibold text-foreground">
            useMediaQuery
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <Badge variant="outline" className="text-xs mr-2">usehooks-ts</Badge>
            뷰포트 변경 시 반응적으로 업데이트되는 boolean을 반환합니다.
            SSR 중에는{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">false</code>
            를 반환합니다.
          </p>
          <DocCode
            language="tsx"
            code={`import { useMediaQuery } from '@/hooks'

function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (isMobile) return <MobileLayout />
  return <DesktopLayout />
}`}
          />
        </section>

        <section className="space-y-4">
          <h2 id="use-local-storage" className="text-xl font-semibold text-foreground">
            useLocalStorage
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <Badge variant="outline" className="text-xs mr-2">usehooks-ts</Badge>
            localStorage에 자동으로 유지되는{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">useState</code>
            의 드롭인 교체.
          </p>
          <DocCode
            language="tsx"
            code={`import { useLocalStorage } from '@/hooks'

function Preferences() {
  const [language, setLanguage] = useLocalStorage('lang', 'ko')
  const [fontSize, setFontSize, removeFontSize] = useLocalStorage('font-size', 16)

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  )
}`}
          />
        </section>

        <section className="space-y-4">
          <h2 id="use-debounce" className="text-xl font-semibold text-foreground">
            useDebounceValue
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <Badge variant="outline" className="text-xs mr-2">usehooks-ts</Badge>
            지정된 지연 동안 사용자가 업데이트를 멈출 때까지 값 전파를 지연합니다.
            검색 입력에 적합합니다.
          </p>
          <DocCode
            language="tsx"
            code={`import { useState } from 'react'
import { useDebounceValue } from '@/hooks'

function SearchInput() {
  const [query, setQuery] = useState('')
  const [debouncedQuery] = useDebounceValue(query, 400)

  // 사용자가 400ms 동안 입력을 멈출 때만 API 호출
  useEffect(() => {
    if (debouncedQuery) fetchResults(debouncedQuery)
  }, [debouncedQuery])

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />
}`}
          />
        </section>

        <section className="space-y-4">
          <h2 id="use-window-size" className="text-xl font-semibold text-foreground">
            useWindowSize
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <Badge variant="outline" className="text-xs mr-2">usehooks-ts</Badge>
            현재 창의{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">width</code>
            와{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">height</code>
            를 반환합니다. 서버에서는 둘 다{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">undefined</code>
            입니다.
          </p>
          <DocCode
            language="tsx"
            code={`import { useWindowSize } from '@/hooks'

function CanvasComponent() {
  const { width, height } = useWindowSize()

  return <canvas width={width} height={height} />
}`}
          />
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
