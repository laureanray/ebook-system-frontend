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
import {EditorState} from '../../../../../core/models/editor-state';


@Component({
  selector: 'app-selected-book-sidebar',
  templateUrl: './selected-book-sidebar.component.html',
  styleUrls: ['./selected-book-sidebar.component.sass']
})
export class SelectedBookSidebarComponent implements OnInit, OnDestroy {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  isAddingChapter = false;
  activeTopic: number;
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
    console.log('selected-sidebar-editor ngOnInit');
    this.getBookSub = this.bookEditorService.getCurrentBook().subscribe((book: Book) => {
      this.book = book;
      console.log(book);
      if (book != null) {
        this.activatedRoute.queryParams.subscribe(params => {
          if (!_.isEmpty(params)) {
            // tslint:disable-next-line:radix
            this.lastSelectedChapter = parseInt(params.chapter);
            // tslint:disable-next-line:radix
            this.activeTopic = parseInt(params.topic);
            // check if current chapter contains the topic
            console.log(this.lastSelectedChapter);
            const chapter = _.find(this.book.chapters, c => c.id === this.lastSelectedChapter);
            console.log(chapter);
            if (!_.find(chapter.topics, t => t.id === this.activeTopic)) {
              console.log('not found');
              alert('not found');
            } else {
              this.bookEditorService.setCurrentChapterAndTopic(this.lastSelectedChapter, this.activeTopic);
            }
          } else {
            console.log('else');
          }
        });
      }
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
    this.router.navigate(['editor'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        chapter: this.lastSelectedChapter,
        topic: id
      },
      queryParamsHandling: 'merge'
    });
  }

  selectChapter(id: number) {
    this.lastSelectedChapter = id;
    // this.bookEditorService.setCurrentChapterAndTopic(this.lastSelectedChapter, null);
    const selected = _.find(this.book.chapters, c => c.id === this.lastSelectedChapter);
    this.bookEditorService.setCurrentChapter(selected);
  }


  addTopic(id: number) {
    console.log('add topic');
    const dialogRef = this.dialog.open(AddTopicModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
      // update here
      this.bookService.getBook(this.book.id).subscribe((book: Book) => {
        this.bookEditorService.setCurrentBook(book);
      });
    });
  }

  addExam(id: number) {
    this.activeTopic = null;
    // console.log('add exam');
    this.router.navigate(['add-exam'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        chapter: this.lastSelectedChapter
      },
      queryParamsHandling: 'merge'
    });
  }
}

