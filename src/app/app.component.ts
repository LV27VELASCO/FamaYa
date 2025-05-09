import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,HeroComponent,FaqsComponent,FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'SocialFollowers';
}
