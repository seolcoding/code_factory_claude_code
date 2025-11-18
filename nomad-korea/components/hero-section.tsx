'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 로직
    console.log('Email:', email);
  };

  const avatars = [
    'https://i.pravatar.cc/40?u=1',
    'https://i.pravatar.cc/40?u=2',
    'https://i.pravatar.cc/40?u=3',
    'https://i.pravatar.cc/40?u=4',
    'https://i.pravatar.cc/40?u=5',
    'https://i.pravatar.cc/40?u=6',
    'https://i.pravatar.cc/40?u=7',
    'https://i.pravatar.cc/40?u=8',
    'https://i.pravatar.cc/40?u=9',
    'https://i.pravatar.cc/40?u=10',
    'https://i.pravatar.cc/40?u=11',
  ];

  return (
    <section className="relative bg-gradient-to-b from-blue-50/50 to-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            한국에서 디지털 노마드로
            <br />
            살기 좋은 도시를 찾아보세요
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            10개 도시 · 20개 지표 · 실제 노마드 리뷰
          </p>

          {/* User avatars */}
          <div className="flex justify-center mb-8">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <Avatar key={i} className="h-10 w-10 border-2 border-white">
                  <AvatarImage src={src} alt={`User ${i + 1}`} />
                  <AvatarFallback>U{i + 1}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="ml-3 text-sm text-muted-foreground self-center">
              +247명의 노마드가 함께해요
            </span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
            <div className="flex items-start gap-3">
              <span className="text-xl">🌍</span>
              <span className="text-sm text-muted-foreground">
                도시별 생활비, 인터넷 속도 비교
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">☕</span>
              <span className="text-sm text-muted-foreground">
                카페, 코워킹 스페이스 정보
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">👥</span>
              <span className="text-sm text-muted-foreground">
                실제 노마드 리뷰 및 평점
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">📊</span>
              <span className="text-sm text-muted-foreground">
                직관적인 비교 차트
              </span>
            </div>
          </div>

          {/* Email signup form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" size="lg" className="whitespace-nowrap">
              무료로 시작하기 →
            </Button>
          </form>
        </div>
      </div>

      {/* Press logos (예정) */}
      <div className="mt-16 text-center">
        <p className="text-xs text-muted-foreground">
          📰 언론 보도: 조선일보, 한겨레, 테크크런치 (예정)
        </p>
      </div>
    </section>
  );
}