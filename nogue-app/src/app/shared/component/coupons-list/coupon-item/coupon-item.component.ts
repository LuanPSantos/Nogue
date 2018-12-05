import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coupon } from 'src/app/shared/model/coupon.model';

@Component({
  selector: 'app-coupon-item',
  templateUrl: './coupon-item.component.html',
  styleUrls: ['./coupon-item.component.scss']
})
export class CouponItemComponent implements OnInit {

  @Input()
  public coupon: Coupon;
  @Input()
  public label: string;
  @Output()
  public buttonClick: EventEmitter<Coupon> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onButtonClick() {
    this.buttonClick.emit(this.coupon);
  }
}
