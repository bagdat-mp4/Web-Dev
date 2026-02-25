import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list';
import { categories, productsList } from './products-data';
import { Category } from './category.model';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories = categories;
  allProducts = productsList;
  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  // Таңдалған категорияның тауарларын ғана қайтаратын функция
  get filteredProducts(): Product[] {
    if (!this.selectedCategory) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategory?.id);
  }

  // Тауарды жалпы тізімнен өшіру
  handleGlobalRemove(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
  }
}