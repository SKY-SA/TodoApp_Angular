import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListingPageComponent } from './todo-listing-page.component';

describe('TodoListingPageComponent', () => {
  let component: TodoListingPageComponent;
  let fixture: ComponentFixture<TodoListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
