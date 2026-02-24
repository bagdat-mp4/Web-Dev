import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Логиканың бәрі Products компонентіне кеткендіктен, бұл жер бос тұрады
}