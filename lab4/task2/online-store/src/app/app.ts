// app.ts

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

  priceFilter: string = 'all'; 

  

 

  showFavorites: boolean = false;



 

  get favoriteCount(): number {

    return this.allProducts.filter(p => p.likes > 0).length;

  }



  selectCategory(category: Category) {

    this.selectedCategory = category;

    this.showFavorites = false; 

  }



 

  openFavorites() {

    this.showFavorites = true;

    this.selectedCategory = null; 

  }



  onFilterChange(event: Event) {

    const selectElement = event.target as HTMLSelectElement;

    this.priceFilter = selectElement.value;

  }



  get filteredProducts(): Product[] {

    let products = [];



   

    if (this.showFavorites) {

      products = this.allProducts.filter(p => p.likes > 0);

    } 

   

    else if (this.selectedCategory) {

      products = this.allProducts.filter(p => p.categoryId === this.selectedCategory?.id);

    } 

    else {

      return [];

    }



    

    if (this.priceFilter === 'cheap') {

      products = products.filter(p => p.price < 200000);

    } else if (this.priceFilter === 'expensive') {

      products = products.filter(p => p.price >= 200000);

    }



    return products;

  }



  handleGlobalRemove(id: number) {

    this.allProducts = this.allProducts.filter(p => p.id !== id);

  }

}