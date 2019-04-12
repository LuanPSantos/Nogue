import { Establishment } from './establishment.model';
import { Status } from './status.model';
import { Image } from './image.model';

export class Coupon {
  public id?: number;
  public product?: string;
  public image?: Image;
  public originalPrice?: number;
  public amount?: number;
  public unlimited?: boolean;
  public automaticDeactivationDate?: Date;
  public establishment?: Establishment;
  public status?: Status;
  public discount?: number;
}
