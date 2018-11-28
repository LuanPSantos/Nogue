import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentRoutingModule } from './establishment-routing.module';
import { RegisterComponent } from './register/register.component';
import { CouponsEstablishmentComponent } from './coupons-establishment/coupons-establishment.component';
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

@NgModule({
  declarations: [
    RegisterComponent,
    CouponsEstablishmentComponent,
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
    EstablishmentRoutingModule
  ]
})
export class EstablishmentModule { }
