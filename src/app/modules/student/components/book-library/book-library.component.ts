import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookService} from '../../../../core/services/book.service';
import {Book} from '../../../../core/models/book';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Student} from '../../../../core/models/student';
import {tokenReference} from '@angular/compiler';
import {Instructor} from '../../../../core/models/instructor';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.sass']
})
export class BookLibraryComponent implements OnInit, OnDestroy {
  books: Book[];
  student: Student;
  bookSub: Subscription;

  constructor(private bookService: BookService, private authService: AuthenticationService, private router: Router) {
    this.authService.currentUser.subscribe((student: Student) => {
      if (student) {
        this.student = student;
      }
      if (student.firstLogin) {
        this.router.navigate(['/student/set-password']);
      }
    });
  }

  ngOnInit(): void {
    this.bookSub = this.bookService.getAccessibleBooks(this.student.id).subscribe((books: Book[]) => {
      if (books) {
        this.books = books;
        for (const book of this.books) {
          this.bookService.getAssignedProf(this.student.id, book.id).subscribe((ins: Instructor) => {
            if (ins) {
              book.instructor = `${ins.firstName} ${ins.lastName}`;
            }
          });
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.bookSub.unsubscribe();
  }
}
