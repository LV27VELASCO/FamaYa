import { Component, inject } from '@angular/core';
import { CharacteristicsComponent } from '../../../components/characteristics/characteristics.component';
import { FaqsComponent } from '../../../components/faqs/faqs.component';
import { BannerDiscountComponent } from '../../../components/banner-discount/banner-discount.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { Product } from '../../../interface/models';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../../services/shoppingCart/cart-service.service';
import { UtilsService } from '../../../services/utils/utils.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-tiktok-likes',
  imports: [CharacteristicsComponent,FaqsComponent,BannerDiscountComponent,FooterComponent,ReactiveFormsModule,FormsModule,
    ToastModule, ButtonModule, RippleModule
  ],
  providers: [MessageService],
  templateUrl: './tiktok-likes.component.html'
})
export class TiktokLikesComponent {

  constructor(private cartService: CartService, private utilService:UtilsService, private messageService: MessageService) {}

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

  fb = inject(FormBuilder);

  formLink:FormGroup=this.fb.group({
    urlPost:['', [Validators.required, Validators.pattern('https:\\/\\/[a-zA-Z0-9\\-]+\\.com\\/')]]
   })

  ngOnInit() {
    if (typeof window !== 'undefined'){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: any) {
    this.selectedOption = option;
    this.dropdownOpen = false;
  }

  addToCart(product: Product) {
    if(this.formLink.valid){
      this.cartService.addToCart({ ...product });
      this.messageService.add({ severity: 'success', summary: 'Súper!', detail: 'Likes agregados al carrito!', key: 'br', life: 3000 });
    }else{
      this.messageService.add({ severity: 'warn', summary: '¡Oops!', detail: 'Agrega enlace de publicación de TikTok', key: 'br', life: 3000 });
    }
  }

  convertNumber(number:string){
    return this.utilService.convertNumber(number);
  }

  generateId(){
    return this.utilService.generarId();
  }
}
