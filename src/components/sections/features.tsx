import {
  Zap,
  Shield,
  Code2,
  Globe,
  Layers,
  Sparkles,
} from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

const features = [
  {
    icon: Zap,
    title: '빠른 속도',
    description:
      'Turbopack 번들러 기본 탑재. 밀리초 단위 핫 리로드로 개발 생산성 향상.',
  },
  {
    icon: Shield,
    title: '타입 안전성',
    description:
      'TypeScript strict 모드 전면 적용. 런타임이 아닌 컴파일 시점에 버그를 잡습니다.',
  },
  {
    icon: Code2,
    title: '컴포넌트 라이브러리',
    description:
      '25개 이상의 shadcn/ui 컴포넌트가 Radix UI 접근성 기반으로 미리 설치.',
  },
  {
    icon: Globe,
    title: '엣지 배포 지원',
    description:
      'Vercel, Cloudflare Workers 등 다양한 엣지 런타임에 최적화된 배포.',
  },
  {
    icon: Layers,
    title: '모던 스타일링',
    description:
      'OKLCH 색상 시스템과 CSS 변수로 손쉽게 커스터마이징 가능한 Tailwind CSS 4.',
  },
  {
    icon: Sparkles,
    title: '개발자 경험 최우선',
    description:
      '깔끔한 폴더 구조, 재사용 가능한 훅, 내장 문서로 바로 시작하는 개발.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            필요한 모든 것이 담겨있습니다
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            첫 날부터 프로덕션 준비 애플리케이션 개발을 시작하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="size-5 text-primary" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
