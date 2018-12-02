import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { selectCouponById } from '../reducers/customer.reducer';

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
    this.coupon$ = this.store.select(selectCouponById, { id: this.route.snapshot.params['id'] });
  }

  public isActive(coupon: Coupon): boolean {
    if (!coupon) { return false; }

    return coupon.status === this.ACTIVE;
  }

  public calcutateRemainingDate(deactivationData: string): string {
    if (!deactivationData) { return; }

    const remainingTime: number = new Date(deactivationData).getTime() - new Date().getTime();

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
