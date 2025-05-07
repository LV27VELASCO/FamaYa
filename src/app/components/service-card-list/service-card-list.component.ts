import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card-list',
  imports: [],
  templateUrl: './service-card-list.component.html'
})
export class ServiceCardListComponent {

  @Input() numberSocialMedia=0

  socialMedia=[
    {
      likes:'Likes Instagram',
      followers:'Seguidores Instagram',
      viewers:'Visitas Instagram'
    },
    {
      likes:'Likes Tiktok',
      followers:'Seguidores Tiktok',
      viewers:'Visitas Tiktok'
    },
    {
      likes:'Likes Facebook',
      followers:'Seguidores Facebook',
      viewers:'Visitas Facebook'
    },
  ]


}
