import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CharacteristicsComponent } from '../../components/characteristics/characteristics.component';
import { FaqsComponent } from '../../components/faqs/faqs.component';
import { BannerDiscountComponent } from '../../components/banner-discount/banner-discount.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,CharacteristicsComponent,FaqsComponent,BannerDiscountComponent,FooterComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
