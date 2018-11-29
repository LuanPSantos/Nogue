import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CouponsHomeComponent } from './coupons-home/coupons-home.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { CouponsListModule } from '../shared/component/coupons-list/coupons-list.module';
import { SearchEngineModule } from '../shared/component/search-engine/search-engine.module';

@NgModule({
  declarations: [
    CouponsHomeComponent,
    CouponDetailComponent
  ],
  imports: [
    SearchEngineModule,
    CouponsListModule,
    InputTextModule,
    CardModule,
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    StoreModule.forFeature('customer', fromCustomer.reducer),
    EffectsModule.forFeature([CustomerEffects])
  ]
})
export class CustomerModule { }
