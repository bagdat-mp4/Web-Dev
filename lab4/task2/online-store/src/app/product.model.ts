export interface Product {
  id: number;
  categoryId: number; // Қай категорияға жататынын білу үшін
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  likes: number;      // Лайк жинау үшін
}