import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { DeleteCoupon, SaveCoupon, UploadImage, StartNewCoupon, DeleteImage } from '../actions/establishment.actions';
import { ActivatedRoute } from '@angular/router';
import { selectCouponsById, selectNewCouponImage, selectLoagindCuponImage } from '../reducers/establishment.reducer';
import { Coupon } from 'src/app/shared/model/coupon.model';
import { Observable, of, Subscription, merge } from 'rxjs';
import { Image } from 'src/app/shared/model/image.model';
import { mergeMap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit, OnDestroy {

  public status = [
    { label: 'Ativo', value: 'ACTIVE' },
    { label: 'Inativo', value: 'INACTIVE' }
  ];

  public couponForm: FormGroup;
  public image$: Observable<Image> = of({});
  public loadingImage$: Observable<boolean> = of(false);
  private imageSubscription: Subscription;

  @ViewChild('uploader')
  public uploader;

  constructor(
    fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute) {

    this.couponForm = fb.group({
      id: new FormControl(null),
      product: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required])
      ),
      amount: new FormControl('', Validators.compose([
        Validators.min(0),
        Validators.pattern('[0-9]*')])),
      unlimited: new FormControl(false),
      automaticDeactivationDate: new FormControl(null),
      discount: new FormControl('', Validators.compose([
        Validators.min(0),
        Validators.pattern('[0-9]*')])),
      status: new FormControl('', Validators.required),
      establishment: new FormControl(null),
      image: new FormControl(''),
      originalPrice: new FormControl('', Validators.compose([
        Validators.min(0),
        Validators.pattern('[0-9]*')]))
    });
  }

  ngOnInit() {
    this.store.dispatch(new StartNewCoupon());
    let formImage$: Observable<Image>;

    this.store.select(selectCouponsById, { id: this.route.snapshot.params['id'] })
      .subscribe((coupon: Coupon) => {
        this.couponForm.get('id').setValue(coupon.id);
        this.couponForm.get('product').setValue(coupon.product);
        this.couponForm.get('amount').setValue(coupon.amount);
        this.couponForm.get('unlimited').setValue(coupon.unlimited);
        this.couponForm.get('automaticDeactivationDate').setValue(new Date(coupon.automaticDeactivationDate));
        this.couponForm.get('discount').setValue(coupon.discount);
        this.couponForm.get('status').setValue(coupon.status);
        this.couponForm.get('establishment').setValue(coupon.establishment);
        this.couponForm.get('image').setValue(coupon.image);
        this.couponForm.get('originalPrice').setValue(coupon.originalPrice);

        formImage$ = of({ url: coupon.image });
      }).unsubscribe();

    this.image$ = merge(formImage$, this.store.select(selectNewCouponImage)).pipe(
      filter((image) => image != null)
    );
    this.loadingImage$ = this.store.select(selectLoagindCuponImage);

    this.imageSubscription = this.image$.subscribe((image: Image) => {
      if (image) {
        this.couponForm.get('image').setValue(image.url);
      }
    });
  }

  ngOnDestroy() {
    this.imageSubscription.unsubscribe();
  }

  public update() {
    this.store.dispatch(new SaveCoupon({ coupon: this.couponForm.value }));
  }

  public delete() {
    this.deleteImage();

    this.store.dispatch(new DeleteCoupon({ couponId: this.couponForm.get('id').value }));
  }

  public upload(event) {
    this.deleteImage();

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

  private deleteImage() {
    let image: string = this.couponForm.get('image').value;
    image = image.substr(image.lastIndexOf('/') + 1);

    this.store.dispatch(new DeleteImage({ imagaName: image }));
  }

}
