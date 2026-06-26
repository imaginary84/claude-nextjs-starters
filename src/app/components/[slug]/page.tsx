import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { componentList, categoryColors, categoryIcons } from '@/lib/component-list'
import { ComponentDemo } from '@/app/components/demos'
import { DocCode } from '@/components/docs/doc-code'

export function generateStaticParams() {
  return componentList.map((c) => ({ slug: c.slug }))
}


export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const component = componentList.find((c) => c.slug === slug)

  if (!component) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* 상단 네비게이션 */}
      <div>
        <Button asChild variant="ghost" size="sm" className="gap-1.5 -ml-2 text-muted-foreground">
          <Link href="/components">
            <ArrowLeft className="size-3.5" />
            컴포넌트 목록
          </Link>
        </Button>
      </div>

      {/* 헤더 */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          {(() => {
            const Icon = categoryIcons[component.category]
            return (
              <div
                className={`size-11 rounded-xl flex items-center justify-center ${categoryColors[component.category] ?? 'bg-muted'}`}
              >
                {Icon && <Icon className="size-5" />}
              </div>
            )
          })()}
          <div>
            <h1 className="text-2xl font-bold text-foreground">{component.name}</h1>
            <Badge variant="outline" className="text-xs mt-0.5">
              {component.category}
            </Badge>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{component.description}</p>
      </div>

      <Separator />

      {/* 인터랙티브 데모 */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">데모</h2>
        <div className="rounded-xl border border-border bg-muted/20 p-8 flex items-center justify-center min-h-40">
          <ComponentDemo slug={component.slug} />
        </div>
      </section>

      <Separator />

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Import</h2>
        <DocCode language="tsx" code={component.importCode} />
      </section>

      {/* 사용 방법 */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">사용 방법</h2>
        <DocCode language="tsx" code={component.usageCode} />
      </section>
    </div>
  )
}
