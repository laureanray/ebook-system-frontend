import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BookService} from '../../../../core/services/book.service';
import {Observable, Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Book} from '../../../../core/models/book';
import {NestedTreeControl} from '@angular/cdk/tree';
import {Chapter} from '../../../../core/models/chapter';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {Topic} from '../../../../core/models/topic';
import {CurrentBookService} from '../../service/current-book.service';


interface Node {
  title: string;
  id?: number;
  chapterId?: number;
  bookId?: number;
  children?: Node[];
}


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit, OnDestroy {
  bookSub: Subscription;
  routeSub: Subscription;
  book: Book;
  TREE_DATA: Node[];
  treeControl = new NestedTreeControl<Node>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();
  constructor(private route: ActivatedRoute, private bookService: BookService, private currentBookService: CurrentBookService) {
    this.TREE_DATA = [];
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      if (params) {
        // tslint:disable-next-line:radix
        this.bookSub = this.bookService.getBook(parseInt(params.id)).subscribe((book: Book) => {
          this.book = book;
          if (this.book) {
            this.currentBookService.setCurrentBook(book);
            this.book.chapters.forEach((chapter: Chapter) => {
              const nd = {
                title: chapter.chapterTitle,
                children: []
              };
              chapter.topics.forEach((topic: Topic) => {
                nd.children.push(
                  {
                    title: topic.topicTitle,
                    id: topic.id,
                    chapterId: chapter.id,
                    bookId: this.book.id
                  }
                );
              });

              this.TREE_DATA.push(nd);
              console.log(this.TREE_DATA);
              this.dataSource.data = this.TREE_DATA;
            });
          }
        });
      }
    });
  }

  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;


  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.bookSub.unsubscribe();
  }
}
