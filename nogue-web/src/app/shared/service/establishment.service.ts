import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstablishmentCredentials } from '../model/establishment-credentials.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Establishment } from '../model/establishment.model';
import { Coupon } from '../model/coupon.model';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class EstablishmentService {

  ESTABLISHMENT_URL = BASE_URL + '/establishments';

  constructor(private http: HttpClient) {

  }

  public register(establishment: EstablishmentCredentials): Observable<void> {
    return this.http.post<void>(`${this.ESTABLISHMENT_URL}`, establishment);
  }

  public update(establishment: Establishment): Observable<void> {
    return this.http.put<void>(`${this.ESTABLISHMENT_URL}`, establishment);
  }

  public findEstablishment(): Observable<Establishment> {
    return this.http.get<Establishment>(`${this.ESTABLISHMENT_URL}`);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.ESTABLISHMENT_URL}/${id}`);
  }

  public findEstablishmentCoupons(id: string): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.ESTABLISHMENT_URL}/${id}/coupons`);
  }
}
