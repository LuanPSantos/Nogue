import { NgModule } from '@angular/core';
import { CouponsListComponent } from './coupons-list.component';
import { CouponItemComponent } from './coupon-item/coupon-item.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    CouponsListComponent,
    CouponItemComponent,
  ],
  exports: [
    CouponsListComponent,
    CouponItemComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
  ],
})
export class CouponsListModule {

}
