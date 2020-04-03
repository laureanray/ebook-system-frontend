import { Component, OnInit } from '@angular/core';
import {BookEditorService} from '../../../services/book-editor.service';

@Component({
  selector: 'app-selected-book-add-exam',
  templateUrl: './selected-book-add-exam.component.html',
  styleUrls: ['./selected-book-add-exam.component.sass']
})
export class SelectedBookAddExamComponent implements OnInit {

  constructor(private bookEditorService: BookEditorService) { }

  ngOnInit(): void {
    // this.bookEditorService.setCurrentChapterAndTopic(null, null);
  }

}
