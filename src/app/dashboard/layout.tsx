import { Sidebar } from '@/components/layout/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <Sidebar />
      <div className="flex-1 min-w-0 overflow-auto">{children}</div>
    </div>
  )
}
