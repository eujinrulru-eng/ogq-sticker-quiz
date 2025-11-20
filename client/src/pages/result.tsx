import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Share2, ExternalLink, RefreshCw } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { quiz } from '@shared/quizData';
import { useToast } from '@/hooks/use-toast';
import html2canvas from 'html2canvas';
import ogqLogo from '@assets/ogq-logo-transparent.png';

export default function Result() {
  const { resultId } = useParams();
  const { toast } = useToast();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const result = quiz.results.find(r => r.id === resultId);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">결과를 찾을 수 없어요 😢</p>
          <Link href="/">
            <Button data-testid="button-home">홈으로 돌아가기</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const shareText = `나의 OGQ 스티커는 "${result.name}"! 당신도 테스트 해보세요 ✨`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'OGQ 스티커 심리테스트',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        toast({
          title: '클립보드에 복사되었어요! 📋',
          description: '친구들에게 공유해보세요!',
        });
      } catch (err) {
        toast({
          title: '공유 링크',
          description: shareUrl,
        });
      }
    }
  };

  const handleInstagramShare = async () => {
    if (!cardRef.current || isGenerating) return;

    // Mobile detection: prioritize navigator.userAgentData if available
    let isMobile = false;
    
    if ('userAgentData' in navigator && (navigator as any).userAgentData) {
      isMobile = (navigator as any).userAgentData.mobile;
    } else {
      // Fallback: include mobile devices and tablets, exclude desktop OSes
      const isDesktopOS = /Windows|Macintosh|Linux/i.test(navigator.userAgent) && !/iPad|Android/i.test(navigator.userAgent);
      const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      isMobile = mobileUA || !isDesktopOS;
    }

    setIsGenerating(true);

    try {
      console.log('Step 1: Starting Instagram share');
      toast({
        title: '이미지 생성 중... 📸',
        description: '잠시만 기다려주세요!',
      });

      console.log('Step 2: Creating custom Instagram Story design');
      
      // Create a canvas with Instagram Story dimensions (9:16 ratio)
      const storyCanvas = document.createElement('canvas');
      const storyWidth = 1080;
      const storyHeight = 1920;
      storyCanvas.width = storyWidth;
      storyCanvas.height = storyHeight;
      console.log('Step 3: Story canvas created');

      const ctx = storyCanvas.getContext('2d');
      if (!ctx) {
        console.error('Step 4: Failed to get 2d context');
        toast({
          title: '이미지 생성 실패 😢',
          description: '브라우저가 이미지 생성을 지원하지 않습니다.',
        });
        setIsGenerating(false);
        return;
      }
      console.log('Step 4: Got 2d context');

      // Fill with soft gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, storyHeight);
      gradient.addColorStop(0, '#fef3f8');  // Very light pink
      gradient.addColorStop(0.4, '#f8f4fe'); // Very light purple
      gradient.addColorStop(0.7, '#f0f6ff'); // Very light blue
      gradient.addColorStop(1, '#fef9f3');   // Very light peach
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, storyWidth, storyHeight);
      console.log('Step 5: Gradient filled');

      // Helper function to draw a star
      const drawStar = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number, color: string, alpha: number) => {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.translate(cx, cy);
        const step = Math.PI / spikes;
        
        for (let i = 0; i < 2 * spikes; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const x = Math.cos(i * step - Math.PI / 2) * radius;
          const y = Math.sin(i * step - Math.PI / 2) * radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      };
      
      // Helper function to draw a sparkle (four-pointed star)
      const drawSparkle = (cx: number, cy: number, size: number, color: string, alpha: number) => {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        
        // Draw diamond shape with elongated points
        ctx.moveTo(cx, cy - size);
        ctx.lineTo(cx + size * 0.3, cy - size * 0.3);
        ctx.lineTo(cx + size, cy);
        ctx.lineTo(cx + size * 0.3, cy + size * 0.3);
        ctx.lineTo(cx, cy + size);
        ctx.lineTo(cx - size * 0.3, cy + size * 0.3);
        ctx.lineTo(cx - size, cy);
        ctx.lineTo(cx - size * 0.3, cy - size * 0.3);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      };
      
      // Helper function to draw a heart
      const drawHeart = (cx: number, cy: number, size: number, color: string, alpha: number) => {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.translate(cx, cy);
        ctx.scale(size / 20, size / 20);
        ctx.moveTo(0, 3);
        ctx.bezierCurveTo(-5, -2, -10, -2, -10, -7);
        ctx.bezierCurveTo(-10, -12, -7, -15, 0, -10);
        ctx.bezierCurveTo(7, -15, 10, -12, 10, -7);
        ctx.bezierCurveTo(10, -2, 5, -2, 0, 3);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      };
      
      // Draw abundant cute decorations
      const decorations = [
        // Top section - stars and sparkles
        { type: 'star', x: 80, y: 120, size: 25, color: '#ffd700', alpha: 0.4 },
        { type: 'sparkle', x: 250, y: 90, size: 20, color: '#ff69b4', alpha: 0.35 },
        { type: 'star', x: 450, y: 140, size: 18, color: '#87ceeb', alpha: 0.3 },
        { type: 'sparkle', x: 680, y: 100, size: 22, color: '#dda0dd', alpha: 0.38 },
        { type: 'star', x: 850, y: 150, size: 20, color: '#ffb6c1', alpha: 0.35 },
        { type: 'sparkle', x: 980, y: 110, size: 24, color: '#ffd700', alpha: 0.4 },
        
        // Upper-middle section
        { type: 'heart', x: 120, y: 350, size: 20, color: '#ff69b4', alpha: 0.32 },
        { type: 'sparkle', x: 340, y: 380, size: 18, color: '#87ceeb', alpha: 0.3 },
        { type: 'star', x: 580, y: 320, size: 17, color: '#dda0dd', alpha: 0.28 },
        { type: 'sparkle', x: 780, y: 370, size: 19, color: '#ffd700', alpha: 0.33 },
        { type: 'star', x: 930, y: 340, size: 21, color: '#ffb6c1', alpha: 0.35 },
        
        // Middle section
        { type: 'sparkle', x: 90, y: 600, size: 22, color: '#ff69b4', alpha: 0.35 },
        { type: 'star', x: 950, y: 630, size: 20, color: '#87ceeb', alpha: 0.33 },
        { type: 'sparkle', x: 130, y: 820, size: 18, color: '#dda0dd', alpha: 0.3 },
        { type: 'star', x: 920, y: 780, size: 22, color: '#ffd700', alpha: 0.37 },
        { type: 'sparkle', x: 200, y: 1000, size: 19, color: '#ffb6c1', alpha: 0.32 },
        { type: 'star', x: 880, y: 1020, size: 21, color: '#ff69b4', alpha: 0.34 },
        
        // Lower-middle section
        { type: 'heart', x: 150, y: 1240, size: 20, color: '#ffb6c1', alpha: 0.33 },
        { type: 'sparkle', x: 350, y: 1280, size: 18, color: '#87ceeb', alpha: 0.3 },
        { type: 'star', x: 680, y: 1220, size: 22, color: '#dda0dd', alpha: 0.35 },
        { type: 'sparkle', x: 900, y: 1270, size: 19, color: '#ffd700', alpha: 0.32 },
        
        // Bottom section
        { type: 'sparkle', x: 100, y: 1500, size: 23, color: '#ff69b4', alpha: 0.37 },
        { type: 'star', x: 300, y: 1540, size: 21, color: '#87ceeb', alpha: 0.34 },
        { type: 'sparkle', x: 520, y: 1480, size: 18, color: '#dda0dd', alpha: 0.31 },
        { type: 'star', x: 750, y: 1530, size: 20, color: '#ffd700', alpha: 0.33 },
        { type: 'sparkle', x: 930, y: 1500, size: 22, color: '#ffb6c1', alpha: 0.36 },
        
        // Very bottom
        { type: 'heart', x: 140, y: 1720, size: 19, color: '#ff69b4', alpha: 0.32 },
        { type: 'star', x: 380, y: 1760, size: 22, color: '#87ceeb', alpha: 0.35 },
        { type: 'sparkle', x: 620, y: 1700, size: 20, color: '#dda0dd', alpha: 0.33 },
        { type: 'star', x: 850, y: 1740, size: 21, color: '#ffd700', alpha: 0.34 },
        
        // Additional scattered decorations
        { type: 'sparkle', x: 450, y: 550, size: 16, color: '#ffb6c1', alpha: 0.27 },
        { type: 'star', x: 550, y: 900, size: 17, color: '#ff69b4', alpha: 0.29 },
        { type: 'sparkle', x: 420, y: 1380, size: 18, color: '#87ceeb', alpha: 0.3 },
        { type: 'heart', x: 680, y: 1620, size: 18, color: '#dda0dd', alpha: 0.31 },
      ];
      
      decorations.forEach(deco => {
        if (deco.type === 'star') {
          drawStar(deco.x, deco.y, 5, deco.size, deco.size * 0.5, deco.color, deco.alpha);
        } else if (deco.type === 'sparkle') {
          drawSparkle(deco.x, deco.y, deco.size, deco.color, deco.alpha);
        } else if (deco.type === 'heart') {
          drawHeart(deco.x, deco.y, deco.size, deco.color, deco.alpha);
        }
      });
      
      console.log('Step 5.5: Abundant shape decorations added (34 items)');

      // Load and draw OGQ logo first (적절한 크기)
      const logo = new Image();
      logo.crossOrigin = 'anonymous';
      await new Promise<void>((resolve, reject) => {
        logo.onload = () => {
          const logoHeight = 96; // 70% 줄임 (320 * 0.3)
          const logoWidth = logo.width * (logoHeight / logo.height);
          const logoX = (storyWidth - logoWidth) / 2;
          ctx.drawImage(logo, logoX, 120, logoWidth, logoHeight);
          console.log('Step 6: Logo drawn (70% smaller, at top)');
          resolve();
        };
        logo.onerror = () => {
          console.log('Step 6: Logo failed to load, continuing without it');
          resolve();
        };
        logo.src = ogqLogo;
      });

      // Add text: "OGQ가 추천해준 나만의 이모티콘은?!" (below logo)
      ctx.fillStyle = '#444444';
      ctx.font = 'bold 56px "Noto Sans KR", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('OGQ가 추천해준', storyWidth / 2, 500);
      ctx.fillText('나만의 이모티콘은?!', storyWidth / 2, 580);
      console.log('Step 7: Header text added (below logo)');

      // Load and draw sticker image (larger size)
      const stickerImg = new Image();
      stickerImg.crossOrigin = 'anonymous';
      await new Promise<void>((resolve, reject) => {
        stickerImg.onload = () => {
          const stickerSize = 520; // Increased from 420
          const stickerX = (storyWidth - stickerSize) / 2;
          const stickerY = 700; // Adjusted for better spacing
          
          // Draw white rounded background for sticker with stronger shadow
          const radius = 60;
          
          // Multi-layer shadow for depth
          ctx.shadowColor = 'rgba(220, 150, 200, 0.15)';
          ctx.shadowBlur = 40;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 15;
          
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.roundRect(stickerX - 60, stickerY - 60, stickerSize + 120, stickerSize + 120, radius);
          ctx.fill();
          
          // Add inner subtle border
          ctx.shadowColor = 'transparent';
          ctx.strokeStyle = 'rgba(255, 182, 220, 0.2)';
          ctx.lineWidth = 3;
          ctx.stroke();
          
          // Reset shadow and stroke
          ctx.shadowBlur = 0;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          
          // Draw sticker
          ctx.drawImage(stickerImg, stickerX, stickerY, stickerSize, stickerSize);
          console.log('Step 8: Sticker image drawn (larger size)');
          resolve();
        };
        stickerImg.onerror = () => {
          console.error('Step 8: Sticker failed to load');
          reject(new Error('Failed to load sticker image'));
        };
        stickerImg.src = result.imagePath.startsWith('/') 
          ? window.location.origin + result.imagePath 
          : result.imagePath;
      });

      // Add result name with 2.5x spacing from sticker
      const nameY = 700 + 520 + 300; // stickerY + stickerSize + (120 * 2.5)
      ctx.fillStyle = '#d946ef'; // Brighter purple-pink
      ctx.font = 'bold 88px "Jua", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(result.name, storyWidth / 2, nameY);
      console.log('Step 9: Result name added with 2.5x spacing');

      // Add result description
      ctx.fillStyle = '#666666';
      ctx.font = '40px "Noto Sans KR", sans-serif';
      ctx.textAlign = 'center';
      
      // Wrap text to multiple lines
      const words = result.description.split(' ');
      let line = '';
      let y = nameY + 100;
      const maxWidth = 900;
      const lineHeight = 58;
      
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
          ctx.fillText(line, storyWidth / 2, y);
          line = words[i] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, storyWidth / 2, y);
      console.log('Step 10: Description added');

      // Convert to data URL and download
      console.log('Step 11: Converting to data URL');
      const dataUrl = storyCanvas.toDataURL('image/png');
      console.log('Step 12: Data URL created, length:', dataUrl.length);
      
      if (isMobile) {
        console.log('Step 13: Mobile - creating download link');
        // Mobile: Download the image
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `ogq-sticker-${result.name}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log('Step 14: Download triggered');

        toast({
          title: '이미지 저장 완료! 📱',
          description: '이미지를 갤러리에서 찾아 인스타그램 스토리에 공유하세요!',
        });
      } else {
        console.log('Step 13: Desktop - showing notification');
        // Desktop: Show notification only
        toast({
          title: '모바일에서 사용해주세요! 💻',
          description: '인스타그램 스토리 공유는 모바일 기기에서 이용 가능합니다.',
        });
      }
      
      console.log('Step 15: Complete');
      setIsGenerating(false);
    } catch (error) {
      console.error('Instagram share error:', error);
      if (error instanceof Error) {
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }
      toast({
        title: '이미지 생성 실패 😢',
        description: '다시 시도해주세요.',
      });
      setIsGenerating(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${quiz.color} py-12 px-4`}>
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
      
      {/* Confetti-like decorations */}
      <div className="absolute top-10 left-[10%] text-4xl opacity-30 animate-bounce">🎉</div>
      <div className="absolute top-20 right-[15%] text-3xl opacity-30 animate-pulse">🎊</div>
      <div className="absolute top-[30%] left-[5%] text-5xl opacity-20 animate-bounce delay-100">✨</div>
      <div className="absolute top-[40%] right-[10%] text-4xl opacity-20 animate-pulse delay-200">💫</div>
      <div className="absolute bottom-[30%] left-[20%] text-3xl opacity-30 animate-bounce">🌟</div>
      <div className="absolute bottom-20 right-[25%] text-5xl opacity-20 animate-pulse">⭐</div>

      <div className="container mx-auto max-w-2xl relative">
        
        {/* Result Header */}
        <div className="text-center mb-4 md:mb-8 pt-4 md:pt-6">
          <h1 className="font-display text-3xl md:text-5xl mb-2 md:mb-4 text-foreground" data-testid="text-result-title">
            테스트 완료! 🎉
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">당신에게 어울리는 스티커는...</p>
        </div>

        {/* Result Card */}
        <Card ref={cardRef} className="border-4 shadow-2xl mb-8 overflow-hidden">
          <div className={`h-4 bg-gradient-to-r ${quiz.color}`}></div>
          <CardContent className="p-4 md:p-6 flex flex-col justify-center">
            {/* Sticker Display */}
            <div className="flex justify-center mb-7 mt-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-white flex items-center justify-center shadow-lg overflow-hidden" data-testid="emoji-result">
                <img 
                  src={result.imagePath} 
                  alt={result.name}
                  className="w-44 h-44 md:w-52 md:h-52 object-contain"
                />
              </div>
            </div>

            {/* Result Name */}
            <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-primary" data-testid="text-result-name">
              {result.name}
            </h2>

            {/* Result Description */}
            <p className="text-center text-base md:text-lg leading-relaxed text-foreground mb-7" data-testid="text-result-description">
              {result.description}
            </p>

            {/* OGQ Link Button */}
            <a
              href={result.ogqLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 md:mb-7"
            >
              <Button
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-medium shadow-lg rounded-full py-6 text-lg"
                size="lg"
                data-testid="button-ogq-link"
              >
                OGQ 마켓에서 스티커 보기
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>

            {/* Share Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={handleShare}
                variant="outline"
                className="w-full rounded-full py-6 border-2"
                size="lg"
                data-testid="button-share"
              >
                <Share2 className="mr-2 h-5 w-5" />
                결과 공유하기
              </Button>
              <Button
                onClick={handleInstagramShare}
                disabled={isGenerating}
                className="w-full rounded-full py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-medium shadow-lg border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
                data-testid="button-instagram-share"
              >
                <SiInstagram className="mr-2 h-5 w-5" />
                {isGenerating ? '생성 중...' : '인스타 스토리'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/quiz">
            <Button variant="outline" className="w-full rounded-full" data-testid="button-retry">
              <RefreshCw className="mr-2 h-4 w-4" />
              다시하기
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full rounded-full" data-testid="button-home-bottom">
              <Home className="mr-2 h-4 w-4" />
              홈으로
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
