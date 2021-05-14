import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistentesFrioComponent } from './resistentes-frio.component';

describe('ResistentesFrioComponent', () => {
  let component: ResistentesFrioComponent;
  let fixture: ComponentFixture<ResistentesFrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResistentesFrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistentesFrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
