import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.registerForm = fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
      businessName: new FormControl(''),
      email: new FormControl(''),
      cnpj: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['establishment/coupons']);
  }
}
