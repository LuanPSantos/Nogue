import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { SaveCoupon } from '../actions/establishment.actions';
import { RouterState, ActivatedRoute } from '@angular/router';
import { selectEstablishment } from '../reducers/establishment.reducer';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-coupon-register',
  templateUrl: './coupon-register.component.html',
  styleUrls: ['./coupon-register.component.css']
})
export class CouponRegisterComponent implements OnInit {

  public status = [
    { label: 'Ativo', value: 'ACTIVE' },
    { label: 'Inativo', value: 'INACTIVE' }
  ];

  public couponForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private store: Store<AppState>
  ) {

    this.couponForm = fb.group({
      department: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required,
        Validators.pattern('[a-zA-Z0-9-_@.]*')])
      ),
      amount: new FormControl('', Validators.compose([
        Validators.min(0),
        Validators.pattern('[0-9]*')])),
      unlimited: new FormControl(false),
      automaticDeactivationDate: new FormControl(null),
      discount: new FormControl('', Validators.compose([
        Validators.min(0),
        Validators.pattern('[0-9]*')])),
      status: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  public create() {
    this.store.select(selectEstablishment).subscribe((establishment) => {
      this.store.dispatch(new SaveCoupon({
        coupon: {
          ...this.couponForm.value,
          establishment: establishment
        }
      }));
    }).unsubscribe();
  }

}
