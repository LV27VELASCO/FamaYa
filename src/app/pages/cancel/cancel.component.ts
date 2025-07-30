import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-cancel',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './cancel.component.html',
})
export class CancelComponent {

}
