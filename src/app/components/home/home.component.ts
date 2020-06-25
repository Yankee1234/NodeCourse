import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Authorize/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public auth: AuthService) {

   }

  ngOnInit(): void {
  }

  ToLogin(){
    if(this.auth.isAuthenticated()){
      alert('You are authentificated');
      this.router.navigate(['home'])
    }
    this.router.navigate(['login']);
  }

  ToRegister(){
    if(this.auth.isAuthenticated()){
      alert('You are authentificated');
      this.router.navigate(['home'])
    }
    this.router.navigate(['register']);
  }

}
