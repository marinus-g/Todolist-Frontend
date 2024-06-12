import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TodoItem} from "../../../model/todo";
import {TodoService} from "../../../service/todo.service";
import {Router} from "@angular/router";
import {User} from "../../../model/user.model";
import {Status} from "../../../model/status";
import {UserService} from "../../../service/user.service";

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

  newTodo: TodoItem;

  constructor(private _todoService: TodoService, private _userService: UserService, private _router: Router) {
    this.newTodo = {
      id:  null,
      user: _userService.user,
      title: '',
      description: '',
      startDate: null,
      endDate: null,
      status: Status.TODO,
    }
  }

  onSubmit(): void {
    if (this.newTodo) {
      this._todoService.createTodo(this.newTodo);
      this._router.navigate(['/todos']);
    }
  }
}
