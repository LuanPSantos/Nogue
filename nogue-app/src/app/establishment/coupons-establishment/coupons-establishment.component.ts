import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupons-establishment',
  templateUrl: './coupons-establishment.component.html',
  styleUrls: ['./coupons-establishment.component.css']
})
export class CouponsEstablishmentComponent implements OnInit {

  public activeCoupons$: Observable<Coupon[]> = of([
    {
      id: 1,
      department: 'OLAAAA'
    }, {
      id: 1,
      department: 'OLAAAA'
    }, {
      id: 1,
      department: 'OLAAAA'
    }
  ]);

  public inactiveCoupons$: Observable<Coupon[]> = of([
    {
      id: 1,
      department: 'OLAAAA'
    }, {
      id: 1,
      department: 'OLAAAA'
    }
  ]);
  public optionsVisible = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCouponOpen(coupon) {
    this.router.navigate(['establishment/coupon-update', coupon.id]);
  }

  openCouponRegister() {
    this.router.navigate(['establishment/coupon-register']);
  }

  showOptions() {
    this.optionsVisible = true;
  }

  openEstablishmentUpdate() {
    this.router.navigate(['establishment/update']);
  }

  logout() {
    this.router.navigate(['/']);
  }

}
