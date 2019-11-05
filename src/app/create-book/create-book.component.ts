import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  message: string;
 bookForm: FormGroup;
  constructor(private bookService: BookService, private fb: FormBuilder) {
  }

  ngOnInit() {this.bookForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(6)]],
    author: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  createBook(bookForm) {
    this.bookService.add(bookForm.value).subscribe(() => {
      this.message = 'successfully created';
    }, error => {
      this.message = 'Fail Created';
    });
  }
}
