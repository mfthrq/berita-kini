'use client';

import React, { useState, useRef } from 'react';
import { ArticleCard } from '../molecules/ArticleCard';
import { Text } from '../atoms/Text';
import { SearchBar } from '../molecules/SearchBar';

interface Article {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  slug?: string;
  link?: string;
}

interface ArticleGridProps {
  title: string;
  articles: Article[];
  itemsPerPage?: number;
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({
  title,
  articles,
  itemsPerPage = 8,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedArticles = filteredArticles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-border">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-6 bg-primary rounded-full"></div>
          <Text variant="h2">{title}</Text>
        </div>
        <SearchBar
          onSearch={(query) => {
            setSearchQuery(query);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {displayedArticles.map((article) => (
          <ArticleCard
            key={article.id}
            image={article.image}
            category={article.category}
            title={article.title}
            date={article.date}
            slug={article.slug}
            link={article.link}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                  page === currentPage
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-foreground hover:bg-muted'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>

          <Text variant="small" className="ml-4">
            Showing 1 to {itemsPerPage} of {filteredArticles.length} results
          </Text>
        </div>
      )}
    </section>
  );
};
