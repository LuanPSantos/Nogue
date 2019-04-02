import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../model/state.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { City } from '../model/city.model';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class LocationService {

  LOCALIZATION_URL = BASE_URL + '/locations';

  constructor(private http: HttpClient) { }

  public loadStates(): Observable<State[]> {
    return this.http.get<State[]>(`${this.LOCALIZATION_URL}/states`);
  }

  public loadCities(stateId: string): Observable<City[]> {
    return this.http.get<City[]>(`${this.LOCALIZATION_URL}/states/${stateId}/cities`);
  }
}
