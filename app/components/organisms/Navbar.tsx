'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { NavLink } from '../atoms/NavLink';

interface NavbarProps {
  currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('kategori') || 'nasional';

  const navItems = [
    { label: 'Nasional', href: '/?kategori=nasional', id: 'nasional' },
    { label: 'Internasional', href: '/?kategori=internasional', id: 'internasional' },
    { label: 'Ekonomi', href: '/?kategori=ekonomi', id: 'ekonomi' },
    { label: 'Olahraga', href: '/?kategori=olahraga', id: 'olahraga' },
    { label: 'Teknologi', href: '/?kategori=teknologi', id: 'teknologi' },
    { label: 'Hiburan', href: '/?kategori=hiburan', id: 'hiburan' },
    { label: 'Gaya Hidup', href: '/?kategori=gaya-hidup', id: 'gaya-hidup' },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold text-foreground">Berita Kini</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 overflow-x-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={item.href}
                label={item.label}
                active={activeCategory === item.id}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`block text-sm font-medium transition-colors py-2 ${
                  activeCategory === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
