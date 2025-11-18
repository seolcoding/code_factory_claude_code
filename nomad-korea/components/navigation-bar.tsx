import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function NavigationBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">🌏 노마드코리아</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                도시
              </Link>
              <Link href="/meetups" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                밋업
              </Link>
              <Link href="/community" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                커뮤니티
              </Link>
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                소개
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              로그인
            </Button>
            <Button size="sm">
              회원가입
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}