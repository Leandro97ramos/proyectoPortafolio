import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppClimaComponent } from './app-clima.component';

describe('AppClimaComponent', () => {
  let component: AppClimaComponent;
  let fixture: ComponentFixture<AppClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
