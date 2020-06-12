import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BookEditorService} from '../../../services/book-editor.service';
import {ExamEditorService} from '../../../services/exam-editor.service';

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
  saveDisabled = true;

  constructor(private examEditor: ExamEditorService) {
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
}

