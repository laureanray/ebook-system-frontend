import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Chapter} from '../../../core/models/chapter';
import {Topic} from '../../../core/models/topic';
import {Book} from '../../../core/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookEditorService {
  private bookEditorState = new BehaviorSubject(false);
  private currentChapter = new BehaviorSubject(null);
  private currentTopic = new BehaviorSubject(null);
  private currentBook = new BehaviorSubject(null);

  isDetailsShown(state: boolean) {
    this.bookEditorState.next(state);
  }

  setCurrentChapter(id: number) {
    this.currentChapter.next(id);
  }

  getCurrentChapter(): Observable<number> {
    return this.currentChapter.asObservable();
  }

  setCurrentTopic(id: number) {
    this.currentTopic.next(id);
  }

  getCurrentTopic(): Observable<number> {
    return this.currentTopic.asObservable();
  }

  getDetailsShown(): Observable<boolean> {
    return this.bookEditorState.asObservable();
  }

  setCurrentBook(book: Book) {
    this.currentBook.next(book);
  }

  getCurrentBook(): Observable<Book> {
    return this.currentBook.asObservable();
  }

  constructor() {
  }
}
