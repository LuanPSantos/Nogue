import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Login, LoginSucess } from '../actions/auth.actions';
import { mergeMap, map, tap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    mergeMap((action) =>
      this.authService.login(action.payload.credentials).pipe(
        catchError((error) => {
          console.log('Erro ao logar: ', error);
          return of(<any>{});
        })
      )
    ),
    map((response) => {
      if (response.headers) {
        return response.headers.get('Authorization');
      }

      return '';
    }),
    tap((token) => {
      localStorage.setItem('token', token);
      this.router.navigate(['/establishment/home']);
    }));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router) { }
}
