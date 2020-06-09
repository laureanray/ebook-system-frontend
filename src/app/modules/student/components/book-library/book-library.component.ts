import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../../core/services/book.service';
import {Book} from '../../../../core/models/book';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.sass']
})
export class BookLibraryComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

}
