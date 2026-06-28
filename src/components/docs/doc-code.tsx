'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DocCodeProps {
  code: string
  language?: string
  className?: string
}

export function DocCode({ code, language = 'bash', className }: DocCodeProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // HTTP 환경이나 권한 거부 시 조용히 실패
    }
  }

  return (
    <div
      className={cn(
        'relative my-4 rounded-lg border border-border bg-muted/50 overflow-hidden',
        className,
      )}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/70">
        <span className="text-xs font-mono text-muted-foreground">
          {language}
        </span>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="text-sm font-mono text-foreground whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  )
}
