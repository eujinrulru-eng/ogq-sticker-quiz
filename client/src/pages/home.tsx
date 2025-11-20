import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { quiz } from '@shared/quizData';
import { Sparkles } from 'lucide-react';
import ogqLogo from '@assets/ogq-logo-transparent.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {/* OGQ Logo */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        zIndex: 20
      }}>
        <img 
          src={ogqLogo} 
          alt="NAVER OGQ 마켓" 
          className="h-[1.344rem] md:h-[2.16rem]"
          style={{ 
            width: 'auto',
            display: 'block',
            objectFit: 'contain'
          }}
        />
      </div>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">✨</div>
      <div className="absolute top-20 right-20 text-5xl opacity-20 animate-pulse">💫</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce delay-100">🌟</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-pulse delay-200">⭐</div>
      <div className="relative container mx-auto px-4 py-2 md:pt-12 md:pb-4">
        {/* Hero Section */}
        <div className="text-center mb-1 md:mb-8 pt-[0px] pb-[0px] mt-[0px]">
          <h1 className="font-display bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-normal mt-[0px] mb-[0px] pt-[70px] md:pt-[20px] pb-[14px] md:pb-[18px] text-[44px] md:text-[60px] leading-tight md:leading-normal" data-testid="text-main-title">
            {quiz.title}
          </h1>
          <p className="text-sm md:text-xl text-muted-foreground font-medium mb-2.5 md:mb-3" data-testid="text-subtitle">
            {quiz.description}
          </p>
          <p className="text-xs text-muted-foreground mt-[0px] mb-[5px]">무의식이 알려주는 나만의 OGQ 스티커! 💕</p>
        </div>

        {/* Main Quiz Card */}
        <div className="max-w-2xl mx-auto mt-7 md:mt-0">
          <Card
            className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl border-4 overflow-hidden"
            data-testid="card-main-quiz"
          >
            <div className="h-4 bg-white"></div>
            <CardContent className="px-4 pt-3 pb-8 md:p-8 text-center">
              <div className="text-5xl md:text-7xl mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounce-slow" data-testid="emoji-main">
                {quiz.emoji}
              </div>
              <div className="mb-2 md:mb-5">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-pink-500" />
                  <h2 className="font-display text-2xl md:text-3xl text-foreground">
                    총 48가지 결과
                  </h2>
                  <Sparkles className="w-5 h-5 text-purple-500" />
                </div>
                <p className="text-muted-foreground">준비 됐나!!! 얼른 가보자규!!!</p>
              </div>
              <Link href="/quiz">
                <Button
                  className="w-full rounded-full font-display text-lg py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white shadow-lg"
                  size="lg"
                  data-testid="button-start-quiz"
                >
                  테스트 시작하기 ✨
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-7 mb-4 md:mt-10 md:mb-0">
          <p className="text-sm text-muted-foreground">
            모든 스티커는{' '}
            <a
              href="https://ogqmarket.naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
              data-testid="link-ogq-market"
            >
              OGQ 마켓
            </a>
            에서 만나볼 수 있어요!
          </p>
        </div>
      </div>
    </div>
  );
}
