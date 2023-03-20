import { Component } from '@angular/core';
import { ResponseModel } from 'src/app/models/responseModel';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo-listing-page',
  templateUrl: './todo-listing-page.component.html',
  styleUrls: ['./todo-listing-page.component.css'],
})
export class TodoListingPageComponent {
  responseModel: ResponseModel | undefined;
  todos: Todo[] = [
    //   { id: 1, content: 'deneme 1 ', created: new Date(), isCompleted: false },
    //   { id: 2, content: 'deneme 2 ', created: new Date(), isCompleted: true },
    //   { id: 3, content: 'deneme 3 ', created: new Date(), isCompleted: false },
  ];
  constructor(private service: TodoService) {}

  ngOnInit() {
    this.getAll();
  }

  delete(id: number | undefined) {
    // let index = this.todos.findIndex((i) => i.id == id);
    // delete this.todos[index];
    this.todos.forEach((item, index) => {
      if (item.id == id) {
        // delete this.todos[index];
        this.todos.splice(index, 1);
      }
    });
    this.service.delete(id!).subscribe()
  }
  getComplete(id:number){
    this.service.getComplete(id).subscribe()
  }
  getAll() {
    this.service.getAll().subscribe({
      next: (value) => {
        this.todos = value;
      },
      error: (err) => {
        console.log(`Hata Meydana geldi : ${err}`);
      },
      complete: () => {
        console.log('İşlem Tamamlandı');
      },
    });
  }
}
