import { Badge } from '@/components/ui/badge'

const stack = [
  { name: 'Next.js', version: '16.2' },
  { name: 'React', version: '19.2' },
  { name: 'TypeScript', version: '5.x' },
  { name: 'Tailwind CSS', version: '4.x' },
  { name: 'shadcn/ui', version: '4.x' },
  { name: 'Radix UI', version: '1.6' },
  { name: 'Lucide React', version: '1.21' },
  { name: 'next-themes', version: 'latest' },
  { name: 'usehooks-ts', version: 'latest' },
  { name: 'React Hook Form', version: 'latest' },
  { name: 'Zod', version: 'latest' },
]

export function TechStackSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            기술 스택
          </h2>
          <p className="text-lg text-muted-foreground">
            생태계에서 가장 최신이고 검증된 도구들로 구축했습니다.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {stack.map(({ name, version }) => (
            <Badge
              key={name}
              variant="outline"
              className="px-3 py-1.5 text-sm gap-1.5"
            >
              {name}
              <span className="text-muted-foreground font-normal">
                {version}
              </span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
