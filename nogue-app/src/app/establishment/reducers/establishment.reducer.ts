import { EstablishmentActions, EstablishmentActionTypes } from '../actions/establishment.actions';
import { Establishment } from 'src/app/shared/model/establishment.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface EstablishmentState extends EntityState<Coupon> {
  establishment: Establishment;
}

export const adapter: EntityAdapter<Coupon> = createEntityAdapter<Coupon>();

adapter.getInitialState({
  establishment: null
});

export const initialState: EstablishmentState = adapter.getInitialState({
  establishment: null
});

export function reducer(state = initialState, action: EstablishmentActions): EstablishmentState {
  switch (action.type) {

    case EstablishmentActionTypes.LoadEstablishmentSuccess:
      return {
        ...state,
        establishment: action.payload.establishment
      };

    case EstablishmentActionTypes.LoadCouponsSuccess:
      return adapter.addAll(action.payload.coupons, state);

    default:
      return state;
  }
}

const {
  selectEntities,
  selectAll
} = adapter.getSelectors();

export const establishmentState = createFeatureSelector<EstablishmentState>('establishment');
export const selectCouponsEntities = selectEntities;
export const selectAllCoupons = selectAll;
export const selectEstablishment = createSelector(
  establishmentState,
  (state) => state.establishment
);

export const selectCoupons = createSelector(
  establishmentState,
  selectAllCoupons
);

export const selectCouponsById = createSelector(
  establishmentState,
  (state, props) => state.entities[props.id]
);
