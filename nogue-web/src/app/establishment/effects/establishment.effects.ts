import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  EstablishmentActionTypes,
  LoadEstablishment,
  LoadEstablishmentSuccess,
  SaveCoupon,
  DeleteCoupon,
  LoadCoupons,
  LoadCouponsSuccess,
  RegisterEstablishment,
  UpdateEstablishment,
  DeleteEstablishment,
  LoadStates,
  LoadStatesSuccess,
  LoadCities,
  LoadCitiesSuccess,
  UploadImage,
  UploadImageSuccess,
  DeleteImage
} from '../actions/establishment.actions';
import { tap } from 'rxjs/operators';
import { EstablishmentService } from 'src/app/shared/service/establishment.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Login } from 'src/app/auth/actions/auth.actions';
import { CouponService } from 'src/app/shared/service/coupon.service';
import { LocationService } from 'src/app/shared/service/locations.service';
import { StorageService } from 'src/app/shared/service/storage.service';
import { FileService } from 'src/app/shared/service/file.service';
import { noop } from 'rxjs';

@Injectable()
export class EstablishmentEffects {

  @Effect({ dispatch: false })
  registerEstablishment$ = this.actions$.pipe(
    ofType<RegisterEstablishment>(EstablishmentActionTypes.RegisterEstablishment),
    tap((action) => this.establishmentService.register(action.payload.establishment).subscribe(() => {
      this.store.dispatch(new Login({
        credentials: {
          username: action.payload.establishment.username,
          password: action.payload.establishment.password
        }
      }));
    }, (error) => {
      console.log('Erro ao salvar o estabelecimento: ', error);
    })
    ));

  @Effect({ dispatch: false })
  loadEstablishment$ = this.actions$.pipe(
    ofType<LoadEstablishment>(EstablishmentActionTypes.LoadEstablishment),
    tap(() => this.establishmentService.findEstablishment().subscribe((establishment) => {
      this.store.dispatch(new LoadEstablishmentSuccess({ establishment }));
      this.store.dispatch(new LoadCoupons({ establishmentId: establishment.id.toString()}));
    }, error => {
      console.log('Erro ao carregar o estabelecimento: ', error);
    }))
  );

  @Effect({ dispatch: false })
  updateEstablishment$ = this.actions$.pipe(
    ofType<UpdateEstablishment>(EstablishmentActionTypes.UpdateEstablishment),
    tap((action) => this.establishmentService.update(action.payload.establishment).subscribe(() => {
      // this.router.navigate(['establishment/home']);
    }, error => {
      console.log('Erro ao atualizar o estabelecimento: ', error);
    }))
  );

  @Effect({ dispatch: false })
  deleteEstablishment$ = this.actions$.pipe(
    ofType<DeleteEstablishment>(EstablishmentActionTypes.DeleteEstablishment),
    tap((action) => this.establishmentService.delete(action.payload.establishmentId).subscribe(() => {
      this.storageService.removeToken();
      this.router.navigate(['/']);
    }, error => {
      console.log('Erro ao excluir o estabelecimento: ', error);
    }))
  );

  // == Coupons

  @Effect({ dispatch: false })
  loadCoupons$ = this.actions$.pipe(
    ofType<LoadCoupons>(EstablishmentActionTypes.LoadCoupons),
    tap((action) => this.establishmentService
      .findEstablishmentCoupons(action.payload.establishmentId).subscribe((coupons) => {
      this.store.dispatch(new LoadCouponsSuccess({ coupons }));
    }, error => {
      console.log('Erro ao carregar os cupons: ', error);
    }))
  );

  @Effect({ dispatch: false })
  saveCoupon$ = this.actions$.pipe(
    ofType<SaveCoupon>(EstablishmentActionTypes.SaveCoupon),
    tap((action) => this.couponService.save(action.payload.coupon).subscribe(() => {
      this.router.navigate(['establishment/home']);
    }, error => {
      console.log('Erro ao salvar o cupom: ', error);
    }))
  );

  @Effect({ dispatch: false })
  deleteCoupon$ = this.actions$.pipe(
    ofType<DeleteCoupon>(EstablishmentActionTypes.DeleteCoupon),
    tap((action) => this.couponService.delete(action.payload.couponId).subscribe(() => {
      this.router.navigate(['establishment/home']);
    }, error => {
      console.log('Erro ao excluir o cupom: ', error);
    }))
  );

  // == Localization

  @Effect({ dispatch: false })
  loadStates$ = this.actions$.pipe(
    ofType<LoadStates>(EstablishmentActionTypes.LoadStates),
    tap(() => this.localizationService.loadStates().subscribe((states) => {
      this.store.dispatch(new LoadStatesSuccess({ states }));
    }, error => {
      console.log('Erro ao carregar os estados: ', error);
    }))
  );

  @Effect({ dispatch: false })
  loadCities$ = this.actions$.pipe(
    ofType<LoadCities>(EstablishmentActionTypes.LoadCities),
    tap((action) => this.localizationService.loadCities(action.payload.stateId).subscribe((cities) => {
      this.store.dispatch(new LoadCitiesSuccess({ cities }));
    }, error => {
      console.log('Erro ao carregar as cidades: ', error);
    }))
  );

  // === File

  @Effect({ dispatch: false })
  uploadImage$ = this.actions$.pipe(
    ofType<UploadImage>(EstablishmentActionTypes.UploadImage),
    tap((action) => this.fileService.uploadImage(action.payload.data).subscribe((image) => {
      this.store.dispatch(new UploadImageSuccess({ image }));
    }, error => {
      console.log('Erro ao realizar upload da image: ', error);
    }))
  );

  @Effect({ dispatch: false })
  deleteImage$ = this.actions$.pipe(
    ofType<DeleteImage>(EstablishmentActionTypes.DeleteImage),
    tap((action) => this.fileService.deleteImage(action.payload.imagaName).subscribe(noop, error => {
      console.log('Erro ao deletar da image: ', error);
    }))
  );

  constructor(
    private actions$: Actions,
    private establishmentService: EstablishmentService,
    private couponService: CouponService,
    private router: Router,
    private store: Store<AppState>,
    private localizationService: LocationService,
    private storageService: StorageService,
    private fileService: FileService
  ) { }
}
