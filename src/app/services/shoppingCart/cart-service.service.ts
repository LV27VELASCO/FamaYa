import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { itemCart } from '../../interface/models';
import { BehaviorSubject, map } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: itemCart[] = [];


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedCart = localStorage.getItem('cart');
      this.items = storedCart ? JSON.parse(storedCart) : [];
      this.cartSubject.next(this.items);
    }
  }

  private cartSubject = new BehaviorSubject<itemCart[]>([]);
  cart$ = this.cartSubject.asObservable();
  private itemsSubject = new BehaviorSubject<itemCart[]>([]);
  items$ = this.itemsSubject.asObservable();

  private saveCart(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }

  addToCart(product: itemCart): void {
    const existing = this.items.find(p => p.id === product.id);
    if(!existing){
      this.items.push(product);
      this.saveCart();
      this.cartSubject.next(this.items);
    }
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

  getTotal() {
     const data = localStorage.getItem('cart');
    if (!data) return 0;
    const items = JSON.parse(data as string) as itemCart[];
    return items.reduce((total: number, item: any) => total + (item.priceInfo.price || 0), 0);
  }

  getQuatityCart(){
    if (isPlatformBrowser(this.platformId)) {
      let storedCart = localStorage.getItem('cart');
      if(storedCart){
        storedCart = JSON.parse(storedCart as string);
        return storedCart?.length;
      }
    }
    return 0
  }

  getProducts(){
    let products:itemCart[]=[];

    if (isPlatformBrowser(this.platformId)) {
      const shoppingCart = localStorage.getItem('cart');
      if(shoppingCart){
          products = JSON.parse(shoppingCart as string) as itemCart[];
          return products;
      }
    }
    return products;
  }

  getLocalStorage(key:string){
    const initial = localStorage.getItem(key);
    return initial;
  }
}
