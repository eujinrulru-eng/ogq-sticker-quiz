import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl mb-4 animate-bounce">😢</div>
        <h1 className="font-display text-4xl md:text-6xl mb-4 text-foreground">
          404
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          앗! 페이지를 찾을 수 없어요
        </p>
        <Link href="/">
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg"
            data-testid="button-home"
          >
            <Home className="mr-2 h-5 w-5" />
            홈으로 돌아가기
          </Button>
        </Link>
      </div>
    </div>
  );
}
