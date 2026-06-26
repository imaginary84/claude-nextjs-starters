import { Badge } from '@/components/ui/badge'
import { DocCallout } from '@/components/docs/doc-callout'
import { DocsToc } from '@/components/docs/docs-toc'
import { ExternalLink } from 'lucide-react'

const toc = [{ id: 'libraries', label: '라이브러리 레퍼런스' }]

const libraries = [
  {
    name: 'Next.js',
    version: '16.2.9',
    description:
      '웹을 위한 React 프레임워크. 서버/클라이언트 컴포넌트를 지원하는 App Router, Turbopack 번들러, 스트리밍 기능.',
    href: 'https://nextjs.org/docs',
    tags: ['프레임워크', '핵심'],
  },
  {
    name: 'React',
    version: '19.2.4',
    description:
      '웹과 네이티브 사용자 인터페이스를 위한 라이브러리. React 19는 useActionState, useOptimistic, View Transitions를 도입했습니다.',
    href: 'https://react.dev',
    tags: ['핵심'],
  },
  {
    name: 'TypeScript',
    version: '5.x',
    description:
      'JavaScript에 타입을 추가한 언어. 이 스타터킷 전체에 strict 모드가 활성화되어 있습니다.',
    href: 'https://www.typescriptlang.org/docs',
    tags: ['핵심', '언어'],
  },
  {
    name: 'Tailwind CSS',
    version: '4.x',
    description:
      '유틸리티 우선 CSS 프레임워크. 버전 4는 @theme 지시어를 통한 CSS 네이티브 설정을 도입 — tailwind.config.js 불필요.',
    href: 'https://tailwindcss.com/docs',
    tags: ['스타일링'],
  },
  {
    name: 'shadcn/ui',
    version: '4.x',
    description:
      'Radix UI와 Tailwind CSS로 구축된 아름다운 컴포넌트. 컴포넌트가 프로젝트에 직접 복사됩니다 — 별도 패키지 아님.',
    href: 'https://ui.shadcn.com/docs',
    tags: ['컴포넌트'],
  },
  {
    name: 'Radix UI',
    version: '1.6',
    description:
      '스타일이 없는 접근성 컴포넌트 프리미티브. shadcn/ui에서 다이얼로그, 드롭다운, 툴팁 등에 내부적으로 사용.',
    href: 'https://www.radix-ui.com/primitives/docs',
    tags: ['컴포넌트', '접근성'],
  },
  {
    name: 'Lucide React',
    version: '1.21',
    description:
      '아름답고 일관된 아이콘 팩. 1,000개 이상의 아이콘이 경량 React SVG 컴포넌트로 제공.',
    href: 'https://lucide.dev/guide/packages/lucide-react',
    tags: ['아이콘'],
  },
  {
    name: 'next-themes',
    version: 'latest',
    description:
      'Next.js를 위한 완벽한 다크 모드 지원. SSR, FOUC 방지, 시스템 설정 감지를 처리합니다.',
    href: 'https://github.com/pacocoursey/next-themes',
    tags: ['테마'],
  },
  {
    name: 'usehooks-ts',
    version: 'latest',
    description:
      'TypeScript 우선 React 훅 컬렉션. useMediaQuery, useLocalStorage, useDebounce, useWindowSize 외 40개 이상 제공.',
    href: 'https://usehooks-ts.com',
    tags: ['훅'],
  },
  {
    name: 'React Hook Form',
    version: 'latest',
    description:
      '간편한 유효성 검사가 있는 고성능 유연한 폼 라이브러리. @hookform/resolvers를 통해 Zod와 통합.',
    href: 'https://react-hook-form.com',
    tags: ['폼'],
  },
  {
    name: 'Zod',
    version: 'latest',
    description:
      'TypeScript 우선 스키마 유효성 검사. React Hook Form과 함께 폼 유효성 검사에 사용.',
    href: 'https://zod.dev',
    tags: ['유효성 검사', '폼'],
  },
  {
    name: 'Sonner',
    version: 'latest',
    description:
      'React를 위한 토스트 알림 라이브러리. shadcn/ui sonner 컴포넌트를 통해 통합.',
    href: 'https://sonner.emilkowal.ski',
    tags: ['알림'],
  },
]

const tagVariant: Record<string, 'default' | 'secondary' | 'outline'> = {
  핵심: 'default',
  프레임워크: 'secondary',
  언어: 'secondary',
  스타일링: 'outline',
  컴포넌트: 'outline',
  접근성: 'outline',
  아이콘: 'outline',
  테마: 'outline',
  훅: 'outline',
  폼: 'outline',
  '유효성 검사': 'outline',
  알림: 'outline',
}

export default function ExternalLibrariesPage() {
  return (
    <div className="flex gap-8 max-w-5xl mx-auto px-6 py-10">
      <article className="flex-1 min-w-0 space-y-8">
        <div className="space-y-3">
          <Badge variant="secondary">참고 자료</Badge>
          <h1 className="text-3xl font-bold text-foreground">
            외부 라이브러리
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            NextKit에서 사용하는 모든 서드파티 의존성과 공식 문서 링크.
          </p>
        </div>

        <DocCallout type="info">
          아래의 모든 라이브러리는{' '}
          <code className="font-mono text-xs bg-muted px-1 rounded">
            package.json
          </code>
          에 이미 설치되어 있습니다. NextKit 위에서 개발할 때 각 라이브러리의
          문서에서 전체 API를 확인하세요.
        </DocCallout>

        <section className="space-y-4">
          <h2 id="libraries" className="text-xl font-semibold text-foreground">
            라이브러리 레퍼런스
          </h2>
          <div className="divide-y divide-border">
            {libraries.map((lib) => (
              <div key={lib.name} className="py-5 space-y-2.5">
                <div className="flex items-start gap-3 justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">
                        {lib.name}
                      </h3>
                      <Badge variant="outline" className="text-xs font-mono">
                        {lib.version}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {lib.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={tagVariant[tag] ?? 'outline'}
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <a
                    href={lib.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0 mt-0.5"
                  >
                    문서 <ExternalLink className="size-3" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lib.description}
                </p>
              </div>
            ))}
          </div>
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
