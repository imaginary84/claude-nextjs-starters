import { Info, AlertTriangle, FileText, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DocCalloutProps {
  type?: 'info' | 'warning' | 'note' | 'tip'
  title?: string
  children: React.ReactNode
  className?: string
}

const configs = {
  info: {
    Icon: Info,
    wrapper:
      'bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800',
    iconClass: 'text-blue-500',
    defaultTitle: 'Info',
  },
  warning: {
    Icon: AlertTriangle,
    wrapper:
      'bg-yellow-50 border-yellow-200 dark:bg-yellow-950/30 dark:border-yellow-800',
    iconClass: 'text-yellow-500',
    defaultTitle: 'Warning',
  },
  note: {
    Icon: FileText,
    wrapper: 'bg-muted border-border',
    iconClass: 'text-muted-foreground',
    defaultTitle: 'Note',
  },
  tip: {
    Icon: Lightbulb,
    wrapper:
      'bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800',
    iconClass: 'text-green-500',
    defaultTitle: 'Tip',
  },
} as const

export function DocCallout({
  type = 'note',
  title,
  children,
  className,
}: DocCalloutProps) {
  const { Icon, wrapper, iconClass, defaultTitle } = configs[type]

  return (
    <div className={cn('rounded-lg border p-4 my-4', wrapper, className)}>
      <div className="flex gap-3">
        <Icon className={cn('size-4 mt-0.5 shrink-0', iconClass)} />
        <div className="flex-1 min-w-0 text-sm leading-relaxed">
          {(title !== undefined ? title : defaultTitle) && (
            <p className="font-semibold mb-1">
              {title !== undefined ? title : defaultTitle}
            </p>
          )}
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
