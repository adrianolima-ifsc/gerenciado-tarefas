import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {

  @Input({ transform: numberAttribute }) id: number = 0;
  @Input() descricao: string = "";
  @Input({ transform: booleanAttribute }) concluida: boolean = false;

}
