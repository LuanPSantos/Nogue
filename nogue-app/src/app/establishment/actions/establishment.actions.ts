import { Action } from '@ngrx/store';

export enum EstablishmentActionTypes {
  LoadEstablishments = '[Establishment] Load Establishments'
}

export class LoadEstablishments implements Action {
  readonly type = EstablishmentActionTypes.LoadEstablishments;
}

export type EstablishmentActions = LoadEstablishments;
