import { HttpClient } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { order } from '../../interface/models';
import { ApiService } from '../../services/api/api.service';
import { UtilsService } from '../../services/utils/utils.service';
import { CartService } from '../../services/shoppingCart/cart-service.service';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-success',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './success.component.html'
})
export class SuccessComponent {

  sessionId: string | null = null;
  orderData!: order[];
  socialMedia={

  }
  loader=true;
  error=false;
  copied=false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private route: ActivatedRoute, private http: HttpClient, private api:ApiService, private util: UtilsService, private cart: CartService) {}

  ngOnInit() {
    this.cart.clearStorage();
    this.route.queryParamMap.subscribe(params => {
    this.sessionId = params.get('session_id');

      if (this.sessionId) {
        // Llamar a tu backend para recuperar los datos de la orden
        this.api.getOrder(this.sessionId).subscribe({
          next: (res: order[]) => {
            this.orderData = res;
            this.loader=false;
          },
          error: err => {
            this.loader=false;
            this.error = true;
            console.error('❌ Error al obtener órdenes', err);
          }
        });
      }
    });
  }


  getInfoService(slug:string){
    return this.util.getServiceInfo(slug);
  }
}
