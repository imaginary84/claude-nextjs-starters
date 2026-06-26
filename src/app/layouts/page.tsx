import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ArrowRight } from 'lucide-react'

interface LayoutCard {
  title: string
  description: string
  useCases: string[]
  liveHref?: string
  diagram: React.ReactNode
  code: string
}

const layouts: LayoutCard[] = [
  {
    title: '전체 너비 레이아웃',
    description:
      '전체 뷰포트에 걸친 히어로 섹션, 랜딩 페이지, 마케팅 콘텐츠.',
    useCases: ['랜딩 페이지', '마케팅 사이트', '포트폴리오'],
    liveHref: '/',
    diagram: (
      <div className="space-y-1.5 p-3 bg-muted/40 rounded-lg h-28 flex flex-col">
        <div className="h-3 bg-foreground/20 rounded w-full" />
        <div className="flex-1 bg-foreground/10 rounded" />
        <div className="h-3 bg-foreground/20 rounded w-full" />
      </div>
    ),
    code: `// app/page.tsx
export default function Page() {
  return (
    <>
      <Navbar />            {/* 고정 헤더 */}
      <main className="pt-16">
        <HeroSection />     {/* 전체 너비 섹션 */}
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}`,
  },
  {
    title: '컨테이너 레이아웃',
    description:
      '최대 너비 제한으로 중앙 정렬된 콘텐츠. 문서, 블로그, 읽기 콘텐츠에 적합.',
    useCases: ['문서', '블로그 포스트', '아티클'],
    liveHref: '/docs/introduction',
    diagram: (
      <div className="space-y-1.5 p-3 bg-muted/40 rounded-lg h-28 flex flex-col">
        <div className="h-3 bg-foreground/20 rounded w-full" />
        <div className="flex-1 mx-4 bg-foreground/10 rounded" />
        <div className="h-3 bg-foreground/20 rounded w-full" />
      </div>
    ),
    code: `// app/blog/page.tsx
export default function Page() {
  return (
    <main className="pt-16">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <article>
          {/* 콘텐츠 */}
        </article>
      </div>
    </main>
  )
}`,
  },
  {
    title: '사이드바 레이아웃',
    description:
      '고정 좌측 사이드바와 스크롤 가능한 메인 콘텐츠 영역. 대시보드와 관리자 패널에 적합.',
    useCases: ['대시보드', '관리자 패널', '앱 UI'],
    liveHref: '/dashboard',
    diagram: (
      <div className="space-y-1.5 p-3 bg-muted/40 rounded-lg h-28 flex flex-col">
        <div className="h-3 bg-foreground/20 rounded w-full" />
        <div className="flex gap-1.5 flex-1">
          <div className="w-10 bg-foreground/20 rounded" />
          <div className="flex-1 bg-foreground/10 rounded" />
        </div>
        <div className="h-3 bg-foreground/20 rounded w-full" />
      </div>
    ),
    code: `// app/dashboard/layout.tsx
import { Sidebar } from '@/components/layout/sidebar'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <Sidebar />                  {/* 데스크탑: w-64, 모바일: Sheet */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}`,
  },
  {
    title: '2열 레이아웃',
    description:
      '메인 콘텐츠 영역과 고정 aside. 보조 정보가 있는 상세 페이지에 적합.',
    useCases: ['상품 페이지', '프로필 페이지', '설정'],
    diagram: (
      <div className="space-y-1.5 p-3 bg-muted/40 rounded-lg h-28 flex flex-col">
        <div className="h-3 bg-foreground/20 rounded w-full" />
        <div className="flex gap-1.5 flex-1">
          <div className="flex-1 bg-foreground/10 rounded" />
          <div className="w-8 bg-foreground/20 rounded" />
        </div>
        <div className="h-3 bg-foreground/20 rounded w-full" />
      </div>
    ),
    code: `// app/product/[id]/page.tsx
export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
        <main>
          {/* 주요 콘텐츠 */}
        </main>
        <aside className="space-y-4">
          <div className="sticky top-24">
            {/* 보조 정보 */}
          </div>
        </aside>
      </div>
    </div>
  )
}`,
  },
]

export default function LayoutsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-foreground">레이아웃</h1>
        <p className="text-muted-foreground mt-2">
          프로젝트에서 즉시 사용 가능한 사전 구축된 레이아웃 패턴.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {layouts.map((layout) => (
          <Card key={layout.title} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <CardTitle>{layout.title}</CardTitle>
                  <CardDescription>{layout.description}</CardDescription>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {layout.useCases.map((uc) => (
                  <Badge key={uc} variant="secondary" className="text-xs">
                    {uc}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
              {layout.diagram}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  코드 패턴
                </p>
                <ScrollArea className="h-40 w-full rounded-lg border border-border bg-muted/50">
                  <pre className="p-4 text-xs font-mono text-foreground whitespace-pre">
                    {layout.code}
                  </pre>
                </ScrollArea>
              </div>
            </CardContent>
            {layout.liveHref && (
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="gap-1.5">
                  <Link href={layout.liveHref}>
                    라이브 예시 <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
