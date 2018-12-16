import { EstablishmentActions, EstablishmentActionTypes } from '../actions/establishment.actions';
import { Establishment } from 'src/app/shared/model/establishment.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { State } from 'src/app/shared/model/state.model';
import { City } from 'src/app/shared/model/city.model';
import { Image } from 'src/app/shared/model/image.model';

export interface EstablishmentState extends EntityState<Coupon> {
  establishment: Establishment;
  states: State[];
  cities: City[];
  newCouponImage: Image;
  loadingCouponImage: boolean;
}

export const adapter: EntityAdapter<Coupon> = createEntityAdapter<Coupon>();

adapter.getInitialState({
  establishment: null
});

export const initialState: EstablishmentState = adapter.getInitialState({
  establishment: null,
  states: [],
  cities: [],
  newCouponImage: null,
  loadingCouponImage: false
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

    case EstablishmentActionTypes.UploadImage:
      return {
        ...state,
        loadingCouponImage: true
      };

    case EstablishmentActionTypes.UploadImageSuccess:
      return {
        ...state,
        newCouponImage: action.payload.image,
        loadingCouponImage: false
      };

    case EstablishmentActionTypes.StartNewCoupon:
      return {
        ...state,
        loadingCouponImage: false,
        newCouponImage: null
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

// === File

export const selectNewCouponImage = createSelector(
  establishmentState,
  (state) => state.newCouponImage
);

export const selectLoagindCuponImage = createSelector(
  establishmentState,
  (state) => state.loadingCouponImage
);
