import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/model/city.model';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State } from 'src/app/shared/model/state.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectEstablishment } from '../reducers/establishment.reducer';
import { Establishment } from 'src/app/shared/model/establishment.model';
import { SaveEstablishment } from '../actions/establishment.actions';

@Component({
  selector: 'app-update-establishment',
  templateUrl: './update-establishment.component.html',
  styleUrls: ['./update-establishment.component.css']
})
export class UpdateEstablishmentComponent implements OnInit {

  public updateForm: FormGroup;
  public states$: Observable<State[]> = of([
    {
      id: 26,
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
      id: 4749,
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
    this.updateForm = fb.group({
      id: new FormControl(),
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
    this.store.select(selectEstablishment).subscribe((establishment) => {
      this.updateForm.get('businessName').setValue(establishment.businessName);
      this.updateForm.get('cnpj').setValue(establishment.cnpj);
      this.updateForm.get('email').setValue(establishment.email);
      this.updateForm.get('id').setValue(establishment.id);

      this.cities$.subscribe((cities) => {
        const cityFound = cities.find(city => establishment.city.id === city.id);
        this.updateForm.get('city').setValue(cityFound);
      });

      this.states$.subscribe((states) => {
        const stateFound = states.find(state => establishment.city.state.id === state.id);
        this.updateForm.get('state').setValue(stateFound);
      });
    });
  }

  public update() {

  }

  public delete() {
    console.log('Excluindo');
  }
}
