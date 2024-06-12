import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./page/login.component";
import {FormsModule} from "@angular/forms";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "../register/register/register.component";
import {UserService} from "../../service/user.service";
import {AuthenticationService} from "../../service/authentication.service";
import {InputTextModule} from "primeng/inputtext";
import {Ripple} from "primeng/ripple";


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
    FormsModule,
    InputTextModule,
    Ripple,
  ]
})
export class LoginModule { }
