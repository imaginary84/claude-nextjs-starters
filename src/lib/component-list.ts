import {
  PenLine,
  Eye,
  Bell,
  Compass,
  Layers,
  Database,
  Globe,
  type LucideIcon,
} from 'lucide-react'

export const categoryColors: Record<string, string> = {
  '폼 요소': 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  '표시': 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  '피드백': 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  '네비게이션': 'bg-green-500/10 text-green-600 dark:text-green-400',
  '오버레이': 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  '데이터': 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
  'API 예제': 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
}

export const categoryIcons: Record<string, LucideIcon> = {
  '폼 요소': PenLine,
  '표시': Eye,
  '피드백': Bell,
  '네비게이션': Compass,
  '오버레이': Layers,
  '데이터': Database,
  'API 예제': Globe,
}

export interface ComponentMeta {
  slug: string
  name: string
  description: string
  category: string
  importCode: string
  usageCode: string
}

export const CATEGORIES = [
  '폼 요소',
  '표시',
  '피드백',
  '네비게이션',
  '오버레이',
  '데이터',
  'API 예제',
] as const

export type Category = (typeof CATEGORIES)[number]

export const componentList: ComponentMeta[] = [
  // 폼 요소
//   {
//     slug: 'button',
//     name: '버튼',
//     description: '다양한 변형과 크기를 제공하는 클릭 가능한 버튼 컴포넌트.',
//     category: '폼 요소',
//     importCode: `import { Button } from '@/components/ui/button'`,
//     usageCode: `<Button>기본 버튼</Button>
// <Button variant="secondary">보조 버튼</Button>
// <Button variant="outline">외곽선 버튼</Button>
// <Button variant="ghost">고스트 버튼</Button>
// <Button variant="destructive">삭제 버튼</Button>
// <Button size="sm">작은 버튼</Button>
// <Button size="lg">큰 버튼</Button>
// <Button disabled>비활성 버튼</Button>`,
//   },
//   {
//     slug: 'input',
//     name: '입력창',
//     description: '텍스트 입력을 위한 기본 input 컴포넌트.',
//     category: '폼 요소',
//     importCode: `import { Input } from '@/components/ui/input'`,
//     usageCode: `<Input placeholder="텍스트를 입력하세요" />
// <Input type="email" placeholder="이메일" />
// <Input type="password" placeholder="비밀번호" />
// <Input disabled placeholder="비활성 상태" />`,
//   },
//   {
//     slug: 'textarea',
//     name: '텍스트 영역',
//     description: '여러 줄 텍스트 입력을 위한 textarea 컴포넌트.',
//     category: '폼 요소',
//     importCode: `import { Textarea } from '@/components/ui/textarea'`,
//     usageCode: `<Textarea placeholder="메시지를 입력하세요" />
// <Textarea disabled placeholder="비활성 상태" rows={4} />`,
//   },
  {
    slug: 'checkbox',
    name: '체크박스',
    description: '선택/해제 가능한 체크박스 컴포넌트.',
    category: '폼 요소',
    importCode: `import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'`,
    usageCode: `<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">이용약관에 동의합니다</Label>
</div>
<div className="flex items-center gap-2">
  <Checkbox id="checked" defaultChecked />
  <Label htmlFor="checked">선택된 상태</Label>
</div>`,
  },
  {
    slug: 'switch',
    name: '스위치',
    description: '두 상태를 전환하는 토글 스위치 컴포넌트.',
    category: '폼 요소',
    importCode: `import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'`,
    usageCode: `<div className="flex items-center gap-2">
  <Switch id="s1" />
  <Label htmlFor="s1">알림 켜기</Label>
</div>
<div className="flex items-center gap-2">
  <Switch id="s2" defaultChecked />
  <Label htmlFor="s2">자동 저장</Label>
</div>`,
  },
  {
    slug: 'select',
    name: '선택창',
    description: '드롭다운 선택 메뉴 컴포넌트.',
    category: '폼 요소',
    importCode: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'`,
    usageCode: `<Select>
  <SelectTrigger className="w-48">
    <SelectValue placeholder="옵션 선택" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">옵션 1</SelectItem>
    <SelectItem value="option2">옵션 2</SelectItem>
    <SelectItem value="option3">옵션 3</SelectItem>
  </SelectContent>
</Select>`,
  },
  // 표시
  {
    slug: 'badge',
    name: '배지',
    description: '상태나 카테고리를 표시하는 소형 레이블 컴포넌트.',
    category: '표시',
    importCode: `import { Badge } from '@/components/ui/badge'`,
    usageCode: `<Badge>기본</Badge>
<Badge variant="secondary">보조</Badge>
<Badge variant="outline">외곽선</Badge>
<Badge variant="destructive">오류</Badge>`,
  },
  {
    slug: 'avatar',
    name: '아바타',
    description: '사용자 프로필 이미지 또는 폴백 텍스트를 표시하는 컴포넌트.',
    category: '표시',
    importCode: `import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'`,
    usageCode: `<Avatar>
  <AvatarImage src="/avatar.png" alt="사용자" />
  <AvatarFallback>NK</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>홍길동</AvatarFallback>
</Avatar>`,
  },
  {
    slug: 'card',
    name: '카드',
    description: '콘텐츠를 그룹화하는 카드 컴포넌트.',
    category: '표시',
    importCode: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'`,
    usageCode: `<Card className="w-72">
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>카드 설명이 여기에 들어갑니다.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">카드 내용이 여기에 들어갑니다.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">확인</Button>
  </CardFooter>
</Card>`,
  },
  {
    slug: 'separator',
    name: '구분선',
    description: '콘텐츠를 시각적으로 구분하는 라인 컴포넌트.',
    category: '표시',
    importCode: `import { Separator } from '@/components/ui/separator'`,
    usageCode: `<div className="space-y-4">
  <p className="text-sm">위 내용</p>
  <Separator />
  <p className="text-sm">아래 내용</p>
</div>

{/* 세로 구분선 */}
<div className="flex items-center gap-4 h-8">
  <span className="text-sm">왼쪽</span>
  <Separator orientation="vertical" />
  <span className="text-sm">오른쪽</span>
</div>`,
  },
  {
    slug: 'label',
    name: '레이블',
    description: '입력 필드에 연결되는 접근성 레이블 컴포넌트.',
    category: '표시',
    importCode: `import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'`,
    usageCode: `<div className="space-y-1.5">
  <Label htmlFor="email">이메일 주소</Label>
  <Input id="email" type="email" placeholder="example@email.com" />
</div>`,
  },
  // 피드백
  {
    slug: 'alert',
    name: '알림',
    description: '중요한 메시지를 표시하는 알림 컴포넌트.',
    category: '피드백',
    importCode: `import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Info, AlertCircle } from 'lucide-react'`,
    usageCode: `<Alert>
  <Info className="size-4" />
  <AlertTitle>안내</AlertTitle>
  <AlertDescription>
    이 작업을 계속 진행하시겠습니까?
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>오류</AlertTitle>
  <AlertDescription>문제가 발생했습니다.</AlertDescription>
</Alert>`,
  },
  {
    slug: 'alert-dialog',
    name: '경고 대화상자',
    description: '중요한 작업 전 사용자 확인을 요청하는 모달 다이얼로그.',
    category: '피드백',
    importCode: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'`,
    usageCode: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">계정 삭제</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
      <AlertDialogDescription>
        이 작업은 되돌릴 수 없습니다. 계정의 모든 데이터가 삭제됩니다.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>취소</AlertDialogCancel>
      <AlertDialogAction>삭제</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
  },
  {
    slug: 'skeleton',
    name: '스켈레톤',
    description: '콘텐츠 로딩 상태를 표시하는 플레이스홀더 컴포넌트.',
    category: '피드백',
    importCode: `import { Skeleton } from '@/components/ui/skeleton'`,
    usageCode: `{/* 텍스트 로딩 */}
<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>

{/* 카드 로딩 */}
<div className="flex items-center gap-3">
  <Skeleton className="size-10 rounded-full" />
  <div className="space-y-1.5 flex-1">
    <Skeleton className="h-3 w-1/3" />
    <Skeleton className="h-3 w-1/2" />
  </div>
</div>`,
  },
  {
    slug: 'progress',
    name: '진행률',
    description: '작업 완료율을 시각적으로 표시하는 컴포넌트.',
    category: '피드백',
    importCode: `import { Progress } from '@/components/ui/progress'`,
    usageCode: `<div className="space-y-3 w-64">
  <Progress value={30} />
  <Progress value={60} />
  <Progress value={90} />
</div>`,
  },
  {
    slug: 'sonner',
    name: '토스트',
    description: '사용자에게 알림 메시지를 표시하는 토스트 컴포넌트.',
    category: '피드백',
    importCode: `import { toast } from 'sonner'

// app/layout.tsx에 <Toaster /> 추가 필요:
import { Toaster } from '@/components/ui/sonner'`,
    usageCode: `// 기본 토스트
toast('파일이 저장되었습니다.')

// 성공
toast.success('저장되었습니다.')

// 오류
toast.error('오류가 발생했습니다.')

// 경고
toast.warning('저장 공간이 부족합니다.')

// 로딩
toast.loading('처리 중...')`,
  },
  // 네비게이션
  {
    slug: 'tabs',
    name: '탭',
    description: '콘텐츠를 탭으로 구분하는 네비게이션 컴포넌트.',
    category: '네비게이션',
    importCode: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'`,
    usageCode: `<Tabs defaultValue="tab1" className="w-80">
  <TabsList className="w-full">
    <TabsTrigger value="tab1" className="flex-1">탭 1</TabsTrigger>
    <TabsTrigger value="tab2" className="flex-1">탭 2</TabsTrigger>
    <TabsTrigger value="tab3" className="flex-1">탭 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" className="p-4">
    첫 번째 탭 내용입니다.
  </TabsContent>
  <TabsContent value="tab2" className="p-4">
    두 번째 탭 내용입니다.
  </TabsContent>
  <TabsContent value="tab3" className="p-4">
    세 번째 탭 내용입니다.
  </TabsContent>
</Tabs>`,
  },
  {
    slug: 'accordion',
    name: '아코디언',
    description: '접고 펼칠 수 있는 콘텐츠 섹션 컴포넌트.',
    category: '네비게이션',
    importCode: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'`,
    usageCode: `<Accordion type="single" collapsible className="w-80">
  <AccordionItem value="item-1">
    <AccordionTrigger>자주 묻는 질문 1</AccordionTrigger>
    <AccordionContent>
      첫 번째 답변 내용이 여기에 들어갑니다.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>자주 묻는 질문 2</AccordionTrigger>
    <AccordionContent>
      두 번째 답변 내용이 여기에 들어갑니다.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
  },
  {
    slug: 'breadcrumb',
    name: '브레드크럼',
    description: '현재 페이지 위치를 계층적으로 표시하는 네비게이션.',
    category: '네비게이션',
    importCode: `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'`,
    usageCode: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">홈</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">문서</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>소개</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  },
  {
    slug: 'dropdown-menu',
    name: '드롭다운 메뉴',
    description: '트리거 요소에 연결된 컨텍스트 메뉴 컴포넌트.',
    category: '네비게이션',
    importCode: `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'`,
    usageCode: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">메뉴 열기</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>내 계정</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>프로필</DropdownMenuItem>
    <DropdownMenuItem>설정</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>로그아웃</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  },
  // 오버레이
  {
    slug: 'dialog',
    name: '대화상자',
    description: '사용자의 주의를 요구하는 모달 대화상자 컴포넌트.',
    category: '오버레이',
    importCode: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'`,
    usageCode: `<Dialog>
  <DialogTrigger asChild>
    <Button>대화상자 열기</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>제목</DialogTitle>
      <DialogDescription>
        설명 텍스트가 여기에 들어갑니다.
      </DialogDescription>
    </DialogHeader>
    <p className="text-sm text-muted-foreground">
      대화상자 내용이 여기에 들어갑니다.
    </p>
  </DialogContent>
</Dialog>`,
  },
  {
    slug: 'sheet',
    name: '시트',
    description: '화면 가장자리에서 슬라이드하는 패널 컴포넌트.',
    category: '오버레이',
    importCode: `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'`,
    usageCode: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">시트 열기</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>패널 제목</SheetTitle>
      <SheetDescription>패널 설명이 여기에 들어갑니다.</SheetDescription>
    </SheetHeader>
    <p className="text-sm text-muted-foreground mt-4">
      패널 내용이 여기에 들어갑니다.
    </p>
  </SheetContent>
</Sheet>`,
  },
  {
    slug: 'popover',
    name: '팝오버',
    description: '요소 위에 떠있는 콘텐츠 패널 컴포넌트.',
    category: '오버레이',
    importCode: `import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'`,
    usageCode: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">팝오버 열기</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p className="text-sm font-medium mb-1">팝오버 제목</p>
    <p className="text-xs text-muted-foreground">
      팝오버 내용이 여기에 들어갑니다.
    </p>
  </PopoverContent>
</Popover>`,
  },
  {
    slug: 'tooltip',
    name: '툴팁',
    description: '요소에 마우스를 올렸을 때 표시되는 정보 컴포넌트.',
    category: '오버레이',
    importCode: `import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// app/providers.tsx의 TooltipProvider가 필요합니다.`,
    usageCode: `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">마우스를 올리세요</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>툴팁 내용이 여기에 표시됩니다</p>
  </TooltipContent>
</Tooltip>`,
  },
  // 데이터
  {
    slug: 'table',
    name: '테이블',
    description: '구조화된 데이터를 행과 열로 표시하는 컴포넌트.',
    category: '데이터',
    importCode: `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'`,
    usageCode: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>이름</TableHead>
      <TableHead>역할</TableHead>
      <TableHead className="text-right">상태</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">홍길동</TableCell>
      <TableCell>관리자</TableCell>
      <TableCell className="text-right">활성</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">김철수</TableCell>
      <TableCell>편집자</TableCell>
      <TableCell className="text-right">비활성</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  },
  {
    slug: 'scroll-area',
    name: '스크롤 영역',
    description: '커스텀 스크롤바가 있는 스크롤 가능한 콘텐츠 영역.',
    category: '데이터',
    importCode: `import { ScrollArea } from '@/components/ui/scroll-area'`,
    usageCode: `<ScrollArea className="h-48 w-64 rounded-md border">
  <div className="p-4 space-y-3">
    {Array.from({ length: 10 }, (_, i) => (
      <p key={i} className="text-sm">
        항목 {i + 1} — 스크롤해서 더 보기
      </p>
    ))}
  </div>
</ScrollArea>`,
  },
  {
    slug: 'form',
    name: '폼',
    description: 'React Hook Form과 Zod를 통합한 접근성 폼 컴포넌트 시스템.',
    category: '데이터',
    importCode: `import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'`,
    usageCode: `const schema = z.object({
  email: z.string().email('유효한 이메일을 입력하세요'),
})

function MyForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>
              <FormDescription>업무용 이메일을 입력하세요.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">제출</Button>
      </form>
    </Form>
  )
}`,
  },
  // API 예제
  {
    slug: 'fetch-users',
    name: '사용자 목록',
    description: 'API에서 사용자 데이터를 불러와 로딩·에러 상태를 처리하는 SWR 데이터 페칭 예제.',
    category: 'API 예제',
    importCode: `import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())`,
    usageCode: `type User = { id: number; name: string; email: string }

const { data, error, isLoading, mutate } = useSWR<User[]>(
  'https://jsonplaceholder.typicode.com/users',
  fetcher
)

if (isLoading) return <Skeleton />
if (error) return <p>오류가 발생했습니다.</p>

// data에 사용자 배열이 담겨 있음
// mutate() 호출로 새로고침`,
  },
  {
    slug: 'fetch-posts',
    name: '게시글 피드',
    description: '클라이언트 사이드 검색 필터와 새로고침 기능이 있는 SWR 게시글 데이터 페칭 예제.',
    category: 'API 예제',
    importCode: `import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())`,
    usageCode: `type Post = { id: number; title: string; body: string }

const { data: posts, isLoading, mutate } = useSWR<Post[]>(
  'https://jsonplaceholder.typicode.com/posts?_limit=10',
  fetcher
)

// posts 배열을 필터링해 검색 기능 구현
// mutate() 호출로 새로고침`,
  },
]
