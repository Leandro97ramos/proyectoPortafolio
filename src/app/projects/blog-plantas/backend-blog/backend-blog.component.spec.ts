import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendBlogComponent } from './backend-blog.component';

describe('BackendBlogComponent', () => {
  let component: BackendBlogComponent;
  let fixture: ComponentFixture<BackendBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
