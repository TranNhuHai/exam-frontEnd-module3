import {Component, OnInit} from '@angular/core';
import {Book} from '../Book';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  message: string;
  book: Book;

  constructor(private bookService: BookService, private routes: ActivatedRoute) {
  }

  ngOnInit() {
    this.routes.paramMap.subscribe((param: ParamMap) => {
      const id = parseInt(param.get('id'), 10);
      this.bookService.getDetail(id).subscribe(next => {
        this.book = next;
        this.message = 'show book detail successful';
      }, error => {
        this.message = 'can not retrieve book detail. ' + error;
      });
    });
  }
  editBook(bookForm) {
    this.bookService.edit(this.book.id, bookForm.value).subscribe(next => {
      this.message = 'update successful';
    }, error => {
      this.message = 'update fail!';
    });
  }
}
