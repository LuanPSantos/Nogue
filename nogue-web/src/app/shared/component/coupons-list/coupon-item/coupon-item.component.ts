import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-coupon-item',
  templateUrl: './coupon-item.component.html',
  styleUrls: ['./coupon-item.component.css']
})
export class CouponItemComponent implements OnInit {

  public baseURL = environment.BASE_URL;

  @Input()
  public coupon: Coupon;

  @Output()
  public cardClick: EventEmitter<Coupon> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onClick() {
    this.cardClick.emit(this.coupon);
  }

  public applyDiscount(price: number = 0, discount = 0): number {
    return (1 - discount / 100) * price;
  }
}
