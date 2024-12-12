import { Component, OnInit } from '@angular/core';
import { ControladorTarefaService } from '../../controller/controlador-tarefa.service';
import { ListaTarefa } from '../../model/lista-tarefa';
import { EntradaComponent } from '../entrada/entrada.component';
import { FormsModule } from '@angular/forms';
import { TarefaComponent } from "../tarefa/tarefa.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [EntradaComponent, FormsModule, TarefaComponent, CommonModule],
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent {

  public descricao = "nova descricao da tarefa"
  public lista: ListaTarefa

  constructor(private controlador: ControladorTarefaService) {
    this.lista = this.controlador.listaAtual
  }

  public adicionaTarefa() {
    this.controlador.adicionaTarefa(this.descricao);
    this.descricao = '';
  }

  public excluirTarefa(id: number) {
    this.controlador.excluiTarefa(id);
  }

}
