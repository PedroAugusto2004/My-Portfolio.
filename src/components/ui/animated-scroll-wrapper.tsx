"use client";

import type { HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedScrollWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animationClassName?: string;
  initialClassName?: string;
  delay?: string; // e.g., 'delay-200'
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedScrollWrapper: React.FC<AnimatedScrollWrapperProps> = ({
  children,
  className,
  animationClassName = 'animate-fade-in-up',
  initialClassName = 'opacity-0',
  delay = '',
  as: Tag = 'div',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) { // Check if ref.current is not null
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust as needed, 0.1 means 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) { // Check if ref.current is not null
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Tag
      ref={ref as any}
      className={cn(
        'transition-all duration-700 ease-out',
        initialClassName,
        isVisible && `${animationClassName} ${delay} opacity-100`,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default AnimatedScrollWrapper;
