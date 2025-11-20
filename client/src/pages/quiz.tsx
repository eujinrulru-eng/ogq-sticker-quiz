import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react';
import { quiz } from '@shared/quizData';
import type { QuizQuestion, QuizOption } from '@shared/schema';
import ogqLogo from '@assets/ogq-logo-transparent.png';

export default function Quiz() {
  const [, setLocation] = useLocation();
  const [questionHistory, setQuestionHistory] = useState<string[]>(['start']);
  const [answers, setAnswers] = useState<Array<{ questionId: string; optionIndex: number }>>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    // Reset on mount
    setQuestionHistory(['start']);
    setAnswers([]);
    setSelectedOption(null);
  }, []);

  const currentQuestionId = questionHistory[questionHistory.length - 1];
  const currentQuestion = quiz.questions.find(q => q.id === currentQuestionId);

  // Reset selected option when question changes
  useEffect(() => {
    setSelectedOption(null);
  }, [currentQuestionId]);
  
  if (!currentQuestion) {
    setLocation('/');
    return null;
  }

  // Calculate progress based on question depth
  // Most paths are 2-3 questions deep before reaching result
  const currentDepth = questionHistory.length;
  const estimatedMaxDepth = 3; // start -> branch -> sub-question -> result
  const progress = Math.min((currentDepth / estimatedMaxDepth) * 100, 90); // Cap at 90% until result

  const handleOptionClick = (option: QuizOption, index: number) => {
    setSelectedOption(index);

    // Add answer to history
    const newAnswers = [...answers, { questionId: currentQuestionId, optionIndex: index }];
    setAnswers(newAnswers);

    // Wait for animation then navigate
    setTimeout(() => {
      if (option.resultId) {
        // Navigate to result page
        setLocation(`/result/${option.resultId}`);
      } else if (option.nextQuestionId) {
        // Navigate to next question - add to history stack
        setQuestionHistory(prev => [...prev, option.nextQuestionId!]);
        setSelectedOption(null);
      }
    }, 300);
  };

  const handleBack = () => {
    if (questionHistory.length <= 1) {
      setLocation('/');
    } else {
      // Remove current question and last answer from history
      setQuestionHistory(prev => prev.slice(0, -1));
      setAnswers(prev => prev.slice(0, -1));
      setSelectedOption(null);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${quiz.color}`}>
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-4xl opacity-20 animate-spin-slow">{quiz.emoji}</div>
      <div className="absolute bottom-10 left-10 text-4xl opacity-20 animate-bounce">{quiz.emoji}</div>

      {/* OGQ Logo - Fixed at top left */}
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

      {/* Progress Bar */}
      <div className="fixed top-16 md:top-20 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="rounded-full"
              data-testid="button-back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground" data-testid="text-progress">
                  {Math.round(progress)}% 완료
                </span>
                <span className="text-xs font-display text-primary">{quiz.title}</span>
              </div>
              <Progress value={progress} className="h-2" data-testid="progress-bar" />
            </div>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="container mx-auto px-4 pt-[160px] md:pt-44 pb-12">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 shadow-2xl">
            <CardContent className="p-5 md:p-12">
              <h2 className="font-display text-xl md:text-3xl text-center mb-6 md:mb-12 leading-relaxed pt-8 md:pt-0" data-testid="text-question">
                {currentQuestion.text}
              </h2>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleOptionClick(option, index)}
                    className={`w-full min-h-14 md:min-h-16 text-left justify-start px-3 py-3 md:px-6 md:py-4 text-sm md:text-base rounded-2xl transition-all duration-200 whitespace-normal leading-snug ${
                      selectedOption === index
                        ? 'scale-95'
                        : 'hover:scale-105'
                    }`}
                    variant={selectedOption === index ? 'default' : 'outline'}
                    data-testid={`button-option-${index}`}
                  >
                    <span className="mr-2 md:mr-3 text-xl md:text-2xl flex-shrink-0">
                      {['🌟', '✨', '💫', '⭐'][index]}
                    </span>
                    <span className="font-medium flex-1">{option.text}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
