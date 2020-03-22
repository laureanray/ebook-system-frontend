import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookEditorService {
  private bookEditorState = new Subject<boolean>();

  isDetailsShown(state: boolean) {
    this.bookEditorState.next(state);
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
