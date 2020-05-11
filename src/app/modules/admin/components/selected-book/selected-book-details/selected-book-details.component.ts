import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../../../core/services/book.service';
import {BookEditorService} from '../../../services/book-editor.service';
import {Book} from '../../../../../core/models/book';
import {Course} from '../../../../../core/models/course';
import {environment} from '../../../../../../environments/environment';
import {faMinusCircle, faTrash} from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import {RemoveAccessModalComponent} from './remove-access-modal/remove-access-modal.component';

@Component({
  selector: 'app-selected-book-details',
  templateUrl: './selected-book-details.component.html',
  styleUrls: ['./selected-book-details.component.sass']
})
export class SelectedBookDetailsComponent implements OnInit {
  book: Book;
  courses: Course[];
  newCourse: Course;
  accessibleToAll = false;
  bookCoverURLParsed: any;
  faTrash = faTrash;
  faMinus = faMinusCircle;
  isEditingAccess = false;
  coursesCopy: Course[];

  addFieldValue() {
    this.courses.push(this.newCourse);
    this.newCourse = null;

    function updateScroll() {
      const element = document.getElementById('add-section-container');
      element.scrollTop = element.scrollHeight;
    }
    setInterval(updateScroll, 1);
  }

  deleteFieldValue(index) {
    this.courses.splice(index, 1);
  }

  constructor(private bookEditorService: BookEditorService,
              private dialog: MatDialog) {  }

  ngOnInit(): void {
    this.bookEditorService.getCurrentBook().subscribe((book: Book) => {
      this.book = book;
      this.courses = this.book?.courses;
      if (this.courses != null) {
        this.coursesCopy = this.courses;
        for (const c of this.courses) {
          c.yearsString = '';
          let i = 0;
          for (const y of c.years) {
            if (i === (c.years.length - 1)) {
              c.yearsString += (' and ' +  y.yearLevel + ' year');
            } else {
              c.yearsString += (y.yearLevel + ', ');
            }

            i++;
          }
        }
      }

      if (!this.book || !this.book?.bookCoverURL) {
        // TODO: replace this with proper placeholder
        this.bookCoverURLParsed = '/assets/cover.png';
      } else {
        this.bookCoverURLParsed = `${environment.apiRoot}/${this.book.bookCoverURL}`;
      }
    });
  }

  edit() {
    this.isEditingAccess = true;
  }

  done() {
    this.isEditingAccess = false;

    // update the actual access
  }

  removeAccess(courseId: number) {
    this.dialog.open(RemoveAccessModalComponent, {
      width: '250px',
      data: {
        courseId,
        bookId: this.book.id
      }
    });
  }
}
