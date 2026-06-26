import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="flex justify-center">
          <Badge variant="outline" className="px-3 py-1 text-xs gap-1.5">
            Next.js 16 · React 19 · Tailwind CSS 4
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          모던 앱을 더{' '}
          <span className="text-primary">빠르게</span> 개발하세요
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          컴포넌트, 레이아웃, 다크모드, 커스텀 훅, 그리고 완성된 문서까지 —
          즉시 프로덕션에 쓸 수 있는 스타터킷.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/docs/introduction">
              시작하기 <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/components">컴포넌트 보기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
