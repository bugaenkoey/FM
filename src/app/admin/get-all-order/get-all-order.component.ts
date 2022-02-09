import { Component, OnInit } from '@angular/core';
import { DatasService } from 'src/app/datas.service';
import { IOrder } from 'src/app/service/IOrder';
// import { IUser } from 'src/app/service/IUser';

@Component({
  selector: 'app-get-all-order',
  templateUrl: './get-all-order.component.html',
  styleUrls: ['./get-all-order.component.scss']
})
export class GetAllOrderComponent implements OnInit {
  constructor(public datasService: DatasService) {}

  ngOnInit(): void {
    this.getOrdes();
  }

  public ordes: IOrder[] | undefined;

  getOrdes() {
    this.datasService.getOrders().subscribe(
      (data) => {
        console.log(data);
        this.ordes = data;
      },
      (error) => {
        console.log('not server!' + error.message);
        alert(' Сервер не отвечает! ');
      }
    );
  }
}
