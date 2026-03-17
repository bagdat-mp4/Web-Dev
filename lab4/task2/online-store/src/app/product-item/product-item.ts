// product-item.ts  лайк

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


  product = input.required<Product>();

  

  

  remove = output<number>();

  


  currentImage: string = '';





  isLiked: boolean = false;



ngOnInit() {
    this.currentImage = this.product().image;
    
    this.isLiked = this.product().likes > 0;
  }



  // Галереядан суретті басқанда басты суретті ауыстыру

  changeImage(img: string) {

    this.currentImage = img;

  }



 

  like() {

    if (this.isLiked) {



      this.product().likes--;

      this.isLiked = false; 

    } else {

      

      this.product().likes++;

      this.isLiked = true; 

    }

  }



  

  delete() {

  

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