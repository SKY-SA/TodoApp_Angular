import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLayoutPageComponent } from './views/pages/user-layout-page/user-layout-page.component';
import { TodoListingPageComponent } from './views/pages/todo-listing-page/todo-listing-page.component';
import { TodoAddingPageComponent } from './views/pages/todo-adding-page/todo-adding-page.component';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    UserLayoutPageComponent,
    TodoListingPageComponent,
    TodoAddingPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
