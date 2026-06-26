'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  {
    category: '시작하기',
    items: [
      { href: '/docs/introduction', label: '소개' },
      { href: '/docs/getting-started', label: '빠른 시작' },
      { href: '/docs/project-structure', label: '프로젝트 구조' },
    ],
  },
  {
    category: '핵심 개념',
    items: [
      { href: '/docs/theming', label: '테마' },
      { href: '/docs/hooks', label: '훅' },
    ],
  },
  {
    category: '참고 자료',
    items: [
      { href: '/docs/external-libraries', label: '외부 라이브러리' },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <nav className="space-y-6">
      {navItems.map(({ category, items }) => (
        <div key={category}>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-1">
            {category}
          </h4>
          <div className="relative pl-3">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
            <ul className="space-y-0.5">
              {items.map(({ href, label }) => {
                const isActive = pathname === href
                return (
                  <li key={href} className="relative">
                    {isActive && (
                      <div className="absolute left-0 top-2 bottom-2 w-px bg-primary" />
                    )}
                    <Link
                      href={href}
                      className={cn(
                        'block pl-4 pr-2 py-1.5 text-sm rounded-r-md transition-colors',
                        isActive
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      ))}
    </nav>
  )
}
