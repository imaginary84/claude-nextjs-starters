import { Badge } from '@/components/ui/badge'
import { DocCallout } from '@/components/docs/doc-callout'
import { DocCode } from '@/components/docs/doc-code'
import { DocsToc } from '@/components/docs/docs-toc'

const toc = [
  { id: 'prerequisites', label: '사전 요구사항' },
  { id: 'install', label: '설치' },
  { id: 'dev', label: '개발' },
  { id: 'build', label: '빌드 및 배포' },
]

export default function GettingStartedPage() {
  return (
    <div className="flex gap-8 max-w-5xl mx-auto px-6 py-10">
      <article className="flex-1 min-w-0 space-y-8">
        <div className="space-y-3">
          <Badge variant="secondary">시작하기</Badge>
          <h1 className="text-3xl font-bold text-foreground">빠른 시작</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            2분 안에 NextKit 프로젝트를 실행하세요.
          </p>
        </div>

        <section className="space-y-4">
          <h2 id="prerequisites" className="text-xl font-semibold text-foreground">
            사전 요구사항
          </h2>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>Node.js 20.x 이상</li>
            <li>npm, yarn 또는 pnpm</li>
            <li>Git</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 id="install" className="text-xl font-semibold text-foreground">
            설치
          </h2>
          <p className="text-sm text-muted-foreground">
            저장소를 클론하고 의존성을 설치하세요:
          </p>
          <DocCode
            language="bash"
            code={`git clone https://github.com/your-username/nextkit.git
cd nextkit
npm install`}
          />

          <DocCallout type="note">
            shadcn/ui, usehooks-ts, react-hook-form, next-themes를 포함한 모든 의존성이{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              package.json
            </code>
            에 이미 포함되어 있습니다.
          </DocCallout>
        </section>

        <section className="space-y-4">
          <h2 id="dev" className="text-xl font-semibold text-foreground">
            개발
          </h2>
          <p className="text-sm text-muted-foreground">
            Turbopack으로 개발 서버를 시작하세요:
          </p>
          <DocCode language="bash" code="npm run dev" />
          <p className="text-sm text-muted-foreground">
            브라우저에서{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              http://localhost:3000
            </code>{' '}
            을 열어보세요. 파일을 편집하면 페이지가 자동으로 업데이트됩니다.
          </p>
          <DocCallout type="tip" title="Turbopack">
            Next.js 16은 Turbopack을 기본으로 사용합니다 —{' '}
            <code className="font-mono text-xs bg-muted px-1 rounded">
              --turbo
            </code>{' '}
            플래그가 필요 없습니다.
          </DocCallout>
        </section>

        <section className="space-y-4">
          <h2 id="build" className="text-xl font-semibold text-foreground">
            빌드 및 배포
          </h2>
          <DocCode
            language="bash"
            code={`npm run build   # 프로덕션 빌드
npm run start   # 프로덕션 서버 시작`}
          />
          <p className="text-sm text-muted-foreground">
            Vercel에 제로 설정으로 배포 — GitHub에 푸시하고 저장소를 연결하면 됩니다.
          </p>
        </section>
      </article>

      <aside className="hidden xl:block w-48 shrink-0">
        <div className="sticky top-24">
          <DocsToc items={toc} />
        </div>
      </aside>
    </div>
  )
}
