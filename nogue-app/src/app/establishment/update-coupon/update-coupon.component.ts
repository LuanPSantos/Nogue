import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

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

  constructor(fb: FormBuilder) {
    this.couponForm = fb.group({
      id: new FormControl(),
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

  public update() {
    console.log(this.couponForm.value);
  }

  public delete() {
    console.log('Excluindo');
  }

}
