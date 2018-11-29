import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LoadCoupon } from '../actions/customer.actions';
import { Observable } from 'rxjs';
import { selectCoupon } from '../reducers/customer.reducer';

@Component({
  selector: 'app-coupon-detail',
  templateUrl: './coupon-detail.component.html',
  styleUrls: ['./coupon-detail.component.css']
})
export class CouponDetailComponent implements OnInit {

  private ACTIVE = 'ACTIVE';
  public coupon$: Observable<Coupon>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadCoupon({ couponId: this.route.snapshot.params['id'] }));

    this.coupon$ = this.store.select(selectCoupon);
  }

  public isActive(coupon: Coupon): boolean {
    if (!coupon) { return false; }

    return coupon.status === this.ACTIVE;
  }

  public calcutateRemainingDate(deactivationData: number[]): string {
    if (!deactivationData) { return; }

    const remainingTime: number = new Date(
      deactivationData[0],
      deactivationData[1] - 1,
      deactivationData[2],
      deactivationData[3],
      deactivationData[4]).getTime() - new Date().getTime();

    const days = Math.floor(remainingTime / 86_400_000);
    let rest = remainingTime % 86_400_000;
    const hours = Math.floor(rest / 3_600_000);
    rest = rest % 3_600_000;
    const minutes = Math.floor(rest / 60_000);

    let d = ' dias, ';
    if (days === 1) {
      d = ' dia, ';
    }

    let h = ' horas e ';
    if (hours === 1) {
      h = ' hora e ';
    }

    let m = ' minutos';
    if (hours === 1) {
      m = ' minuto';
    }

    return days + d + hours + h + minutes + m;
  }

}
