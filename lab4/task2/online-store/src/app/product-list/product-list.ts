import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  // Ата-анадан (AppComponent) келетін тауарлар тізімі
  products = input.required<Product[]>();
  
  // Тауарды өшіру оқиғасын ата-анаға жіберу
  removeRequest = output<number>();

  // Бұл функция HTML-дегі (remove)="onRemove($event)" үшін жауап береді
  onRemove(id: number) {
    this.removeRequest.emit(id);
  }
}