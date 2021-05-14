import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudListarProyectoComponent } from './crud-listar-proyecto.component';

describe('CrudListarProyectoComponent', () => {
  let component: CrudListarProyectoComponent;
  let fixture: ComponentFixture<CrudListarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudListarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudListarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
