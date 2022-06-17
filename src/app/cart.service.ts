import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
  

export class CartService {
  items: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
  }

  getItems(): Product[] {
    return this.items;
  }
}

