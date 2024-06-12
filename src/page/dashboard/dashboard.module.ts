import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {provideHttpClient} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UserService} from "../../service/user.service";
import {AuthenticationService} from "../../service/authentication.service";
import {DashboardComponent} from "./page/dashboard.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  providers: [provideHttpClient(), UserService, AuthenticationService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,]
})
export class DashboardModule { }
