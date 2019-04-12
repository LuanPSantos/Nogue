import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { SaveCoupon, UploadImage, StartNewCoupon } from '../actions/establishment.actions';
import { RouterState, ActivatedRoute } from '@angular/router';
import { selectEstablishment, selectNewCouponImage, selectLoagindCuponImage } from '../reducers/establishment.reducer';
import { tap } from 'rxjs/operators';
import { BlockUI } from 'primeng/primeng';
import { FileService } from 'src/app/shared/service/file.service';
import { of, Observable, Subscription } from 'rxjs';
import { Image } from 'src/app/shared/model/image.model';
import { dateAsString, stringAsDate } from 'src/app/shared/util/string.util';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-coupon-register',
  templateUrl: './coupon-register.component.html',
  styleUrls: ['./coupon-register.component.css']
})
export class CouponRegisterComponent implements OnInit, OnDestroy {

  public status = [
    { label: 'Ativo', value: 'ACTIVE' },
    { label: 'Inativo', value: 'INACTIVE' }
  ];
  public baseURL = environment.BASE_URL;
  public couponForm: FormGroup;
  public image$: Observable<Image> = of({});
  public loadingImage$: Observable<boolean> = of(false);
  private imageSubscription: Subscription;

  @ViewChild('uploader')
  public uploader;
  constructor(
    fb: FormBuilder,
    private store: Store<AppState>
  ) {

    let date = new Date();
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 3);

    this.couponForm = fb.group({
      product: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required])
      ),
      amount: new FormControl('', Validators.compose([
        Validators.min(0),
        Validators.pattern('[0-9]*')])),
      unlimited: new FormControl(false),
      automaticDeactivationDate: new FormControl(`${dateAsString(date)}`),
      discount: new FormControl('', Validators.compose([
        Validators.min(0),
        Validators.pattern('[0-9]*')])),
      status: new FormControl('', Validators.required),
      image: new FormControl(null),
      originalPrice: new FormControl('', Validators.compose([
        Validators.min(0),
        Validators.pattern('[0-9]*')]))
    });
  }

  ngOnInit() {
    this.store.dispatch(new StartNewCoupon());

    this.image$ = this.store.select(selectNewCouponImage);
    this.loadingImage$ = this.store.select(selectLoagindCuponImage);

    this.imageSubscription = this.image$.subscribe((image: Image) => {
      if (image) {
        this.couponForm.get('image').setValue(image);
      }
    });
  }

  ngOnDestroy() {
    this.imageSubscription.unsubscribe();
  }

  public create() {
    this.store.select(selectEstablishment).subscribe((establishment) => {
      console.log(this.couponForm.value);
      this.couponForm
        .get('automaticDeactivationDate')
        .setValue(stringAsDate(this.couponForm.get('automaticDeactivationDate').value));
      this.store.dispatch(new SaveCoupon({
        coupon: {
          ...this.couponForm.value,
          establishment: establishment
        }
      }));
    }).unsubscribe();
  }

  public upload(event) {
    fetch(event.files[0].objectURL.changingThisBreaksApplicationSecurity)
      .then((response: Response) =>
        response.blob())
      .then(image => {
        const data = new FormData();

        data.append('image', image, event.files[0].name);

        this.store.dispatch(new UploadImage({ data }));

        this.uploader.clear();
      });
  }

}
