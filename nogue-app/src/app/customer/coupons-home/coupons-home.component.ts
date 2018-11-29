import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LoadCoupons } from '../actions/customer.actions';
import { selectCoupons } from '../reducers/customer.reducer';
import { SearchCouponFilter } from 'src/app/shared/model/search-coupon-filter.model';

@Component({
  selector: 'app-coupons-home',
  templateUrl: './coupons-home.component.html',
  styles: []
})
export class CouponsHomeComponent implements OnInit {

  public coupons$: Observable<Coupon[]>;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    this.coupons$ = this.store.select(selectCoupons);
  }

  public onCouponOpen(coupon) {
    this.router.navigate(['/coupons-home/coupon', coupon.id]);
  }

  public onSearchCoupon(filter) {
    this.store.dispatch(new LoadCoupons({
      cityId: filter.cityId,
      businessName: filter.businessName
    }));
  }
}
