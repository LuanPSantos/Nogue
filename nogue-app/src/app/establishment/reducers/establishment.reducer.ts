import { Action } from '@ngrx/store';
import { EstablishmentActions, EstablishmentActionTypes } from '../actions/establishment.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: EstablishmentActions): State {
  switch (action.type) {

    case EstablishmentActionTypes.LoadEstablishments:
      return state;


    default:
      return state;
  }
}
