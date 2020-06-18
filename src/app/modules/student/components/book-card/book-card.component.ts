import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../../core/models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.sass']
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  public bookCoverURLParsed = '';
  constructor() {
    if (!this.book?.bookCoverURL) {
      this.bookCoverURLParsed = '/assets/cover.png';
    }
  }

  ngOnInit(): void {
  }

  bookClicked() {

  }
}
