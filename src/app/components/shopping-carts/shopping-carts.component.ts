import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../services/shoppingCart/cart-service.service';
import { checkout, itemCart } from '../../interface/models';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { UtilsService } from '../../services/utils/utils.service';
import { ApiService } from '../../services/api/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-carts',
  imports: [],
  templateUrl: './shopping-carts.component.html',
})
export class ShoppingCartsComponent {
  @Input() shoppingCart: boolean = false
  @Output() closeShCart = new EventEmitter<boolean>();
  itemsCart: itemCart[] = [];
  private readonly storageKey = 'cart';
  private expectedValue = '';
  total$!: Observable<number>;

  constructor(private cartService: CartService, private util:UtilsService,private api:ApiService) {
    // Al iniciar, guarda el valor actual del carrito como referencia válida
    const initial = cartService.getLocalStorage(this.storageKey)
    this.expectedValue = initial || '';
    // Agrega el listener global
    window.addEventListener('storage', this.detectTampering.bind(this));
  }


  private detectTampering(e: StorageEvent): void {
    if (e.key === this.storageKey) {
      const newValue = e.newValue || '';

      if (newValue !== this.expectedValue) {
        //modificacion del carrito
        localStorage.setItem(this.storageKey, '');
        this.expectedValue = ''; // limpiar también la referencia
      }
    }
  }

  getTotal(){
    return this.cartService.getTotal();
  }

  closeShopingCart() {
    this.closeShCart.emit(false);
  }

  getProducts() {
    this.itemsCart = this.cartService.getProducts();
  }

  removeItem(id: string) {
    this.cartService.removeFromCart(id);
    this.getProducts()
  }

  onCheckout() {
    let products = this.cartService.getProducts();

    if(products){
      const data:checkout[] = products.map(item => ({
                        id: item.priceInfo.id,
                        url: item.url,
                        slug: item.serviceInfo.slug
                      }));

      this.api.checkoutSession(data).subscribe({
          next: async (res: any) => {
            const stripe = await loadStripe(environment.pkStripe);
            stripe?.redirectToCheckout({ sessionId: res.id });
          },
          error: (err) => {
            console.error(err);
            //this.buttonLocation = true;
          }
        });
    }
  }

  formatNumber(number:any){
    return this.util.formatearConPuntos(number);
  }

}
