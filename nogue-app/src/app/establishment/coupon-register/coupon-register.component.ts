import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-coupon-register',
  templateUrl: './coupon-register.component.html',
  styleUrls: ['./coupon-register.component.css']
})
export class CouponRegisterComponent implements OnInit {

  status = [
    { label: 'Ativo', value: 'ACTIVE' },
    { label: 'Inativo', value: 'INACTIVE' }
  ];

  couponForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.couponForm = fb.group({
      department: new FormControl(''),
      amount: new FormControl(''),
      unlimited: new FormControl(false),
      automaticDeactivationDate: new FormControl(),
      discount: new FormControl(''),
      status: new FormControl('')
    });
  }

  ngOnInit() {
  }

  create() {
    console.log(this.couponForm.value);
  }

}
