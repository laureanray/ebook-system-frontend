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
import {ActivatedRoute, Router} from '@angular/router';
import {EditorState} from '../../../../../core/models/editor-state';
import * as moment from 'moment';

@Component({
  selector: 'app-selected-book-editor',
  templateUrl: './selected-book-editor.component.html',
  styleUrls: ['./selected-book-editor.component.sass']
})
export class SelectedBookEditorComponent implements OnInit, OnDestroy {
  // WYSIWYG editor
  public Editor = DecoupledEditor;

  editingChapter: Chapter;
  editingTopic: Topic;
  getBookSub: Subscription;
  chapterAndTopicSub: Subscription;
  book: Book;
  lastSaved: string;
  // Initial Variable
  isSaving = false;
  isDeleting = false;

  status = '';
  public model = {
    editorData: ''
  };

  loading = true;

  constructor(private formBuilder: FormBuilder,
              private bookEditorService: BookEditorService,
              private bookService: BookService,
              private router: Router
  ) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.chapterAndTopicSub = this.bookEditorService.getCurrentChapterAndTopic().subscribe((editorState: EditorState) => {
      this.getBookSub = this.bookEditorService.getCurrentBook().subscribe(book => {
        console.log(editorState);
        this.book = book;
        this.editingChapter = _.find(this.book.chapters, c => c.id === editorState.chapterId);
        this.editingTopic = _.find(this.editingChapter.topics, t => t.id === editorState.topicId);
        this.model.editorData = this.editingTopic.htmlContent ? this.editingTopic.htmlContent : '';
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
    });
  }

  ngOnDestroy(): void {
    this.chapterAndTopicSub.unsubscribe();
    this.getBookSub.unsubscribe();
  }

  onChange({editor}: ChangeEvent) {
    const data = editor.getData();
  }

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  saveChanges() {
    this.isSaving = true;
    setTimeout(() => {
      const topic = new Topic();
      topic.id = this.editingTopic.id;
      topic.htmlContent = this.model.editorData;
      this.bookService.updateTopic(topic).subscribe((t: Topic) => {
        this.isSaving = false;
        this.lastSaved = t.lastUpdated;
        const time = moment(this.lastSaved).fromNow();
        this.status = `Changes saved (${time})`;
        // Update data on success
        this.updateData();
      }, error => {
        this.isSaving = false;
      });
    }, 500);
  }

  updateData() {
    this.bookService.getBook(this.book.id).subscribe((book: Book) => {
      this.bookEditorService.setCurrentBook(book);

      // check if current params still exists in the book

      // if (!_.find(this.editingChapter.topics, t => t.id === this.editingTopic.id)) {
      //   const es = new EditorState();
      //   es.chapterId = this.editingChapter.id;
      //   es.topicId = this.editingChapter.topics[0].id;
      //   this.bookEditorService.setCurrentChapterAndTopic(es);
      // }
    });
  }


  timer() {
    const x = setInterval(() => {
      const time = moment(this.lastSaved).fromNow();
      this.status = `Changes saved (${time})`;
      console.log(this.status);
    }, 10000);
  }

  delete() {
    this.isDeleting = true;
    this.bookService.deleteTopic(this.editingTopic.id).subscribe((topic: Topic) => {
      this.isDeleting = false;
      this.updateData();
      this.router.navigate(['./']);
    });
  }
}
