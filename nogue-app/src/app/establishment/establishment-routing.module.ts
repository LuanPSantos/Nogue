import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponsEstablishmentComponent } from './coupons-establishment/coupons-establishment.component';
import { RegisterComponent } from './register/register.component';
import { CouponRegisterComponent } from './coupon-register/coupon-register.component';
import { UpdateCouponComponent } from './update-coupon/update-coupon.component';
import { UpdateEstablishmentComponent } from './update-establishment/update-establishment.component';

const routes: Routes = [
  { path: 'coupons', component: CouponsEstablishmentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'coupon-register', component: CouponRegisterComponent },
  { path: 'coupon-update/:id', component: UpdateCouponComponent },
  { path: 'update', component: UpdateEstablishmentComponent },
  { path: '**', redirectTo: 'coupons'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentRoutingModule { }
