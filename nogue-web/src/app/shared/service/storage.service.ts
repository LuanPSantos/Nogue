import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  public removeToken() {
    return localStorage.removeItem('token');
  }
}

