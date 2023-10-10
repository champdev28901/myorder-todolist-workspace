export interface ToDoList {
  id: string;
  title: string;
  description: string;
  create_date: string;
  update_date: string;
  source: string;
}



export interface EditTodoList extends ToDoList {
  isEdit: boolean
}
