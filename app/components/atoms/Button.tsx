'use client'

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90 transition-opacity',
    secondary: 'bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`font-semibold rounded-lg transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
