import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {MatMenuTrigger} from '@angular/material/menu';
import {BookEditorService} from '../../services/book-editor.service';
import {Book} from '../../../../core/models/book';
import {BookService} from '../../../../core/services/book.service';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {Chapter} from '../../../../core/models/chapter';
import {Topic} from '../../../../core/models/topic';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {AddTopicModalComponent} from './add-topic-modal/add-topic-modal.component';

@Component({
  selector: 'app-book-sidebar',
  templateUrl: './book-sidebar.component.html',
  styleUrls: ['./book-sidebar.component.sass']
})
export class BookSidebarComponent implements OnInit, OnDestroy {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  isAddingChapter = false;
  activeTopic = null;
  bookId: number;
  book: Book;
  selectedChapter: Chapter;
  selectedTopic: Topic;
  getBookSub: Subscription;

  constructor(private bookEditorService: BookEditorService,
              private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // get editing book here
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params.id;
      this.getBookSub = this.bookService.getBook(this.bookId).subscribe((book: Book) => {
        this.book = book;
      });
    });

  }

  ngOnDestroy(): void {
    this.getBookSub.unsubscribe();
  }

  addChapter() {
    this.isAddingChapter = true;
  }

  onKeyUp($event) {
    if (($event.key === 'Enter' || $event.key === 'Escape') && this.isAddingChapter === true) {
      this.isAddingChapter = false;
    }
  }

  onRightClick($event) {
    $event.preventDefault();
    console.log('ry');
    this.trigger.openMenu();
  }

  topicClicked(id: number) {
    this.bookEditorService.isDetailsShown(true);
    this.activeTopic = id;
    this.selectedTopic = _.find(this.selectedChapter.topics, ((t: Topic) => t.id === id));
    // setTimeout(() => {
    this.bookEditorService.setCurrentTopic(this.selectedTopic);
    // });
  }

  selectChapter(id: number) {
    console.log(this.book);
    this.selectedChapter = _.find(this.book.chapters, ((c: Chapter) => c.id === id));
    console.log(this.selectedChapter);
    // setTimeout(() => {
    this.bookEditorService.setCurrentChapter(this.selectedChapter);
    // });
  }

  addTopic(id: number) {
    console.log('add topic');
    const dialogRef = this.dialog.open(AddTopicModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addExam(id: number) {
    console.log('add exam');
  }
}

