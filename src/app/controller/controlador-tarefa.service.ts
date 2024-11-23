import { Injectable } from '@angular/core';
import { ListaTarefa } from '../model/lista-tarefa';
import { Tarefa } from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class ControladorTarefaService {

  private listas: ListaTarefa[] = this.carregaListas();
  private listaAtual: number = 0;

  constructor() { }

  public salvaListas() {
    localStorage.setItem('tarefas', JSON.stringify(this.listas));
  }

  public carregaListas(): ListaTarefa[] {
    const listasSalvas = localStorage.getItem('tarefas');
    return listasSalvas 
      ? JSON.parse(listasSalvas)
      : this.criaLista('Lista 1');
  }

  public criaLista(nome: string): ListaTarefa {
    return {_id: Date.now(), _nome: nome, _tarefas: []};
  }

  public criaTarefa(descricao: string): Tarefa {
    return {_id: Date.now(), _descricao: descricao, _concluida: false};
  }

  public adicionaTarefa(descricao: string): void {
    const tarefa: Tarefa = {_id: Date.now(), _descricao: descricao, _concluida: false};
    this.listas[this.listaAtual]._tarefas.push(tarefa);
    this.salvaListas();
  }
}
