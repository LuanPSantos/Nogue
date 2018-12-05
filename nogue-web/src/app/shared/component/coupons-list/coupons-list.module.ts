import { NgModule } from '@angular/core';
import { CouponsListComponent } from './coupons-list.component';
import { CouponItemComponent } from './coupon-item/coupon-item.component';
import { CommonModule } from '@angular/common';
import { CardModule, ButtonModule } from 'primeng/primeng';

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
    CardModule,
    CommonModule,
    ButtonModule,
  ],
})
export class CouponsListModule {

}
