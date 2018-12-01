import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentRoutingModule } from './establishment-routing.module';
import { RegisterComponent } from './register/register.component';
import { HomeEstablishmentComponent } from './home/home-establishment.component';
import { CouponRegisterComponent } from './coupon-register/coupon-register.component';
import { UpdateEstablishmentComponent } from './update-establishment/update-establishment.component';
import { UpdateCouponComponent } from './update-coupon/update-coupon.component';
import {
  InputTextModule,
  ButtonModule,
  InputMaskModule,
  SidebarModule,
  DropdownModule,
  CalendarModule,
  CheckboxModule
} from 'primeng/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { CouponsListModule } from '../shared/component/coupons-list/coupons-list.module';
import { StoreModule } from '@ngrx/store';
import * as fromEstablishment from './reducers/establishment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EstablishmentEffects } from './effects/establishment.effects';

@NgModule({
  declarations: [
    RegisterComponent,
    HomeEstablishmentComponent,
    CouponRegisterComponent,
    UpdateEstablishmentComponent,
    UpdateCouponComponent
  ],
  imports: [
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    SidebarModule,
    CouponsListModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    InputMaskModule,
    ReactiveFormsModule,
    EstablishmentRoutingModule,
    StoreModule.forFeature('establishment', fromEstablishment.reducer),
    EffectsModule.forFeature([EstablishmentEffects])
  ]
})
export class EstablishmentModule { }
