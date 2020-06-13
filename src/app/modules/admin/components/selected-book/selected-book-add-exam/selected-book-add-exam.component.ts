import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BookEditorService} from '../../../services/book-editor.service';
import {ExamEditorService} from '../../../services/exam-editor.service';
import {ExamService} from '../../../../../core/services/exam.service';
import {Exam} from '../../../../../core/models/exam';
import {Chapter} from '../../../../../core/models/chapter';

@Component({
  selector: 'app-selected-book-add-exam',
  templateUrl: './selected-book-add-exam.component.html',
  styleUrls: ['./selected-book-add-exam.component.sass'],
  encapsulation: ViewEncapsulation.None

})
export class SelectedBookAddExamComponent implements OnInit {

  isAdding = false;
  isDisabled = false;
  identification = true;
  nextDisabled = true;
  state = 'INITIAL';
  instructions: string;
  chapter: Chapter;

  constructor(private examEditor: ExamEditorService, private exam: ExamService, private bookEditorService: BookEditorService) {
    this.bookEditorService.getCurrentChapter().subscribe((c: Chapter) => {
      console.log(c);
      this.chapter = c;
    });
  }

  addItem() {
    this.isAdding = true;
    this.isDisabled = true;
  }
  ngOnInit(): void {
    // this.bookEditorService.setCurrentChapterAndTopic(null, null);
  }
  toggle(bool: boolean) {
    this.identification = bool;
  }

  keyup() {
    this.nextDisabled = !this.instructions.length;
  }

  next() {
    this.state = 'ADD_ITEM';
    const exam = new Exam();
    exam.instructions = this.instructions;

    this.exam.createExam(exam, this.chapter.id).subscribe((e: Exam) => {
      console.log(e);
      this.examEditor.setCurrentExam(e);
    }, error => {
      console.log(error);
    });
  }
}

