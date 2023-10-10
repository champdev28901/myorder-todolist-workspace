import { Component, OnInit } from '@angular/core';
import { MockTodoList } from './../mock/mock.todolist';
import { EditTodoList, ToDoList } from '../models/todoList.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  todoList!: ToDoList[];
  summaryList: any;
  updateForm!: FormGroup;
  editData?: EditTodoList
  isLoading = true
  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit(): void {
    // this.mockData = MockTodoList
    this.initialFetch()
  }


  initialFetch() {
    this.httpService.getAllTodo().subscribe((res) => {
      this.isLoading = false
      this.todoList = res.resData as ToDoList[]
    })

    this.httpService.summaryTodo().subscribe((res) => {
       console.log(res);
       this.summaryList = res.resData
    })
  }

  onTriggerEdit($event: EditTodoList) {
    this.editData = $event;
  }


  onTriggerUpdate($event: boolean) {
    if ($event) {
      this.isLoading = true
      this.todoList = []
      this.initialFetch()
    }
  }




}
