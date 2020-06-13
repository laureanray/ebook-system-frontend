import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookEditorService} from '../../services/book-editor.service';
import {BookService} from '../../../../core/services/book.service';
import {Book} from '../../../../core/models/book';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-selected-book',
  templateUrl: './selected-book.component.html',
  styleUrls: ['./selected-book.component.sass']
})
export class SelectedBookComponent implements OnInit {
  bookId: number;
  showFiller = false;
  isDrawerOpened = true;
  faLeft = faChevronLeft;
  faRight = faChevronRight;
  constructor(private activatedRoute: ActivatedRoute, private bookEditorService: BookEditorService, private bookService: BookService) {
  }

  ngOnInit(): void {
    console.log('selected-book ngOnInit');
    this.activatedRoute.params.subscribe(params => {
      // Get the book id
      this.bookId = params.id;
      // Initialize the observable
      this.bookService.getBook(this.bookId).subscribe((book: Book) => {
          this.bookEditorService.setCurrentBook(book);
          console.log(book);
      }, error => {
          console.log(error);
      });
    });
  }
}
