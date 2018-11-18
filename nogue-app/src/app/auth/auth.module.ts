import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import {
  InputTextModule,
  ButtonModule
} from 'primeng/primeng';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    InputTextModule,
    ButtonModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
