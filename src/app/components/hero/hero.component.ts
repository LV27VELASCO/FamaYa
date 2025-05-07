import { Component } from '@angular/core';
import { ServiceCardListComponent } from '../service-card-list/service-card-list.component';

@Component({
  selector: 'app-hero',
  imports: [ServiceCardListComponent],
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  socialMedia:number=0;

  setNumber(int:number){
    this.socialMedia = int;
  }

}
