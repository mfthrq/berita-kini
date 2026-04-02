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
    h1: 'text-4xl md:text-5xl font-bold text-foreground',
    h2: 'text-3xl md:text-4xl font-bold text-foreground',
    h3: 'text-2xl md:text-3xl font-bold text-foreground',
    h4: 'text-xl md:text-2xl font-bold text-foreground',
    h5: 'text-lg md:text-xl font-semibold text-foreground',
    h6: 'text-base md:text-lg font-semibold text-foreground',
    body: 'text-base text-foreground leading-relaxed',
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
