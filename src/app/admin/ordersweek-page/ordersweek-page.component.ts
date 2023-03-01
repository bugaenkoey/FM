import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ordersweek-page',
  templateUrl: './ordersweek-page.component.html',
  styleUrls: ['./ordersweek-page.component.scss'],
})
export class OrdersweekPageComponent implements OnInit {

  myForm = new FormGroup({
    orders: new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl(),
    }),
  });

  constructor() {}

  ngOnInit(): void {  }


  submit() {
    console.log(this.myForm.value);
    let formData = { ...this.myForm.value };

    console.log('formData ==>', formData);
    console.log(
    'startDate --- ', formData.orders.startDate,
    'endDate --- ', formData.orders.endDate,
    );
  }
}
