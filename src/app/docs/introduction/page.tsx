import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DocCallout } from '@/components/docs/doc-callout'
import { DocsToc } from '@/components/docs/docs-toc'

const toc = [
  { id: 'what-is-nextkit', label: 'NextKit이란?' },
  { id: 'tech-stack', label: '기술 스택' },
  { id: 'features', label: '주요 기능' },
  { id: 'next-steps', label: '다음 단계' },
]

const stack = [
  'Next.js 16.2',
  'React 19.2',
  'TypeScript 5',
  'Tailwind CSS 4',
  'shadcn/ui 4',
  'Radix UI 1.6',
  'Lucide React',
  'next-themes',
  'usehooks-ts',
  'React Hook Form',
  'Zod',
]

export default function IntroductionPage() {
  return (
    <div className="flex gap-8 max-w-5xl mx-auto px-6 py-10">
      <article className="flex-1 min-w-0 space-y-8">
        <div className="space-y-3">
          <Badge variant="secondary">시작하기</Badge>
          <h1 id="what-is-nextkit" className="text-3xl font-bold text-foreground">
            소개
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            NextKit은 보일러플레이트를 건너뛰고 즉시 기능 개발을 시작할 수 있는
            프로덕션 준비 Next.js 16 스타터킷입니다.
          </p>
        </div>

        <DocCallout type="tip" title="팁">
          문서를 탐색하려면 사이드바를 사용하세요. 각 섹션은 스타터킷의 다른 측면을 다룹니다.
        </DocCallout>

        <section className="space-y-4">
          <h2 id="tech-stack" className="text-xl font-semibold text-foreground">
            기술 스택
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            NextKit은 완벽하게 함께 작동하도록 신중하게 선택된 도구들로 구축되었습니다:
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="features" className="text-xl font-semibold text-foreground">
            주요 기능
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            {[
              '25개 이상의 shadcn/ui 컴포넌트 설치 완료 및 즉시 사용 가능',
              'next-themes를 통한 FOUC 없는 다크/라이트/시스템 테마',
              '반응형 레이아웃: 전체 너비, 컨테이너, 사이드바, 2열',
              'usehooks-ts 기반 커스텀 훅 (useMediaQuery, useLocalStorage, useDebounce)',
              'React Hook Form + Zod 유효성 검사로 폼 처리',
              '전체 코드베이스에 TypeScript strict 모드 적용',
              'OKLCH 색상 시스템과 CSS 사용자 정의 속성이 있는 Tailwind CSS 4',
              '컴포넌트 쇼케이스 페이지와 레이아웃 미리보기 페이지',
              '내장 문서 섹션 (이 페이지)',
            ].map((f) => (
              <li key={f} className="flex gap-2.5 text-sm leading-relaxed">
                <span className="text-primary mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        <DocCallout type="info" title="Next.js 16 참고">
          이 스타터킷은 이전 버전과 호환되지 않는 변경사항이 있는 Next.js 16을
          사용합니다. 가장 주목할 변경사항은{' '}
          <code className="font-mono text-xs bg-muted px-1 rounded">params</code>{' '}
          와{' '}
          <code className="font-mono text-xs bg-muted px-1 rounded">
            searchParams
          </code>{' '}
          가 이제 비동기적이며 페이지 컴포넌트에서 await가 필요합니다.
        </DocCallout>

        <section id="next-steps" className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">다음 단계</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            빠른 시작 가이드를 따라 2분 안에 프로젝트를 실행하세요.
          </p>
          <Button asChild className="gap-2">
            <Link href="/docs/getting-started">
              빠른 시작 <ArrowRight className="size-4" />
            </Link>
          </Button>
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
