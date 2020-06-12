import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Exam} from '../models/exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {



  constructor(private http: HttpClient) { }

  createExam(exam: Exam) {
    return this.http.post(`${environment.apiUrl}/book/topic/add`, exam);
  }


}
