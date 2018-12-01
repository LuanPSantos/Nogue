import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/service/storage.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LoadEstablishment } from '../actions/establishment.actions';
import { selectEstablishment } from '../reducers/establishment.reducer';
import { Establishment } from 'src/app/shared/model/establishment.model';

@Component({
  selector: 'app-home-establishment',
  templateUrl: './home-establishment.component.html',
  styleUrls: ['./home-establishment.component.css']
})
export class HomeEstablishmentComponent implements OnInit {

  public establishment$: Observable<Establishment>;
  public activeCoupons$: Observable<Coupon[]> = of([
    {
      id: 1,
      department: 'OLAAAA'
    }, {
      id: 1,
      department: 'OLAAAA'
    }, {
      id: 1,
      department: 'OLAAAA'
    }
  ]);

  public inactiveCoupons$: Observable<Coupon[]> = of([
    {
      id: 1,
      department: 'OLAAAA'
    }, {
      id: 1,
      department: 'OLAAAA'
    }
  ]);
  public optionsVisible = false;
  constructor(
    private router: Router,
    private storageService: StorageService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadEstablishment());

    this.establishment$ = this.store.select(selectEstablishment);
  }

  public onCouponOpen(coupon) {
    this.router.navigate(['establishment/coupon-update', coupon.id]);
  }

  public openCouponRegister() {
    this.router.navigate(['establishment/coupon-register']);
  }

  public showOptions() {
    this.optionsVisible = true;
  }

  public openEstablishmentUpdate() {
    this.router.navigate(['establishment/update']);
  }

  public logout() {
    this.storageService.removeToken();
    this.router.navigate(['/']);
  }

}
