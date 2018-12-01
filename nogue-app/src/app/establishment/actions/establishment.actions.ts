import { Action } from '@ngrx/store';
import { EstablishmentCredentials } from 'src/app/shared/model/establishment-credentials.model';
import { Establishment } from 'src/app/shared/model/establishment.model';
import { Coupon } from 'src/app/shared/model/coupon.model';

export enum EstablishmentActionTypes {
  LoadEstablishment = '[Establishment] Load Load Establishment',
  LoadEstablishmentSuccess = '[Establishment] Load Establishment Success',
  SaveEstablishment = '[Establishment] Register Establishment',
  LoadCoupons = '[Establishment] Load Coupons',
  LoadCouponsSuccess = '[Establishment] Load Coupons Success',
  SaveCoupon = '[Establishment] Save Coupons',
  DeleteCoupon = '[Establishment] Delete Coupon'
}

export class LoadEstablishment implements Action {
  readonly type = EstablishmentActionTypes.LoadEstablishment;
}

export class SaveEstablishment implements Action {
  readonly type = EstablishmentActionTypes.SaveEstablishment;

  constructor(public payload: { establishment: EstablishmentCredentials }) { }
}

export class LoadEstablishmentSuccess implements Action {
  readonly type = EstablishmentActionTypes.LoadEstablishmentSuccess;

  constructor(public payload: { establishment: Establishment }) { }
}

export class LoadCoupons implements Action {
  readonly type = EstablishmentActionTypes.LoadCoupons;
}

export class LoadCouponsSuccess implements Action {
  readonly type = EstablishmentActionTypes.LoadCouponsSuccess;

  constructor(public payload: { coupons: Coupon[] }) { }
}

export class SaveCoupon implements Action {
  readonly type = EstablishmentActionTypes.SaveCoupon;

  constructor(public payload: { coupon: Coupon }) { }
}

export class DeleteCoupon implements Action {
  readonly type = EstablishmentActionTypes.DeleteCoupon;

  constructor(public payload: { couponId: string }) { }
}

export type EstablishmentActions = LoadEstablishment
  | SaveEstablishment
  | LoadEstablishmentSuccess
  | LoadCoupons
  | LoadCouponsSuccess
  | SaveCoupon;
