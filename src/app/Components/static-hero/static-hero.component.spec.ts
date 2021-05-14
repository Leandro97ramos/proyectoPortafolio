import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticHeroComponent } from './static-hero.component';

describe('StaticHeroComponent', () => {
  let component: StaticHeroComponent;
  let fixture: ComponentFixture<StaticHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
