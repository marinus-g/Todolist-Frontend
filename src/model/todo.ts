import { Status } from "./status";
import {User} from "./user.model";

export interface TodoItem {
  id: number | null;
  user: User | null;
  title: string;
  description: string;
  startDate: number | null;
  endDate: number | null;
  status: Status;
}
