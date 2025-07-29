import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { checkout, product, token } from '../../interface/models';
import { Observable, retry, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Token } from '@stripe/stripe-js';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http:HttpClient) { }

  private baseUrl = environment.apiUrl;


  getToken(): Observable<Token> {
    const url = `${this.baseUrl}/api/token`;
    return this.http.get<Token>(url, { withCredentials: true });
  }

  getServices(slug: string): Observable<product> {
    return this.getToken().pipe(
      switchMap((res: any) => {
        const token = res.message;
        if (!token) throw new Error("Token no recibido");

        // Guardamos en localStorage (opcional)
        localStorage.setItem('access_token', token);

        // Construimos los headers con el token Bearer
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });

        const url = `${this.baseUrl}/api/services/${slug.trim()}`;
        return this.http.get<product>(url, { headers });
      })
    );
  }

  getAllServices(): Observable<product[]> {
    return this.getToken().pipe(
      switchMap((res: any) => {
        const token = res.message;
        if (!token) throw new Error("Token no recibido");

        if (isPlatformBrowser(this.platformId)) {

          localStorage.setItem('access_token', token);
        }
        // Guardamos en localStorage (opcional)

        // Construimos los headers con el token Bearer
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });

        const url = `${this.baseUrl}/api/all-services`;
        return this.http.get<product[]>(url, { headers });
      })
    );
  }

  checkoutSession(data:checkout[]){
    return this.getToken().pipe(
          switchMap((res: any) => {
            const token = res.message;
            if (!token) throw new Error("Token no recibido");

            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem('access_token', token);
            }

            // Construimos los headers con el token Bearer
            const headers = new HttpHeaders({
              Authorization: `Bearer ${token}`
            });

            const url = `${this.baseUrl}/api/checkout-session`;
            return this.http.post(url, { items: data },{ headers });
          })
        );
  }

}
