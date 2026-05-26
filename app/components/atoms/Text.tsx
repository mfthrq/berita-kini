import React from 'react';

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'small';
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  children,
  className = '',
  ...props
}) => {
  const variants = {
    h1: 'text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight',
    h2: 'text-2xl md:text-3xl font-bold text-foreground tracking-tight',
    h3: 'text-xl md:text-2xl font-semibold text-foreground tracking-tight',
    h4: 'text-lg md:text-xl font-semibold text-foreground',
    h5: 'text-base md:text-lg font-semibold text-foreground',
    h6: 'text-sm md:text-base font-semibold text-foreground',
    body: 'text-base text-foreground/80 leading-relaxed',
    caption: 'text-sm text-muted-foreground',
    small: 'text-xs text-muted-foreground',
  };

  const Element = variant.startsWith('h') ? (variant as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') : 'div';

  return (
    <Element
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
};
