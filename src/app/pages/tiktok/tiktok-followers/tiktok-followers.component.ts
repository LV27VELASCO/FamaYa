import { Component, inject } from '@angular/core';
import { CharacteristicsComponent } from '../../../components/characteristics/characteristics.component';
import { FaqsComponent } from '../../../components/faqs/faqs.component';
import { BannerDiscountComponent } from '../../../components/banner-discount/banner-discount.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../../services/shoppingCart/cart-service.service';
import { UtilsService } from '../../../services/utils/utils.service';
import { itemCart, price, product } from '../../../interface/models';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-tiktok-followers',
  imports: [CharacteristicsComponent, FaqsComponent, BannerDiscountComponent, FooterComponent, ReactiveFormsModule, FormsModule,
    ToastModule, ButtonModule, RippleModule
  ],
  providers: [MessageService],
  templateUrl: './tiktok-followers.component.html'
})
export class TiktokFollowersComponent {

  constructor(private cartService: CartService, private util: UtilsService, private api: ApiService, private messageService: MessageService) { }

  dropdownOpen = false;
  highlightedIndex = -1;
  selectedOption!:price;


  fb = inject(FormBuilder);

  formLink: FormGroup = this.fb.group({
    urlProfile: ['', [Validators.required, Validators.pattern('https:\\/\\/(www\\.)?[a-zA-Z0-9.-]+\\.com\\/.*')]]
  })

  pageName: string = 'tiktok-followers';
  product!: product;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    this.getServices();
  }

  getServices() {
    this.product = this.util.getServiceInStorage(this.pageName.trim()) as product
    this.selectedOption = this.product.prices[0];
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: price) {
    this.selectedOption = option;
    this.dropdownOpen = false;
  }

  addToCart(product: itemCart) {
    if (this.formLink.valid) {
      this.cartService.addToCart({ ...product });
      this.formLink.reset();
      this.messageService.add({ severity: 'success', summary: 'Súper!', detail: 'Seguidores agregados al carrito!', key: 'br', life: 3000 });
    } else {
      this.messageService.add({ severity: 'warn', summary: '¡Oops!', detail: 'Agrega enlace del perfil de TikTok', key: 'br', life: 3000 });
    }
  }

  convertNumber(number: string) {
    return this.util.convertNumber(number);
  }

  generateId() {
    return this.util.generarId();
  }

  formatNumber(number:any){
    return this.util.formatearConPuntos(number);
  }

}
