import { Component } from '@angular/core';
import { BannerPromoComponent } from '../banner-promo/banner-promo.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [BannerPromoComponent,RouterOutlet],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  btnMenu:boolean=false;


  showMenu(){
    this.btnMenu = !this.btnMenu;
  }

}
