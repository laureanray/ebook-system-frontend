import {Component, OnInit, ViewChild} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {MatMenuTrigger} from '@angular/material/menu';
import {BookEditorService} from '../../services/book-editor.service';

@Component({
  selector: 'app-book-sidebar',
  templateUrl: './book-sidebar.component.html',
  styleUrls: ['./book-sidebar.component.sass']
})
export class BookSidebarComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  isAddingChapter = false;
  activeTopic = null;



  panelOpenedState;

  left = '0';
  top = '0';

  book = {
    chapters: [
      {
        chapterTitle: 'Chapter 1: Variables',
        topics: [
          { id: 1, topicTitle: 'Topic 1'},
          { id: 2, topicTitle: 'Topic 2'},
          { id: 3, topicTitle: 'Topic 3'},
          { id: 4, topicTitle: 'Topic 4'}
        ]
      }
    ]
  };


  topic: string;

  constructor(private bookEditorService: BookEditorService) {
  }


  ngOnInit(): void {
  }

  addChapter() {
    this.isAddingChapter = true;
  }

  onKeyUp($event) {
    if ($event.key === 'Enter') {
      this.isAddingChapter = false;
      this.book.chapters.push({topics: [], chapterTitle: $event.target.value});
    }
  }

  onRightClick($event) {
    $event.preventDefault();
    console.log('ry');
    this.trigger.openMenu();
  }

  topicClicked(id: number) {
    this.activeTopic = id;
    this.bookEditorService.isDetailsShown(true);
    console.log(this.activeTopic);
  }
}

