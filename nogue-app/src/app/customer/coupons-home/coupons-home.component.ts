import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LoadCoupons } from '../actions/customer.actions';
import { selectCoupons } from '../reducers/customer.reducer';

@Component({
  selector: 'app-coupons-home',
  templateUrl: './coupons-home.component.html',
  styles: []
})
export class CouponsHomeComponent implements OnInit {

  coupons$: Observable<Coupon[]>;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    this.store.dispatch(new LoadCoupons({
      cityId: 4749,
      businessName: 'i'
    }));

    this.coupons$ = this.store.select(selectCoupons);
  }

  onCouponOpen(coupon) {
    this.router.navigate(['/coupons-home/coupon', coupon.id]);
  }

}
