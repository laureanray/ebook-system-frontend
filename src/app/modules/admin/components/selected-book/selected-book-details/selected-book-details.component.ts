import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../../../core/services/book.service';
import {BookEditorService} from '../../../services/book-editor.service';
import {Book} from '../../../../../core/models/book';
import {environment} from '../../../../../../environments/environment';
import {faMinusCircle, faTrash} from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import {RemoveAccessModalComponent} from './remove-access-modal/remove-access-modal.component';
import {Access} from '../../../../../core/models/access';
import {HttpEventType} from '@angular/common/http';
import {UploadResponse} from '../../../../../core/models/upload-response';

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
  progress: number;
  message: string;
  uploadedFilePath: string;
  isUpdatingDetails = false;
  isSaving = false;
  isDisabled = false;

  bookTitle: string;
  bookAuthor: string;
  bookDesc: string;

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
      if (this.book) {
        this.bookAuthor = this.book.bookAuthor;
        this.bookTitle = this.book.bookTitle;
        this.bookDesc = this.book.bookDescription;
      }
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

  edit() { this.isEditingAccess = true;
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


  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    const fileToUpload = files[0] as File;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.bookService.uploadBookCover(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          const body = event.body as UploadResponse;
          this.uploadedFilePath = body.dbPath;
          this.book.bookCoverURL = this.uploadedFilePath;
          this.bookService.updateBookCover(this.book).subscribe((bookUpdated: Book) => {
            if (bookUpdated.bookCoverURL === this.uploadedFilePath) {
              this.bookEditorService.setCurrentBook(bookUpdated);
            } else {
              alert('Unexpected error occured when uploading.');
            }
          });
        }
      });
  }



  fileChange(files) {
    this.uploadFile(files);
  }

  updateDetails() {
    this.isUpdatingDetails = !this.isUpdatingDetails;

    if (!this.isUpdatingDetails) {
      console.log('Updating');
      this.isDisabled = true;
      this.isSaving = true;
      this.book.bookTitle = this.bookTitle;
      this.book.bookAuthor = this.bookAuthor;
      this.book.bookDescription = this.bookDesc;
      this.bookService.anotherOne(this.book).subscribe((a: Book) => {
        console.log(a);
        this.bookEditorService.setCurrentBook(a);
        this.isSaving = false;
        this.isDisabled = false;
        this.isUpdatingDetails = false;
      });
      // this.bookService.test(this.book).subscribe((b: Book) => {
      //     if (b) {
      //       this.bookEditorService.setCurrentBook(b);
      //       this.isSaving = false;
      //       this.isDisabled = false;
      //       this.isUpdatingDetails = false;
      //     }
      // }, error => {
      //   alert('Error updating');
      //   this.isSaving = false;
      //   this.isDisabled = false;
      //   this.isUpdatingDetails = false;
      // });
    } else {
      console.log('Else');
    }
  }


  keyup() {
    this.isDisabled = !(this.bookTitle && this.bookAuthor && this.bookDesc);
  }

  delete(id: number) {
    // test
  }
}
