import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../../../../../core/models/book';
import {Topic} from '../../../../../core/models/topic';
import {Chapter} from '../../../../../core/models/chapter';
import {BookEditorService} from '../../../services/book-editor.service';
import {Subscription} from 'rxjs';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import * as _ from 'lodash';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular';
import {BookService} from '../../../../../core/services/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-selected-book-editor',
  templateUrl: './selected-book-editor.component.html',
  styleUrls: ['./selected-book-editor.component.sass']
})
export class SelectedBookEditorComponent implements OnInit, OnDestroy {
  editingChapter: Chapter;
  editingTopic: Topic;
  public Editor = DecoupledEditor;
  topicSub: Subscription;
  chapterSub: Subscription;
  getBookSub: Subscription;
  htmlContent = '';
  status = '';

  bookId: number;

  isSaving = false;
  public model = {
    editorData: ''
  };

  constructor(private formBuilder: FormBuilder,
              private bookEditorService: BookEditorService,
              private bookService: BookService,
              private activatedRoute: ActivatedRoute
  ) {
    // this.chapterSub = this.bookEditorService.getCurrentChapter().subscribe((chapter: Chapter) => {
    //     //   this.editingChapter = chapter;
    //     //   console.log(chapter);
    //     // });
    //     //
    //     // this.topicSub = this.bookEditorService.getCurrentTopic().subscribe((topic: Topic) => {
    //     //   this.editingTopic = topic;
    //     //   this.model.editorData = topic.htmlContent;
    //     // });

    this.activatedRoute.params.subscribe(params => {
      this.bookId = params.id;
      // this.getBookSub = this.bookService.getBook(this.bookId).subscribe((book: Book) => {
      //   this.book = book;
      // });
    });
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void {
    this.topicSub.unsubscribe();
    this.chapterSub.unsubscribe();
  }

  onChange({editor}: ChangeEvent) {
    const data = editor.getData();
    // console.log(data);
  }

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  saveChanges() {
    this.isSaving = true;
    const topic = new Topic();
    topic.id = this.editingTopic.id;
    topic.htmlContent = this.model.editorData;
    this.bookService.updateTopic(topic).subscribe((t: Topic) => {
      console.log(t);
      this.isSaving = false;
    }, error => {
      this.isSaving = false;
    });
  }

}
