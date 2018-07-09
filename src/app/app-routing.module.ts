import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component'; 
import { LoginComponent } from './components/login/login.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: SignupComponent }, 
  { path: 'login', component: LoginComponent }, 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
