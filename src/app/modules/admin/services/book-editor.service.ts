import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Chapter} from '../../../core/models/chapter';
import {Topic} from '../../../core/models/topic';
import {Book} from '../../../core/models/book';
import {EditorState} from '../../../core/models/editor-state';

@Injectable({
  providedIn: 'root'
})
export class BookEditorService {
  private currentChapterAndTopic = new BehaviorSubject(null);
  private currentBook = new BehaviorSubject(null);
  private currentChapter = new BehaviorSubject(null);

  setCurrentChapterAndTopic(chapterId: number, topicId: number) {
    const state = new EditorState();
    state.chapterId = chapterId;
    state.topicId = topicId;
    this.currentChapterAndTopic.next(state);
  }

  setCurrentChapter(chapter: Chapter) {
    this.currentChapter.next(chapter);
  }

  getCurrentChapter(): Observable<Chapter> {
    return this.currentChapter.asObservable();
  }

  getCurrentChapterAndTopic(): Observable<EditorState> {
    return this.currentChapterAndTopic.asObservable();
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
