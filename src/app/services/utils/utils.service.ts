import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { product } from '../../interface/models';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private sanitizer: DomSanitizer,@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

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

  getServiceInfo(slug: string) {
    const s = slug.toLowerCase();
    const [platformKey, typeKey] = s.split('-');

    const platforms: Record<string, string> = {
      tiktok: 'TikTok',
      facebook: 'Facebook',
      instagram: 'Instagram'
    };

    const types: Record<string, { label: string; svg: string }> = {
      followers: {
        label: 'Seguidores',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>`
      },
      likes: {
        label: 'Me gusta',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              </svg>`
      },
      views: {
        label: 'Visualizaciones',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>`
      }
    };

    return {
      platformName: platforms[platformKey] || 'Otro',
      typeLabel: types[typeKey]?.label || 'Otro servicio',
      typeSvg: this.sanitizer.bypassSecurityTrustHtml(types[typeKey]?.svg || '')
    };
  }

}
