import { TestBed } from '@angular/core/testing';

import { ControladorTarefaService } from './controlador-tarefa.service';

describe('ControladorTarefaService', () => {
  let service: ControladorTarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControladorTarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
