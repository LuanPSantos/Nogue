import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/model/city.model';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/shared/model/state.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectEstablishment, selectStates, selectCities } from '../reducers/establishment.reducer';
import { UpdateEstablishment, DeleteEstablishment, LoadStates, LoadCities } from '../actions/establishment.actions';

@Component({
  selector: 'app-update-establishment',
  templateUrl: './update-establishment.component.html',
  styleUrls: ['./update-establishment.component.css']
})
export class UpdateEstablishmentComponent implements OnInit {

  public updateForm: FormGroup;
  public states$: Observable<State[]> = of([]);
  public cities$: Observable<City[]> = of([]);

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

    this.store.dispatch(new LoadStates());

    this.states$ = this.store.select(selectStates);
    this.cities$ = this.store.select(selectCities);

    this.stateChangesListener();
  }

  private stateChangesListener() {
    this.updateForm.get('state').valueChanges.subscribe((state) => {
      this.store.dispatch(new LoadCities({ stateId: state.id }));
    });
  }

  public update() {
    this.store.dispatch(new UpdateEstablishment({
      establishment: {
        businessName: this.updateForm.get('businessName').value,
        email: this.updateForm.get('email').value,
        cnpj: this.updateForm.get('cnpj').value,
        city: this.updateForm.get('city').value,
        id: this.updateForm.get('id').value
      }
    }));
  }

  public delete() {
    this.store.dispatch(new DeleteEstablishment({ establishmentId: this.updateForm.get('id').value }));
  }
}
