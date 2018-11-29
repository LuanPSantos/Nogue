import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { State } from 'src/app/shared/model/state.model';
import { City } from 'src/app/shared/model/city.model';

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

  constructor(fb: FormBuilder, private router: Router) {
    this.registerForm = fb.group({
      id: new FormControl(),
      username: new FormControl(''),
      password: new FormControl(''),
      businessName: new FormControl(''),
      email: new FormControl(''),
      cnpj: new FormControl(''),
      state: new FormControl(),
      city: new FormControl()
    });
  }

  ngOnInit() {
  }

  public register() {
    this.router.navigate(['establishment/coupons']);
  }
}
