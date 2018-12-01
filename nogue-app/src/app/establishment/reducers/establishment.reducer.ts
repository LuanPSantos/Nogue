import { EstablishmentActions, EstablishmentActionTypes } from '../actions/establishment.actions';
import { Establishment } from 'src/app/shared/model/establishment.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface EstablishmentState {
  establishment: Establishment;
}

export const initialState: EstablishmentState = {
  establishment: null
};

export function reducer(state = initialState, action: EstablishmentActions): EstablishmentState {
  switch (action.type) {

    case EstablishmentActionTypes.LoadEstablishmentSucess:
      return {
        ...state,
        establishment: action.payload.establishment
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
