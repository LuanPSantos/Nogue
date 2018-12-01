import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { State } from 'src/app/shared/model/state.model';
import { City } from 'src/app/shared/model/city.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { SaveEstablishment } from '../actions/establishment.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public states$: Observable<State[]> = of([
    {
      id: 1,
      name: 'São Paulo',
      initials: 'SP'
    },
    {
      id: 1,
      name: 'Minas Gerais',
      initials: 'MG'
    }, {
      id: 1,
      name: 'Rio de Janeiro',
      initials: 'RJ'
    }
  ]);
  public cities$: Observable<City[]> = of([
    {
      id: 1,
      name: 'Artur Nogueira',
    },
    {
      id: 1,
      name: 'Limeira',
    }, {
      id: 1,
      name: 'Campinas',
    }
  ]);

  constructor(fb: FormBuilder, private store: Store<AppState>) {
    this.registerForm = fb.group({
      id: new FormControl(),
      username: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9-_@.]*$')])),

      password: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required])),

      businessName: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required])),

      email: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required,
        Validators.pattern('[a-z0-9-_@.]*')])),

      cnpj: new FormControl('', Validators.required),
      city: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  public register() {
    this.store.dispatch(new SaveEstablishment({
      establishment: {
        username: this.registerForm.get('username').value,
        password: this.registerForm.get('password').value,
        establishment: {
          businessName: this.registerForm.get('businessName').value,
          // this.registerForm.get('city').value, hardcoded porque só atenderá Artur por enquanto
          city: { id: 4749, name: 'Artur Nogueira' },
          cnpj: this.registerForm.get('cnpj').value,
          email: this.registerForm.get('email').value,
        }
      }
    }));
  }
}
