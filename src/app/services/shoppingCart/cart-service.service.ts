import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Product } from '../../interface/models';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Product[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedCart = localStorage.getItem('cart');
      this.items = storedCart ? JSON.parse(storedCart) : [];
      this.cartSubject.next(this.items);
    }
  }

  private cartSubject = new BehaviorSubject<Product[]>([]);

  cart$ = this.cartSubject.asObservable();

  private saveCart(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }

  addToCart(product: Product): void {
    const existing = this.items.find(p => p.id === product.id);

    this.items.push(product);
    this.saveCart();
    this.cartSubject.next(this.items);
  }

  removeFromCart(productId: string): void {
    this.items = this.items.filter(p => p.id !== productId.trim());
    this.saveCart();
    this.cartSubject.next(this.items);
  }

  clearCart(): void {
    this.items = [];
    this.saveCart();
    this.cartSubject.next(this.items);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getQuatityCart(){
    if (isPlatformBrowser(this.platformId)) {
      const storedCart = JSON.parse(localStorage.getItem('cart') as string);
      if(storedCart){
        return storedCart?.length;
      }
    }
    return 0
  }

  getProducts(){
    let products:Product[]=[];

    if (isPlatformBrowser(this.platformId)) {
      const shoppingCart = localStorage.getItem('cart');
      if(shoppingCart){
          products = JSON.parse(shoppingCart as string) as Product[];
          return products;
      }
    }
    return products;
  }

}
