import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Login } from '../actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private router: Router,
    fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.loginForm = fb.group({
      username: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required,
        Validators.pattern('[a-zA-Z0-9-_@.]*')])),

      password: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required]))
    });

  }

  ngOnInit() {
  }

  public register() {
    this.router.navigate(['establishment/register']);
  }

  public login() {
    this.store.dispatch(new Login({ credentials: this.loginForm.value }));
  }

}
