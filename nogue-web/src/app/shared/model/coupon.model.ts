import { Establishment } from './establishment.model';
import { Status } from './status.model';

export class Coupon {
  public id?: number;
  public department?: string;
  public amount?: number;
  public unlimited?: boolean;
  public automaticDeactivationDate?: Date;
  public establishment?: Establishment;
  public status?: Status;
  public discount?: number;
}
