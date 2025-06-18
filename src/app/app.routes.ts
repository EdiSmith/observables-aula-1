import { Routes } from '@angular/router';
import { Login } from './view/login/login';
import { Tarefas } from './view/tarefas/tarefas';
import { Cadastro } from './view/cadastro/cadastro';


export const routes: Routes = [

    
    {path: "", component:Login },
    {path: "tarefas",component:Tarefas},
    {path: "cadastrar",component:Cadastro}
];
