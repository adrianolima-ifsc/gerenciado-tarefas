import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadrComponent } from './header.component';

describe('HeadrComponent', () => {
  let component: HeadrComponent;
  let fixture: ComponentFixture<HeadrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
