import { Action } from '@ngrx/store';
import { EstablishmentCredentials } from 'src/app/shared/model/establishment-credentials.model';
import { Establishment } from 'src/app/shared/model/establishment.model';
import { Coupon } from 'src/app/shared/model/coupon.model';

export enum EstablishmentActionTypes {
  LoadEstablishment = '[Establishment] Load Load Establishment',
  LoadEstablishmentSucess = '[Establishment] Load Establishment Sucess',
  SaveEstablishment = '[Establishment] Register Establishment',
  LoadActiveCoupons = '[Establishment] Load Active Coupons',
  LoadActiveCouponsSucess = '[Establishment] Load Active Coupons Sucess',
  LoadInactiveCoupons = '[Establishment] Load Inactive Coupons',
  LoadInactiveCouponsSucess = '[Establishment] Load Inactive Coupons Sucess',
}

export class LoadEstablishment implements Action {
  readonly type = EstablishmentActionTypes.LoadEstablishment;
}

export class SaveEstablishment implements Action {
  readonly type = EstablishmentActionTypes.SaveEstablishment;

  constructor(public payload: { establishment: EstablishmentCredentials }) { }
}

export class LoadEstablishmentSucess implements Action {
  readonly type = EstablishmentActionTypes.LoadEstablishmentSucess;

  constructor(public payload: { establishment: Establishment }) { }
}

export class LoadActiveCoupons implements Action {
  readonly type = EstablishmentActionTypes.LoadActiveCoupons;
}

export class LoadActiveCouponsSucess implements Action {
  readonly type = EstablishmentActionTypes.LoadActiveCouponsSucess;

  constructor(public payload: { coupons: Coupon[] }) { }
}

export class LoadInactiveCoupons implements Action {
  readonly type = EstablishmentActionTypes.LoadInactiveCoupons;
}

export class LoadInactiveCouponsSucess implements Action {
  readonly type = EstablishmentActionTypes.LoadInactiveCouponsSucess;

  constructor(public payload: { coupons: Coupon[] }) { }
}

export type EstablishmentActions = LoadEstablishment
  | SaveEstablishment
  | LoadEstablishmentSucess
  | LoadActiveCoupons
  | LoadActiveCouponsSucess
  | LoadInactiveCoupons
  | LoadInactiveCouponsSucess;
