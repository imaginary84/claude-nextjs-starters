import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
  TrendingUp,
  Info,
} from 'lucide-react'

const stats = [
  {
    label: '총 매출',
    value: '$45,231',
    change: '지난 달 대비 +20.1%',
    icon: DollarSign,
    progress: 72,
  },
  {
    label: '활성 사용자',
    value: '2,350',
    change: '지난 달 대비 +180명',
    icon: Users,
    progress: 58,
  },
  {
    label: '총 판매',
    value: '12,234',
    change: '지난 달 대비 +19%',
    icon: ShoppingCart,
    progress: 84,
  },
  {
    label: '활성 세션',
    value: '573',
    change: '현재 +12',
    icon: Activity,
    progress: 43,
  },
]

const invoices = [
  { id: 'INV-001', customer: '김지수', amount: '$250.00', status: 'paid' },
  { id: 'INV-002', customer: '이민준', amount: '$150.00', status: 'pending' },
  { id: 'INV-003', customer: '박서연', amount: '$350.00', status: 'paid' },
  { id: 'INV-004', customer: '최도윤', amount: '$450.00', status: 'failed' },
  { id: 'INV-005', customer: '정유나', amount: '$550.00', status: 'pending' },
  { id: 'INV-006', customer: '강현우', amount: '$200.00', status: 'paid' },
]

const statusVariant: Record<
  string,
  'default' | 'outline' | 'destructive' | 'secondary'
> = {
  paid: 'default',
  pending: 'outline',
  failed: 'destructive',
}

const statusLabel: Record<string, string> = {
  paid: '결제완료',
  pending: '대기중',
  failed: '실패',
}

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">대시보드</h1>
          <p className="text-muted-foreground mt-1">
            프로젝트 지표 현황을 확인하세요.
          </p>
        </div>
        <Badge variant="outline" className="gap-1.5">
          <TrendingUp className="size-3" />
          실시간
        </Badge>
      </div>

      <Alert>
        <Info className="size-4" />
        <AlertDescription>
          데모 대시보드입니다. 실제 데이터 소스를 연결하면 실제 지표를 확인할 수 있습니다.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, icon: Icon, progress }) => (
          <Card key={label}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {label}
                </CardTitle>
                <div className="size-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <Icon className="size-4 text-primary" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">{value}</div>
              <CardDescription>{change}</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="h-1.5" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>최근 청구서</CardTitle>
          <CardDescription>이번 달 최근 6건의 거래 내역.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>청구서</TableHead>
                <TableHead>고객</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className="text-right">금액</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map(({ id, customer, amount, status }) => (
                <TableRow key={id}>
                  <TableCell className="font-mono text-sm text-muted-foreground">
                    {id}
                  </TableCell>
                  <TableCell className="font-medium">{customer}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[status] ?? 'outline'}>
                      {statusLabel[status] ?? status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
