import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LoadCoupons } from '../actions/customer.actions';
import { selectAllCoupons } from '../reducers/customer.reducer';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-coupons-home',
  templateUrl: './coupons-home.component.html',
  styleUrls: ['./coupons-home.component.scss']
})
export class CouponsHomeComponent implements OnInit {

  public coupons$: Observable<Coupon[]>;

  constructor(
    private store: Store<AppState>,
    private nav: NavController
  ) {

  }

  ngOnInit() {
    this.coupons$ = this.store.select(selectAllCoupons);

    this.store.dispatch(new LoadCoupons({
      cityId: 4749,
      businessName: ''
    }));
  }

  public onCouponOpen(coupon) {
    this.nav.navigateForward(['/home/coupon', coupon.id]);
  }

  public onSearchCoupon(filter) {
    this.store.dispatch(new LoadCoupons({
      cityId: filter.cityId,
      businessName: filter.businessName
    }));
  }
}
