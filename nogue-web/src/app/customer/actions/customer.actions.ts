import { Action } from '@ngrx/store';
import { Coupon } from 'src/app/shared/model/coupon.model';

export enum CustomerActionTypes {
  LoadCoupons = '[Customer] Load Coupons',
  LoadCouponsSuccess = '[Customer] Load Coupons Success'
}

export class LoadCoupons implements Action {
  readonly type = CustomerActionTypes.LoadCoupons;

  constructor(public payload: { cityId: number, businessName: string }) { }
}

export class LoadCouponsSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCouponsSuccess;

  constructor(public payload: { coupons: Coupon[] }) { }
}

export type CustomerActions = LoadCoupons
  | LoadCouponsSuccess;
