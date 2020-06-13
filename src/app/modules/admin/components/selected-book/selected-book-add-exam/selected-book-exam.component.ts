import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BookEditorService} from '../../../services/book-editor.service';
import {ExamEditorService} from '../../../services/exam-editor.service';
import {ExamService} from '../../../../../core/services/exam.service';
import {Exam} from '../../../../../core/models/exam';
import {Chapter} from '../../../../../core/models/chapter';

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
  state = 'INITIAL';
  instructions: string;
  isEditing = false;
  chapter: Chapter;

  constructor(private examEditor: ExamEditorService, private exam: ExamService, private bookEditorService: BookEditorService) {
    this.bookEditorService.getCurrentChapter().subscribe((c: Chapter) => {
      console.log(c);
      this.chapter = c;
      this.isEditing = this.chapter.exam !== null;
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

