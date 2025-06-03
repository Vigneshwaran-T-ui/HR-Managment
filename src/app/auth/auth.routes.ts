import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth-component/auth-component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
