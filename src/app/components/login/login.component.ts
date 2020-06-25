import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/Authorize/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:string;
  password: string;
  constructor(public auth: AuthService,public router: Router) { }

  TryLogin(){
    this.auth.login = this.login;
    this.auth.password = this.password;
    this.router.navigate(['profile', {login: this.login, password: this.password}]);
  }

  ngOnInit(): void {
  }

}
