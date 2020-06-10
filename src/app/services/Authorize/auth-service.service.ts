import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    // проверяем не истек ли срок действия токена
    return !this.jwtHelper.isTokenExpired(token);
  }
}
