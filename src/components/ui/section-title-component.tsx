import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className, as: Tag = 'h2', ...props }) => {
  return (
    <Tag className={cn('section-title mb-8 text-center md:mb-12', className)} {...props}>
      {children}
    </Tag>
  );
};

export default SectionTitle;
