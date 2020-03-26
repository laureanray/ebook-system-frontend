import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Chapter} from '../../../core/models/chapter';
import {Topic} from '../../../core/models/topic';

@Injectable({
  providedIn: 'root'
})
export class BookEditorService {
  private bookEditorState = new BehaviorSubject(false);
  private currentChapter = new BehaviorSubject(null);
  private currentTopic = new BehaviorSubject(null);

  isDetailsShown(state: boolean) {
    this.bookEditorState.next(state);
  }

  setCurrentChapter(chapter: Chapter) {
    this.currentChapter.next(chapter);
  }

  getCurrentChapter(): Observable<Chapter> {
    return this.currentChapter.asObservable();
  }

  setCurrentTopic(topic: Topic) {
    this.currentTopic.next(topic);
  }

  getCurrentTopic(): Observable<Topic> {
    return this.currentTopic.asObservable();
  }

  getDetailsShown(): Observable<boolean> {
    return this.bookEditorState.asObservable();
  }

  initialize() {
    this.bookEditorState.next(false);
  }

  constructor() {
    // this.currentTopic.next(null);
    // this.currentChapter.next(null);
  }
}
