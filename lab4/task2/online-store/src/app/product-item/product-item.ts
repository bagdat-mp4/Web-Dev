import { Component, input, output, OnInit } from '@angular/core';
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
  // Ата-анасынан келетін тауар дерегі (Signal)
  product = input.required<Product>();
  
  // Өшіру туралы белгіні жоғары жіберу (Output)
  remove = output<number>();
  
  // Басты суретті сақтайтын айнымалы
  currentImage: string = '';

  ngOnInit() {
    // Карточка бірінші ашылғанда басты суретті орнатамыз
    this.currentImage = this.product().image;
  }

  // Галереядан суретті басқанда басты суретті ауыстыру
  changeImage(img: string) {
    this.currentImage = img;
  }

  // Лайк басу
  like() {
    this.product().likes++;
  }

  // Өшіру батырмасы басылғанда
  delete() {
    // Растау сұраймыз, егер Иә десе ғана өшіреміз
    if (confirm('Бұл тауарды тізімнен алып тастауға сенімдісіз бе?')) {
      this.remove.emit(this.product().id);
    }
  }

  shareWhatsApp(): void {
    const message = `Қараңыз, мен мына тауарды таптым: ${this.product().name} - ${this.product().link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  }

  shareTelegram(): void {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`, '_blank');
  }
}