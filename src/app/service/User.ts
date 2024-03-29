import { IOrder } from './IOrder';
import { IUser } from './IUser';

export class User implements IUser {
  
  public static user: User  = new User("","",102,undefined);

  constructor(
    // id: number,
    name: string,
    surname: string,
    phone: number,
    orders?: IOrder 
  ) {
    // this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.orders = orders;
  }
  id?: number;
  name: string;
  surname: string;
  phone: number;
  orders?: IOrder;
}
