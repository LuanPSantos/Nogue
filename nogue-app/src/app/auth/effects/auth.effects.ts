import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Login, LoginSuccess } from '../actions/auth.actions';
import { mergeMap, map, tap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/service/storage.service';

@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    tap((action) =>
      this.authService.login(action.payload.credentials).subscribe((response) => {

        if (response.headers && response.headers.get('Authorization')) {
          const token = response.headers.get('Authorization');
          this.storageService.setToken(token);
          this.router.navigate(['/establishment/home']);
        }

      }, error => {
        console.log('Erro ao logar: ', error);
      })
    ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
    private storageService: StorageService) { }
}
