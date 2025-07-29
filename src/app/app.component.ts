import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api/api.service';
import { isPlatformBrowser } from '@angular/common';
import { Error404Component } from './components/error-404/error-404.component';
import { LoaderComponent } from './components/loader/loader.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Error404Component,LoaderComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'FamaYa';
  loader:boolean=true;
  error:boolean=false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private api:ApiService){}

  ngOnInit(){
      this.api.getAllServices().subscribe({
      next: res => {
          if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('products', JSON.stringify(res));
          this.loader = false;
        }
      },
      error: err => {
        this.loader = false;
        this.error = true;
        console.error("❌ Error al obtener token", err)
      }
    });
  }

  //Restringir f12 en el navegador
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(e: KeyboardEvent) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'J') || (e.ctrlKey && e.key === 'U'))
      {
        e.preventDefault();
      }
  }

  //Restringir tecla izquierda en el navegador
  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}
