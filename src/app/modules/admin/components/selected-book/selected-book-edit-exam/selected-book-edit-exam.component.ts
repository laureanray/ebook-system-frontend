import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ExamService} from '../../../../../core/services/exam.service';
import {Exam} from '../../../../../core/models/exam';
import {Book} from '../../../../../core/models/book';
import {BookService} from '../../../../../core/services/book.service';
import {BookEditorService} from '../../../services/book-editor.service';

@Component({
  selector: 'app-selected-book-edit-exam',
  templateUrl: './selected-book-edit-exam.component.html',
  styleUrls: ['./selected-book-edit-exam.component.sass']
})
export class SelectedBookEditExamComponent implements OnInit {
  examId: number;
  bookId: number;
  constructor(private activatedRoute: ActivatedRoute,
              private examService: ExamService,
              private bookService: BookService,
              private bookEditorService: BookEditorService,
              private router: Router) {
      console.log('edit exam');
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      // tslint:disable-next-line:radix
      this.examId = parseInt(params.exam);
      // tslint:disable-next-line:radix
      this.bookId = parseInt(params.book);
      console.log(this.examId);
      console.log(params);
    });
  }

  delete() {
    this.examService.deleteExam(this.examId).subscribe((exam: Exam) => {
      this.bookService.getBook(this.bookId).subscribe((book: Book) => {
        if (book) {
          this.bookEditorService.setCurrentBook(book);
          // this.isDeleting = false;
          this.router.navigate([`/admin/book/${this.bookId}/details`]);
        }
      });
    });
  }
}
