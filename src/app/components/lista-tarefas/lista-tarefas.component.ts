import { Component } from '@angular/core';
import { ControladorTarefaService } from '../../controller/controlador-tarefa.service';
import { ListaTarefa } from '../../model/lista-tarefa';
import { EntradaComponent } from '../entrada/entrada.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [EntradaComponent, FormsModule],
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent {

  public lista: ListaTarefa = {
    _id: 4,
    _nome: "Tarefas da escola",
    _tarefas: []
  }
  public descricao = "nova descricao da tarefa"

  constructor(private controlador: ControladorTarefaService) {
  }

  public adicionaTarefa() {
    this.descricao = '';
    this.controlador.adicionaTarefa(this.descricao);
  }

}
