import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '', component:HeaderComponent,
    children: [
       { path: '', component: HomeComponent },
       { path: 'instagram-likes', loadComponent: () => import('./pages/instagram/instagram-likes/instagram-likes.component').then(mod => mod.InstagramLikesComponent) },
       { path: 'instagram-views', loadComponent: () => import('./pages/instagram/instagram-views/instagram-views.component').then(mod => mod.InstagramViewsComponent) },
       { path: 'instagram-followers', loadComponent: () => import('./pages/instagram/instagram-followers/instagram-followers.component').then(mod => mod.InstagramFollowersComponent) },
       { path: 'facebook-views', loadComponent: () => import('./pages/facebook/facebook-views/facebook-views.component').then(mod => mod.FacebookViewsComponent) },
       { path: 'facebook-followers', loadComponent: () => import('./pages/facebook/facebook-followers/facebook-followers.component').then(mod => mod.FacebookFollowersComponent) },
       { path: 'facebook-likes', loadComponent: () => import('./pages/facebook/facebook-likes/facebook-likes.component').then(mod => mod.FacebookLikesComponent) },
       { path: 'tiktok-views', loadComponent: () => import('./pages/tiktok/tiktok-views/tiktok-views.component').then(mod => mod.TiktokViewsComponent) },
       { path: 'tiktok-followers', loadComponent: () => import('./pages/tiktok/tiktok-followers/tiktok-followers.component').then(mod => mod.TiktokFollowersComponent) },
       { path: 'tiktok-likes', loadComponent: () => import('./pages/tiktok/tiktok-likes/tiktok-likes.component').then(mod => mod.TiktokLikesComponent) },
    ]
  }
];
