import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Book} from '../../../core/models/book';

@Injectable({
  providedIn: 'root'
})
export class CurrentBookService {
  private currentBook = new BehaviorSubject<Book>(null);

  getCurrentBook(): Observable<Book> {
    return this.currentBook.asObservable();
  }

  setCurrentBook(book: Book) {
    this.currentBook.next(book);
  }

  constructor() { }
}
