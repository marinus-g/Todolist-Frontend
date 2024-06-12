import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {provideHttpClient} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UserService} from "../../service/user.service";
import {AuthenticationService} from "../../service/authentication.service";
import {DashboardComponent} from "./page/dashboard.component";
import {TodoListComponent} from "../todo/todo-list/todo-list.component";
import {TodoFormComponent} from "../todo/todo-form/todo-form.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
];

@NgModule({
  declarations: [DashboardComponent],
  providers: [provideHttpClient(), UserService, AuthenticationService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    TodoListComponent,
  ]
})
export class DashboardModule { }
