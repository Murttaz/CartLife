import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-list',
    loadChildren: () => import('./create-list/create-list.page').then(m => m.CreateListPage)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./shopping/shopping.page').then(m => m.ShoppingPage)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
