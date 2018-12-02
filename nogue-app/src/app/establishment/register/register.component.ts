import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { State } from 'src/app/shared/model/state.model';
import { City } from 'src/app/shared/model/city.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { RegisterEstablishment, LoadStates, LoadCities } from '../actions/establishment.actions';
import { selectStates, selectCities } from '../reducers/establishment.reducer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public states$: Observable<State[]> = of([]);
  public cities$: Observable<City[]> = of([]);

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
      city: new FormControl(null, Validators.required),
      state: new FormControl(null)
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadStates());

    this.states$ = this.store.select(selectStates);
    this.cities$ = this.store.select(selectCities);

    this.stateChangesListener();
  }

  stateChangesListener() {
    this.registerForm.get('state').valueChanges.subscribe((state) => {
      this.store.dispatch(new LoadCities({ stateId: state.id }));
    });
  }

  public register() {
    this.store.dispatch(new RegisterEstablishment({
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
