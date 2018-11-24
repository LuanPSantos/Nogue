import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/shared/model/coupon.model';

@Component({
  selector: 'app-coupon-detail',
  templateUrl: './coupon-detail.component.html',
  styleUrls: ['./coupon-detail.component.css']
})
export class CouponDetailComponent implements OnInit {

  coupon: Coupon = {
    id: 1,
    department: 'Bolsas',
    discount: 15,
    amount: 0,
    automaticDeactivationDate: new Date(2018, 10, 20, 0, 0),
    status: {
      description: 'Active',
      id: 2
    },
    unlimited: false,
    establishment: {
      id: 1,
      businessName: 'Loja da Detinha',
      city: {
        id: 100,
        name: 'Artur Nogueira'
      },
      cnpj: '111.111.111.111',
      email: 'email@email'
    }
  };

  constructor() { }

  ngOnInit() {
  }

  public isActive(coupon: Coupon): boolean {
    return coupon.status.id === 1;
  }

  public calcutateRemainingDate(deactivation: Date): string {
    const remainingTime: number = deactivation.getTime() - new Date().getTime();

    const days = Math.floor(remainingTime / 86_400_000);
    let rest = remainingTime % 86_400_000;
    const hours = Math.floor(rest / 3_600_000);
    rest = rest % 3_600_000;
    const minutes = Math.floor(rest / 60_000);

    let d = ' dias, ';
    if (days === 1) {
      d = ' dia, ';
    }

    let h = ' horas e ';
    if (hours === 1) {
      h = ' hora e ';
    }

    let m = ' minutos';
    if (hours === 1) {
      m = ' minuto';
    }

    return days + d + hours + h + minutes + m;
  }

}
