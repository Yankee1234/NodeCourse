import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from '../services/Authorize/guard/auth.guard';


const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  //{ path: '', redirectTo: '/home', pathMatch: "full"},
  /*{path:'register'},
  {path:'store'},
  {path:'rating'},
  {path:'about'},
  {path:'profile'},
  {path:'forum'},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
