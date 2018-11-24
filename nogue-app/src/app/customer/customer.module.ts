import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CouponsHomeComponent } from './coupons-home/coupons-home.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { CouponsListComponent } from './coupons-list/coupons-list.component';
import { CouponItemComponent } from './coupons-list/coupon-item/coupon-item.component';
import { CouponDetailComponent } from './coupon-detail/coupon-detail.component';
import {
  InputTextModule,
  CardModule,
  ButtonModule
} from 'primeng/primeng';
import { StoreModule } from '@ngrx/store';
import * as fromCustomer from './reducers/customer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './effects/customer.effects';

@NgModule({
  declarations: [
    CouponsHomeComponent,
    SearchEngineComponent,
    CouponsListComponent,
    CouponItemComponent,
    CouponDetailComponent
  ],
  imports: [
    InputTextModule,
    CardModule,
    CommonModule,
    ButtonModule,
    CustomerRoutingModule,
    StoreModule.forFeature('customer', fromCustomer.reducer),
    EffectsModule.forFeature([CustomerEffects])
  ]
})
export class CustomerModule { }
