'use client'

import React from 'react';
import { Badge } from '../atoms/Badge';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

interface HeroArticleProps {
  headline: string;
  description: string;
  image: string;
  category: string;
  date: string;
  link?: string;
}

export const HeroArticle: React.FC<HeroArticleProps> = ({
  headline,
  description,
  image,
  category,
  date,
  link,
}) => {

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <Text variant="caption" className="text-muted-foreground mb-3">
              Headline
            </Text>
            <Text variant="h1" className="text-balance">
              {headline}
            </Text>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed max-w-md">
            {description}
          </p>

          <div className="flex items-center gap-4">
            <Badge label={category} variant="blue" />
            <Text variant="caption" className="text-muted-foreground">
              📅 {date}
            </Text>
          </div>

          <div>
            <a href={link || '#'} target="_blank" rel="noopener noreferrer">
              <Button className="group inline-flex items-center gap-2">
                Baca Selengkapnya
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-96 lg:h-full min-h-96 rounded-xl overflow-hidden bg-muted shadow-lg">
          <img
            src={image}
            alt={headline}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};
