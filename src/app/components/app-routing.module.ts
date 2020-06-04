import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  {path:'' , component: HomeComponent},
  {path:'login', component: LoginComponent}
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
