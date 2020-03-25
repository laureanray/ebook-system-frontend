import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Chapter} from '../../../core/models/chapter';
import {Topic} from '../../../core/models/topic';

@Injectable({
  providedIn: 'root'
})
export class BookEditorService {
  private bookEditorState = new Subject<boolean>();
  private currentChapter = new Subject<Chapter>();
  private currentTopic = new Subject<Topic>();

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
  }
}
