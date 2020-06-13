import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BookEditorService} from '../../../services/book-editor.service';
import {ExamEditorService} from '../../../services/exam-editor.service';
import {ExamService} from '../../../../../core/services/exam.service';
import {Exam} from '../../../../../core/models/exam';
import {Chapter} from '../../../../../core/models/chapter';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {Book} from '../../../../../core/models/book';
import {ExamItem} from '../../../../../core/models/exam-item';

@Component({
  selector: 'app-selected-book-add-exam',
  templateUrl: './selected-book-exam.component.html',
  styleUrls: ['./selected-book-exam.component.sass'],
  encapsulation: ViewEncapsulation.None

})
export class SelectedBookExamComponent implements OnInit {
  isAdding = false;
  isDisabled = false;
  identification = true;
  nextDisabled = true;
  instructions: string;
  // isEditing = false;
  exam: Exam;
  examItems: ExamItem[];
  chapter: Chapter;

  constructor(private examEditor: ExamEditorService,
              private examService: ExamService,
              private bookEditorService: BookEditorService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (!_.isEmpty(params)) {
        // tslint:disable-next-line:radix
        const chapterId = parseInt(params.chapter);
        this.bookEditorService.getCurrentBook().subscribe((book: Book) => {
            if (book != null) {
              book.chapters.forEach((c: Chapter) => {
                if (c.id === chapterId) {
                  this.chapter = c;
                }
              });
            }
        });
      }
    });

    this.examEditor.getCurrentExam().subscribe((ex: Exam) => {
      console.log(ex);
    });

    this.exam = new Exam();
  }

  addItem() {
    this.isAdding = true;
    this.isDisabled = true;
  }
  ngOnInit(): void {
    // this.bookEditorService.setCurrentChapterAndTopic(null, null);
  }


  keyup() {
    this.nextDisabled = !this.instructions.length;
  }

  update() {
    this.exam.instructions = this.instructions;
    this.examEditor.updateCurrentExam(this.exam);
  }
}

