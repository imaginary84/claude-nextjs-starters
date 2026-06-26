'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Menu,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const sidebarLinks = [
  { href: '/dashboard', label: '개요', icon: LayoutDashboard },
  { href: '/dashboard/analytics', label: '분석', icon: BarChart3 },
  { href: '/dashboard/users', label: '사용자', icon: Users },
  { href: '/dashboard/settings', label: '설정', icon: Settings },
]

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-border">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-foreground"
        >
          <Sparkles className="size-5 text-primary" />
          NextKit
        </Link>
      </div>
      <nav className="flex-1 p-3 space-y-0.5">
        {sidebarLinks.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                active
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted',
              )}
            >
              <Icon className="size-4 shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <aside className="hidden lg:block w-64 shrink-0 border-r border-border bg-background">
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <SidebarNav />
        </div>
      </aside>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon-sm"
            className="fixed bottom-4 left-4 z-40 shadow-md lg:hidden"
            aria-label="사이드바 열기"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>네비게이션 메뉴</SheetTitle>
          </SheetHeader>
          <SidebarNav onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  )
}
