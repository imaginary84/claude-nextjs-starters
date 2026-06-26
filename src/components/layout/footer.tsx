import Link from 'next/link'
import { Sparkles, ExternalLink, GitFork } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/dashboard', label: '대시보드' },
  { href: '/components', label: '컴포넌트' },
  { href: '/layouts', label: '레이아웃' },
  { href: '/docs', label: '문서' },
]

const resourceLinks = [
  { href: 'https://nextjs.org/docs', label: 'Next.js 문서' },
  { href: 'https://ui.shadcn.com/docs', label: 'shadcn/ui 문서' },
  { href: 'https://tailwindcss.com/docs', label: 'Tailwind CSS 문서' },
  { href: 'https://usehooks-ts.com', label: 'usehooks-ts 문서' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-foreground w-fit"
            >
              <Sparkles className="size-5 text-primary" />
              NextKit
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui로 구축된
              모던 웹 스타터킷.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              네비게이션
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              리소스
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                    <ExternalLink className="size-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 NextKit. 오픈소스 스타터킷.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <GitFork className="size-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
