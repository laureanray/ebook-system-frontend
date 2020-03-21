import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ObservedValueOf} from 'rxjs';
import {User} from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StudentService} from './student.service';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Student} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;
  private httpOptions: { headers: HttpHeaders };
  public isLoggedIn: boolean;

  constructor(
    private http: HttpClient,
    private studentService: StudentService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  studentLogin(studentNumber: string, password: string) {
    return this.http
      .post(`${environment.apiUrl}/student/auth`, { uniqueIdentifier: studentNumber, password})
      .pipe(map(response => {
        console.log(response);
      }));
  }

  adminLogin(username: string, password: string) {
    return this.http
      .post(`${environment.apiUrl}/admin/auth`, { uniqueIdentifier: username, password})
      .pipe(map(response => {
        console.log(response);
      }));
  }

  instructorLogin(username: string, password: string) {
    return this.http
      .post(`${environment.apiUrl}/instructor/auth`, { uniqueIdentifier: username, password})
      .pipe(map(response => {
        console.log(response);
      }));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
}
