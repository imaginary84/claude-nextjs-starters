import { DocsSidebar } from '@/components/docs/docs-sidebar'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <aside className="hidden md:flex flex-col w-56 lg:w-64 shrink-0 border-r border-border bg-background">
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4">
          <DocsSidebar />
        </div>
      </aside>

      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}
