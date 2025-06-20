import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from '../view/tarefas/tarefas.model'; 
import { Observable } from 'rxjs';







@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private apiUrl = "http://localhost:3000/tarefas";

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }
}
