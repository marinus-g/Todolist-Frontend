import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {UserService} from "../../service/user.service";
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../../service/authentication.service";
import {RouterModule, Routes} from "@angular/router";
import {HttpClient, HttpClientModule, provideHttpClient} from "@angular/common/http";



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
    FormsModule,]
})
export class RegisterModule { }
