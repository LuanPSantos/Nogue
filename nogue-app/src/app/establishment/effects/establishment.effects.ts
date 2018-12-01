import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EstablishmentActionTypes, SaveEstablishment, LoadEstablishment, LoadEstablishmentSucess } from '../actions/establishment.actions';
import { mergeMap, catchError, map, tap, merge } from 'rxjs/operators';
import { EstablishmentService } from 'src/app/shared/service/establishment.service';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Login } from 'src/app/auth/actions/auth.actions';

@Injectable()
export class EstablishmentEffects {

  @Effect({ dispatch: false })
  registerEstablishment$ = this.actions$.pipe(
    ofType<SaveEstablishment>(EstablishmentActionTypes.SaveEstablishment),
    tap((action) => this.establishmentService.save(action.payload.establishment).subscribe(() => {
      this.store.dispatch(new Login({
        credentials: {
          username: action.payload.establishment.username,
          password: action.payload.establishment.password
        }
      }));
    }, (error) => {
      console.log('Erro ao salvar o estabelecimento: ', error);
    })
    ));

  @Effect({ dispatch: false })
  LoadEstablishment$ = this.actions$.pipe(
    ofType<LoadEstablishment>(EstablishmentActionTypes.LoadEstablishment),
    tap(() => this.establishmentService.findEstablishment().subscribe((establishment) => {
      this.store.dispatch(new LoadEstablishmentSucess({ establishment }));
    }, error => {
      console.log('Erro ao carregar o estabelecimento: ', error);
    }))
  );

  constructor(
    private actions$: Actions,
    private establishmentService: EstablishmentService,
    private router: Router,
    private store: Store<AppState>
  ) { }
}
