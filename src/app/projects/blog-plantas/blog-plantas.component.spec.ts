import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPlantasComponent } from './blog-plantas.component';

describe('BlogPlantasComponent', () => {
  let component: BlogPlantasComponent;
  let fixture: ComponentFixture<BlogPlantasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPlantasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
