import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Instructor} from '../models/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient) { }

  getInstructor(id: number) {
    return this.http.get(`${environment.apiUrl}/admin/${id}`);
  }

  getAllInstructors() {
    return this.http.get(`${environment.apiUrl}/instructor`);
  }

  getArchivedInstructors() {
    return this.http.get(`${environment.apiUrl}/instructor/archived`);
  }

  addInstructor(instructor: Instructor) {
    return this.http
      .post(`${environment.apiUrl}/instructor/add`, instructor);
  }

  updatePassword(newPassword: string, instructorId: string) {
    return this.http
      .post(`${environment.apiUrl}/instructor/update-id/${instructorId}`, {});
  }

  archive(instructorId: number) {
    return this.http
      .post(`${environment.apiUrl}/instructor/archive/${instructorId}}`, {});
  }
}
