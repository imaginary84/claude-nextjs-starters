import { Settings } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function SettingsPage() {
  return (
    <div className="p-6 lg:p-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="size-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
        <Settings className="size-8 text-muted-foreground" />
      </div>
      <Badge variant="outline" className="mb-3">준비 중</Badge>
      <h1 className="text-2xl font-bold text-foreground mb-2">설정</h1>
      <p className="text-muted-foreground text-sm max-w-xs">
        이 페이지는 현재 개발 중입니다. 곧 계정 설정과 환경설정 기능이 제공될 예정입니다.
      </p>
    </div>
  )
}
