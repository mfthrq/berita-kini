import { Suspense } from 'react';
import { Navbar } from './components/organisms/Navbar';
import { HeroArticle } from './components/organisms/HeroArticle';
import { ArticleCarousel } from './components/organisms/ArticleCarousel';
import { ArticleGrid } from './components/organisms/ArticleGrid';
import { Footer } from './components/organisms/Footer';
import { fetchNews, CATEGORY_MAP, VALID_CATEGORIES, type NewsCategory } from './lib/api';

interface HomeProps {
  searchParams: Promise<{ kategori?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const kategori = params.kategori as NewsCategory | undefined;

  // Validate category, default to 'nasional'
  const category: NewsCategory =
    kategori && VALID_CATEGORIES.includes(kategori) ? kategori : 'nasional';

  const articles = await fetchNews(category);

  const categoryLabel = CATEGORY_MAP[category];

  // First article as featured/hero
  const featuredArticle = articles[0];
  // Next 10 articles for the carousel
  const popularArticles = articles.slice(1, 11);
  // Remaining articles for the grid
  const recommendedArticles = articles.slice(11);

  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>

      {/* Hero Section */}
      {featuredArticle && (
        <HeroArticle
          headline={featuredArticle.title}
          description={featuredArticle.description}
          image={featuredArticle.image}
          category={featuredArticle.category}
          date={featuredArticle.date}
          link={featuredArticle.link}
        />
      )}

      {/* Popular Articles Carousel */}
      <ArticleCarousel
        title={`Berita ${categoryLabel} Terpopuler`}
        articles={popularArticles}
        showNavigation={true}
      />

      {/* Recommendations Grid */}
      <ArticleGrid
        title={`Berita ${categoryLabel} Lainnya`}
        articles={recommendedArticles}
        itemsPerPage={8}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
