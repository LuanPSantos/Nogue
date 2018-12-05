import { Action } from '@ngrx/store';
import { EstablishmentCredentials } from 'src/app/shared/model/establishment-credentials.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] LoginSuccess'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: { credentials: EstablishmentCredentials}) { }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
}

export type AuthActions = Login
  | LoginSuccess
;
