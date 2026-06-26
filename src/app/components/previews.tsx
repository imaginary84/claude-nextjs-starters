'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Info } from 'lucide-react'

// ─── 폼 요소 ────────────────────────────────────────────────────────────────

function ButtonPreview() {
  return (
    <div className="flex gap-1.5">
      <Button size="sm">기본</Button>
      <Button size="sm" variant="outline">외곽선</Button>
    </div>
  )
}

function InputPreview() {
  return <Input className="w-36 h-7 text-xs" placeholder="텍스트를 입력하세요" readOnly />
}

function TextareaPreview() {
  return (
    <Textarea
      className="w-36 h-14 text-xs resize-none"
      placeholder="메시지를 입력하세요..."
      readOnly
    />
  )
}

function CheckboxPreview() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        <Checkbox id="prev-c1" defaultChecked />
        <Label htmlFor="prev-c1" className="text-xs">선택됨</Label>
      </div>
      <div className="flex items-center gap-1.5">
        <Checkbox id="prev-c2" />
        <Label htmlFor="prev-c2" className="text-xs">미선택</Label>
      </div>
    </div>
  )
}

function SwitchPreview() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        <Switch defaultChecked />
        <Label className="text-xs">켜짐</Label>
      </div>
      <div className="flex items-center gap-1.5">
        <Switch />
        <Label className="text-xs">꺼짐</Label>
      </div>
    </div>
  )
}

function SelectPreview() {
  return (
    <Select>
      <SelectTrigger className="w-32 h-7 text-xs">
        <SelectValue placeholder="선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1" className="text-xs">옵션 1</SelectItem>
      </SelectContent>
    </Select>
  )
}

// ─── 표시 ───────────────────────────────────────────────────────────────────

function BadgePreview() {
  return (
    <div className="flex flex-wrap gap-1 justify-center">
      <Badge className="text-xs px-2 py-0">기본</Badge>
      <Badge variant="secondary" className="text-xs px-2 py-0">보조</Badge>
      <Badge variant="outline" className="text-xs px-2 py-0">외곽선</Badge>
    </div>
  )
}

function AvatarPreview() {
  return (
    <div className="flex gap-2 items-center">
      <Avatar className="size-9">
        <AvatarFallback className="text-xs">NK</AvatarFallback>
      </Avatar>
      <Avatar className="size-9">
        <AvatarFallback className="text-xs bg-primary text-primary-foreground">홍길</AvatarFallback>
      </Avatar>
    </div>
  )
}

function CardPreview() {
  return (
    <Card className="w-36 shadow-none">
      <CardHeader className="px-3 pt-2.5 pb-0">
        <CardTitle className="text-xs">카드 제목</CardTitle>
      </CardHeader>
      <CardContent className="px-3 pb-2.5 pt-1">
        <p className="text-[10px] text-muted-foreground">카드 내용이 여기에 들어갑니다.</p>
      </CardContent>
    </Card>
  )
}

function SeparatorPreview() {
  return (
    <div className="w-32 space-y-2">
      <p className="text-[10px] text-muted-foreground text-center">위 내용</p>
      <Separator />
      <p className="text-[10px] text-muted-foreground text-center">아래 내용</p>
    </div>
  )
}

function LabelPreview() {
  return (
    <div className="space-y-1">
      <Label className="text-xs">이메일 주소</Label>
      <Input className="w-36 h-7 text-xs" placeholder="example@email.com" readOnly />
    </div>
  )
}

// ─── 피드백 ─────────────────────────────────────────────────────────────────

function AlertPreview() {
  return (
    <Alert className="py-2 px-3 w-44">
      <Info className="size-3 mt-0.5" />
      <AlertTitle className="text-[10px] font-semibold">안내</AlertTitle>
      <AlertDescription className="text-[10px]">계속 진행하시겠습니까?</AlertDescription>
    </Alert>
  )
}

function AlertDialogPreview() {
  return <Button size="sm" variant="destructive">계정 삭제</Button>
}

function SkeletonPreview() {
  return (
    <div className="flex items-center gap-2 w-36">
      <Skeleton className="size-8 rounded-full shrink-0" />
      <div className="space-y-1.5 flex-1">
        <Skeleton className="h-2 w-full" />
        <Skeleton className="h-2 w-3/4" />
      </div>
    </div>
  )
}

function ProgressPreview() {
  return (
    <div className="w-36 space-y-2">
      <Progress value={30} className="h-1.5" />
      <Progress value={65} className="h-1.5" />
      <Progress value={90} className="h-1.5" />
    </div>
  )
}

function SonnerPreview() {
  return (
    <div className="w-44 rounded-lg border border-border bg-background shadow-md p-2.5 flex items-start gap-2">
      <div className="mt-0.5 size-3 rounded-full bg-green-500 shrink-0" />
      <div>
        <p className="text-[10px] font-medium">저장되었습니다.</p>
        <p className="text-[10px] text-muted-foreground">파일이 성공적으로 저장됨</p>
      </div>
    </div>
  )
}

// ─── 네비게이션 ─────────────────────────────────────────────────────────────

function TabsPreview() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList className="h-7">
        <TabsTrigger value="tab1" className="text-[10px] px-2 h-5">탭 1</TabsTrigger>
        <TabsTrigger value="tab2" className="text-[10px] px-2 h-5">탭 2</TabsTrigger>
        <TabsTrigger value="tab3" className="text-[10px] px-2 h-5">탭 3</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

function AccordionPreview() {
  return (
    <Accordion type="single" defaultValue="item-1" className="w-40">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="text-[10px] py-1.5 hover:no-underline">
          자주 묻는 질문
        </AccordionTrigger>
        <AccordionContent className="text-[10px] pb-1.5">
          답변 내용이 여기에 들어갑니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function BreadcrumbPreview() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-1 sm:gap-1">
        <BreadcrumbItem>
          <BreadcrumbPage className="text-[10px] font-normal text-muted-foreground">홈</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-[10px] font-normal text-muted-foreground">문서</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-[10px]">소개</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

function DropdownMenuPreview() {
  return (
    <div className="w-32 rounded-md border border-border bg-popover shadow-md overflow-hidden py-1">
      <div className="px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">내 계정</div>
      <div className="my-0.5 h-px bg-border" />
      <div className="px-2 py-0.5 text-[10px]">프로필</div>
      <div className="px-2 py-0.5 text-[10px]">설정</div>
      <div className="my-0.5 h-px bg-border" />
      <div className="px-2 py-0.5 text-[10px]">로그아웃</div>
    </div>
  )
}

// ─── 오버레이 ────────────────────────────────────────────────────────────────

function DialogPreview() {
  return (
    <div className="w-44 rounded-lg border border-border bg-background shadow-md p-3">
      <p className="text-[10px] font-semibold">제목</p>
      <p className="text-[10px] text-muted-foreground mt-0.5">설명 텍스트가 여기에 들어갑니다.</p>
      <div className="flex justify-end gap-1 mt-2.5">
        <Button variant="outline" className="h-5 text-[10px] px-2 py-0">취소</Button>
        <Button className="h-5 text-[10px] px-2 py-0">확인</Button>
      </div>
    </div>
  )
}

function SheetPreview() {
  return <Button size="sm" variant="outline">패널 열기</Button>
}

function PopoverPreview() {
  return (
    <div className="relative flex flex-col items-center gap-2 pt-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 rounded-md border border-border bg-popover shadow-md p-2">
        <p className="text-[10px] font-medium">팝오버 제목</p>
        <p className="text-[10px] text-muted-foreground">내용이 여기에 표시됩니다.</p>
      </div>
      <Button size="sm" variant="outline">팝오버 열기</Button>
    </div>
  )
}

function TooltipPreview() {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="rounded bg-foreground text-background text-[10px] px-2 py-0.5 shadow-sm">
        툴팁 내용이 여기에 표시됩니다
      </div>
      <Button size="sm" variant="outline">마우스를 올리세요</Button>
    </div>
  )
}

// ─── 데이터 ─────────────────────────────────────────────────────────────────

function TablePreview() {
  return (
    <div className="w-44 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="h-6">
            <TableHead className="h-6 px-2 text-[10px]">이름</TableHead>
            <TableHead className="h-6 px-2 text-[10px]">역할</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="h-6">
            <TableCell className="h-6 px-2 py-0 text-[10px]">홍길동</TableCell>
            <TableCell className="h-6 px-2 py-0 text-[10px]">관리자</TableCell>
          </TableRow>
          <TableRow className="h-6">
            <TableCell className="h-6 px-2 py-0 text-[10px]">김철수</TableCell>
            <TableCell className="h-6 px-2 py-0 text-[10px]">편집자</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

function ScrollAreaPreview() {
  return (
    <ScrollArea className="h-16 w-32 rounded-md border">
      <div className="p-2 space-y-1">
        {Array.from({ length: 5 }, (_, i) => (
          <p key={i} className="text-[10px] text-muted-foreground">항목 {i + 1}</p>
        ))}
      </div>
    </ScrollArea>
  )
}

function FormPreview() {
  return (
    <div className="space-y-1.5 w-36">
      <Label className="text-[10px]">이메일</Label>
      <Input className="h-7 text-xs" placeholder="example@email.com" readOnly />
      <Button size="sm" className="w-full h-6 text-[10px]">제출</Button>
    </div>
  )
}

// ─── API 예제 ────────────────────────────────────────────────────────────────

function FetchUsersPreview() {
  return (
    <div className="w-40 rounded-lg bg-background/80 p-2 space-y-2 shadow-sm">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-1.5">
          <Skeleton className="size-6 rounded-full shrink-0" />
          <div className="space-y-1 flex-1">
            <Skeleton className="h-1.5 w-full" />
            <Skeleton className="h-1.5 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  )
}

function FetchPostsPreview() {
  return (
    <div className="w-40 rounded-lg bg-background/80 p-2 space-y-2.5 shadow-sm">
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-1">
          <Skeleton className="h-1.5 w-3/4" />
          <Skeleton className="h-1.5 w-full" />
          <Skeleton className="h-1.5 w-2/3" />
        </div>
      ))}
    </div>
  )
}

// ─── 등록 ────────────────────────────────────────────────────────────────────

const previewMap: Record<string, () => React.JSX.Element> = {
  button: ButtonPreview,
  input: InputPreview,
  textarea: TextareaPreview,
  checkbox: CheckboxPreview,
  switch: SwitchPreview,
  select: SelectPreview,
  badge: BadgePreview,
  avatar: AvatarPreview,
  card: CardPreview,
  separator: SeparatorPreview,
  label: LabelPreview,
  alert: AlertPreview,
  'alert-dialog': AlertDialogPreview,
  skeleton: SkeletonPreview,
  progress: ProgressPreview,
  sonner: SonnerPreview,
  tabs: TabsPreview,
  accordion: AccordionPreview,
  breadcrumb: BreadcrumbPreview,
  'dropdown-menu': DropdownMenuPreview,
  dialog: DialogPreview,
  sheet: SheetPreview,
  popover: PopoverPreview,
  tooltip: TooltipPreview,
  table: TablePreview,
  'scroll-area': ScrollAreaPreview,
  form: FormPreview,
  'fetch-users': FetchUsersPreview,
  'fetch-posts': FetchPostsPreview,
}

export function ComponentPreview({ slug }: { slug: string }) {
  const Preview = previewMap[slug]
  if (!Preview) return null
  return <Preview />
}
