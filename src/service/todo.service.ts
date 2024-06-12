import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {TodoItem} from "../model/todo";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly ENDPOINT: string = environment.apiUrl;

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  public getTodos() : Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(
      `${this.ENDPOINT}/todo/`
    )
  }

  public getTodosById(id: number){
    return this.http.get<TodoItem>(
      `${this.ENDPOINT}/todo/${id}`
    )
  }

  public createTodo(todo: TodoItem){
    return this.http.post(`${this.ENDPOINT}/todo`, todo)
  }

  public updateTodo(todo: TodoItem){
    return this.http.put(`${this.ENDPOINT}/todo/${todo.id}`, todo)
  }
}
