import { CustomerActions, CustomerActionTypes } from '../actions/customer.actions';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface CustomerState extends EntityState<Coupon> {

}

const adapter = createEntityAdapter<Coupon>();

export const initialState: CustomerState = adapter.getInitialState();

export function reducer(state = initialState, action: CustomerActions): CustomerState {
  switch (action.type) {

    case CustomerActionTypes.LoadCouponsSuccess:
      return adapter.addAll(action.payload.coupons, state);

    default:
      return state;
  }
}

const {
  selectAll
} = adapter.getSelectors();

export const selectCustomerState = createFeatureSelector<CustomerState>('customer');
export const selectAllCoupons = createSelector(
  selectCustomerState,
  selectAll
);
export const selectCouponById = createSelector(
  selectCustomerState,
  (state, props) => state.entities[props.id]
);
