import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponsEstablishmentComponent } from './coupons-establishment/coupons-establishment.component';
import { RegisterComponent } from './register/register.component';
import { CouponRegisterComponent } from './coupon-register/coupon-register.component';
import { UpdateCouponComponent } from './update-coupon/update-coupon.component';
import { UpdateEstablishmentComponent } from './update-establishment/update-establishment.component';

const routes: Routes = [
  { path: '', component: CouponsEstablishmentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'coupon-register', component: CouponRegisterComponent },
  { path: 'update-coupon', component: UpdateCouponComponent },
  { path: 'update-establishment', component: UpdateEstablishmentComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentRoutingModule { }
