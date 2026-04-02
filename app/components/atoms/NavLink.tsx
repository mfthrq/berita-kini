import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  active = false,
  className = '',
}) => {
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors duration-200 ${
        active
          ? 'text-primary border-b-2 border-primary'
          : 'text-muted-foreground hover:text-foreground'
      } ${className}`}
    >
      {label}
    </a>
  );
};
