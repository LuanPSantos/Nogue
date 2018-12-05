import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEstablishmentComponent } from './home/home-establishment.component';
import { RegisterComponent } from './register/register.component';
import { CouponRegisterComponent } from './coupon-register/coupon-register.component';
import { UpdateCouponComponent } from './update-coupon/update-coupon.component';
import { UpdateEstablishmentComponent } from './update-establishment/update-establishment.component';
import { RouteGuards } from '../shared/service/route-guards.service';

const routes: Routes = [
  { path: 'home', component: HomeEstablishmentComponent, canActivate: [RouteGuards] },
  { path: 'register', component: RegisterComponent },
  { path: 'coupon-register', component: CouponRegisterComponent, canActivate: [RouteGuards] },
  { path: 'coupon-update/:id', component: UpdateCouponComponent, canActivate: [RouteGuards] },
  { path: 'update', component: UpdateEstablishmentComponent, canActivate: [RouteGuards] },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentRoutingModule { }
