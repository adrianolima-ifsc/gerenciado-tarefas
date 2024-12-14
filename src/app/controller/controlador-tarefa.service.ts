import { Injectable } from '@angular/core';
import { ListaTarefa } from '../model/lista-tarefa';
import { Tarefa } from '../model/tarefa';

@Injectable({
    providedIn: 'root',
})
export class ControladorTarefaService {
    private listas: ListaTarefa[] = this.carregaListas();
    private _listaAtual: number = 0;

    constructor() {}

    public get listaAtual(): ListaTarefa {
        return this.listas[this._listaAtual];
    }

    public salvaListas() {
        localStorage.setItem('tarefas', JSON.stringify(this.listas));
    }

    public carregaListas(): ListaTarefa[] {
        const listasSalvas = localStorage.getItem('tarefas');
        return listasSalvas
            ? JSON.parse(listasSalvas)
            : [this.criaLista('Lista 1')];
    }

    public criaLista(nome: string): ListaTarefa {
        return { _id: Date.now(), _nome: nome, _tarefas: [] };
    }

    public criaTarefa(descricao: string): Tarefa {
        return { _id: Date.now(), _descricao: descricao, _concluida: false };
    }

    public adicionaTarefa(descricao: string): void {
        const tarefa: Tarefa = {
            _id: Date.now(),
            _descricao: descricao,
            _concluida: false,
        };
        this.listas[this._listaAtual]._tarefas.push(tarefa);
        this.salvaListas();
    }

    public excluiTarefa(id: number): void {
        const tarefas = this.listas[this._listaAtual]._tarefas.filter(
            (tarefa) => tarefa._id !== id
        );
        this.listas[this._listaAtual]._tarefas = tarefas;
        this.salvaListas();
    }

    public atualizaTarefa(tarefa: Tarefa): void {
        const tarefas = this.listas[this._listaAtual]._tarefas;
        const index = tarefas.findIndex( t => t._id === tarefa._id);
        if (index >= 0) {
            tarefas[index] = tarefa;
        } else {
            alert('Tarefa não encontrada');
        }
        this.salvaListas();
    }
}
