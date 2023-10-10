import { ToDoList } from "./todoList.model";

export interface ResponseData {
  resStatus: string;
  resMessage: string;
  resData?: ToDoList[] | ToDoList;
}
