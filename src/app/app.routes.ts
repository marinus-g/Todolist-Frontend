import { Routes } from '@angular/router';
import {authenticatedGuard} from "../guard/authenticated.guard";

export const routes: Routes = [
  {
    path: 'register',
    title: 'Register - todo.app',
    loadChildren: () => import('./../page/register/register.module')
      .then(mod => mod.RegisterModule),
  },
  {
    path: 'login',
    title: 'Login - todo.app',
    loadChildren: () => import('./../page/login/login.module')
      .then(mod => mod.LoginModule),
  },
  {
    path: '',
    title: 'Dashbaord - todo.app',
    canActivate: [authenticatedGuard],
     loadChildren: () => import('./../page/dashboard/dashboard.module')
        .then(mod => mod.DashboardModule),
  },
  {
    path: 'todo',
    pathMatch: 'prefix',
    title: 'Add Todo - todo.app',
    canActivate: [authenticatedGuard],
    loadChildren: () => import('./../page/todo/todo.module')
      .then(mod => mod.TodoModule),
  }
];
