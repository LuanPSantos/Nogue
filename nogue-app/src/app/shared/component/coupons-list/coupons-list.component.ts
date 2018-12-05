import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coupon } from 'src/app/shared/model/coupon.model';

@Component({
  selector: 'app-coupons-list',
  templateUrl: './coupons-list.component.html',
  styleUrls: ['./coupons-list.comoponent.scss']
})
export class CouponsListComponent implements OnInit {

  @Input()
  public coupons: Coupon[] = [];
  @Input()
  public buttonLabel: string;

  @Output()
  public buttonClick: EventEmitter<Coupon> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onButtonClick(event) {
    this.buttonClick.emit(event);
  }

}
