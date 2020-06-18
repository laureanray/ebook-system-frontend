import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../../../core/services/book.service';
import {BookEditorService} from '../../../services/book-editor.service';
import {Book} from '../../../../../core/models/book';
import {environment} from '../../../../../../environments/environment';
import {faMinusCircle, faTrash} from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import {RemoveAccessModalComponent} from './remove-access-modal/remove-access-modal.component';
import {Access} from '../../../../../core/models/access';

@Component({
  selector: 'app-selected-book-details',
  templateUrl: './selected-book-details.component.html',
  styleUrls: ['./selected-book-details.component.sass']
})
export class SelectedBookDetailsComponent implements OnInit {
  book: Book;
  accesses: Access[];
  newAccess: Access;
  accessibleToAll = false;
  bookCoverURLParsed: any;
  faTrash = faTrash;
  faMinus = faMinusCircle;
  isEditingAccess = false;
  accessesCopy: Access[];
  editAccessibleToAll = false;
  toggleDisabled = false;

  addFieldValue() {
    this.accesses.push(this.newAccess);
    this.newAccess = null;

    function updateScroll() {
      const element = document.getElementById('add-section-container');
      element.scrollTop = element.scrollHeight;
    }

    setInterval(updateScroll, 1);
  }

  deleteFieldValue(index) {
    this.accesses.splice(index, 1);
  }

  constructor(private bookEditorService: BookEditorService,
              private bookService: BookService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.bookEditorService.getCurrentBook().subscribe((book: Book) => {
      this.book = book;
      this.accesses = this.book?.accesses;
      if (this.accesses != null) {
        this.accessesCopy = this.accesses;
      }
      if (!this.book || !this.book?.bookCoverURL) {
        // TODO: replace this with proper placeholder
        this.bookCoverURLParsed = '/assets/cover.png';
      } else {
        this.bookCoverURLParsed = `${environment.apiRoot}/${this.book.bookCoverURL}`;
      }
    });
  }

  edit() {
    this.isEditingAccess = true;
  }

  done() {
    this.isEditingAccess = false;

    // update the actual access
  }

  removeAccess(courseId: number) {
    this.dialog.open(RemoveAccessModalComponent, {
      width: '250px',
      data: {
        courseId,
        bookId: this.book.id
      }
    });
  }

  changeAccessibility() {
    this.toggleDisabled = true;
    if (!this.editAccessibleToAll) {
      this.bookService.makeAccessibleToAll(this.book.id).subscribe((book: Book) => {
        this.bookEditorService.setCurrentBook(book);
        setTimeout(() => {
          this.toggleDisabled = false;
        });
      });
    } else {
      this.bookService.makeNotAccessibleToAll(this.book.id).subscribe((book: Book) => {
        this.bookEditorService.setCurrentBook(book);
        setTimeout(() => {
          this.toggleDisabled = false;
        });
      });
    }
  }
}
