import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponsHomeComponent } from './coupons-home/coupons-home.component';
import { CouponDetailComponent } from './coupon-detail/coupon-detail.component';

const routes: Routes = [
  { path: '', component: CouponsHomeComponent},
  { path: 'coupon/:id', component: CouponDetailComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
