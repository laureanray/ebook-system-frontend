import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../../core/services/book.service';
import {Book} from '../../../../core/models/book';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Student} from '../../../../core/models/student';
import {tokenReference} from '@angular/compiler';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.sass']
})
export class BookLibraryComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService, private authService: AuthenticationService, private router: Router) {
    this.authService.currentUser.subscribe((student: Student) => {
      if (student.firstLogin) {
        this.router.navigate(['/student/set-password']);
      }
    });
  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }
}

