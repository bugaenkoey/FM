import { IOrder } from './IOrder';
import { IUser } from './IUser';
import { User } from './User';

export class Order implements IOrder {
  
  id?: number;
  service?: string;
  serviceId: number;
  user: IUser;
  // user?: string;
  userId: number;
  dateTime?: string | undefined;
  done: boolean;
  note: string;
  comment: string;

  constructor(
    // id: number,
    // service: string,
    serviceId: number,
    user: User,
    // user: string,
    userId: number,
    dateTime: string,
    done: boolean,
    note: string,
    comment: string
  ) {
    // this.id = id;
    // this.service = service;
    this.serviceId = serviceId;
    this.user = user;
    // this.user = user;
    this.userId = userId;
    this.dateTime = dateTime;
    this.done = done;
    this.note = note;
    this.comment = comment;
  }
}
