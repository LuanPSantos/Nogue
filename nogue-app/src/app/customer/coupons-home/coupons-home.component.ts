import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupons-home',
  templateUrl: './coupons-home.component.html',
  styles: []
})
export class CouponsHomeComponent implements OnInit {

  coupons$: Observable<Coupon[]> = of([
    {
      id: 1,
      department: 'Bolsas',
      discount: 15,
      establishment: {
        businessName: 'Loja da Detinha'
      }
    },
    {
      id: 2,
      department: 'Bolsas',
      discount: 15,
      establishment: {
        businessName: 'Loja da Detinha'
      }
    },
    {
      id: 3,
      department: 'Bolsas',
      discount: 15,
      establishment: {
        businessName: 'Loja da Detinha'
      }
    }, {
      id: 4,
      department: 'Bolsas',
      discount: 15,
      establishment: {
        businessName: 'Loja da Detinha'
      }
    }, {
      id: 5,
      department: 'Bolsas',
      discount: 15,
      establishment: {
        businessName: 'Loja da Detinha'
      }
    }
  ]);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCouponOpen(coupon) {
    this.router.navigate(['/coupons-home/coupon', coupon.id]);
  }

}
