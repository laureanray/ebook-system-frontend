import { Component, OnInit } from '@angular/core';
import {Student} from '../../../../core/models/student';
import {StudentService} from '../../../../core/services/student.service';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {BookService} from '../../../../core/services/book.service';
import {Book} from '../../../../core/models/book';
import {Observable, Subscription} from 'rxjs';
import {Instructor} from '../../../../core/models/instructor';

export interface Subjects {
  bookTitle: string;
  professor: string;
}

const SubjectsData: Subjects[] = [
  {bookTitle: 'Basic C++ Programming', professor: 'Engr. Laurean Ray S. Bahala'},
  {bookTitle: 'Discrete Mathematics', professor: 'Dr. Laurean Ray S. Bahala'},

];

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.sass']
})
export class ViewProfileComponent implements OnInit {
  student: Student;
  books: Book[];
  bookSub: Subscription;
  displayedColumns = ['bookTitle', 'professor'];
  dataSource = SubjectsData;
  constructor(private authService: AuthenticationService, private bookService: BookService) {
    this.authService.currentUser.subscribe((student: Student) => {
      if (student) {
        this.student = student;
      }
    });
  }

  ngOnInit(): void {
    if (this.student) {
      this.bookSub = this.bookService.getAccessibleBooks(this.student.id).subscribe((books: Book[]) => {
        if (books) {
          this.books = books;
          for (const book of this.books) {
            this.bookService.getAssignedProf(this.student.id, book.id).subscribe((ins: Instructor) => {
              if (ins) {
                book.instructor  = `${ins.firstName} ${ins.lastName}`;
              }
            });
          }
        }
      });
    }
  }

}
