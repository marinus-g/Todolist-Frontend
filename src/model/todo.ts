import { Status } from "./status";
import {User} from "./user";

export interface TodoItem {
  id: number;
  user: User;
  title: string;
  description: string;
  startDate: number;
  endDate: number;
  status: Status;
}
