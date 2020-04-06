import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../../../core/services/book.service';
import {BookEditorService} from '../../../services/book-editor.service';
import {Book} from '../../../../../core/models/book';
import {Course} from '../../../../../core/models/course';

@Component({
  selector: 'app-selected-book-details',
  templateUrl: './selected-book-details.component.html',
  styleUrls: ['./selected-book-details.component.sass']
})
export class SelectedBookDetailsComponent implements OnInit {
  book: Book;
  courses: Course[];
  newCourse: Course;

  addFieldValue() {
    console.log('add');

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

  constructor(private bookEditorService: BookEditorService) {  }

  ngOnInit(): void {
    this.bookEditorService.getCurrentBook().subscribe((book: Book) => {
      this.book = book;
      this.courses = this.book?.courses;

      if (this.courses != null) {
        for (const c of this.courses) {
          c.yearsString = '';
          let i = 0;
          for (const y of c.years) {
            if (i === (c.years.length - 1)) {
              c.yearsString += (y.yearLevel);
            } else {
              c.yearsString += (y.yearLevel + ',');
            }

            i++;
          }
        }
      }
    });
  }

}
