import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EstablishmentActionTypes } from '../actions/establishment.actions';

@Injectable()
export class EstablishmentEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(EstablishmentActionTypes.LoadEstablishments));

  constructor(private actions$: Actions) {}
}
