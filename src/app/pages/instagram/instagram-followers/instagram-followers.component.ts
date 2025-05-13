import { Component } from '@angular/core';
import { CharacteristicsComponent } from '../../../components/characteristics/characteristics.component';
import { FaqsComponent } from '../../../components/faqs/faqs.component';
import { BannerDiscountComponent } from '../../../components/banner-discount/banner-discount.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-instagram-followers',
  imports: [CharacteristicsComponent,FaqsComponent,BannerDiscountComponent,FooterComponent],
  templateUrl: './instagram-followers.component.html'
})
export class InstagramFollowersComponent {

}
