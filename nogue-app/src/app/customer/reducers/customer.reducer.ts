import { CustomerActions, CustomerActionTypes } from '../actions/customer.actions';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CustoemrState {
  coupons: Coupon[];
  coupon: Coupon;
}

export const initialState: CustoemrState = {
  coupons: [],
  coupon: null
};

export function reducer(state = initialState, action: CustomerActions): CustoemrState {
  switch (action.type) {

    case CustomerActionTypes.LoadCouponsSuccess:
      return {
        ...state,
        coupons: action.payload.coupons
      };

    case CustomerActionTypes.LoadCouponSucess:
      return {
        ...state,
        coupon: action.payload.coupon
      };

    default:
      return state;
  }
}

export const selectCustomerState = createFeatureSelector('customer');
export const selectCoupons = createSelector(
  selectCustomerState,
  (state: CustoemrState) => state.coupons
);

export const selectCoupon = createSelector(
  selectCustomerState,
  (state: CustoemrState) => state.coupon
);
