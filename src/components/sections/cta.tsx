import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl bg-primary text-primary-foreground p-12 sm:p-16 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            훌륭한 서비스를 만들 준비가 됐나요?
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto leading-relaxed">
            NextKit으로 시작하고 몇 분 안에 첫 번째 기능을 출시하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href="/docs/introduction">
                문서 읽기 <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground hover:text-primary-foreground"
            >
              <Link href="/components">컴포넌트 보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
