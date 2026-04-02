export interface Article {
  id: string;
  title: string;
  description: string;
  category: 'Politik' | 'Nasional' | 'Internasional' | 'Olahraga' | 'Hiburan' | 'Gaya Hidup';
  image: string;
  date: string;
  slug: string;
}

export const featuredArticle: Article = {
  id: '1',
  title: 'Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi',
  description:
    'Ketua Badak Tim Nasional (BTN) PSSI Sunardi merespons pewacanaan Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.',
  category: 'Olahraga',
  image:
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
  date: '22 Januari 2024',
  slug: 'respons-pssi-soal-opsi-pindah',
};

export const popularArticles: Article[] = [
  {
    id: '2',
    title: 'Kisah Dua Jenderal berad Istik Cara GBK Rebakanit 4',
    category: 'Politik',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: '22 Jan 2024',
    description: '',
    slug: 'kisah-dua-jenderal',
  },
  {
    id: '3',
    title: 'Daftar 5 Lahore Terbaru Jadoh Orang Agama Yifi',
    category: 'Nasional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: '22 Jan 2024',
    description: '',
    slug: 'daftar-5-lahore',
  },
  {
    id: '4',
    title: 'Pengertian BURN Malal Oleh Coba Pengerad Karya 4',
    category: 'Gaya Hidup',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: '22 Jan 2024',
    description: '',
    slug: 'pengertian-burn-malal',
  },
  {
    id: '5',
    title: 'Cerita Gerbang BURN Malal Up Cola Pengerad Karya 4',
    category: 'Nasional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: '22 Jan 2024',
    description: '',
    slug: 'cerita-gerbang-burn',
  },
];

export const recommendedArticles: Article[] = [
  {
    id: '6',
    title: 'Pj. Gubernur Athy Tekanan Pelayanan Berkualitas saat Sharing Session di RSUD Dr...',
    category: 'Nasional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: '22 Jan 2024',
    description: '',
    slug: 'pj-gubernur-athy',
  },
  {
    id: '7',
    title: 'Flypass Bonanza dan Hell Bell 505 Warnad Tupik dan Wing Day 11 Persebar T...',
    category: 'Nasional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: '22 Jan 2024',
    description: '',
    slug: 'flypass-bonanza',
  },
  {
    id: '8',
    title: 'Perwata Penerbangan THI AL Rain Galar "Double Degree" di PSL Universitas Paris',
    category: 'Nasional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: '22 Jan 2024',
    description: '',
    slug: 'perwata-penerbangan',
  },
  {
    id: '9',
    title: 'Bank Jatin QRIS Ramadan Vanganza Resmi Dibuka Selamia Sepekan',
    category: 'Nasional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: '22 Jan 2024',
    description: '',
    slug: 'bank-jatin-qris',
  },
  {
    id: '10',
    title: 'PLN Sukses Lakukan Pemeliharaan Off 2 tahanan PMT GISJET 500KV Gresik',
    category: 'Nasional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: '22 Jan 2024',
    description: '',
    slug: 'pln-sukses-lakukan',
  },
  {
    id: '11',
    title: 'Bantu Pertahanan di Indonesia, Profesor ITS Ciptakan Bahan Antiradar',
    category: 'Nasional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: '22 Jan 2024',
    description: '',
    slug: 'bantu-pertahanan-indonesia',
  },
  {
    id: '12',
    title: 'BKD Jafim Bersama BNN Gelar Tes Narkoba Bagi Pegawai Non ASN',
    category: 'Nasional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: '22 Jan 2024',
    description: '',
    slug: 'bkd-jafim-bersama-bnn',
  },
  {
    id: '13',
    title: 'Bank Indonesia Prediksi Ekonomi Jatim 2024 Tumbuh Lebih Tinggi',
    category: 'Nasional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: '22 Jan 2024',
    description: '',
    slug: 'bank-indonesia-prediksi',
  },
];

export const ctaBannerImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=200&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
];
