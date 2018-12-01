import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../model/coupon.model';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class CouponService {

  private COUPON_URL = BASE_URL + '/coupon';

  constructor(private http: HttpClient) {

  }

  public findAllForCustomers(cityId: number, businessName: string): Observable<Coupon[]> {

    const params: HttpParams = new HttpParams()
      .set('cityId', cityId.toString())
      .set('businessName', businessName);

    return this.http.get<Coupon[]>(this.COUPON_URL, { params: params });
  }

  public findAllByStatus(status: string): Observable<Coupon[]> {

    const params: HttpParams = new HttpParams()
      .set('status', status);

    return this.http.get<Coupon[]>(`${this.COUPON_URL}/by-status`, { params: params });
  }

  public findById(couponId: number): Observable<Coupon> {
    return this.http.get<Coupon>(`${this.COUPON_URL}/${couponId}`);
  }
}
