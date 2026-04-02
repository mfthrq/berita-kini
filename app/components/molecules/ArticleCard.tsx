import React from 'react';
import { Badge } from '../atoms/Badge';
import { Text } from '../atoms/Text';

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  slug?: string;
  link?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  category,
  title,
  date,
  slug,
  link,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-full',
    md: 'w-full',
    lg: 'w-full',
  };

  return (
    <a href={link || (slug ? `/articles/${slug}` : '#')} target={link ? '_blank' : undefined} rel={link ? 'noopener noreferrer' : undefined} className="group block h-full">
      <div className={`${sizeClasses[size]} rounded-lg overflow-hidden bg-card shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col`}>
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge label={category} variant="blue" />
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <Text
            variant="h5"
            className="line-clamp-2 group-hover:text-primary transition-colors mb-2"
          >
            {title}
          </Text>
          <Text variant="caption" className="mt-auto">
            {date}
          </Text>
        </div>
      </div>
    </a>
  );
};
