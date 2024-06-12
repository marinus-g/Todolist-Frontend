import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./page/login.component";
import {FormsModule} from "@angular/forms";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "../register/register/register.component";
import {UserService} from "../../service/user.service";
import {AuthenticationService} from "../../service/authentication.service";


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  providers: [provideHttpClient(), UserService, AuthenticationService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,]
})
export class LoginModule { }
