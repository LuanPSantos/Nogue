import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-establishment',
  templateUrl: './home-establishment.component.html',
  styleUrls: ['./home-establishment.component.css']
})
export class HomeEstablishmentComponent implements OnInit {

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

  public onCouponOpen(coupon) {
    this.router.navigate(['establishment/coupon-update', coupon.id]);
  }

  public openCouponRegister() {
    this.router.navigate(['establishment/coupon-register']);
  }

  public showOptions() {
    this.optionsVisible = true;
  }

  public openEstablishmentUpdate() {
    this.router.navigate(['establishment/update']);
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
