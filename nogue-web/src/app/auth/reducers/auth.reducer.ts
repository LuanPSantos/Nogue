import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

// tslint:disable-next-line:no-empty-interface
export interface AuthState {

}

export const initialState: AuthState = {

};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.LoginSuccess:
      return state;

    default:
      return state;
  }
}

export const authSate = createFeatureSelector<AuthState>('auth');
