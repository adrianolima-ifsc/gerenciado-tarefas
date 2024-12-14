import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Tarefa } from '../../model/tarefa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefa-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tarefa-form.component.html',
  styleUrl: './tarefa-form.component.css'
})
export class TarefaFormComponent {

  @Input() tarefa: Tarefa = { _id: 0, _descricao: '', _concluida: true};
  @Output() private atualiza = new EventEmitter<Tarefa>();

  public atualizaTarefa(form: NgForm) {
    console.log(form.valid);

    if (form.valid) {
      console.log('Formulário válido');
      this.atualiza.emit(this.tarefa);
    } else {
      alert('Formulário inválido!');
    }
  }

}
