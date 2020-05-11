import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BookService} from '../../../../../../core/services/book.service';
import {Book} from '../../../../../../core/models/book';
import {BookEditorService} from '../../../../services/book-editor.service';

@Component({
  selector: 'app-remove-access-modal',
  templateUrl: './remove-access-modal.component.html',
  styleUrls: ['./remove-access-modal.component.sass']
})
export class RemoveAccessModalComponent implements OnInit {
  disabled = false;

  constructor(private dialogRef: MatDialogRef<RemoveAccessModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private bookEditorService: BookEditorService,
              private bookService: BookService) { }

  ngOnInit(): void {
  }

  confirm() {
    this.disabled = true;
    this.bookService.removeCourse(this.data.bookId, this.data.courseId).subscribe((book: Book) => {
        if (book) {
          this.bookEditorService.setCurrentBook(book);
          setTimeout(() => {
            this.disabled = false;
            this.dialogRef.close();
          }, 250);
        }
    });
  }
}
