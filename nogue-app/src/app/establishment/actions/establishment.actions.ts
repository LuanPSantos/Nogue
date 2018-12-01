import { Action } from '@ngrx/store';
import { EstablishmentCredentials } from 'src/app/shared/model/establishment-credentials.model';
import { Establishment } from 'src/app/shared/model/establishment.model';

export enum EstablishmentActionTypes {
  LoadEstablishment = '[Establishment] Load LoadEstablishment',
  LoadEstablishmentSucess = '[Establishment] Load Establishment Sucess',
  SaveEstablishment = '[Establishment] Register Establishment'
}

export class LoadEstablishment implements Action {
  readonly type = EstablishmentActionTypes.LoadEstablishment;
}

export class SaveEstablishment implements Action {
  readonly type = EstablishmentActionTypes.SaveEstablishment;

  constructor(public payload: { establishment: EstablishmentCredentials }) { }
}

export class LoadEstablishmentSucess implements Action {
  readonly type = EstablishmentActionTypes.LoadEstablishmentSucess;

  constructor(public payload: { establishment: Establishment }) { }
}

export type EstablishmentActions = LoadEstablishment
  | SaveEstablishment
  | LoadEstablishmentSucess;
