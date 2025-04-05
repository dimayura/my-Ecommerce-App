import { Injectable, signal } from '@angular/core';
import {Product} from '../models/products.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 1099.95,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      stock: 10,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 2299.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      stock: 0,
    },
  ]);

  addToCart(product:Product){
    this.cart.set([...this.cart(),product]);
  }

  removeFromCart(id: number) {
    const currentCart = [...this.cart()];
    const index = currentCart.findIndex(p => p.id === id);
  
    if (index !== -1) {
      currentCart.splice(index, 1); // Remove just the first match
      this.cart.set(currentCart);
    }
  }
  
  constructor() { }
}
