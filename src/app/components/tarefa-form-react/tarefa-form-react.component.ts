import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from "@angular/forms";
import { Tarefa } from "../../model/tarefa";

@Component({
  selector: 'app-tarefa-form-react',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './tarefa-form-react.component.html',
  styleUrl: './tarefa-form-react.component.css'
})
export class TarefaFormReactComponent implements OnInit {

  @Input() tarefa: Tarefa = { _id: 0, _descricao: 'teste', _concluida: false};
  @Output() private atualiza = new EventEmitter<Tarefa>();

  public tarefaForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tarefaForm = this.fb.group({
      _id: this.tarefa._id,
      _descricao: [this.tarefa._descricao, [Validators.required, Validators.minLength(3)]],
      _concluida: this.tarefa._concluida,
      _email: [this.tarefa._email, [Validators.required, Validators.email]]
    })
  }

  public atualizaTarefa() {
    console.log(this.tarefaForm.value);
    this.tarefa = this.tarefaForm.value;

    if (this.tarefaForm.valid) {
      this.atualiza.emit(this.tarefa);
    } else {
      alert('Formulário reativo inválido');
    }
  }
}
