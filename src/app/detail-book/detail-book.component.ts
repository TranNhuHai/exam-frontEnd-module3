import {Component, OnInit} from '@angular/core';
import {Book} from '../Book';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
  message: string;
  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const id = parseInt(param.get('id'), 10);
      this.bookService.getDetail(id).subscribe(next => {
        this.book = next;
      }, error => {
        this.message = 'Cannot retrieve customer detail. Reason: ' + error;
      });
    });
  }
}

