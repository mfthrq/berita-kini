'use client';

import React, { useState } from 'react';
import { ArticleCard } from '../molecules/ArticleCard';
import { Text } from '../atoms/Text';

interface Article {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  slug?: string;
  link?: string;
}

interface ArticleCarouselProps {
  title: string;
  articles: Article[];
  showNavigation?: boolean;
}

export const ArticleCarousel: React.FC<ArticleCarouselProps> = ({
  title,
  articles,
  showNavigation = true,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 400;
      const newPosition =
        direction === 'left'
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-border">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-6 bg-primary rounded-full"></div>
          <Text variant="h2">{title}</Text>
        </div>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex-shrink-0 w-72 snap-start"
            >
              <ArticleCard
                image={article.image}
                category={article.category}
                title={article.title}
                date={article.date}
                slug={article.slug}
                link={article.link}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showNavigation && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              aria-label="Previous articles"
            >
              ←
            </button>
            <span className="text-sm text-muted-foreground">dari {articles.length}</span>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              aria-label="Next articles"
            >
              →
            </button>
          </div>
        )}
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
