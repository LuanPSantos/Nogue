import { CustomerActions, CustomerActionTypes } from '../actions/customer.actions';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CustoemrState {
  coupons: Coupon[];
}

export const initialState: CustoemrState = {
  coupons: []
};

export function reducer(state = initialState, action: CustomerActions): CustoemrState {
  switch (action.type) {

    case CustomerActionTypes.LoadCouponsSuccess:
      return {
        ...state,
        coupons: action.payload.coupons
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
