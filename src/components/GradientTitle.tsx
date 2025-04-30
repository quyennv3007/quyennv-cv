// eslint-disable-next-line
import { useRef, useEffect, useState } from 'react';
import { useSprings, animated, SpringValue } from '@react-spring/web';

const AnimatedSpan = animated.span as React.FC<React.HTMLAttributes<HTMLSpanElement>>;

interface GradientBlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>[];
  easing?: (t: number) => number | string;
  onAnimationComplete?: () => void;
  headingClassName?: string;
  gradientClassName?: string;
  asHeading?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const GradientBlurText: React.FC<GradientBlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOutCubic',
  onAnimationComplete,
  headingClassName = 'text-center text-4xl md:text-5xl font-bold mb-2 text-gray-800 dark:text-gray-500 tracking-tight ',
  gradientClassName = 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600',
  asHeading = true,
  level = 2,
}) => {
  // Split the text for gradient effect
  const words = text.trim().split(' ');
  const totalWords = words.length;
  
  // Calculate split point based on number of words
  let splitIndex;
  if (totalWords <= 2) {
    // If 1-2 words, only the last word gets gradient
    splitIndex = totalWords - 1;
  } else if (totalWords === 3) {
    // If 3 words, format as 1-2 (first word - last two words)
    splitIndex = 1;
  } else {
    // If 4+ words, split half and half (round down for first part if odd number)
    splitIndex = Math.floor(totalWords / 2);
  }
  
  // Now process for animation
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const animatedCount = useRef(0);

  // Default animations based on direction
  const defaultFrom: Record<string, any> = direction === 'top'
    ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
    : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };
  
  const defaultTo: Record<string, any>[] = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next: (arg: Record<string, SpringValue<any>>) => Promise<void>) => {
          for (const step of animationTo || defaultTo) {
            await next(step);
          }
          animatedCount.current += 1;
          if (animatedCount.current === elements.length && onAnimationComplete) {
            onAnimationComplete();
          }
        }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing: easing as any },
    }))
  );

  // Determine if a word should have gradient based on its position
  const isGradientWord = (wordIndex: number) => {
    return wordIndex >= splitIndex;
  };

  // Generate the animations with gradient applied
  const renderContent = () => {
    // Track the current word index for animateBy="letters" mode
    let currentWordIndex = 0;
    let inWordLetterIndex = 0;
    
    return springs.map((props: any, index: number) => {
      if (animateBy === 'words') {
        // Word animation mode - apply gradient based on word position
        const applyGradient = isGradientWord(index);
        
        return (
          <AnimatedSpan
            key={index}
            style={props}
            className={`inline-block leading-loose will-change-[transform,filter,opacity] ${applyGradient ? gradientClassName : ''}`}
          >
            {elements[index] === ' ' ? '\u00A0' : elements[index]}
            {index < elements.length - 1 && '\u00A0'}
          </AnimatedSpan>
        );
      } else {
        // Letter animation mode - need to track which word this letter belongs to
        const letter = elements[index];
        
        // If this is a space, move to the next word
        if (letter === ' ') {
          currentWordIndex++;
          inWordLetterIndex = 0;
        } else {
          inWordLetterIndex++;
        }
        
        const applyGradient = isGradientWord(currentWordIndex);
        
        return (
          <AnimatedSpan
            key={index}
            style={props}
            className={`inline-block leading-loose will-change-[transform,filter,opacity] ${applyGradient ? gradientClassName : ''}`}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </AnimatedSpan>
        );
      }
    });
  };

  // Render as heading or paragraph based on asHeading prop
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  if (asHeading) {
    return (
      <HeadingTag ref={ref as any} className={`blur-text  ${headingClassName} ${className} flex flex-wrap `}>
        {renderContent()}
      </HeadingTag>
    );
  }

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {renderContent()}
    </p>
  );
};

export default GradientBlurText;