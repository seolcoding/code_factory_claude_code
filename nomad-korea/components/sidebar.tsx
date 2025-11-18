import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export function Sidebar() {
  const activeTravelers = [
    'https://i.pravatar.cc/32?u=t1',
    'https://i.pravatar.cc/32?u=t2',
    'https://i.pravatar.cc/32?u=t3',
    'https://i.pravatar.cc/32?u=t4',
    'https://i.pravatar.cc/32?u=t5',
  ];

  return (
    <aside className="space-y-4">
      {/* Ad Banner */}
      <Card>
        <CardContent className="p-0">
          <div className="h-[250px] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center flex-col p-6 text-center">
            <span className="text-xs text-muted-foreground mb-2">💼 광고</span>
            <h3 className="font-semibold text-lg mb-2">노마드 보험</h3>
            <p className="text-sm text-muted-foreground mb-3">
              해외 여행자 보험
              <br />
              <span className="font-bold text-primary">2,000원/일</span>
            </p>
            <Button size="sm" variant="secondary">자세히 보기</Button>
          </div>
        </CardContent>
      </Card>

      {/* Meetups */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            🥥 이달의 밋업
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold mb-2">25개 예정</p>
          <Button variant="link" className="p-0 h-auto text-sm">
            더보기 →
          </Button>
        </CardContent>
      </Card>

      {/* Active Travelers */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            🛩 여행 중인 노마드
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">18명 활동 중</p>
          <div className="flex -space-x-2">
            {activeTravelers.map((src, i) => (
              <Avatar key={i} className="h-8 w-8 border-2 border-background">
                <AvatarImage src={src} alt={`Traveler ${i + 1}`} />
                <AvatarFallback>T{i + 1}</AvatarFallback>
              </Avatar>
            ))}
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium border-2 border-background">
              +13
            </div>
          </div>
        </CardContent>
      </Card>

      {/* New Members */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            👋 신규 회원
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            이번 달 <span className="font-bold text-foreground">274명</span>
          </p>
          <Button size="sm" className="w-full">
            가입하기 →
          </Button>
        </CardContent>
      </Card>

      {/* Community Chat */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            💬 커뮤니티 초대
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            노마드들과 대화하세요
          </p>
          <Badge variant="secondary" className="mb-3">Members-only</Badge>
          <Button size="sm" variant="outline" className="w-full">
            채팅 참여 →
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
}