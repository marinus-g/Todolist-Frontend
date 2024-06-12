import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/page/login.component";
import {provideHttpClient} from "@angular/common/http";
import {UserService} from "../../service/user.service";
import {AuthenticationService} from "../../service/authentication.service";
import {FormsModule} from "@angular/forms";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {TodoService} from "../../service/todo.service";
import {authenticatedGuard} from "../../guard/authenticated.guard";


const routes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent,
    canActivate: [authenticatedGuard],
  },
  {
    path: 'add-todo',
    component: TodoFormComponent,
    canActivate: [authenticatedGuard],
  }
];

@NgModule({
  declarations: [],
  providers: [provideHttpClient(), TodoService, AuthenticationService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    TodoListComponent,
    TodoFormComponent,
  ]
})
export class TodoModule {
}
