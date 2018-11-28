import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SearchCouponFilter } from 'src/app/shared/model/search-coupon-filter.model';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styles: []
})
export class SearchEngineComponent implements OnInit {

  public searchForm: FormGroup;
  @Output()
  public searchCoupon: EventEmitter<SearchCouponFilter> = new EventEmitter();

  constructor(
    fb: FormBuilder
  ) {
    this.searchForm = fb.group({
      businessName: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onKeyEnter() {
    this.searchCoupon.emit({
      businessName: this.searchForm.get('businessName').value,
      cityId: 4749 // Artur Nogueria - hard coded porque a principio vai ser só em artur
    });
  }

}
