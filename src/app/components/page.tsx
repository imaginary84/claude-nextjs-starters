import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { componentList, CATEGORIES, categoryColors } from '@/lib/component-list'
import { ComponentPreview } from '@/app/components/previews'

export default function ComponentsPage() {
  const grouped = CATEGORIES.map((cat) => ({
    category: cat,
    items: componentList.filter((c) => c.category === cat),
  }))

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-foreground">컴포넌트</h1>
        <p className="text-muted-foreground">
          설치된 모든 shadcn/ui 컴포넌트를 카테고리별로 탐색하세요. 각 컴포넌트의
          인터랙티브 데모와 사용 방법을 확인할 수 있습니다.
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{componentList.length}개</span>
          컴포넌트 설치됨
        </div>
      </div>

      {grouped.map(({ category, items }) => (
        <section key={category} className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-foreground">{category}</h2>
            <Badge variant="outline" className="text-xs">
              {items.length}개
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((component) => (
              <Link
                key={component.slug}
                href={`/components/${component.slug}`}
                className="group"
              >
                <Card className="h-full pt-0 transition-all duration-200 hover:shadow-md hover:border-primary/30 group-hover:-translate-y-0.5">
                  <div
                    className={`h-24 flex items-center justify-center border-b border-border pointer-events-none overflow-hidden ${categoryColors[category] ?? 'bg-muted/30'}`}
                  >
                    <ComponentPreview slug={component.slug} />
                  </div>
                  <CardHeader className="pt-3 pb-3">
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-base">{component.name}</CardTitle>
                      <ArrowRight className="size-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                    <CardDescription className="text-xs leading-relaxed line-clamp-2">
                      {component.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
