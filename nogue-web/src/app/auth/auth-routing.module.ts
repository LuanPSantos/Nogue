import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'coupons-home', loadChildren: '../customer/customer.module#CustomerModule' },
  { path: 'establishment', loadChildren: '../establishment/establishment.module#EstablishmentModule' },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
