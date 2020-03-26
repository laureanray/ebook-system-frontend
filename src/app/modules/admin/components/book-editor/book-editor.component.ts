import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../../../../core/models/book';
import {Topic} from '../../../../core/models/topic';
import {Chapter} from '../../../../core/models/chapter';
import {BookEditorService} from '../../services/book-editor.service';
import {Subscription} from 'rxjs';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

import {ChangeEvent} from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.sass']
})
export class BookEditorComponent implements OnInit, OnDestroy {
  editingChapter: Chapter;
  editingTopic: Topic;
  public Editor = DecoupledEditor;
  topicSub: Subscription;
  chapterSub: Subscription;
  htmlContent = '';
  status = '';
  public model = {
    editorData: ''
  };

  constructor(private formBuilder: FormBuilder,
              private bookEditorService: BookEditorService
  ) {
    this.chapterSub = this.bookEditorService.getCurrentChapter().subscribe((chapter: Chapter) => {
      this.editingChapter = chapter;
      console.log(chapter);
    });

    this.topicSub = this.bookEditorService.getCurrentTopic().subscribe((topic: Topic) => {
      this.editingTopic = topic;
      this.model.editorData = topic.htmlContent;
    });
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void {
    this.topicSub.unsubscribe();
    this.chapterSub.unsubscribe();
  }

  onChange({editor}: ChangeEvent) {
    const data = editor.getData();
    console.log(data);
  }

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }
}
