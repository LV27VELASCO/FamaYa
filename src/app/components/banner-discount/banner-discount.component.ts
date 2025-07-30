import { Component } from '@angular/core';
import { UtilsService } from '../../services/utils/utils.service';

@Component({
  selector: 'app-banner-discount',
  imports: [],
  templateUrl: './banner-discount.component.html'
})
export class BannerDiscountComponent {

  constructor(private util:UtilsService){}

  scrollNavigate(id:string){
    return this.util.scrollTo(id)
  }

}
