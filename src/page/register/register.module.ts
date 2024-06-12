import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {UserService} from "../../service/user.service";
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../../service/authentication.service";
import {RouterModule, Routes} from "@angular/router";
import {HttpClient, HttpClientModule, provideHttpClient} from "@angular/common/http";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";



const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [RegisterComponent],
  providers: [provideHttpClient(), UserService, AuthenticationService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonDirective,
    Ripple,
  ]
})
export class RegisterModule { }
