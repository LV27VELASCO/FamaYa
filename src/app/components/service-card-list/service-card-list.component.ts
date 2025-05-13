import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-card-list',
  imports: [RouterLink],
  templateUrl: './service-card-list.component.html'
})
export class ServiceCardListComponent {

  @Input() numberSocialMedia=0

  SocialMedia = [
    {
      likes: {
        label: 'Likes Instagram',
        link: '/instagram-likes'
      },
      followers: {
        label: 'Seguidores Instagram',
        link: '/instagram-followers'
      },
      viewers: {
        label: 'Visitas Instagram',
        link: '/instagram-viewers'
      }
    },
    {
      likes: {
        label: 'Likes Tiktok',
        link: '/tiktok-likes'
      },
      followers: {
        label: 'Seguidores Tiktok',
        link: '/tiktok-followers'
      },
      viewers: {
        label: 'Visitas Tiktok',
        link: '/tiktok-viewers'
      }
    },
    {
      likes: {
        label: 'Likes Facebook',
        link: '/facebook-likes'
      },
      followers: {
        label: 'Seguidores Facebook',
        link: '/facebook-followers'
      },
      viewers: {
        label: 'Visitas Facebook',
        link: '/facebook-viewers'
      }
    }
  ];


}
