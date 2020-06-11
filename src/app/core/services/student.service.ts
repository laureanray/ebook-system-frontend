import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Student} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {
  }

  addStudent(student: Student) {
    return this.http
      .post(`${environment.apiUrl}/student/add`, student);
  }

  getStudent(id: number) {
    return this.http
      .get(`${environment.apiUrl}/student/${id}`);
  }

  getAllStudents() {
    return this.http
      .get(`${environment.apiUrl}/student`);
  }

  updatePassword(newPassword: string, studentId: number) {
    return this.http
      .post(`${environment.apiUrl}/student/update-password`, {
        newPassword,
        studentId
      });
  }
}
