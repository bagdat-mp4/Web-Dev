import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  
  // Басты орында тұратын қазіргі сурет
  currentImage!: string;

  ngOnInit() {
    // Компонент ашылғанда ең бірінші суретті көрсетеміз
    this.currentImage = this.product.images[0];
  }

  // Кішкентай суретті басқанда басты суретті ауыстыратын функция
  changeImage(img: string) {
    this.currentImage = img;
  }

  shareWhatsApp(): void {
    const message = `Myna onimdi qaranyz: ${this.product.name} - ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  shareTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}