import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { ReservaComponent } from './components/reserva/reserva/reserva.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ReservaPromocionComponent } from './components/reserva-promocion/reserva-promocion.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'reserva-promocion', component: ReservaPromocionComponent },
  { path: '**', redirectTo: '' } // Esta ruta debe estar al final
];

