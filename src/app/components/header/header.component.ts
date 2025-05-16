import { Component } from '@angular/core';
import { BannerPromoComponent } from '../banner-promo/banner-promo.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShoppingCartsComponent } from '../shopping-carts/shopping-carts.component';

@Component({
  selector: 'app-header',
  imports: [BannerPromoComponent,ShoppingCartsComponent,RouterOutlet,RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  btnMenu:boolean=false;
  btnShoppingCart:boolean=false;


  showMenu(){
    this.btnMenu = !this.btnMenu;
  }

  changeShoppingCart(value:boolean){
    this.btnShoppingCart = value;
  }

}
