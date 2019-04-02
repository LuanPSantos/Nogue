import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../model/coupon.model';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class CouponService {

  private COUPON_URL = BASE_URL + '/coupons';

  constructor(private http: HttpClient) {

  }

  public findAllForCustomers(cityId: number, businessName: string): Observable<Coupon[]> {

    const params: HttpParams = new HttpParams()
      .set('cityId', cityId.toString())
      .set('businessName', businessName);

    return this.http.get<Coupon[]>(this.COUPON_URL, { params: params });
  }

  public findById(couponId: number): Observable<Coupon> {
    return this.http.get<Coupon>(`${this.COUPON_URL}/${couponId}`);
  }

  public save(coupon: Coupon): Observable<void> {
    return this.http.post<void>(this.COUPON_URL, coupon);
  }

  public delete(couponId: string): Observable<void> {
    return this.http.delete<void>(`${this.COUPON_URL}/${couponId}`);
  }
}
