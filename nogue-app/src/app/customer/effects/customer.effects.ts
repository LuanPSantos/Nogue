import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CustomerActionTypes, LoadCoupons, LoadCouponsSuccess, LoadCoupon, LoadCouponSuccess } from '../actions/customer.actions';
import { CouponService } from 'src/app/shared/service/coupon.service';
import { tap, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Injectable()
export class CustomerEffects {

  @Effect({ dispatch: false })
  loadCoupons$ = this.actions$.pipe(
    ofType<LoadCoupons>(CustomerActionTypes.LoadCoupons),
    mergeMap((action: LoadCoupons) =>
      this.couponService.findAllForCustomers(action.payload.cityId, action.payload.businessName)
    ),
    tap((coupons) => this.store.dispatch(new LoadCouponsSuccess({ coupons })))
  );

  @Effect({ dispatch: false })
  loadCoupon$ = this.actions$.pipe(
    ofType<LoadCoupon>(CustomerActionTypes.LoadCoupon),
    mergeMap((action: LoadCoupon) =>
      this.couponService.findById(action.payload.couponId)
    ),
    tap((coupon) => this.store.dispatch(new LoadCouponSuccess({ coupon })))
  );

  constructor(
    private actions$: Actions,
    private couponService: CouponService,
    private store: Store<AppState>) { }
}
