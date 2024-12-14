import { CommonModule } from '@angular/common';
import {
    booleanAttribute,
    Component,
    EventEmitter,
    Input,
    numberAttribute,
    Output,
} from '@angular/core';
import { TarefaFormComponent } from '../tarefa-form/tarefa-form.component';
import { Tarefa } from '../../model/tarefa';

@Component({
    selector: 'app-tarefa',
    standalone: true,
    imports: [CommonModule, TarefaFormComponent],
    templateUrl: './tarefa.component.html',
    styleUrl: './tarefa.component.css',
})
export class TarefaComponent {
    @Input() tarefa: Tarefa = { _id: 0, _descricao: '', _concluida: false };
    @Output() exluir = new EventEmitter<number>();
    @Output() atualiza = new EventEmitter<Tarefa>();

    protected formVisivel: boolean = false;

    public excluirTarefa(id: number) {
        this.exluir.emit(id);
    }

    public mostraForm() {
        this.formVisivel = !this.formVisivel;
    }

    public atualizaTarefa(tarefa: Tarefa) {
        this.mostraForm();
        this.atualiza.emit(tarefa);
    }
}
