import { Component, inject } from '@angular/core';
import { CharacteristicsComponent } from '../../../components/characteristics/characteristics.component';
import { BannerDiscountComponent } from '../../../components/banner-discount/banner-discount.component';
import { CartService } from '../../../services/shoppingCart/cart-service.service';
import { FooterComponent } from '../../../components/footer/footer.component';
import { FaqsComponent } from '../../../components/faqs/faqs.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { itemCart, price, product } from '../../../interface/models';
import { UtilsService } from '../../../services/utils/utils.service';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-instagram-likes',
  imports: [CharacteristicsComponent, FaqsComponent, BannerDiscountComponent, FooterComponent, ReactiveFormsModule, FormsModule,
    ToastModule, ButtonModule, RippleModule
  ],
  providers: [MessageService],
  templateUrl: './instagram-likes.component.html'
})
export class InstagramLikesComponent {

  constructor(private cartService: CartService, private util: UtilsService, private api: ApiService, private messageService: MessageService) { }

  linkPost = '';
  dropdownOpen = false;
  highlightedIndex = -1;
  selectedOption!:price;
  fb = inject(FormBuilder);

  formLink: FormGroup = this.fb.group({
    urlPost: ['', [Validators.required, Validators.pattern('https:\\/\\/(www\\.)?[a-zA-Z0-9.-]+\\.com\\/.*')]]
  })

  pageName: string = 'instagram-likes';
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
      this.messageService.add({ severity: 'success', summary: 'Súper!', detail: 'Likes agregados al carrito!', key: 'br', life: 3000 });
    } else {
      this.messageService.add({ severity: 'warn', summary: '¡Oops!', detail: 'Agrega enlace de publicación de Instagram', key: 'br', life: 3000 });
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
