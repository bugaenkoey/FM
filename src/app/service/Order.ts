import { IOrder } from './IOrder';

export class Order implements IOrder {
  constructor(
    // id: number,
    // service: string,
    serviceId: number,
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
    // this.user = user;
    this.userId = userId;
    this.dateTime = dateTime;
    this.done = done;
    this.note = note;
    this.comment = comment;
  }

  id?: number;
  service?: string;
  serviceId: number;
  user?: string;
  userId: number;
  dateTime?: string | undefined;
  done: boolean;
  note: string;
  comment: string;
}
