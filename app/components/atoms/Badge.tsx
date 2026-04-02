import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'blue' | 'teal' | 'gray';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'default',
  className = '',
}) => {
  const variants = {
    default: 'bg-blue-100 text-blue-700',
    blue: 'bg-blue-100 text-blue-700',
    teal: 'bg-teal-100 text-teal-700',
    gray: 'bg-gray-100 text-gray-700',
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${variants[variant]} ${className}`}
    >
      {label}
    </span>
  );
};
