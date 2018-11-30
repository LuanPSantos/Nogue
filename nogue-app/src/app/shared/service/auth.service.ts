import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaderResponse } from '@angular/common/http';
import { EstablishmentCredentials } from '../model/establishment-credentials.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  public login(credentials: EstablishmentCredentials): Observable<HttpResponse<Response>> {
    return this.http.post<Response>(`${BASE_URL}/login`, credentials, { observe: 'response' });
  }
}
