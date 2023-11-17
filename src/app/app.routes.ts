import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'create-list',
    loadComponent: () => import('./create-list/create-list.page').then( m => m.CreateListPage)
  },
  {
    path: 'shopping',
    loadComponent: () => import('./shopping/shopping.page').then( m => m.ShoppingPage)
  }
];
