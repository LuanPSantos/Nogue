import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { DeleteCoupon, SaveCoupon } from '../actions/establishment.actions';
import { ActivatedRoute } from '@angular/router';
import { selectCouponsById } from '../reducers/establishment.reducer';
import { Observable } from 'rxjs';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  public status = [
    { label: 'Ativo', value: 'ACTIVE' },
    { label: 'Inativo', value: 'INACTIVE' }
  ];

  public couponForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute) {

    this.couponForm = fb.group({
      id: new FormControl(null),
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
      status: new FormControl('', Validators.required),
      establishment: new FormControl(null)
    });
  }

  ngOnInit() {
    this.store.select(selectCouponsById, { id: this.route.snapshot.params['id'] })
      .subscribe((coupon: Coupon) => {
        this.couponForm.get('id').setValue(coupon.id);
        this.couponForm.get('department').setValue(coupon.department);
        this.couponForm.get('amount').setValue(coupon.amount);
        this.couponForm.get('unlimited').setValue(coupon.unlimited);
        this.couponForm.get('automaticDeactivationDate').setValue(new Date(coupon.automaticDeactivationDate));
        this.couponForm.get('discount').setValue(coupon.discount);
        this.couponForm.get('status').setValue(coupon.status);
        this.couponForm.get('establishment').setValue(coupon.establishment);
      }).unsubscribe();
  }

  public update() {
    this.store.dispatch(new SaveCoupon({ coupon: this.couponForm.value }));
  }

  public delete() {
    this.store.dispatch(new DeleteCoupon({ couponId: this.couponForm.get('id').value }));
  }

}
