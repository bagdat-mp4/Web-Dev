import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {
  // Ескі тауарларды өшірдік. Енді бұл файл бос тұрады.
  // Тауарлар products-data.ts файлынан алынады.
  products: Product[] = []; 
}