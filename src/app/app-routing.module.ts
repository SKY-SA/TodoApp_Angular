import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddingPageComponent } from './views/pages/todo-adding-page/todo-adding-page.component';
import { TodoListingPageComponent } from './views/pages/todo-listing-page/todo-listing-page.component';
import { UserLayoutPageComponent } from './views/pages/user-layout-page/user-layout-page.component';

const routes: Routes = [
  {path:'', component:UserLayoutPageComponent, children:[
    {path:'', component:TodoListingPageComponent},
    {path:'adding', component:TodoAddingPageComponent},
    {path:'adding/:id', component:TodoAddingPageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
