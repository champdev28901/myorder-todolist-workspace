import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseData } from '../models/response.model';

type Body = {
  title: string,
  description: string,
  source: string
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = "http://localhost:8000"
  constructor(public http: HttpClient) { }


  getAllTodo() {
    const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.get<ResponseData>(`${this.url}/todo/api/todos`, options);
  }

  removeTodo(id: string) {
    const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.delete<ResponseData>(`${this.url}/todo/api/todos/${id}`, options);
  };

  updateTodo(body: Body, id: string) {
    const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.put<ResponseData>(`${this.url}/todo/api/todos/${id}`, body, options);
  }

  createTodo(body: Body) {
    const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<ResponseData>(`${this.url}/todo/api/todos`, body, options);
  }

  summaryTodo() {
    const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.get<ResponseData>(`${this.url}/todo/api/todos/summary`, options);
  }




}
