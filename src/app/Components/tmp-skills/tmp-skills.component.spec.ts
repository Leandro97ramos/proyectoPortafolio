import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmpSkillsComponent } from './tmp-skills.component';

describe('TmpSkillsComponent', () => {
  let component: TmpSkillsComponent;
  let fixture: ComponentFixture<TmpSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmpSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmpSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
