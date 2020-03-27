import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {MatMenuTrigger} from '@angular/material/menu';
import {BookEditorService} from '../../../services/book-editor.service';
import {Book} from '../../../../../core/models/book';
import {BookService} from '../../../../../core/services/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from 'lodash';
import {Chapter} from '../../../../../core/models/chapter';
import {Topic} from '../../../../../core/models/topic';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {AddTopicModalComponent} from './add-topic-modal/add-topic-modal.component';

@Component({
  selector: 'app-selected-book-sidebar',
  templateUrl: './selected-book-sidebar.component.html',
  styleUrls: ['./selected-book-sidebar.component.sass']
})
export class SelectedBookSidebarComponent implements OnInit, OnDestroy {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  isAddingChapter = false;
  activeTopic = null;
  book: Book;
  getBookSub: Subscription;
  lastSelectedChapter: number;

  constructor(private bookEditorService: BookEditorService,
              private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // get editing book here
    this.getBookSub = this.bookEditorService.getCurrentBook().subscribe((book: Book) => {
      this.book = book;
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
    this.bookEditorService.setCurrentChapterAndTopic(this.lastSelectedChapter, id);
    this.router.navigate([], {
      queryParams: {
        topic: this.activeTopic
      },
      queryParamsHandling: 'merge'
    });
  }

  selectChapter(id: number) {
    this.lastSelectedChapter = id;
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
