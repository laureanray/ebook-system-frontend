import {Component, Input, OnInit} from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../../../../core/models/book';
import {Topic} from '../../../../core/models/topic';
import {Chapter} from '../../../../core/models/chapter';
import {BookEditorService} from '../../services/book-editor.service';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.sass']
})
export class BookEditorComponent implements OnInit {
  editingChapter: Chapter;
  editingTopic: Topic;


  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '500px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
  editorFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private bookEditorService: BookEditorService
  ) {
    this.bookEditorService.getCurrentChapter().subscribe((chapter: Chapter) => {
        this.editingChapter = chapter;
    });

    this.bookEditorService.getCurrentTopic().subscribe((topic: Topic) => {
      this.editingTopic = topic;
    });
  }

  ngOnInit(): void {
    this.editorFormGroup = this.formBuilder.group({
      htmlContent: new FormControl('', [Validators.required])
    });
  }

}
