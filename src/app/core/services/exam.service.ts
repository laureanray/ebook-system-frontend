import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Exam} from '../models/exam';
import {ExamItem} from '../models/exam-item';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient) { }

  createExam(exam: Exam, chapterId: number) {
    return this.http.post(`${environment.apiUrl}/exam/add/${chapterId}`, exam);
  }

  addExamItem(examItem: ExamItem, examId: number) {
    return this.http.post(`${environment.apiUrl}/exam/add/${examId}`, examItem);
  }

  deleteExam(examId: number) {
    return this.http.post(`${environment.apiUrl}/exam/delete/${examId}`, {});
  }

}
