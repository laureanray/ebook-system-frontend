import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {BookEditorService} from '../../../services/book-editor.service';
import {ExamEditorService} from '../../../services/exam-editor.service';
import {ExamService} from '../../../../../core/services/exam.service';
import {Exam} from '../../../../../core/models/exam';
import {Chapter} from '../../../../../core/models/chapter';
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from 'lodash';
import {Book} from '../../../../../core/models/book';
import {ExamItem} from '../../../../../core/models/exam-item';
import {Subscription} from 'rxjs';
import {BookService} from '../../../../../core/services/book.service';

@Component({
  selector: 'app-selected-book-add-exam',
  templateUrl: './selected-book-exam.component.html',
  styleUrls: ['./selected-book-exam.component.sass'],
  encapsulation: ViewEncapsulation.None

})
export class SelectedBookExamComponent implements OnInit, OnDestroy {
  isAdding = false;
  isDisabled = false;
  identification = true;
  nextDisabled = true;
  instructions: string;
  // isEditing = false;
  exam: Exam;
  examItems: ExamItem[];
  chapter: Chapter;
  examItemsCount = [];
  querySub: Subscription;
  bookSub: Subscription;
  examEditorSub: Subscription;
  isSaveDisabled = true;
  isSaving = false;
  book: Book;
  constructor(private examEditor: ExamEditorService,
              private examService: ExamService,
              private bookEditorService: BookEditorService,
              private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.querySub = this.activatedRoute.queryParams.subscribe(params => {
      if (!_.isEmpty(params)) {
        // tslint:disable-next-line:radix
        const chapterId = parseInt(params.chapter);
        this.bookSub = this.bookEditorService.getCurrentBook().subscribe((book: Book) => {
            if (book != null) {
              this.book = book;
              book.chapters.forEach((c: Chapter) => {
                if (c.id === chapterId) {
                  this.chapter = c;
                }
              });
            }
        });
      }
    });

    this.examEditorSub = this.examEditor.getCurrentExam().subscribe((ex: Exam) => {
      if (ex !== null) {
        // console.clear();
        // console.table(ex?.examItems);
        // ex.examItems?.forEach((i: ExamItem) => {
        //   console.table(i.choices);
        // });
        this.isSaveDisabled = !this.validate(ex);
      }
    });

    this.exam = new Exam();
  }

  addItem() {
    // this.isAdding = true;
    // this.isDisabled = true;t
    const examItem = new ExamItem();
    if (this.exam.examItems == null) {
      this.exam.examItems = [];
      examItem.num = 1;
      this.exam.examItems.push(examItem);
    } else {
      examItem.num = this.exam.examItems.length + 1;
      this.exam.examItems.push(examItem);
    }

    this.update();
  }
  ngOnInit(): void {
    // this.bookEditorService.setCurrentChapterAndTopic(null, null);
  }

  save() {
    this.isSaving = true;
    this.examService.createExam(this.exam, this.chapter.id).subscribe((exam: Exam) => {
      if (exam) {
        alert('Added Exam!');
        this.isSaving = false;
        this.bookService.getBook(this.book.id).subscribe((book: Book) => {
          if (book) {
            this.bookEditorService.setCurrentBook(book);
            this.router.navigate([`/admin/book/${this.book.id}/details`]);
          }
        });
      }
    }, error => {
      alert('Error: ' + error);
      this.isSaving = false;
    });
  }

  keyup() {
    this.nextDisabled = !this.instructions.length;
  }

  update() {
    this.exam.instructions = this.instructions;
    this.examEditor.updateCurrentExam(this.exam);
  }

  ngOnDestroy(): void {
    this.querySub.unsubscribe();
    this.bookSub.unsubscribe();
    this.examEditorSub.unsubscribe();
  }


  validate(exam: Exam) {
    // if (!exam.examItems && exam.examItems.length <= 0) {
    //   return false;
    // }
    //
    // exam.examItems?.forEach((item: ExamItem) => {
    //   console.log(item);
    //   if (!item) {
    //     return false;
    //   }
    // });

    return true;
  }

}

