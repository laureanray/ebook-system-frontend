import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../../core/models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.sass']
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
