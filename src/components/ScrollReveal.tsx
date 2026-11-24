import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.12, // Reveal when 12% of the component enters viewport
        rootMargin: '0px 0px -40px 0px', // Trigger slightly before it fully rolls up
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (ref.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(ref.current);
        }
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
      className={`${
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
