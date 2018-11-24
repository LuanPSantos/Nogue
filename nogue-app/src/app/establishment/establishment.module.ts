import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentRoutingModule } from './establishment-routing.module';
import { RegisterComponent } from './register/register.component';
import { CouponsEstablishmentComponent } from './coupons-establishment/coupons-establishment.component';
import { CouponRegisterComponent } from './coupon-register/coupon-register.component';
import { UpdateEstablishmentComponent } from './update-establishment/update-establishment.component';
import { UpdateCouponComponent } from './update-coupon/update-coupon.component';

@NgModule({
  declarations: [RegisterComponent, CouponsEstablishmentComponent, CouponRegisterComponent, UpdateEstablishmentComponent, UpdateCouponComponent],
  imports: [
    CommonModule,
    EstablishmentRoutingModule
  ]
})
export class EstablishmentModule { }
