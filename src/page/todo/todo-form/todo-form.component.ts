import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TodoItem} from "../../../model/todo";
import {TodoService} from "../../../service/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {

  newTodo: TodoItem | undefined;

  constructor(private _todoService: TodoService, private _router: Router) {
  }

  onSubmit(): void {
    if (this.newTodo) {
      this._todoService.createTodo(this.newTodo);
      this._router.navigate(['/todos']);
    }
  }
}
