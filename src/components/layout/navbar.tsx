'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/dashboard', label: '대시보드' },
  { href: '/components', label: '컴포넌트' },
  { href: '/layouts', label: '레이아웃' },
  { href: '/docs', label: '문서' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-foreground"
        >
          <Sparkles className="size-5 text-primary" />
          NextKit
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'px-3 py-1.5 text-sm rounded-lg transition-colors',
                isActive(href)
                  ? 'text-foreground font-medium bg-muted'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex" asChild>
            <Link href="/login">로그인</Link>
          </Button>
          <ThemeToggle />

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="md:hidden"
                aria-label="메뉴 열기"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" />
                  NextKit
                </SheetTitle>
              </SheetHeader>
              <div className="mt-0 px-3">
                <Button variant="outline" className="w-1/2" asChild>
                  <Link href="/login" onClick={() => setMobileOpen(false)}>
                    로그인
                  </Link>
                </Button>
              </div>
              <nav className="flex flex-col gap-0.5 mt-0">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'px-3 py-2 text-sm rounded-lg transition-colors',
                      isActive(href)
                        ? 'text-foreground font-medium bg-muted'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
