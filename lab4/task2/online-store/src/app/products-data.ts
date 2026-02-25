import { Category } from './category.model';
import { Product } from './product.model';

export const categories: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

export const productsList: Product[] = [
  /* ================= CATEGORY 1: SMARTPHONES ================= */
  {
    id: 1, categoryId: 1, likes: 0,
    name: 'iPhone 15 Pro',
    description: 'Titanium design, A17 Pro chip, powerful camera system.',
    price: 549990, rating: 4.8,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
      'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
      'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113134444/'
  },
  {
    id: 2, categoryId: 1, likes: 0,
    name: 'Samsung Galaxy S24 Ultra',
    description: 'AI-powered smartphone with 200MP camera and S-Pen.',
    price: 629990, rating: 4.9,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500',
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
      'https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-256gb-seryi-116043556/'
  },
  {
    id: 3, categoryId: 1, likes: 0,
    name: 'Google Pixel 8 Pro',
    description: 'The best Android experience with advanced Google AI.',
    price: 480000, rating: 4.7,
    image: 'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=500',
    images: [
      'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=500',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      'https://images.unsplash.com/photo-1606115915090-be18fea23ce7?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-128gb-goluboi-113849988/'
  },
  {
    id: 4, categoryId: 1, likes: 0,
    name: 'Xiaomi 14 Ultra',
    description: 'Leica professional optical lens, Snapdragon 8 Gen 3.',
    price: 599990, rating: 4.6,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-512gb-chernyi-118221300/'
  },
  {
    id: 5, categoryId: 1, likes: 0,
    name: 'OnePlus 12',
    description: 'Smooth and fast performance with Hasselblad camera.',
    price: 410000, rating: 4.5,
    image: 'https://images.unsplash.com/photo-1606115915090-be18fea23ce7?w=500',
    images: [
      'https://images.unsplash.com/photo-1606115915090-be18fea23ce7?w=500',
      'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
      'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/oneplus-12-16-512gb-zelenyi-116345453/'
  },

  /* ================= CATEGORY 2: LAPTOPS ================= */
  {
    id: 6, categoryId: 2, likes: 0,
    name: 'MacBook Air M3',
    description: 'Supercharged by M3 chip, thin and light design.',
    price: 649990, rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
      'https://images.unsplash.com/photo-1531297172868-80d56561ab17?w=500',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-3-8-gb-ssd-256-gb-macos-mryn3-117462057/'
  },
  {
    id: 7, categoryId: 2, likes: 0,
    name: 'ASUS ROG Zephyrus G14',
    description: 'Powerful gaming laptop with AniMe Matrix display.',
    price: 850000, rating: 4.8,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500',
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-seryi-106560029/'
  },
  {
    id: 8, categoryId: 2, likes: 0,
    name: 'Dell XPS 15',
    description: 'Stunning InfinityEdge display and high performance.',
    price: 950000, rating: 4.7,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500',
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
      'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/dell-xps-15-9530-110826978/'
  },
  {
    id: 9, categoryId: 2, likes: 0,
    name: 'Lenovo Legion 5 Pro',
    description: 'Best-in-class gaming performance and thermal cooling.',
    price: 720000, rating: 4.8,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500',
      'https://images.unsplash.com/photo-1531297172868-80d56561ab17?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-105553535/'
  },
  {
    id: 10, categoryId: 2, likes: 0,
    name: 'HP Spectre x360',
    description: 'Premium 2-in-1 convertible laptop with touch screen.',
    price: 780000, rating: 4.6,
    image: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?w=500',
    images: [
      'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?w=500',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-107050011/'
  },

  /* ================= CATEGORY 3: HEADPHONES ================= */
  {
    id: 11, categoryId: 3, likes: 0,
    name: 'AirPods Pro 2',
    description: 'Active Noise Cancellation and personalized Spatial Audio.',
    price: 125000, rating: 4.9,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500',
    images: [
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-113371404/'
  },
  {
    id: 12, categoryId: 3, likes: 0,
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling and superior sound quality.',
    price: 185000, rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105221447/'
  },
  {
    id: 13, categoryId: 3, likes: 0,
    name: 'Bose QuietComfort Ultra',
    description: 'World-class noise cancellation with spatialized audio.',
    price: 210000, rating: 4.7,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500',
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-chernyi-113540056/'
  },
  {
    id: 14, categoryId: 3, likes: 0,
    name: 'Marshall Major IV',
    description: 'Iconic headphones with 80+ hours of wireless playtime.',
    price: 75000, rating: 4.8,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
    images: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-101150646/'
  },
  {
    id: 15, categoryId: 3, likes: 0,
    name: 'Beats Studio Pro',
    description: 'Fully custom acoustic platform with Lossless audio.',
    price: 160000, rating: 4.6,
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=500',
    images: [
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=500',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/beats-studio-pro-chernyi-112282494/'
  },

  /* ================= CATEGORY 4: TABLETS ================= */
  {
    id: 16, categoryId: 4, likes: 0,
    name: 'iPad Pro M2',
    description: 'Powerful M2 chip, Liquid Retina display, Pro cameras.',
    price: 449990, rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500',
      'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-serebrianyi-107148530/'
  },
  {
    id: 17, categoryId: 4, likes: 0,
    name: 'Samsung Galaxy Tab S9 Ultra',
    description: 'Large 14.6 inch AMOLED display with S-Pen included.',
    price: 580000, rating: 4.8,
    image: 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500',
    images: [
      'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500',
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-112270381/'
  },
  {
    id: 18, categoryId: 4, likes: 0,
    name: 'Xiaomi Pad 6',
    description: 'High performance display for work and entertainment.',
    price: 175000, rating: 4.7,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500',
    images: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500',
      'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-8-seryi-111162590/'
  },
  {
    id: 19, categoryId: 4, likes: 0,
    name: 'iPad Air M2',
    description: 'Powerful, colorful, and versatile tablet experience.',
    price: 340000, rating: 4.8,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500',
    images: [
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-11-seryi-119641434/'
  },
  {
    id: 20, categoryId: 4, likes: 0,
    name: 'Microsoft Surface Pro 9',
    description: 'The power of a laptop with the flexibility of a tablet.',
    price: 520000, rating: 4.5,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500',
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500',
      'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/microsoft-surface-pro-9-seryi-107738222/'
  }
];