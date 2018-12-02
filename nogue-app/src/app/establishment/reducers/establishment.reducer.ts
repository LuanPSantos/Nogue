import { EstablishmentActions, EstablishmentActionTypes } from '../actions/establishment.actions';
import { Establishment } from 'src/app/shared/model/establishment.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { State } from 'src/app/shared/model/state.model';
import { City } from 'src/app/shared/model/city.model';

export interface EstablishmentState extends EntityState<Coupon> {
  establishment: Establishment;
  states: State[];
  cities: City[];
}

export const adapter: EntityAdapter<Coupon> = createEntityAdapter<Coupon>();

adapter.getInitialState({
  establishment: null
});

export const initialState: EstablishmentState = adapter.getInitialState({
  establishment: null,
  states: [],
  cities: []
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

    case EstablishmentActionTypes.LoadCitiesSuccess:
      return {
        ...state,
        cities: action.payload.cities
      };

    case EstablishmentActionTypes.LoadStatesSuccess:
      return {
        ...state,
        states: action.payload.states
      };

    default:
      return state;
  }
}

const {
  selectEntities,
  selectAll
} = adapter.getSelectors();

export const establishmentState = createFeatureSelector<EstablishmentState>('establishment');

// Establishment
export const selectCouponsEntities = selectEntities;
export const selectEstablishment = createSelector(
  establishmentState,
  (state) => state.establishment
);

// Coupons
export const selectAllCoupons = selectAll;
export const selectCoupons = createSelector(
  establishmentState,
  selectAllCoupons
);
export const selectCouponsById = createSelector(
  establishmentState,
  (state, props) => state.entities[props.id]
);

// Localization
export const selectStates = createSelector(
  establishmentState,
  (state) => state.states
);
export const selectCities = createSelector(
  establishmentState,
  (state) => state.cities
);
