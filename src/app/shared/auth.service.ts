import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment';
//./../..
import{tap}from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

login(user: any){
  return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,user)
  .pipe(
    tap(this.setToken)
  )
}

private setToken(response:any){
  if(response){
const expData = new Date(new Date().getTime() + +response.expiresIn * 1000 )
localStorage.setItem('fb-token-exp',expData.toString());
localStorage.setItem('fb-token',response.idToken);
  }else{
    localStorage.clear;
  }

}

}
