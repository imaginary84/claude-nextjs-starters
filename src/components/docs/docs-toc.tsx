import { cn } from '@/lib/utils'

export interface TocItem {
  id: string
  label: string
  level?: 2 | 3
}

interface DocsTocProps {
  items: TocItem[]
}

export function DocsToc({ items }: DocsTocProps) {
  if (items.length === 0) return null

  return (
    <nav>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        이 페이지에서
      </h4>
      <ul className="space-y-1.5">
        {items.map(({ id, label, level = 2 }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                'block text-xs text-muted-foreground hover:text-foreground transition-colors leading-relaxed',
                level === 3 && 'pl-3',
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
