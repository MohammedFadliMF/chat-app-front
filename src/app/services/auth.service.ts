import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  public login(email:string,password:string){
    let optoins={
      headers: new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }
    let params=new HttpParams().set("email",email).set("password",password);
    return this.http.post('http://localhost:5454/signin', params, optoins);
  }
}
