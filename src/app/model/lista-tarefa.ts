import { Tarefa } from "./tarefa";

export interface ListaTarefa {
    _id: number;
    _nome: string;
    _tarefas: Tarefa[];
}
