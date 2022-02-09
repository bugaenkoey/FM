import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './../../service/User';
import { DatasService } from './../../datas.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  myForm!: FormGroup;
  constructor(public datasService: DatasService) { }

  ngOnInit(): void {
    this.myForm = this.createFormGroup();
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

      // order: new FormGroup({
      //   service: new FormControl('', Validators.required),
      //   note: new FormControl(''),
      //   date: new FormControl(''),
      // }),
    });
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

  submit() {
    console.log(this.myForm);
    let formData = { ...this.myForm.value };
    console.log('formData ==>', formData);
    console.log('formData.user --- ', formData.user);
    // console.log('formData.order --- ', formData.order);
    let user = this.createUser(formData.user);
    let responsUser = this.postUser(user);
    // alert('postUser');
    console.log(user);
    console.log(responsUser);

    // let order = this.createOrder(formData.order);
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

    // console.log(order);
    // let responsOrder = this.sendOrder(order);

    // console.log(responsOrder);

    // this.myForm.reset();
  }

}
