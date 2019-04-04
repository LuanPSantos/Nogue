import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coupon } from 'src/app/shared/model/coupon.model';

@Component({
  selector: 'app-coupons-list',
  templateUrl: './coupons-list.component.html',
  styleUrls: ['./coupons-list.comoponent.css']
})
export class CouponsListComponent implements OnInit {

  @Input()
  public coupons: Coupon[] = [];

  @Output()
  public cardClick: EventEmitter<Coupon> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onClick(event) {
    this.cardClick.emit(event);
  }

}
