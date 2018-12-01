import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstablishmentCredentials } from '../model/establishment-credentials.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Establishment } from '../model/establishment.model';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class EstablishmentService {

  ESTABLISHMENT_URL = BASE_URL + '/establishment';

  constructor(private http: HttpClient) {

  }

  public save(establishment: EstablishmentCredentials): Observable<void> {
    return this.http.post<void>(`${this.ESTABLISHMENT_URL}`, establishment);
  }

  public findEstablishment(): Observable<Establishment> {
    return this.http.get<Establishment>(`${this.ESTABLISHMENT_URL}`);
  }
}
