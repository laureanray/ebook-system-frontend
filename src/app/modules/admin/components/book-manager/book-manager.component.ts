import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {BookService} from '../../../../core/services/book.service';
import {Book} from '../../../../core/models/book';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.sass']
})
export class BookManagerComponent implements OnInit {
  books: Book[]
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((books: Book[]) => {
      console.log(books);
      this.books = books;
    });
  }
}
