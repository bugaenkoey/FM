import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../shared/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;
  submited = false;
  // form = new FormGroup({
  //   email: new FormControl('',[Validators.required,Validators.email]),
  //   password:new FormControl('',[Validators.required,Validators.minLength(6)])

  // })

  get f() {
    return this.form.controls;
  }
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    console.log('submit==>>', this.form);
    if (this.form.invalid) {
      console.log('this.form --< not');
      return;
    }
    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true,
    };
    console.log(user);

    this.auth.login(user).subscribe(
      (res) => {
        console.log(res);
        this.form.reset;
        this.router.navigate(['/', 'dashboard']);
        this.submited = false;
      },
      () => {
        this.submited = false;
      }
    );
  }
}
