import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,HeroComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'SocialFollowers';
}
