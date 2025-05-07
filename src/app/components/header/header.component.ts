import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  btnMenu:boolean=false;


  showMenu(){
    this.btnMenu = !this.btnMenu;
  }

}
