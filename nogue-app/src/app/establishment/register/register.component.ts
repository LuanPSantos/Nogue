import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(fb: FormBuilder) {
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
    console.log('cadastrando-se', this.registerForm.value);
  }
}
