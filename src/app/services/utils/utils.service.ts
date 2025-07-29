import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { product } from '../../interface/models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  product!:product;

  generarId(): string {
    return ('id-' + Math.random().toString(36).substring(2, 9) + '-' + Date.now()).trim();
  }

  convertNumber(number:string):number{
    return Number.parseInt(number)
  }

  getServiceInStorage(slug: string): product | undefined {
    if (isPlatformBrowser(this.platformId)) {
      const services = localStorage.getItem("products");
      if (services) {
        const product = (JSON.parse(services) as product[]).find(service => service.slug === slug.trim());
        if (product) {
          return product;
        }
      }
    }
    // Si no hay servicios o no se encuentra el slug, redirige
    this.router.navigate(['/']);
    return undefined;
  }

  formatearConPuntos(num: string | number): string {
    const valor = num.toString().replace(/\D/g, ''); // Elimina cualquier carácter que no sea dígito
    return valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

}
