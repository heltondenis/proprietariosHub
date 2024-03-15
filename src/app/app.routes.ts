import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'imoveis', loadChildren: () => import('./pages/imoveis/imoveis.module').then(m => m.ImoveisModule) },
];
