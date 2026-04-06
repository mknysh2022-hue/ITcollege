import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private http = inject(HttpClient); // Впровадження HttpClient через inject() [cite: 740, 796]

  private apiUrl = "https://69b11abdadac80b427c3fff2.mockapi.io/api/v1/todoItem";

  // Отримання всіх завдань (GET) [cite: 798, 799]
  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  // Додавання нового завдання (POST) [cite: 801, 802]
  add(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  // Завдання 1: Реалізація методу оновлення (PUT) [cite: 1041]
  update(id: string, data: Partial<Todo>): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, data);
  }

  // Завдання 2: Реалізація методу видалення (DELETE) [cite: 1042]
  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}