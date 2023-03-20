import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-adding-page',
  templateUrl: './todo-adding-page.component.html',
  styleUrls: ['./todo-adding-page.component.css'],
})
export class TodoAddingPageComponent {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private service:TodoService, private router:Router) {
    this.form = formBuilder.group({
      content: new FormControl('', [Validators.required]),
    });
  }
  save() {
    let todo: Todo = {
      isCompleted: false,
      content: this.form.get('content')?.value,
      created: new Date(),
    };

    console.log(JSON.stringify(todo));
    this.add(todo)
    alert("İçerik Eklendi");
    this.router.navigateByUrl('')
  }

  add(todo:Todo){
    this.service.add(todo).subscribe()
  }
}
