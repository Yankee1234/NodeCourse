import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full"},
  {path:'home' , component: HomeComponent},
  {path:'login'},
  {path:'register'},
  {path:'store'},
  {path:'rating'},
  {path:'about'},
  {path:'profile'},
  {path:'forum'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
