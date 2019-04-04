import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coupon } from 'src/app/shared/model/coupon.model';

@Component({
  selector: 'app-coupon-item',
  templateUrl: './coupon-item.component.html',
  styleUrls: ['./coupon-item.component.css']
})
export class CouponItemComponent implements OnInit {

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
}
