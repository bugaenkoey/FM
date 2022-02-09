import { Component, OnInit } from '@angular/core';
import { DatasService } from 'src/app/datas.service';
import { IUser } from 'src/app/service/IUser';

@Component({
  selector: 'app-get-all-user',
  templateUrl: './get-all-user.component.html',
  styleUrls: ['./get-all-user.component.scss']
})
export class GetAllUserComponent implements OnInit {
  constructor(public datasService: DatasService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public users: IUser[] | undefined;

  getUsers() {
    this.datasService.getUsers().subscribe(
      (data) => {
        console.log(data);
        this.users = data;
      },
      (error) => {
        console.log('not server!' + error.message);
        alert(' Сервер не отвечает! ');
      }
    );
  }
}
