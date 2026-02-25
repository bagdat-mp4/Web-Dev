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
  // Басты беттен келетін тауарлар тізімі (жаңа Signal синтаксисі)
  products = input.required<Product[]>();
  
  // Тауарды өшіру туралы белгіні жоғары жіберу (Output)
  removeRequest = output<number>();

  onRemove(id: number) {
    this.removeRequest.emit(id);
  }
}