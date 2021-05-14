import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaSecundarioComponent } from './clima-secundario.component';

describe('ClimaSecundarioComponent', () => {
  let component: ClimaSecundarioComponent;
  let fixture: ComponentFixture<ClimaSecundarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaSecundarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
