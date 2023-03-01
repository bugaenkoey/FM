import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './../../service/User';
import { DatasService } from './../../datas.service';

@Component({
  selector: 'app-enter-user',
  templateUrl: './enter-user.component.html',
  styleUrls: ['./enter-user.component.scss']
})
export class EnterUserComponent implements OnInit {

  public  carentUser : User = new User( "","",0,undefined );

  myForm!: FormGroup;
  constructor(public datasService: DatasService) { }

  ngOnInit(): void {
    this.myForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      user: new FormGroup({
        // surname: new FormControl('Zuzina', [
        //   Validators.required,
        //   Validators.minLength(3),
        // ]),
        // name: new FormControl('Zina', [
        //   Validators.required,
        //   Validators.minLength(3),
        // ]),
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
        // console.log(data);

        //   localStorage.setItem('user-id', data.toString());
        
        // console.log(localStorage.getItem('user-id'));

        // this.nailservices = data;
        this.carentUser = data;
        return data;
      },
      (error) => {
        console.log('Server not responding!' + error.message);
        alert(' Сервер не отвечает! ' + error.message);
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

    // let responsUser = this.postUser(user);
    let responsUser = this.getPhone(user.phone);

    // alert('postUser');
    console.log(user);
    console.log(responsUser);


    // this.myForm.reset();
  }
  public   getPhone(phone: number) {
    
    this.datasService.getPhone(phone).subscribe(
      (data) => {
        console.log(data);

        User.user = data;
        //  var id = data.id;
        // if (typeof (data.id) != "undefined" || typeof (data.id) != "null"){
         if (typeof(data.id) === "number"){

           this.carentUser = data;
          console.log(data.id);
        localStorage.setItem('user-id-phone', data.id.toString());


        var userJson = JSON.stringify(data);
        console.log(userJson);
        localStorage.setItem('user-json', userJson);
      //  localStorage.setItem('user', JSON.stringify(data));
     //   var carentUser2 = JSON.parse(localStorage.getItem('user'));



        }
        // else {
          // if (typeof(data.id) === "undefined" ){
          // localStorage.removeItem('user-id-phone');
          // localStorage.setItem('user-id-phone', "");
        // }
       // localStorage.setItem('user-id-phone', id.toString());
        console.log(localStorage.getItem('user-id-phone'));

        // this.nailservices = data;
        return data;
      },
      (error) => {
        console.log('Server not responding!' + error.message);
        alert(' Сервер не отвечает! ' + error.message);
        // this.nailservices = NAILSERVICES;
      }
    );
    localStorage.removeItem('user-id-phone');
    return null;
  }

}
