import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaFormReactComponent } from './tarefa-form-react.component';

describe('TarefaFormReactComponent', () => {
  let component: TarefaFormReactComponent;
  let fixture: ComponentFixture<TarefaFormReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaFormReactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaFormReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
