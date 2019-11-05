import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './list-books/list-books.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateBookComponent } from './create-book/create-book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    CreateBookComponent,
    EditBookComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
