import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BookEditorService} from '../../../services/book-editor.service';

@Component({
  selector: 'app-selected-book-add-exam',
  templateUrl: './selected-book-add-exam.component.html',
  styleUrls: ['./selected-book-add-exam.component.sass'],
  encapsulation: ViewEncapsulation.None

})
export class SelectedBookAddExamComponent implements OnInit {

  isAdding = false;
  addItem() {
    this.isAdding = true;
  }
  ngOnInit(): void {
    // this.bookEditorService.setCurrentChapterAndTopic(null, null);
  }

}

