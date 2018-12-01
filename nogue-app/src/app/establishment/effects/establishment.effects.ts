import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  EstablishmentActionTypes,
  SaveEstablishment,
  LoadEstablishment,
  LoadEstablishmentSucess,
  LoadActiveCoupons,
  LoadInactiveCoupons,
  LoadActiveCouponsSucess,
  LoadInactiveCouponsSucess
} from '../actions/establishment.actions';
import { mergeMap, catchError, map, tap, merge } from 'rxjs/operators';
import { EstablishmentService } from 'src/app/shared/service/establishment.service';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Login } from 'src/app/auth/actions/auth.actions';
import { CouponService } from 'src/app/shared/service/coupon.service';

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
      this.store.dispatch(new LoadActiveCoupons());
      this.store.dispatch(new LoadInactiveCoupons());
    }, error => {
      console.log('Erro ao carregar o estabelecimento: ', error);
    }))
  );

  @Effect({ dispatch: false })
  LoadActiveCoupons$ = this.actions$.pipe(
    ofType<LoadActiveCoupons>(EstablishmentActionTypes.LoadActiveCoupons),
    tap(() => this.couponService.findAllByStatus('ACTIVE').subscribe((coupons) => {
      this.store.dispatch(new LoadActiveCouponsSucess({ coupons }));
    }, error => {
      console.log('Erro ao carregar cupons ativos: ', error);
    }))
  );

  @Effect({ dispatch: false })
  LoadInactiveCoupons$ = this.actions$.pipe(
    ofType<LoadInactiveCoupons>(EstablishmentActionTypes.LoadInactiveCoupons),
    tap(() => this.couponService.findAllByStatus('INACTIVE').subscribe((coupons) => {
      this.store.dispatch(new LoadInactiveCouponsSucess({ coupons }));
    }, error => {
      console.log('Erro ao carregar cupons inativos: ', error);
    }))
  );

  constructor(
    private actions$: Actions,
    private establishmentService: EstablishmentService,
    private couponService: CouponService,
    private router: Router,
    private store: Store<AppState>
  ) { }
}
