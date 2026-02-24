import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro 256GB',
      description: 'Apple iPhone 15 Pro, titanium dizayn, A17 Pro chip, 48MP kamera sistemy.',
      price: 549990,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-titanium-107704302/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 128GB',
      description: 'Samsung Galaxy S24, AI mumkindikteri, 50MP kamera, 6.2 dyuim ekran.',
      price: 329990,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500',
      images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-8-128gb-chernyi-107910078/'
    },
    {
      id: 3,
      name: 'MacBook Air M2 256GB',
      description: 'Apple MacBook Air M2, jengil, kyuatty, 18 sagat batareya omiri.',
      price: 649990,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-8-256gb-serebrianyi-104201635/'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5',
      description: 'Sony PS5 konsol, 825GB SSD, 4K gaming, ray tracing koldauy bar.',
      price: 299990,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500',
      images: ['https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-825gb-белый-100971024/'
    },
    {
      id: 5,
      name: 'Apple AirPods Pro 2',
      description: 'Apple AirPods Pro 2-shi buyn, belsenli shudу bacu, H2 chip.',
      price: 129990,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=500',
      images: ['https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=500'],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-104674281/'
    },
    {
      id: 6,
      name: 'iPad Pro 11 M2',
      description: 'Apple iPad Pro 11 dyuim M2 128GB, kasipqoi planshet, OLED displei.',
      price: 449990,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-m2-wi-fi-128gb-serebrianyi-105793201/'
    },
    {
      id: 7,
      name: 'Apple Watch Series 9',
      description: 'Apple Watch Series 9, S9 chip, Double Tap, densaulyk datchiktteri.',
      price: 179990,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=500',
      images: ['https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=500'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-45mm-106500001/'
    },
    {
      id: 8,
      name: 'Samsung QLED 55 4K',
      description: 'Samsung QLED 55 dyuim 4K smart TV, HDR, Tizen OS, Wi-Fi bar.',
      price: 249990,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=500',
      images: ['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=500'],
      link: 'https://kaspi.kz/shop/p/samsung-qe55q60cauxru-103896001/'
    },
    {
      id: 9,
      name: 'Xiaomi Robot Vacuum',
      description: 'Xiaomi robot shansorgysh, 4000Pa soru kushi, LiDAR navigaciya.',
      price: 89990,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=500',
      images: ['https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=500'],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x10-103500001/'
    },
    {
      id: 10,
      name: 'Dyson V15 Detect',
      description: 'Dyson V15 symsyz shansorgysh, lazerlik shan anyktau, 60 min jumys.',
      price: 219990,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=500',
      images: ['https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=500'],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-105200001/'
    }
  ];
}