import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Exam} from '../../../core/models/exam';

@Injectable({
  providedIn: 'root'
})
export class ExamEditorService {
  private currentExam = new BehaviorSubject(null);

  public setCurrentExam(exam: Exam) {
    this.currentExam.next(exam);
  }

  public getCurrentExam(): Observable<Exam> {
    return this.currentExam.asObservable();
  }

  constructor() {
  }
}
