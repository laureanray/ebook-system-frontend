import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient) { }

  getInstructor(id: number) {
    return this.http.get(`${environment.apiUrl}/admin/${id}`);
  }
}
