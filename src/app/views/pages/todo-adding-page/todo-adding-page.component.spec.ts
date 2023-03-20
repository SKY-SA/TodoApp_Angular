import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddingPageComponent } from './todo-adding-page.component';

describe('TodoAddingPageComponent', () => {
  let component: TodoAddingPageComponent;
  let fixture: ComponentFixture<TodoAddingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAddingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAddingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
