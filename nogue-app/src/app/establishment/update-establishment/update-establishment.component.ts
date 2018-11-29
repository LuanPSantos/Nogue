import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/model/city.model';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { State } from 'src/app/shared/model/state.model';

@Component({
  selector: 'app-update-establishment',
  templateUrl: './update-establishment.component.html',
  styleUrls: ['./update-establishment.component.css']
})
export class UpdateEstablishmentComponent implements OnInit {

  public updateForm: FormGroup;
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
    this.updateForm = fb.group({
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

  public update() {
    console.log('Atualizando');
  }

  public delete() {
    console.log('Excluindo');
  }
}
