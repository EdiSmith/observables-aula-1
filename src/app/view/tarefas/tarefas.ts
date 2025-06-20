import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../tarefas/tarefa';
import { Tarefa } from './tarefas.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefas',
  imports: [CommonModule],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.scss'
})
export class TarefasComponent implements OnInit {
    tarefas: Tarefa[] = [];

    constructor(private tarefaService: TarefaService){}

    ngOnInit(): void {
      this.tarefaService.getTarefas().subscribe((dados)=>{
        this.tarefas = dados;


      });
    }

}
