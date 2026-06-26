import { Badge } from '@/components/ui/badge'
import { DocCallout } from '@/components/docs/doc-callout'
import { DocCode } from '@/components/docs/doc-code'
import { DocsToc } from '@/components/docs/docs-toc'

const toc = [
  { id: 'overview', label: '개요' },
  { id: 'src', label: 'src/ 디렉토리' },
  { id: 'app', label: 'app/', level: 3 as const },
  { id: 'components', label: 'components/', level: 3 as const },
  { id: 'hooks', label: 'hooks/', level: 3 as const },
  { id: 'conventions', label: '규칙' },
]

const structure = `src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 루트 레이아웃 (Navbar, Footer, Providers)
│   ├── page.tsx            # 랜딩 페이지 (/)
│   ├── providers.tsx       # 클라이언트 프로바이더 (ThemeProvider, TooltipProvider)
│   ├── dashboard/          # /dashboard 라우트
│   │   ├── layout.tsx      # 사이드바 레이아웃
│   │   └── page.tsx        # 대시보드 콘텐츠
│   ├── components/         # /components 라우트
│   │   ├── page.tsx        # 컴포넌트 목록
│   │   └── [slug]/         # 컴포넌트 상세 페이지
│   ├── layouts/            # /layouts 라우트
│   │   └── page.tsx        # 레이아웃 패턴
│   └── docs/               # /docs 라우트
│       ├── layout.tsx      # 문서 사이드바 레이아웃
│       ├── page.tsx        # /docs/introduction 으로 리다이렉트
│       ├── introduction/
│       ├── getting-started/
│       ├── project-structure/
│       ├── theming/
│       ├── hooks/
│       └── external-libraries/
├── components/
│   ├── ui/                 # shadcn/ui 컴포넌트 (자동 생성)
│   ├── layout/             # 앱 레이아웃 컴포넌트
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── sidebar.tsx
│   │   └── theme-toggle.tsx
│   ├── sections/           # 랜딩 페이지 섹션
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── tech-stack.tsx
│   │   └── cta.tsx
│   └── docs/               # 문서 컴포넌트
│       ├── docs-sidebar.tsx
│       ├── docs-toc.tsx
│       ├── doc-callout.tsx
│       └── doc-code.tsx
├── hooks/
│   ├── use-theme.ts        # 커스텀 테마 훅 (next-themes 래퍼)
│   └── index.ts            # usehooks-ts + use-theme re-export
└── lib/
    └── utils.ts            # cn() 유틸리티 (clsx + tailwind-merge)`

export default function ProjectStructurePage() {
  return (
    <div className="flex gap-8 max-w-5xl mx-auto px-6 py-10">
      <article className="flex-1 min-w-0 space-y-8">
        <div className="space-y-3">
          <Badge variant="secondary">시작하기</Badge>
          <h1 className="text-3xl font-bold text-foreground">
            프로젝트 구조
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            폴더 구조와 각 디렉토리의 역할을 살펴봅니다.
          </p>
        </div>

        <section className="space-y-4">
          <h2 id="overview" className="text-xl font-semibold text-foreground">
            개요
          </h2>
          <DocCode language="bash" code={structure} />
        </section>

        <section className="space-y-4">
          <h2 id="src" className="text-xl font-semibold text-foreground">
            src/ 디렉토리
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            모든 소스 코드는{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">src/</code>{' '}
            아래에 있으며, TypeScript 경로 별칭은{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">@/*</code>{' '}
            가{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">./src/*</code>
            를 가리키도록 설정되어 있습니다.
          </p>

          <div className="space-y-4">
            <h3 id="app" className="text-base font-semibold text-foreground">
              app/
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Next.js 16 App Router 디렉토리입니다. 각 하위 디렉토리는 URL 경로에
              매핑됩니다. 특수 파일:{' '}
              <code className="font-mono text-xs bg-muted px-1 rounded">
                layout.tsx
              </code>{' '}
              (공유 UI),{' '}
              <code className="font-mono text-xs bg-muted px-1 rounded">
                page.tsx
              </code>{' '}
              (페이지 컴포넌트).
            </p>

            <h3 id="components" className="text-base font-semibold text-foreground">
              components/
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              목적에 따라 하위 디렉토리로 구성:{' '}
              <code className="font-mono text-xs bg-muted px-1 rounded">ui/</code>{' '}
              (shadcn 프리미티브),{' '}
              <code className="font-mono text-xs bg-muted px-1 rounded">
                layout/
              </code>{' '}
              (구조 컴포넌트),{' '}
              <code className="font-mono text-xs bg-muted px-1 rounded">
                sections/
              </code>{' '}
              (랜딩 페이지 섹션),{' '}
              <code className="font-mono text-xs bg-muted px-1 rounded">
                docs/
              </code>{' '}
              (문서 UI).
            </p>

            <h3 id="hooks" className="text-base font-semibold text-foreground">
              hooks/
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              커스텀 훅 모음.{' '}
              <code className="font-mono text-xs bg-muted px-1 rounded">
                @/hooks
              </code>{' '}
              에서 import하면 커스텀{' '}
              <code className="font-mono text-xs bg-muted px-1 rounded">
                useTheme
              </code>{' '}
              과 usehooks-ts re-export를 모두 사용할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="conventions" className="text-xl font-semibold text-foreground">
            규칙
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">파일 명명:</strong>{' '}
              파일은 kebab-case, 컴포넌트는 PascalCase.
            </li>
            <li>
              <strong className="text-foreground">서버 vs 클라이언트:</strong>{' '}
              기본적으로 서버 컴포넌트. 상호작용이 필요한 경우에만{' '}
              <code className="font-mono text-xs bg-muted px-1 rounded">
                &#39;use client&#39;
              </code>{' '}
              추가.
            </li>
            <li>
              <strong className="text-foreground">임포트:</strong> 상대 경로 대신{' '}
              <code className="font-mono text-xs bg-muted px-1 rounded">@/</code>{' '}
              별칭 사용.
            </li>
          </ul>
          <DocCallout type="note">
            <code className="font-mono text-xs bg-muted px-1 rounded">
              components/ui/
            </code>{' '}
            의 shadcn/ui 컴포넌트는{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              npx shadcn add
            </code>{' '}
            CLI로 자동 생성되며 자유롭게 커스터마이징할 수 있습니다.
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
