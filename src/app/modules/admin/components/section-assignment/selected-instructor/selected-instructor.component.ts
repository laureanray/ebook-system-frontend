import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Instructor} from '../../../../../core/models/instructor';
import {InstructorService} from '../../../../../core/services/instructor.service';
import {Assignment} from '../../../../../core/models/assignment';
import {Book} from '../../../../../core/models/book';
import {BookService} from '../../../../../core/services/book.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-selected-instructor',
  templateUrl: './selected-instructor.component.html',
  styleUrls: ['./selected-instructor.component.sass']
})
export class SelectedInstructorComponent implements OnInit {
  @Input() instructor: Instructor;
  @Output() needsUpdate = new EventEmitter<boolean>();
  isAddDisabled = true;
  isAdding = false;
  course: string;
  year: string;
  section: string;
  bookId: number;
  books: Observable<any>;
  constructor(private instructorService: InstructorService, private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
  }

  update() {
    this.isAddDisabled = !(this.course && this.year && this.section);
  }

  // tslint:disable-next-line:variable-name
  remove(id: number, i_id: number) {
    this.instructorService.removeAssignment(id, i_id).subscribe(res => {
      if (res) {
        alert('Assignment Removed!');
        // update
        this.needsUpdate.emit(true);
      }
    });
  }

  add() {
    this.isAdding = true;
    const ass = new Assignment();
    ass.course = this.course;
    ass.year = this.year;
    ass.section = this.section;
    ass.bookId = this.bookId;
    this.instructorService.addAssignment(ass, this.instructor.id).subscribe((ins: Instructor) => {
        if (ins) {
          this.needsUpdate.emit(true);
          setTimeout(() => {
            this.isAdding = false;
            this.isAddDisabled = true;
            this.clear();
          }, 500);
        }
    }, error => {
      alert('The section is already assigned.');
      this.isAdding = false;
      this.isAddDisabled = true;
      this.clear();
    });
  }

  clear() {
    this.bookId = undefined;
    this.course = '';
    this.year = '';
    this.section = '';
  }
}
