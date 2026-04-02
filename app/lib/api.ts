export interface ApiNewsItem {
  title: string;
  link: string;
  contentSnippet: string;
  isoDate: string;
  image: {
    small: string;
    large: string;
  };
}

export interface ApiResponse {
  message: string;
  total: number;
  data: ApiNewsItem[];
}

export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  slug: string;
  link: string;
}

export type NewsCategory =
  | 'nasional'
  | 'internasional'
  | 'ekonomi'
  | 'olahraga'
  | 'teknologi'
  | 'hiburan'
  | 'gaya-hidup';

export const CATEGORY_MAP: Record<NewsCategory, string> = {
  nasional: 'Nasional',
  internasional: 'Internasional',
  ekonomi: 'Ekonomi',
  olahraga: 'Olahraga',
  teknologi: 'Teknologi',
  hiburan: 'Hiburan',
  'gaya-hidup': 'Gaya Hidup',
};

export const VALID_CATEGORIES: NewsCategory[] = Object.keys(CATEGORY_MAP) as NewsCategory[];

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function mapApiToArticle(item: ApiNewsItem, index: number, category: NewsCategory): Article {
  return {
    id: String(index + 1),
    title: item.title,
    description: item.contentSnippet || '',
    category: CATEGORY_MAP[category],
    image: item.image?.large || item.image?.small || '',
    date: formatDate(item.isoDate),
    slug: generateSlug(item.title),
    link: item.link,
  };
}

export async function fetchNews(category: NewsCategory = 'nasional'): Promise<Article[]> {
  const res = await fetch(
    `https://berita-indo-api-next.vercel.app/api/cnn-news/${category}`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch news: ${res.status}`);
  }

  const json: ApiResponse = await res.json();
  return json.data.map((item, index) => mapApiToArticle(item, index, category));
}
