import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaderResponse } from '@angular/common/http';
import { EstablishmentCredentials } from '../model/establishment-credentials.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService) {

  }

  public login(credentials: EstablishmentCredentials): Observable<HttpResponse<Response>> {
    return this.http.post<Response>(`${BASE_URL}/login`, credentials, { observe: 'response' });
  }

  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const token = this.storageService.getToken();
    return !helper.isTokenExpired(token);
  }
}
