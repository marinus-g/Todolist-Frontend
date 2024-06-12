import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TodoService} from "../../../service/todo.service";
import {TodoItem} from "../../../model/todo";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: TodoItem[] = [];

  constructor(private _todoService: TodoService) {
  }

  ngOnInit(): void {
    this._todoService.getTodos().subscribe(t => this.todos = t);
  }
}
