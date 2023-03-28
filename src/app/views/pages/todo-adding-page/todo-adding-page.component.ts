import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-adding-page',
  templateUrl: './todo-adding-page.component.html',
  styleUrls: ['./todo-adding-page.component.css'],
})
export class TodoAddingPageComponent {
  id: number | undefined;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((data) => {
      if (data.get('id')) {
        this.id = Number(data.get('id'));
        this.service.getById(this.id).subscribe((data) => {
          this.form.get('content')?.setValue(data.content);
          console.log(document.getElementById('btn'));
        });
      }
    });

    this.form = formBuilder.group({
      content: new FormControl('', [Validators.required]),
    });
  }

  save() {
    if (!this.id) {
      let todo: Todo = {
        isCompleted: false,
        content: this.form.get('content')?.value,
        created: new Date(),
      };

      // console.log(JSON.stringify(todo));
      this.add(todo);
      alert('İçerik Eklendi');
    } else {
      let todoToUpadate: Todo = {
        id: this.id,
        isCompleted: false,
        content: this.form.get('content')?.value,
        created: new Date(),
      };
      this.update(this.id, todoToUpadate);
      alert('İçerik Güncellendi');
    }
    this.router.navigateByUrl('');
  }
  update(id: number, todoToUpdate: Todo) {
    this.service.update(id, todoToUpdate).subscribe();
  }
  add(todo: Todo) {
    this.service.add(todo).subscribe();
  }

  isUpdate(): string {
    if (this.id) return 'Güncelle';
    return 'Ekle';
  }
}
