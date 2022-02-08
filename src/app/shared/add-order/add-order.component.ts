import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatasService } from 'src/app/datas.service';
import { INailServise } from 'src/app/service/INailServise';
import { Order } from 'src/app/service/Order';
import { User } from 'src/app/service/User';
// import { create } from 'domain';
// import { createSecureServer } from 'http2';
// import { DatasService } from '../datas.service';
// import { NAILSERVICES } from '../mock-nailServices';
// import { INailServise } from '../service/INailServise';
// import { Order } from '../service/Order';
// import { User } from '../service/User';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  constructor(public datasService: DatasService) {}
  nailservices: INailServise[] | undefined; //  = NAILSERVICES;

  myForm!: FormGroup;
  days: number = 10;
  carent_date!: string;
  max_date!: string;

  ngOnInit(): void {
    this.getServises();
    this.myForm = this.createFormGroup();

    this.betweenDates(this.days);
  }
  submit() {
    console.log(this.myForm);
    let formData = { ...this.myForm.value };
    console.log('formData ==>', formData);
    console.log('formData.user --- ', formData.user);
    console.log('formData.order --- ', formData.order);
    let user = this.createUser(formData.user);
    let responsUser = this.postUser(user);
    // alert('postUser');
    console.log(user);
    console.log(responsUser);

    let order = this.createOrder(formData.order);
    // order = {
    //   // "service": null,
    //   serviceId: 3,
    //   userId: 40,
    //   // "user": null,
    //   done: false,
    //   dateTime: T00:00:00',
    //   note: 'wv',
    //   comment: 'Best of the Best ',
    // };

    console.log(order);
    let responsOrder = this.sendOrder(order);

    console.log(responsOrder);

    // this.myForm.reset();
  }

  betweenDates(days: number) {
    // carent_date = 2021-11-16 + (days = 10) =>
    // this.max_data = 2021-11-26

    // this.carent_date = new Date().toISOString().split('T')[0];
    this.carent_date = this.dateYYYYMMDD(new Date(), '-');

    let date_max = new Date();
    date_max.setDate(new Date().getDate() + days);

    this.max_date = this.dateYYYYMMDD(date_max);

    console.log(this.carent_date, this.max_date);
  }

  dateYYYYMMDD(date: Date, split: string = '-'): string {
    let yyyy = date.getFullYear().toString();
    // (january = 0 , december = 11) =>getMonth() + 1
    let mm = (date.getMonth() + 1).toString();
    let dd = date.getDate().toString();
    if (mm.length == 1) mm = '0' + mm;
    if (dd.length == 1) dd = '0' + dd;

    return yyyy + split + mm + split + dd;
  }

  getServises(): void {
    this.datasService.getNailServises().subscribe(
      (data) => {
        console.log(data);
        this.nailservices = data;

        // return data;
      },
      (error) => {
        console.log('Server not responding!' + error.message);
        alert(' Сервер не отвечает! ');
        // this.nailservices = NAILSERVICES;
      }
    );
    // return NAILSERVICES;
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      user: new FormGroup({
        surname: new FormControl('Zuzina', [
          Validators.required,
          Validators.minLength(3),
        ]),
        name: new FormControl('Zina', [
          Validators.required,
          Validators.minLength(3),
        ]),
        tel: new FormControl('050123456', [Validators.required]),
      }),

      order: new FormGroup({
        service: new FormControl('', Validators.required),
        note: new FormControl(''),
        date: new FormControl(''),
      }),
    });
  }

  /*
https://localhost:44354/order
    {
        "id": 9,
        "service": null,
        "serviceId": 2,
        "userId": 3,
        "user": null,
        "done": false,
        "dateTime": "2021-11-06T00:00:00",
        "note": "Done manikure",
        "comment": "Menikure the Best"
    }
  */
  createOrder(formDataOrder: any): Order {
    console.log(formDataOrder);
    const date = formDataOrder.date;
    return new Order(
      // formDataOrder.id,
      formDataOrder.service,
      // "",

      // formDataOrder.serviceId,
      // 5,
      // formDataOrder.user,
      // "",
      formDataOrder.userId,
      // 41,
      formDataOrder.date,
      // new Date(formDataOrder.dateTime),
      // date,
      // '2021-11-06T00:00:00',
      // '2021-11-06',
      // formDataOrder.done,
      true,
      formDataOrder.note,
      // '',
      // formDataOrder.comment
      'formDataOrder.comment'
    );
  }

  sendOrder(order: Order) {
    this.datasService.sendOrder(order).subscribe(
      (data) => {
        console.log(data);
        // this.nailservices = data;
        return data;
      },

      (error) => {
        console.log('Server not responding!' + error.message);
        alert(' Сервер не отвечает! ' + error.message);
        // this.nailservices = NAILSERVICES;
      }
    );
    return null;
  }

  createUser(formDataUser: any): User {
    return new User(formDataUser.name, formDataUser.surname, formDataUser.tel);
  }

  postUser(user: User) {
    this.datasService.postUser(user).subscribe(
      (data) => {
        console.log(data);

        localStorage.setItem('user-id', data.toString());
        console.log(localStorage.getItem('user-id'));

        // this.nailservices = data;
        return data;
      },
      (error) => {
        console.log('Server not responding!' + error.message);
        alert(' Сервер не отвечает! ' + error.message);
        // this.nailservices = NAILSERVICES;
      }
    );
    return null;
  }
}
