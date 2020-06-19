import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Book} from '../../../../core/models/book';
import {BookService} from '../../../../core/services/book.service';
import {CurrentBookService} from '../../service/current-book.service';
import {Topic} from '../../../../core/models/topic';
import {Chapter} from '../../../../core/models/chapter';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.sass']
})
export class ReadComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  bookSub: Subscription;
  book: Book;
  topic: Topic;
  chapter: Chapter;
  topicId: number;
  chapterId: number;
  bookId: number;

  constructor(private route: ActivatedRoute, private bookService: BookService, private currentBookService: CurrentBookService, private router: Router) {
    console.log('construct');
  }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params: ParamMap) => {
        // tslint:disable-next-line:radix
        this.chapterId = parseInt(params.get('chapterId'));
        // tslint:disable-next-line:radix
        this.topicId = parseInt(params.get('topicId'));
        // tslint:disable-next-line:radix
        this.bookId = parseInt(params.get('bookId'));
        console.log('arams');
    });
    if (this.chapterId && this.topicId) {
      this.bookSub = this.bookService.getBook(this.bookId).subscribe((book: Book) => {
        this.book = book;
        this.chapter = this.book.chapters
          .find((c => c.id === this.chapterId));
        this.chapter.topics.sort((a: Topic, b: Topic) => {
            if (a.topicTitle > b.topicTitle) {
              return 1;
            } else if (a.topicTitle < b.topicTitle) {
              return -1;
            } else {
              return 0;
            }
        });
        this.topic = this.chapter.topics
          .find((t => t.id === this.topicId));

        console.log(this.topic);
      });
    }
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.bookSub.unsubscribe();
    console.log('dstroy');

  }

  changeTopic(id: number) {
    this.router.navigate([`/student/read/${this.bookId}/${this.chapterId}/${id}`]);
    this.topic = this.chapter.topics.find(t => t.id === id);
  }
}
