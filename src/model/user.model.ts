import {ToDoDto} from "./todo.model";

export interface User {
  id: number;
  username: string;
  email: string;
  todos: ToDoDto[];
}

export interface Registration {
  username: string;
  email: string;
  password: string;
}
