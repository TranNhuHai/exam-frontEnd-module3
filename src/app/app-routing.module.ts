import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBooksComponent} from './list-books/list-books.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {DetailBookComponent} from './detail-book/detail-book.component';


const routes: Routes = [
  {path: 'listBook', component: ListBooksComponent},
  {path: 'createBook', component: CreateBookComponent},
  {path: 'edit/:id', component: EditBookComponent},
  {path: 'detail/:id', component: DetailBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
