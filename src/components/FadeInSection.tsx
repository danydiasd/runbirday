import type { PropsWithChildren } from 'react';
import { useInView } from '../hooks/useInView';

type FadeInSectionProps = PropsWithChildren<{
  className?: string;
}>;

export function FadeInSection({ children, className = '' }: FadeInSectionProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}
