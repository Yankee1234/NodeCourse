import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:3000').subscribe(data => {
      if(data){
          console.log(data);
      }
  });
  }

  login:string;
  password:string;
  public isAuthenticated(): boolean {
    if(this.login == 'admin' && this.password == 'admin'){
      return true;
    }
    return false;
  }
}
