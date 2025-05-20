import { Component, ViewChild } from '@angular/core';
import { BannerPromoComponent } from '../banner-promo/banner-promo.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShoppingCartsComponent } from '../shopping-carts/shopping-carts.component';
import { CartService } from '../../services/shoppingCart/cart-service.service';

@Component({
  selector: 'app-header',
  imports: [BannerPromoComponent,ShoppingCartsComponent,RouterOutlet,RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private cartService: CartService) {}

  @ViewChild(ShoppingCartsComponent) hijo!: ShoppingCartsComponent;

  checkoutCart() {
    this.hijo.getProducts();
  }

  btnMenu:boolean=false;
  btnShoppingCart:boolean=false;

  showMenu(){
    this.btnMenu = !this.btnMenu;
  }

  changeShoppingCart(value:boolean){
    this.btnShoppingCart = value;
    this.checkoutCart();
  }

  getQuantityCart(){
    return this.cartService.getQuatityCart();
  }

}
