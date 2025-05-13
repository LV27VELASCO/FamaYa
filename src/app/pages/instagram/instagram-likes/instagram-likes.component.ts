import { Component } from '@angular/core';
import { CharacteristicsComponent } from '../../../components/characteristics/characteristics.component';
import { FaqsComponent } from '../../../components/faqs/faqs.component';
import { BannerDiscountComponent } from '../../../components/banner-discount/banner-discount.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-instagram-likes',
  imports: [CharacteristicsComponent,FaqsComponent,BannerDiscountComponent,FooterComponent],
  templateUrl: './instagram-likes.component.html'
})
export class InstagramLikesComponent {

  dropdownOpen = false;
  highlightedIndex = -1;
  selectedOption = { value: 50, label: '50', note: '', bonus:0, price: '2'};

  options = [
    { value: 50, label: '50', note: '', bonus:0, price: '2'},
    { value: 100, label: '100', note: '+10 gratis', bonus:10, price: '4'},
    { value: 250, label: '250', note: '+25 gratis', bonus:25, price: '6'},
    { value: 500, label: '500', note: '+50 gratis', bonus:50, price: '8'},
    { value: 1000, label: '1.000', note: '+100 gratis', bonus:100, price: '10'},
    { value: 2500, label: '2.500', note: '+250 gratis', bonus:250, price: '12'},
    { value: 5000, label: '5.000', note: '+500 gratis', bonus:500, price: '14'},
    { value: 10000, label: '10.000', note: '+1.000 gratis', bonus:1000, price: '16'},
    { value: 25000, label: '25000', note: '+2.500 gratis', bonus:2500, price: '18'},
    { value: 50000, label: '50.000', note: '+5.000 gratis', bonus:5000, price: '20'}
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: any) {
    this.selectedOption = option;
    this.dropdownOpen = false;
  }
}
