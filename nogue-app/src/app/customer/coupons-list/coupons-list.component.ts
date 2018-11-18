import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coupon } from 'src/app/shared/model/coupon.model';

@Component({
  selector: 'app-coupons-list',
  templateUrl: './coupons-list.component.html',
  styleUrls: ['./coupons-list.comoponent.css']
})
export class CouponsListComponent implements OnInit {

  @Input()
  coupons: Coupon[] = [];

  @Output()
  public open: EventEmitter<Coupon> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onCouponOpen(event) {
    this.open.emit(event);
  }

}
