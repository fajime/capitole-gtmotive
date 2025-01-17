import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent() {
      return import('./pages/list/list.component').then((m) => m.ListComponent);
    },
  },
  {
    path: 'detail',
    loadComponent() {
      return import('./pages/detail/detail.component').then(
        (m) => m.DetailComponent
      );
    },
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full',
  },
];
