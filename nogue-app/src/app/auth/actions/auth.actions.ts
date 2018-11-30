import { Action } from '@ngrx/store';
import { EstablishmentCredentials } from 'src/app/shared/model/establishment-credentials.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSucess = '[Auth] LoginSucess'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: { credentials: EstablishmentCredentials}) { }
}

export class LoginSucess implements Action {
  readonly type = AuthActionTypes.LoginSucess;
}

export type AuthActions = Login
  | LoginSucess
;
