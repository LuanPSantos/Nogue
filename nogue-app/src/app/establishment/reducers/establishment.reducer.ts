import { EstablishmentActions, EstablishmentActionTypes } from '../actions/establishment.actions';
import { Establishment } from 'src/app/shared/model/establishment.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Coupon } from 'src/app/shared/model/coupon.model';

export interface EstablishmentState {
  establishment: Establishment;
  activeCoupons: Coupon[];
  inactiveCoupons: Coupon[];
}

export const initialState: EstablishmentState = {
  establishment: null,
  activeCoupons: [],
  inactiveCoupons: []
};

export function reducer(state = initialState, action: EstablishmentActions): EstablishmentState {
  switch (action.type) {

    case EstablishmentActionTypes.LoadEstablishmentSucess:
      return {
        ...state,
        establishment: action.payload.establishment
      };

    case EstablishmentActionTypes.LoadActiveCouponsSucess:
      return {
        ...state,
        activeCoupons: action.payload.coupons
      };

    case EstablishmentActionTypes.LoadInactiveCouponsSucess:
      return {
        ...state,
        inactiveCoupons: action.payload.coupons
      };

    default:
      return state;
  }
}

export const establishmentState = createFeatureSelector<EstablishmentState>('establishment');
export const selectEstablishment = createSelector(
  establishmentState,
  (state) => state.establishment
);
export const selectActiveCoupons = createSelector(
  establishmentState,
  (state) => state.activeCoupons
);
export const selectInctiveCoupons = createSelector(
  establishmentState,
  (state) => state.inactiveCoupons
);
