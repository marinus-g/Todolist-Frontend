import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {TodoItem} from "../model/todo";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {ENV} from "../environments/environment.provider";
import {Environment} from "../environments/ienvironment";

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(private http: HttpClient, private auth: AuthenticationService, @Inject(ENV) private env: Environment) { }

  public getTodos() : Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(
      `${this.env.apiUrl}/todo`,
      {
        withCredentials: true
      }
    )
  }

  public getTodosById(id: number){
    return this.http.get<TodoItem>(
      `${this.env.apiUrl}/todo/${id}`,
      {
        withCredentials: true
      }
    )
  }

  public createTodo(todo: TodoItem){
    return this.http.post(`${this.env.apiUrl}/todo`, todo,
      {
        withCredentials: true
      })
  }

  public updateTodo(todo: TodoItem){
    return this.http.put(`${this.env.apiUrl}/todo/${todo.id}`, todo,
      {
        withCredentials: true
      })
  }
}
