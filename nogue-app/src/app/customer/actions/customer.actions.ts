import { Action } from '@ngrx/store';
import { Coupon } from 'src/app/shared/model/coupon.model';

export enum CustomerActionTypes {
  LoadCoupons = '[Customer] Load Coupons',
  LoadCouponsSuccess = '[Customer] Load Coupons Sucess',
  LoadCoupon = '[Customer] Load Coupon',
  LoadCouponSucess = '[Customer] Load Coupon Sucess'
}

export class LoadCoupons implements Action {
  readonly type = CustomerActionTypes.LoadCoupons;

  constructor(public payload: { cityId: number, businessName: string }) { }
}

export class LoadCouponsSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCouponsSuccess;

  constructor(public payload: { coupons: Coupon[] }) { }
}

export class LoadCoupon implements Action {
  readonly type = CustomerActionTypes.LoadCoupon;

  constructor(public payload: { couponId: number }) { }
}

export class LoadCouponSucess implements Action {
  readonly type = CustomerActionTypes.LoadCouponSucess;

  constructor(public payload: { coupon: Coupon }) { }
}

export type CustomerActions = LoadCoupons
  | LoadCouponsSuccess
  | LoadCoupon
  | LoadCouponSucess;
