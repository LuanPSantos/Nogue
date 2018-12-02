import { Action } from '@ngrx/store';
import { EstablishmentCredentials } from 'src/app/shared/model/establishment-credentials.model';
import { Establishment } from 'src/app/shared/model/establishment.model';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { State } from 'src/app/shared/model/state.model';
import { City } from 'src/app/shared/model/city.model';

export enum EstablishmentActionTypes {
  LoadEstablishment = '[Establishment] Load Load Establishment',
  LoadEstablishmentSuccess = '[Establishment] Load Establishment Success',
  RegisterEstablishment = '[Establishment] Register Establishment',
  UpdateEstablishment = '[Establishment] Update Establishment',
  UpdateCredentials = '[Establishment] Update Credentials',
  DeleteEstablishment = '[Establishment] Delete Establishment',

  LoadCoupons = '[Establishment] Load Coupons',
  LoadCouponsSuccess = '[Establishment] Load Coupons Success',
  SaveCoupon = '[Establishment] Save Coupons',
  DeleteCoupon = '[Establishment] Delete Coupon',

  LoadStates = '[Establishment] Load States',
  LoadStatesSuccess = '[Establishment] Load States Success',
  LoadCities = '[Establishment] Load Cities',
  LoadCitiesSuccess = '[Establishment] Load Cities Success'
}

export class LoadEstablishment implements Action {
  readonly type = EstablishmentActionTypes.LoadEstablishment;
}

export class RegisterEstablishment implements Action {
  readonly type = EstablishmentActionTypes.RegisterEstablishment;

  constructor(public payload: { establishment: EstablishmentCredentials }) { }
}

export class LoadEstablishmentSuccess implements Action {
  readonly type = EstablishmentActionTypes.LoadEstablishmentSuccess;

  constructor(public payload: { establishment: Establishment }) { }
}

export class UpdateEstablishment implements Action {
  readonly type = EstablishmentActionTypes.UpdateEstablishment;

  constructor(public payload: { establishment: Establishment }) { }
}

export class UpdateCredentials implements Action {
  readonly type = EstablishmentActionTypes.UpdateCredentials;

  constructor(public payload: { credentials: EstablishmentCredentials }) { }
}

export class DeleteEstablishment implements Action {
  readonly type = EstablishmentActionTypes.DeleteEstablishment;

  constructor(public payload: { establishmentId: string }) { }
}

// ========= Coupons

export class LoadCoupons implements Action {
  readonly type = EstablishmentActionTypes.LoadCoupons;
}

export class LoadCouponsSuccess implements Action {
  readonly type = EstablishmentActionTypes.LoadCouponsSuccess;

  constructor(public payload: { coupons: Coupon[] }) { }
}

export class SaveCoupon implements Action {
  readonly type = EstablishmentActionTypes.SaveCoupon;

  constructor(public payload: { coupon: Coupon }) { }
}

export class DeleteCoupon implements Action {
  readonly type = EstablishmentActionTypes.DeleteCoupon;

  constructor(public payload: { couponId: string }) { }
}

// ====== Localization

export class LoadStates implements Action {
  readonly type = EstablishmentActionTypes.LoadStates;
}

export class LoadStatesSuccess implements Action {
  readonly type = EstablishmentActionTypes.LoadStatesSuccess;

  constructor(public payload: { states: State[] }) { }
}

export class LoadCities implements Action {
  readonly type = EstablishmentActionTypes.LoadCities;

  constructor(public payload: { stateId: string }) { }
}

export class LoadCitiesSuccess implements Action {
  readonly type = EstablishmentActionTypes.LoadCitiesSuccess;

  constructor(public payload: { cities: City[] }) { }
}

export type EstablishmentActions = LoadEstablishment
  | RegisterEstablishment
  | LoadEstablishmentSuccess
  | LoadCoupons
  | LoadCouponsSuccess
  | SaveCoupon
  | UpdateEstablishment
  | UpdateCredentials
  | DeleteEstablishment
  | LoadStates
  | LoadStatesSuccess
  | LoadCities
  | LoadCitiesSuccess;
